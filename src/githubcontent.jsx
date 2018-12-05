import React from 'react';

import {Link} from './common'
import {LogoSpinner} from './logo'

import NotebookPreview from "@nteract/notebook-preview"; // https://github.com/nteract/nteract/tree/master/packages/notebook-app-component
import ReactMarkdown from "react-markdown"; // https://github.com/rexxars/react-markdown

export class GitHubContent extends React.Component {
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
      var contentURL = "https://github.com/phoebe-project/"+repo+"/blob/"+branch+"/"+path
      var contentURLRaw = "https://raw.githubusercontent.com/phoebe-project/"+repo+"/"+branch+"/"+path

      var contentType = null;
      var extension = path.split('.').slice(-1)[0];
      if (extension === 'md' || extension === 'ipynb') {
          contentType = extension;
      }

      console.log("fetching "+contentURLRaw)

      fetch(contentURLRaw)
        .catch(() => this.setState({content: null}))
        .then(res => {
          if (res.ok) {
            if (contentType === 'ipynb') {
              return res.json();
            } else {
              return res.text();
            }
          } else {
            return null;
          }
        })
        .then(content => this.setState({content: content, contentURL: contentURL, contentURLRaw: contentURLRaw, contentType: contentType}))
    }

  }
  render() {
    if (this.props.repo !== this.state.repo || this.props.branch !== this.state.branch || this.props.path !== this.state.path) {
      this.updateContent(this.props.repo, this.props.branch, this.props.path);
    }

    var dl_html = null;
    var edit_html = null;
    var report_html = null;
    var content_html = null;

    if (this.state.content) {

      edit_html = <Link to={this.state.contentURL} hideExternal={true}><span className="fab fa-fw fa-github"></span> View/Edit on GitHub</Link>
      report_html = this.props.reportHTML || null;

      if (this.state.contentType === 'ipynb') {
        var slug = this.state.contentURLRaw.split("/").slice(-1)[0].split(".")[0]

        // ok... this is a bit hardcoded to our specific situation.  Probably should handle this with a callback of some sort
        dl_html = <div>
                    <Link to={this.state.contentURLRaw} downloadFilename={slug+".ipynb"}>Download IPython Notebook: {slug}.ipynb</Link>
                    &nbsp;(<Link to={"/help/ipynb"}>ipynb help</Link>)
                    <br/>
                    <Link to={this.state.contentURLRaw.split(slug+".ipynb")[0]+"/py/"+slug+".py"} downloadFilename={slug+".py"}>Download Python Script: {slug}.py</Link>
                    <br/>
                    <Link to={"https://colab.research.google.com/github/phoebe-project/"+this.props.repo+"/blob/"+this.props.branch+"/"+this.props.path} hideExternal={true}><span className="far fa-fw fa-play-circle"></span> Open in Colab live-session</Link>
                    &nbsp;(<Link to={"/quickstart/"+this.props.branch}>colab help</Link>)
                  </div>



        content_html = <NotebookPreview notebook={this.state.content}/> // unfortunately this is creating a bunch of <a>'s where we want <Link>s...'


      } else if (this.state.contentType === 'md') {
        content_html =  <div style={{paddingTop: "50px"}}><ReactMarkdown source={this.state.content}/></div>
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
      content_html = <div>
                        <LogoSpinner pltStyle={{backgroundColor: "rgb(43, 113, 177)"}}/>
                        <p style={{textAlign: "center", fontSize: "18pt"}}>{this.props.loadingText || "LOADING EXTERNAL CONTENT..."}</p>
                     </div>
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
