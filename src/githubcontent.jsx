import React, { Component, Suspense } from 'react';
import JupyterNotebook from 'react-jupyter-notebook';
import ReactMarkdown from 'react-markdown'; // https://github.com/rexxars/react-markdown

import { Link } from './common'
import { LogoSpinner } from './logo'

// import htmlParser from 'react-markdown/plugins/html-parser';

// const NotebookPreview = React.lazy(() => import('@nteract/nbextension'));

// const parseHtml = htmlParser({
//   isValidNode: node => node.type == 'link',
//   processingInstructions: [/* ... */]
// })

export class GitHubContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repo: null,
      branch: null,
      path: null,
      content: null,
      contentURLRaw: null,
      contentURL: null,
      contentType: null,
    };
  }
  updateContent = (repo, branch, path) => {
    this.setState({repo: repo, branch: branch, path: path, content: null, contentURLRaw: null, contentURL: null, contentType: null});

    if (repo && path) {
      let contentURL = "https://github.com/phoebe-project/"+repo+"/blob/"+branch+"/"+path
      //let contentURLRawDir = "https://raw.githubusercontent.com/phoebe-project/"+repo+"/"+branch+"/"+path.split('/').slice(0,-1)
      let contentURLRawDirImages = "https://raw.githubusercontent.com/phoebe-project/"+repo+"/"+branch+"/"+path.split('/').slice(0,-1)
      let contentURLRaw = "https://raw.githubusercontent.com/phoebe-project/"+repo+"/"+branch+"/"+path
      if (['phoebe2-docs', 'phoebe2-workshop'].indexOf(repo) !== -1 && (path.endsWith(".py") || path.endsWith(".ipynb"))) {
        //let contentURLRawDir = "https://phoebe-project.github.io/"+repo+"/"+branch+"/"+path.split('/').slice(0,-1)
        contentURLRaw = "https://phoebe-project.github.io/"+repo+"/"+branch+"/"+path
      }

      let contentType = null;
      let extension = path.split('.').slice(-1)[0];
      if (extension === 'md' || extension === 'ipynb') {
          contentType = extension;
      }

      console.log("fetching "+contentURLRaw)

      fetch(contentURLRaw)
        .catch(() => this.setState({content: null}))
        .then(res => {
          if (res === undefined) {
            // then this could be caused by an adblocker
            alert("Failed to load the requested file from GitHub.  This can sometimes be caused by an adblocker blocking the request.  Please try whitelisting phoebe-project.org (we don't serve ANY ads), and if the problem persists, contact us and report the issue.")
          } else if (res.ok) {
            if (contentType === 'ipynb') {
              return res.json();
            } else {
              return res.text();
            }
          } else {
            return null;
          }
        })
        .then(content => {
          if (contentType === 'ipynb') {
            // console.log(content.cells)
            for (let i=0; i<content.cells.length; i++) {
              if (content.cells[i]['cell_type'] === 'markdown') {
                for (let j=0; j<content.cells[i].source.length; j++) {
                  // NOTE: this could be handled in the regex itself with a look-behind,
                  // but that causes issues in safari
                  // content.cells[i].source[j] = content.cells[i].source[j].replace(/(?<!http.*)([a-z,A-Z,_,0-9,-,\+]*)\.(gif|png)/gm, `${contentURLRawDirImages}/$1.$2`)
                  if (content.cells[i].source[j].indexOf("http") === -1) {
                    content.cells[i].source[j] = content.cells[i].source[j].replace(/([a-z,_,0-9,-,+]*)\.(gif|png)/, `${contentURLRawDirImages}/$1.$2`)
                  }
                }
              }
            }
          }


          this.setState({content: content, contentURL: contentURL, contentURLRaw: contentURLRaw, contentType: contentType})
        })
    }
  }
  render() {
    if (this.props.repo !== this.state.repo || this.props.branch !== this.state.branch || this.props.path !== this.state.path) {
      if (window.location.pathname.endsWith("/")) {
        // strip trailing slash so relative links in notebooks work
        this.props.history.replace(window.location.pathname.slice(0, -1))
      }
      this.updateContent(this.props.repo, this.props.branch, this.props.path);
    }

    let dl_html = null;
    let edit_html = null;
    let report_html = null;
    let content_html = null;

    let loadingDiv = <div>
                      <LogoSpinner pltStyle={{backgroundColor: "rgb(43, 113, 177)"}}/>
                      <p style={{textAlign: "center", fontSize: "18pt"}}>{this.props.loadingText || "LOADING EXTERNAL CONTENT..."}</p>
                    </div>

    if (this.state.content) {

      edit_html = <Link to={this.state.contentURL} hideExternal={true}><span className="fab fa-fw fa-github"></span> View/Edit on GitHub</Link>
      report_html = this.props.reportHTML || null;

      if (this.state.contentType === 'ipynb') {
        let slug = this.state.contentURLRaw.split("/").slice(-1)[0].split(".")[0]

        // ok... this is a bit hardcoded to our specific situation.  Probably should handle this with a callback of some sort
        dl_html = <div>
                    <Link to={this.state.contentURLRaw}>Download IPython Notebook: {slug}.ipynb</Link>
                    &nbsp;(<Link to={"/help/ipynb"}>ipynb help</Link>)
                    <br/>
                    <Link to={this.state.contentURLRaw.split(".ipynb")[0]+".py"}>Download Python Script: {slug}.py</Link>
                    <br/>
                    <Link to={"https://colab.research.google.com/github/phoebe-project/"+this.props.repo+"/blob/"+this.props.branch+"/"+this.props.path} hideExternal={true}><span className="far fa-fw fa-play-circle"></span> Open in Colab live-session</Link>
                    &nbsp;(<Link to={"/quickstart/"+this.props.branch}>colab help</Link>)
                  </div>



        content_html = <Suspense fallback={loadingDiv}>
                        <JupyterNotebook notebook={this.state.content}/>
                       </Suspense>


      } else if (this.state.contentType === 'md') {
        content_html =  <div style={{paddingTop: "50px"}}>
                          <ReactMarkdown source={this.state.content} escapeHtml={false}/>
                        </div>
      } else {
        edit_html = null;
        report_html = null;
        content_html = <div style={{textAlign: "center"}}>
                         <h3>UNRECOGNIZED CONTENT TYPE</h3>
                       </div>
      }

    } else if (this.state.contentType) {
      content_html = <div style={{textAlign: "center"}}>
                       <h3>No content could be found... please try again.</h3>
                       {/* <h3>No content could be found... please try again.  Or if you think something should be here or you followed an internal link, please <Link to={"http://github.com/phoebe-project/phoebe2-docs/issues/new?body=followed+link+from:+PLEASE+PASTE+URL+THAT+LINKED+TO+THIS+PAGE&title=no+content+found+at+v"+version+" docs:+"+subdir+"/"+slug} hideExternal={true}>report the issue here</Link>.</h3> */}
                     </div>
    } else if (this.state.path){
      content_html = loadingDiv
    } else {
      content_html = this.props.children
    }


    return (
      <div>
        <div className="row">
          <div className="col-md-9 col-sm-12">
            {dl_html}
          </div>
          <div className="col-md-3 col-sm-12 float-right">
            {edit_html}
            <br/>
            {report_html}
          </div>
        </div>


        {content_html}
      </div>

    )
  }
}
