import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import NotebookPreview from "@nteract/notebook-preview"; // https://github.com/nteract/nteract/tree/master/packages/notebook-app-component
import ReactMarkdown from "react-markdown"; // https://github.com/rexxars/react-markdown

import {Content, Link, Redirect} from './common';
import {Header, HeaderNavButton} from './header';
import {NotFound} from './errors';

export var docs_versions = ['2.1-react', '2.1', '2.0'];
var docs_versions_dev = docs_versions + ['2.0b', 'development']

export function getDocsLink(version, subdir, slug) {
  if (subdir) {
    return process.env.PUBLIC_URL + '/docs/'+version+'/'+subdir+'/'+slug
  } else if (slug) {
    return process.env.PUBLIC_URL + '/docs/'+version+'/'+slug
  } else if (version) {
    return process.env.PUBLIC_URL + '/docs/'+version+'/'
  } else {
    return process.env.PUBLIC_URL + '/docs/'
  }
}

export class Docs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      version: null,
      subdir: null,
      slug: null,
      content: null,
      contentType: null,
    };
    this.ref_notebook = React.createRef();
  }
  redirect = (version, subdir, slug) => {
    this.props.history.replace(getDocsLink(version, subdir, slug))
  }
  updateDocs = (version, subdir, slug) => {
    this.setState({version: version, subdir: subdir, slug: slug, content: null, contentType: null});

    var url = null;
    if (slug && subdir) {
      url = "https://raw.githubusercontent.com/phoebe-project/phoebe2-docs/"+version+"/"+subdir+"/"+slug+".ipynb";
      console.log("fetching "+url)

      fetch(url)
        .catch(() => this.setState({content: null}))
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            return null;
          }
        })
        .then(json => this.setState({content: json, contentType: 'notebook'}))

    } else if (slug) {
      url = "https://raw.githubusercontent.com/phoebe-project/phoebe2-docs/"+version+"/"+slug+".md";
      console.log("fetching "+url)

      fetch(url)
        .catch(() => this.setState({content: null}))
        .then(res => {
          if (res.ok) {
            return res.text();
          } else {
            return null;
          }
        })
        .then(text => this.setState({content: text, contentType: 'md'}))
    } else {
      // then we're the index
      this.setState({contentType: 'index'})
    }



  }
  componentDidUpdate = () => {
    // console.log("componentDidUpdate")
    // if (this.ref_notebook.current !== null) {
    //   let links = Array.from(ReactDOM.findDOMNode(this.ref_notebook.current).getElementsByTagName("a"))
    //   console.log(links);

      // links.forEach( (link) => {
        // console.log(link.innerText)
        // console.log(link.parentElement)
        // if (link.parentElement !== null){
        //
        //   ReactDOM.render(<Link to="bla">{link.innerText}</Link>, link.parentElement)
        // }
      // })
    // }
  }
  render() {
    var version = this.props.match.params.version
    var subdir = this.props.match.params.subdir
    var slug = this.props.match.params.slug

    // let's parse version, subdir, and slug from the URL and make any necessary
    // mappings/aliasing/redirects
    if (version==='latest') {
      // allow latest as the version in the URL, but show whatever is latest
      version = docs_versions[0]
    } else if (version==='dev') {
      // allow dev to be an alias of development
      version = 'development'
    } else if (version==='1.0' || version==='legacy') {
      // then redirect to the 1.0 page
      return(<Redirect to="/1.0/docs"/>)
    } else if (!version) {
      // then we're at /docs
      // so redirect so the URL shows the latest version
      version = docs_versions[0]
      if (slug) {
        this.props.history.replace(getDocsLink(version, subdir, slug))
      } else {
        this.props.history.replace(getDocsLink(version, null, null))
      }
    } else if (docs_versions_dev.indexOf(version)===-1){
      // something not recognized, let's throw a page not found
      return (<NotFound></NotFound>)
    }

    if (slug && slug.endsWith(".html")) {
      // then strip the html and redirect
      slug = slug.slice(0,-5);
      this.redirect(version, subdir, slug)
    } else if (slug && slug.endsWith(".ipynb")) {
      // then strip the ipynb and redirect
      slug = slug.slice(0,-6);
      this.redirect(version, subdir, slug)
    } else if (slug && slug.endsWith(".md")) {
      // then strip the md and redirect
      slug = slug.slice(0,-3)
      this.redirect(version, subdir, slug)
    }

    // see if the URL differs from the current state (and therefore the shown docs page)
    if (version !== this.state.version || subdir !== this.state.subdir || slug !== this.state.slug) {
      this.updateDocs(version, subdir, slug)
    }

    // display a link to download the Jupyter notebook directly from github
    var notebook_dl_html = null
    var notebook_edit_html = null

    // create the html for the Jupyter notebook, if loaded
    var notebook_html = null;
    if (this.state.contentType==='notebook') {
      // console.log(this.state.content)
      notebook_dl_html = <div>
                          <Link to={"https://raw.githubusercontent.com/phoebe-project/phoebe2-docs/"+version+"/"+subdir+"/"+slug+".ipynb"} hideExternal={true}>IPython Notebook {slug}.ipynb</Link>
                          &nbsp;(<Link to={"/help/ipynb"}>ipynb help</Link>)
                         </div>
      notebook_edit_html = <div style={{float: "right"}}>
                             <Link to={"https://github.com/phoebe-project/phoebe2-docs/blob/"+version+"/"+subdir+"/"+slug+".ipynb"} hideExternal={true}><span className="fab fa-github"></span> View/Edit on GitHub</Link>
                           </div>
      notebook_html = <NotebookPreview notebook={this.state.content} ref={this.ref_notebook}/> // unfortunately this is creating a bunch of <a>'s where we want <Link>s...'
    } else if (this.state.contentType==='md'){
      notebook_html = <ReactMarkdown source={this.state.content}/>
      notebook_edit_html = <div style={{float: "right"}}>
                             <Link to={"https://github.com/phoebe-project/phoebe2-docs/blob/"+version+"/"+slug+".md"} hideExternal={true}><span className="fab fa-github"></span> View/Edit on GitHub</Link>
                            </div>
    } else if (this.state.contentType==='index'){
      notebook_html = <div>
                        <h1>About PHOEBE {version}</h1>
                        <p>You can read about the features added during the <Link to={"/releases/"+version}>{version} release</Link> as well as read the changelog entries.</p>

                        <h1>Download &amp; Install</h1>
                        <p>If you don't already have PHOEBE installed, see the <Link to={"/install/"+version}>installation instructions for PHOEBE {version}.</Link></p>

                        <h1>Tutorials</h1>
                        <p>Tutorials are built to slowly build upon each other and provide narration about how to use PHOEBE.</p>
                        <p>View <Link to={"/docs/"+version+"/tutorials"}>tutorials for PHOEBE {version}</Link>.</p>

                        <h1>Datasets &amp; Observables</h1>
                        <p><Link to={"/docs/"+version+"/datasets"}>These tutorials</Link> explain each of the different dataset types that are supported by PHOEBE, as well as all applicable options.</p>

                        <h1>Physics &amp; Individual Parameters</h1>
                        <p><Link to={"/docs/"+version+"/physics"}>This set of tutorials</Link> describe the various physics effects implemented in PHOEBE {version} and the choices of the individual parameters that control those effects.</p>

                        <h1>Example Scripts</h1>
                        <p>Example scripts provide less commentary that tutorials, but can be useful if trying to accomplish something specific or mimic another use-case.</p>
                        <p>View <Link to={"/docs/"+version+"/examples"}>example scripts for PHOEBE {version}</Link>.</p>

                        <h1>API Documentation</h1>
                        <p>API Documentation shows the calling arguments and options for all classes/functions/methods in PHOEBE.  Note that these same instructions can be called by calling Python's help function (i.e. help(phoebe.bundle) or help(b.run_compute)).</p>
                        <p>View <Link to={"/docs/"+version+"/api"}>API docs for PHOEBE {version}</Link>.</p>
                      </div>
    } else {
      // TODO: replace this with a nice loading icon
      notebook_html = <p>LOADING DOCS....</p>
    }


    return (
      <div>
        <Header>
          <span className="hidden-xs"><h1>PHOEBE {version} Documentation</h1></span>
          <span className="visible-xs"><h1>{version} docs</h1></span>

          <div className="row">
             <div className="col-md-2"></div>
             {/* <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="About" description={"About "+version+" release"} to={"/releases/"+version} icon="fa fa-info"/>
             </div> */}
             {/* <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Install" description={"Download and Install PHOEBE "+version} to={"/install/"+version} icon="fa fa-download"/>
             </div> */}
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Tutorials" description="Tutorials" to={"/docs/"+version+"/tutorials"} icon="fa fa-hands-helping"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Datasets" description="Datasets" to={"/docs/"+version+"/datasets"} icon="fas fa-table"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Physics" description="Physics and Individual Parameters" to={"/docs/"+version+"/physics"} icon="fas fa-atom"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Examples" description="Example Scripts" to={"/docs/"+version+"/examples"} icon="fa fa-file-code"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="API Docs" description="API Documentation" to={"/docs/"+version+"/api"} icon="fa fa-terminal"/>
             </div>
           </div>

        </Header>
        <Content>
          {notebook_edit_html}
          {notebook_dl_html}
          {notebook_html}
          <VersionSwitcher version={this.state.version} subdir={this.state.subdir} slug={this.state.slug}/>
        </Content>
      </div>
    );
  }
}

export class VersionSwitcher extends Component {
  /* inspired by docs.djangoproject.com */
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }
  hoverOn = () => {
    this.setState({expanded: true});
  }
  hoverOff = () => {
    this.setState({expanded: false});
  }
  render() {
    // NOTE: we do this to force a deep-copy
    var docs_versions_reverse = JSON.parse(JSON.stringify(docs_versions)).reverse()

    return (
      <div style={{position: 'fixed', display: 'inline-block', right: '10px', bottom: '10px', margin: '0px', padding: '0px', zIndex: 1, listStyle: "none outside none"}} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
        <VersionSwitcherButton visible={this.state.expanded} version="1.0" to="/1.0/docs"/>
        {docs_versions_reverse.map(version => <VersionSwitcherButton visible={this.state.expanded} version={version} subdir={this.props.subdir} slug={this.props.slug}/>)}
        <VersionSwitcherTarget version={this.props.version}/>
      </div>
    )
  }
}

class VersionSwitcherTarget extends Component {
  render() {
    return (
      <div style={{display: "inline-block"}} className="btn btn-primary btn-md current">
        <span className="hidden-xs">Doc Version: <strong>{this.props.version}</strong></span>
        <span className="visible-xs">ver: <strong>{this.props.version}</strong></span>
      </div>
    )
  }
}

class VersionSwitcherButton extends Component {
  render() {
    if (!this.props.visible) {
      return null;
    }

    var to = getDocsLink(this.props.version, this.props.subdir, this.props.slug)

    if (this.props.to) {
      to = this.props.to
    }
    return (
      <Link to={to} style={{textDecoration: "none", margin: "0px 3px", color: "#2196f3"}} className="btn btn-default btn-md other">{this.props.version}</Link>
    )
  }
}
