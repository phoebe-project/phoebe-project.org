import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import {Content, Link, Redirect, Alert, metaKeywords} from './common';
import {VersionSwitcherContainer, VersionSwitcher} from './versionswitcher';
import {GitHubContent} from './githubcontent';
import {Header, HeaderNavButton} from './header';
import {NotFound} from './errors';

export var docs_versions = ['2.2', '2.1', '2.0'];
var docs_versions_dev = ['dev'].concat(docs_versions);

// NOTE: we do this to force a deep-copy
// var docs_versions_reverse = JSON.parse(JSON.stringify(docs_versions)).reverse()
var docs_versions_dev_reverse = JSON.parse(JSON.stringify(docs_versions_dev)).reverse()

export function getDocsLink(version, subdir, slug) {
  if (["dev", "devel"].indexOf(version) !== -1) {
    version = "development"
  }

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
      contentPath: null
    };
  }
  redirect = (version, subdir, slug) => {
    this.props.history.replace(getDocsLink(version, subdir, slug))
  }
  updateDocs = (version, subdir, slug) => {
    var contentPath = null;
    if (slug && subdir && subdir !== 'api') {
      contentPath = subdir+"/"+slug+".ipynb"
    } else if (slug) {
      if (subdir) {
        contentPath = subdir+"/"+slug+".md"
      } else {
        contentPath = slug+".md"
      }
    } else {
      // then we're the index
      // leave contentPath at null
      contentPath = null;
    }

    this.setState({version: version, subdir: subdir, slug: slug, contentPath: contentPath})

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
    } else if (version==='dev' || version=='devel' || version==='development') {
      // allow dev/devel/development to be an alias of dev
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

    var reportHTML = <Link to={"http://github.com/phoebe-project/phoebe2-docs/issues/new?title=issue+with+v"+version+" docs:+"+subdir+"/"+slug} hideExternal={true}><span className="fas fa-fw fa-bug"></span> Issue/Question on this Page?</Link>

    return (
      <div>
        <Helmet>
          <title>PHOEBE | Documentation</title>
          <meta name="description" content={"PHOEBE "+version+" documentation"}/>
          <meta name="keywords" content={metaKeywords+", documentation, docs"}/>
          {docs_versions.indexOf(version)===-1 ?
            <meta name="robots" content="NOINDEX, NOFOLLOW"/>
            :
            null
          }
        </Helmet>
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
          {this.state.version===docs_versions[0] ?
            null
            :
            version=="development" ?
              <Alert level="danger">
                <p><b>WARNING:</b> these are the docs for the development (unreleased) version of PHOEBE.  View <Link to={getDocsLink("latest", this.state.subdir, this.state.slug)}>docs for the latest release ({docs_versions[0]})</Link> or use the version switcher at the bottom of the page to select the correct version of PHOEBE.</p>
              </Alert>

              :
              <Alert level="danger">
                <p><b>WARNING:</b> these are the docs for an outdated version of PHOEBE ({version}).  View <Link to={getDocsLink("latest", this.state.subdir, this.state.slug)}>docs for the latest release ({docs_versions[0]})</Link> or use the version switcher at the bottom of the page to select the correct version of PHOEBE.</p>
                <p>If you're not sure, <Link to="/help/version">check your installed version of PHOEBE</Link>.</p>
                <p>To update PHOEBE, see information on the <Link to="/releases/latest">latest release</Link> as well as <Link to="/install/latest">installation/update instructions</Link>.</p>
              </Alert>


          }
          <GitHubContent repo='phoebe2-docs' branch={version} path={this.state.contentPath} loadingText="LOADING DOCS..." reportHTML={reportHTML}>
            <div>
              {version!="development" ?
                <div>
                  <h2><span className="fa fa-fw fa-xs fa-tag"></span> About PHOEBE {version}</h2>
                  <p>You can read about the features added during the <Link to={"/releases/"+version}>{version} release</Link> as well as read the changelog entries.</p>

                  <p>For a quick discussion on why PHOEBE 2 is designed the way it is and why the learning curve seems a little steep see the <Link to={"/docs/"+version+"/tutorials/design_concepts"}>General Design Concepts of PHOEBE 2</Link>.  Otherwise, feel free to jump in to the tutorials or example scripts below.</p>

                  <h2><span className="far fa-fw fa-xs fa-play-circle"></span> Try PHOEBE {version} in a Live-Session</h2>
                  <p>
                    You can try PHOEBE {version} in a live Google Colab Session before installing it on your local machine.
                    All of the example scripts and tutorials here will include a link in the top-left to open that notebook in a live-session.
                    Or you can follow the <Link to={"/quickstart/"+version}><span className="far fa-fw fa-play-circle"></span> PHOEBE {version} Quickstart</Link>.
                  </p>
                  <p>
                    Learn more <Link to="/help/colab">about Google Colab Live Sessions</Link>.
                  </p>

                  <h2><span className="fas fa-fw fa-xs fa-download"></span> Download &amp; Install</h2>
                  <p>If you don't already have PHOEBE installed, see the <Link to={"/install/"+version}>installation instructions for PHOEBE {version}.</Link></p>

                </div>
                :
                null
              }

              <h2><span className="fas fa-fw fa-xs fa-hands-helping"></span> Tutorials</h2>
              <p>Tutorials are built to slowly build upon each other and provide narration about how to use PHOEBE.</p>
              <p>View <Link to={"/docs/"+version+"/tutorials"}>tutorials for PHOEBE {version}</Link>.</p>

              <h2><span className="fas fa-fw fa-xs fa-table"></span> Datasets &amp; Observables</h2>
              <p><Link to={"/docs/"+version+"/datasets"}>These tutorials</Link> explain each of the different dataset types that are supported by PHOEBE, as well as all applicable options.</p>

              <h2><span className="fas fa-fw fa-xs fa-atom"></span> Physics &amp; Individual Parameters</h2>
              <p><Link to={"/docs/"+version+"/physics"}>This set of tutorials</Link> describe the various physics effects implemented in PHOEBE {version} and the choices of the individual parameters that control those effects.</p>

              <h2><span className="fa fa-fw fa-xs fa-file-code"></span> Example Scripts</h2>
              <p>Example scripts provide less commentary than tutorials, but can be useful if trying to accomplish something specific or mimic another use-case.</p>
              <p>View <Link to={"/docs/"+version+"/examples"}>example scripts for PHOEBE {version}</Link>.</p>

              <h2><span className="fa fa-fw fa-xs fa-terminal"></span> API Documentation</h2>
              <p>API Documentation shows the calling arguments and options for all classes/functions/methods in PHOEBE.  Note that these same instructions can be called by calling Python's help function (i.e. help(phoebe.bundle) or help(b.run_compute)).</p>
              <p>View <Link to={"/docs/"+version+"/api"}>API docs for PHOEBE {version}</Link>.</p>
            </div>
          </GitHubContent>
          <VersionSwitcherContainer>
            <VersionSwitcher titleLong="PHOEBE:" titleShort="PHOEBE:" version={this.state.version} versions={["1.0"].concat(docs_versions_dev_reverse)} versionLinks={["/1.0/docs"].concat(docs_versions_dev_reverse.map(version => getDocsLink(version, this.state.subdir, this.state.slug)))}/>
          </VersionSwitcherContainer>
        </Content>
      </div>
    );
  }
}
