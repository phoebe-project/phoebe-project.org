import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import NotebookPreview from "@nteract/notebook-preview"; // https://github.com/nteract/nteract/tree/master/packages/notebook-app-component

import {Content, Link, Redirect} from './common';
import {Header} from './header';
import {NotFound} from './errors';

export var docs_versions = ['2.1', '2.0'];
var docs_versions_dev = docs_versions + ['2.0b', 'development']

export class Docs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      version: null,
      kind: null,
      slug: null,
      notebookJSON: null,
    };
    this.ref_notebook = React.createRef();
  }
  updateDocs = (version, kind, slug) => {
    this.setState({version: version, kind: kind, slug: slug, notebookJSON: null});

    var notebook_path = null;
    if (slug && kind) {
      notebook_path = "https://raw.githubusercontent.com/phoebe-project/phoebe2-docs/"+version+"/"+kind+"/"+slug+".ipynb";
    } else {
      notebook_path = "https://raw.githubusercontent.com/phoebe-project/phoebe2-docs/"+version+"/index.ipynb";
    }

    fetch(notebook_path)
      .catch(() => this.setState({notebookJSON: null}))
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return null;
        }
      })
      .then(json => this.setState({notebookJSON: json}))

  }
  componentDidUpdate = () => {
    console.log("componentDidUpdate")
    if (this.ref_notebook.current !== null) {
      let links = Array.from(ReactDOM.findDOMNode(this.ref_notebook.current).getElementsByTagName("a"))
      console.log(links);

      // links.forEach( (link) => {
        // console.log(link.innerText)
        // console.log(link.parentElement)
        // if (link.parentElement !== null){
        //
        //   ReactDOM.render(<Link to="bla">{link.innerText}</Link>, link.parentElement)
        // }
      // })
    }
  }
  render() {
    var version = this.props.match.params.version
    var kind = this.props.match.params.kind
    var slug = this.props.match.params.slug

    // let's parse version, kind, and slug from the URL and make any necessary
    // mappings/aliasing/redirects
    if (version==='latest') {
      // allow latest as the version in the URL, but show whatever is latest
      version = docs_versions[0]
    } else if (version==='dev') {
      // allow dev to be an alias of development
      version = 'development'
    } else if (version==='1.0') {
      // then redirect to the 1.0 page
      return(<Redirect to="/1.0/docs"/>)
    } else if (!version) {
      // then we're at /docs
      // so redirect so the URL shows the latest version
      version = docs_versions[0]
      if (slug) {
        this.props.history.replace(process.env.PUBLIC_URL + '/docs/'+version+'/'+kind+'/'+slug)
      } else {
        this.props.history.replace(process.env.PUBLIC_URL + '/docs/'+version)
      }
    } else if (docs_versions_dev.indexOf(version)===-1){
      // something not recognized, let's throw a page not found
      return (<NotFound/>)
    }

    if (slug && slug.endsWith(".html")) {
      // then strip the html and redirect
      slug = slug.slice(0,-5);
      this.props.history.replace(process.env.PUBLIC_URL + '/docs/'+version+'/'+kind+'/'+slug)
    } else if (slug && slug.endsWith(".ipynb")) {
      // then strip the ipynb and redirect
      slug = slug.slice(0,-6);
      this.props.history.replace(process.env.PUBLIC_URL + '/docs/'+version+'/'+kind+'/'+slug)
    }

    // see if the URL differs from the current state (and therefore the shown docs page)
    if (version !== this.state.version || kind !== this.state.kind || slug !== this.state.slug) {
      // console.log("calling this.updateDocs" + version+kind+slug)
      this.updateDocs(version, kind, slug)
    }

    // display a link to download the Jupyter notebook directly from github
    var notebook_dl_html = null
    if (slug) {
      notebook_dl_html = <a href={"https://github.com/phoebe-project/phoebe2-docs/blob/"+version+"/"+kind+"/"+slug+".ipynb"} target="_blank">IPython Notebook {slug}.ipynb</a>
    }

    // create the html for the Jupyter notebook, if loaded
    var notebook_html = null;
    if (this.state.notebookJSON) {
      // console.log(this.state.notebookJSON)
      notebook_html = <NotebookPreview notebook={this.state.notebookJSON} ref={this.ref_notebook}/> // unfortunately this is creating a bunch of <a>'s where we want <Link>s...'
    } else {
      // TODO: replace this with a nice loading icon once an index page exists
      notebook_html = <p>loading notebook.... <br/><br/> index here from a new index.ipynb file.  For now, start with <Link to={'/docs/'+version+'/tutorials/general_concepts'}>General Concepts</Link></p>
    }


    return (
      <div>
        <Header>
          <h1>PHOEBE {version} Documentation</h1>
        </Header>
        <Content>
          {notebook_dl_html}
          {notebook_html}
        </Content>
      </div>
    );
  }
}
