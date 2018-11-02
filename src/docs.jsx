import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import NotebookPreview from "@nteract/notebook-preview"; // https://github.com/nteract/nteract/tree/master/packages/notebook-app-component
import ReactMarkdown from "react-markdown"; // https://github.com/rexxars/react-markdown

import {Content, Link, Redirect} from './common';
import {Header} from './header';
import {NotFound} from './errors';

export var docs_versions = ['2.1-react', '2.1', '2.0'];
var docs_versions_dev = docs_versions + ['2.0b', 'development']

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
    if (subdir) {
      this.props.history.replace(process.env.PUBLIC_URL + '/docs/'+version+'/'+subdir+'/'+slug)
    } else if (slug) {
      this.props.history.replace(process.env.PUBLIC_URL + '/docs/'+version+'/'+slug)
    } else {
      this.props.history.replace(process.env.PUBLIC_URL + '/docs/'+version+'/')
    }
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

    } else {
      if (!slug) {
        slug = 'index'
      }

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

    }



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
    } else if (version==='1.0') {
      // then redirect to the 1.0 page
      return(<Redirect to="/1.0/docs"/>)
    } else if (!version) {
      // then we're at /docs
      // so redirect so the URL shows the latest version
      version = docs_versions[0]
      if (slug) {
        this.props.history.replace(process.env.PUBLIC_URL + '/docs/'+version+'/'+subdir+'/'+slug)
      } else {
        this.props.history.replace(process.env.PUBLIC_URL + '/docs/'+version+'/')
      }
    } else if (docs_versions_dev.indexOf(version)===-1){
      // something not recognized, let's throw a page not found
      return (<NotFound/>)
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

    // create the html for the Jupyter notebook, if loaded
    var notebook_html = null;
    if (this.state.contentType==='notebook') {
      // console.log(this.state.content)
      notebook_dl_html = <a href={"https://github.com/phoebe-project/phoebe2-docs/blob/"+version+"/"+subdir+"/"+slug+".ipynb"} target="_blank">IPython Notebook {slug}.ipynb</a>
      notebook_html = <NotebookPreview notebook={this.state.content} ref={this.ref_notebook}/> // unfortunately this is creating a bunch of <a>'s where we want <Link>s...'
    } else if (this.state.contentType==='md'){
      notebook_html = <ReactMarkdown source={this.state.content}/>
    } else {
      // TODO: replace this with a nice loading icon
      notebook_html = <p>LOADING DOCS....</p>
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
