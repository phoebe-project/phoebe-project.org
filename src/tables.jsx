import React, { Component } from 'react';

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import Select from 'react-select'; // https://react-select.com/home

import {Content, Link, Redirect, Button, Image, Separator, Alert, getLatestPatchVersion, metaKeywords, NosetestsDiv} from './common';
import {VersionSwitcherContainer, VersionSwitcher} from './versionswitcher';
import {NotFound} from './errors';
import {docs_versions, getDocsLink} from './docs';
import {Header, HeaderNavButton} from './header';

// use native browser implementation if it supports aborting, otherwise use polyfill and whatwg-fetch
import 'abortcontroller-polyfill';
import {fetch} from 'whatwg-fetch';
const abortableFetch = ('signal' in new Request('')) ? window.fetch : fetch

const tablesurl = 'http://localhost:5555'

export class Tables extends Component {
  constructor(props) {
      super(props);
      this.state = {
        hash: null,
        availablePassbands: [],
        availableContents: [],
        requestedPassbandsMode: "choose from list",
        requestedPassbands: [],
        requestedContentsMode: "all",
        requestedContents: []
      };

  }
  scrollToHash() {
    var offsetTop = null;
    var hash = this.state.hash
    if (hash==='#web') {
      // offsetTop = this.refweb.current.offsetTop;
    }

    if (offsetTop) {
      window.scrollTo(0,offsetTop-80);
    }
  }
  componentWillMount() {
    this.abortGetParamsController = new window.AbortController();
    abortableFetch(tablesurl+"/available", {signal: this.abortGetParamsController.signal})
      .then(res => res.json())
      .then(json => {
        this.setState({availablePassbands: json.passbands, availableContents: json.contents})

      }, err=> {
        // then we canceled the request
        console.log("received abort signal")
      })
      .catch(err => {
        console.log("received abort signal")
      });

  }
  componentDidUpdate() {
    this.scrollToHash()
  }
  mapContent = (content) => {
    if (content.split('_').slice(-1) == 'ext') {
      return content + ' ('+content.split('_').slice(0,1) + ' with extinction)'
    } else {
      return content
    }
  }
  onChangePassbandsMode = (e) => {
    this.setState({requestedPassbandsMode: e.value})
  }
  onChangePassbands = (e) => {
    var value = []
    if (e) {
      value = e.map((item) => item.value)
    }
    this.setState({requestedPassbands: value})
  }
  onChangeContentsMode = (e) => {
    this.setState({requestedContentsMode: e.value})
  }
  onChangeContents = (e) => {
    var value = []
    if (e) {
      value = e.map((item) => item.value)
    }
    this.setState({requestedContents: value})
  }
  render() {
    if (this.props.location.hash !== this.state.hash) {
      this.setState({hash: this.props.location.hash})
    }

    var tablesurl_fetch = tablesurl
    var fetch_tar = false

    if (this.state.requestedPassbandsMode === 'all') {
      tablesurl_fetch = tablesurl_fetch + "/all"
      fetch_tar = true
    } else {
      tablesurl_fetch = tablesurl_fetch + "/" + this.state.requestedPassbands.join(",")
      if (this.state.requestedPassbands.length > 1) {
        fetch_tar = true
      }
    }

    if (this.state.requestedContentsMode === 'all') {
      tablesurl_fetch = tablesurl_fetch + "/all"
    } else {
      tablesurl_fetch = tablesurl_fetch + "/" + this.state.requestedContents.join(",")
    }

    return (
      <div>
        <Helmet>
          <title>PHOEBE | Passband, Atmosphere, and Limb-Darkening Tables</title>
          <meta name="keywords" content={metaKeywords+", tables, passbands, atmospheres, limb-darkening"}/>
          <meta name="description" content="Passband Atmosphere and Limb-Darkening Tables for PHOEBE 2"/>
        </Helmet>
        <Header>
          <h1>PHOEBE Tables</h1>
        </Header>

        <Content preventScrollTop={this.props.location.hash}>

          <div className="row">
            <p>
              As long as you have a reliable internet connection, PHOEBE 2 will automatically download any required tables and install them <b>locally</b> (i.e. for the user running PHOEBE) the first time they are requested.
            </p>
            <p>
              Alternatively, you can call <Link to="/docs/latest/api/phoebe.download_passband">phoebe.download_passband</Link> to manually install passbands either <b>globally</b> (available to all users) or <b>locally</b> from the python interface.
              You can also update all currently installed passbands via <Link to="/docs/latest/api/phoebe.update_all_passbands">phoebe.update_all_passbands</Link> (introduced in v2.2).
            </p>
            <p>
              If instead you'd like to manually download a passband file (or tarball of multiple passband files) and customize which atmosphere tables and effects are included, you can use the form below.  To install in PHOEBE, call <Link to="/docs/latest/api/phoebe.install_passband">phoebe.install_passband</Link> or place the files (unpacking the tarball if necessary) into the local or global passband directories (the exact paths on your system for each can be accessed via <Link to="/docs/latest/api/phoebe.list_passband_directories">phoebe.list_passband_directories</Link>).
            </p>
          </div>

          <div className="row">
            <h3>Download Passband(s):</h3>
            <Select options={["choose from list", "all"].map((choice) => ({value: choice, label: choice}))}  value={{value: this.state.requestedPassbandsMode, label: this.state.requestedPassbandsMode}} onChange={this.onChangePassbandsMode} isMulti={false} isClearable={false} closeMenuOnSelect={true}/>
            {this.state.requestedPassbandsMode === 'choose from list'
              ?
              <Select options={this.state.availablePassbands.map((choice) => ({value: choice, label: choice}))}  value={this.state.requestedPassbands.map((choice) => ({value: choice, label: choice}))} onChange={this.onChangePassbands} isMulti={true} isClearable={true} closeMenuOnSelect={false}/>
              :
              null
            }

            <h3>Choose Atmospheres/Tables:</h3>
            <p><b>NOTE</b>: these tables may not all exist for each passband, but those that are selected will be included whenever available.</p>

            <Select options={["choose from list", "all"].map((choice) => ({value: choice, label: choice}))}  value={{value: this.state.requestedContentsMode, label: this.state.requestedContentsMode}} onChange={this.onChangeContentsMode} isMulti={false} isClearable={false} closeMenuOnSelect={true}/>
            {this.state.requestedContentsMode === 'choose from list'
              ?
              <Select options={this.state.availableContents.map((choice) => ({value: choice, label: this.mapContent(choice)}))}  value={this.state.requestedContents.map((choice) => ({value: choice, label: this.mapContent(choice)}))} onChange={this.onChangeContents} isMulti={true} isClearable={true} closeMenuOnSelect={false}/>
              :
              null
            }
          </div>

          <div className="row" style={{textAlign: "center", paddingTop: "50px", paddingBottom: "50px"}}>
            {(this.state.requestedPassbands.length > 0 || this.state.requestedPassbandsMode === 'all') && (this.state.requestedContents.length > 0 || this.state.requestedContentsMode === 'all') ?
              <Button level="primary"
                      style={{lineHeight: "2.5em", fontSize: "16px"}}
                      to={tablesurl_fetch}
                      icon={fetch_tar ? "fas fa-fw fa-archive" : "fas fa-fw fa-th"}
                      title={fetch_tar ? "Download Archive" : "Download Passband File"}/>
              :
              <span><b>choose at least one passband and table</b></span>
            }


          </div>

        </Content>
      </div>
    );
  }
}
