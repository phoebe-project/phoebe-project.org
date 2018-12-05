import React, { Component } from 'react';

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import {Content, Link, Alert, Button, metaKeywords} from './common';
import {docs_versions} from './docs';
import {NotFound} from './errors';
import {Header} from './header';

export class Quickstart extends Component{
  render() {
    var version = this.props.match.params.version

    if (version==null) {
      version = docs_versions[0]
    } else if (version==='latest') {
      version = docs_versions[0]
    } else if (docs_versions.indexOf(version)===-1) {
      return(
        <NotFound>Quickstart not available for version {version}.  See all available <Link to="/releases">releases</Link>.</NotFound>
      )
    }

    return (
      <div>
        <Helmet>
          <title>PHOEBE | Quickstart</title>
          <meta name="keywords" content={metaKeywords+", quickstart"}/>
          <meta name="description" content="Getting Started with PHOEBE"/>
        </Helmet>
        <Header>
          <h1>Quickstart</h1>

        </Header>

        <Content>
          {version!==docs_versions[0] ?
            <Alert level="danger">
              <p><b>Warning:</b> The latest release is <Link to={"/releases/"+docs_versions[0]}>PHOEBE {docs_versions[0]}</Link>, but these instructions are for <Link to={"/releases/"+version}>PHOEBE {version}</Link>.  Consider switching to <Link to="/quickstart/">PHOEBE {docs_versions[0]} Quickstart</Link>.</p>
            </Alert>
            :
            null
          }

          <div className="row" style={{textAlign: "center", paddingTop: "50px", paddingBottom: "50px"}}>
            <Button style={{lineHeight: "2.5em", fontSize: "16px"}} to={"https://colab.research.google.com/github/phoebe-project/phoebe2-docs/blob/"+version+"/quickstart.ipynb"} icon="far fa-fw fa-play-circle" title={"Launch PHOEBE "+version+" Quickstart"}/>
            {this.props.match.params.version==null ?
              <p style={{textAlign: "center", marginBottom: 0}}>
                or launch from a <Link to="/releases">previous release</Link>.
              </p>
              :
              null
            }
            <p style={{textAlign: "center"}}>
              read more about using <Link to="/help/colab">Google Colab Live-Sessions</Link>.
            </p>
          </div>

          <div className="row">
            <p>
              Launching the quickstart above will open a new tab with a minimal Jupyter notebook in a <Link to="http://colab.research.google.com">Google Colab</Link> session.
              This script will install the latest bugfix release of PHOEBE {version}, import phoebe, and provide a few helpful links to get started.
            </p>
            <p>
              You may also want to reference the following:
            </p>
            <ul>
              <li><Link to={"/docs/"+version}>PHOEBE {version} Docs</Link></li>
              <li><Link to={"/docs/"+version+"/tutorials"}>PHOEBE {version} Tutorials</Link></li>
              <li><Link to={"/docs/"+version+"/examples"}>PHOEBE {version} Example Scripts</Link></li>
              <li><Link to={"/docs/"+version+"/api"}>PHOEBE {version} API Docs</Link></li>
            </ul>
            <p>
              If you run into any problems, check out the <Link to="/help/faq">FAQ</Link>, file a <Link to="/contribute#issues">bug report</Link>, or <Link to="/help/contact">contact us</Link>.
            </p>
          </div>

        </Content>
      </div>
    )
  }
}
