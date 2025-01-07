import React, { Component } from 'react';

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import Select from 'react-select'; // https://react-select.com/home

import {Content, Link, Button, Alert, metaKeywords} from './common';
import {Header, HeaderNavButton} from './header';

// use native browser implementation if it supports aborting, otherwise use polyfill and whatwg-fetch
import 'abortcontroller-polyfill';
import {fetch} from 'whatwg-fetch';
const abortableFetch = ('signal' in new Request('')) ? window.fetch : fetch

// const tablesurl = 'http://localhost:5555'
const tablesurl = 'https://tables.phoebe-project.org'

class TablesHeader extends Component {
  render() {
    return (
      <Header>
        <span className="hidden-xs"><h1>{this.props.title || "Tables"}</h1></span>
        <span className="visible-xs"><h1>{this.props.titlexs || this.props.title || "Tables"}</h1></span>

        <div className="row">
           <div className="col-md-2"></div>
           <div className="col-md-2"></div>
           <div className="col-md-2"></div>
           <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
             <HeaderNavButton title="Passbands" description="Passbands & Atmospheres" to={"/tables/pbs"} icon="fa fas fa-layer-group"/>
           </div>
           <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
             <HeaderNavButton title="ATMs" description="Atmosphere Models" to={"/tables/atms"} icon="fa fa-laptop-code"/>
           </div>
           <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
             <HeaderNavButton title="PTFs" description="Passband Transmission Functions" to={"/tables/ptfs"} icon="fa fa-chart-area"/>
           </div>
         </div>
      </Header>
    )
  }
}

export class Tables extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }

  render() {

    return (
      <div>
        <Helmet>
          <title>PHOEBE | Tables</title>
          <meta name="keywords" content={metaKeywords+", tables"}/>
          <meta name="description" content="Tables for PHOEBE 2"/>
        </Helmet>
        <TablesHeader title={"Tables"}/>

        <Content>

          <div className="row" style={{paddingTop: "40px"}}>
            <div className="col-md-2">
              <Link to="/tables/pbs"><span className="fa fa-fw fa-10x fas fa-layer-group" style={{width: "100%", color: "#666666"}}></span></Link>
            </div>
            <div className="col-md-10">
              <p style={{paddingLeft: "10px", paddingTop: "20px"}}>
                <Link to="/tables/pbs">Passband and Atmosphere FITS tables</Link> are used internally in PHOEBE for everything from normal intensities to limb-darkening to extinction.
                If you have a stable internet connection, the appropriate tables will be downloaded and installed when required by PHOEBE.
                However, should you wish to download them in bulk in advance or download custom tables for use outside PHOEBE, you can <Link to="/tables/pbs">customize and download passband FITS files</Link>.
              </p>
            </div>
          </div>

          <div className="row" style={{paddingTop: "40px"}}>
            <div className="col-md-2">
              <Link to="/tables/atms"><span className="fa fa-fw fa-10x fas fa-laptop-code" style={{width: "100%", color: "#666666"}}></span></Link>
            </div>
            <div className="col-md-10">
              <p style={{paddingLeft: "10px", paddingTop: "20px"}}>
                <Link to="/tables/atms">Model atmosphere tables</Link> are needed to compute custom passbands on the user side. These tables are computed using
                different model atmospheres (Kurucz, Phoenix, TMAP models), each fine-tuned to the parts of the H-R diagram. Depending on what passband response
                you plan to compute, you need any or all of these tables.
                To build custom passband tables, see the <Link to="/docs/latest/tutorials/passbands.ipynb">custom passbands tutorial</Link>.
              </p>
            </div>
          </div>

          <div className="row" style={{paddingTop: "40px"}}>
            <div className="col-md-2">
              <Link to="/tables/ptfs"><span className="fa fa-fw fa-10x fas fa-chart-area" style={{width: "100%", color: "#666666"}}></span></Link>
            </div>
            <div className="col-md-10">
              <p style={{paddingLeft: "10px", paddingTop: "20px"}}>
                <Link to="/tables/ptfs">Passband Transmission Functions (PTFs)</Link> are used to build the <Link to="/tables/pbs">Passband Tables</Link>, but are not directly used by PHOEBE and are not required to download or install.
                These are required, however, to build <Link to="/docs/latest/tutorials/passbands.ipynb">custom passband/atmosphere tables</Link>.
                These ASCII files consist of two columns: wavelength and transmission.
                These files can be found at the <Link to="https://github.com/phoebe-project/phoebe2-tables/tree/master/ptf">phoebe2-tables GitHub repo</Link>.
              </p>
            </div>
          </div>

        </Content>
      </div>
    );
  }
}

export class TablesPBs extends Component {
  constructor(props) {
      super(props);
      this.state = {
        hash: null,
        availablePassbands: [],
        availablePassbandSets: [],
        npassbandsPerSet: {},
        availableContents: [],
        availableContentAtms: [],
        requestedPassbandsMode: "choose list of individual passbands",
        requestedPassbands: [],
        requestedPassbandSets: [],
        requestedContentsMode: "all",
        requestedContents: [],
        requestedContentAtms: [],
        requestedFormat: ".fits"
      };

  }
  componentWillMount() {
    this.abortGetParamsController = new window.AbortController();
    abortableFetch(tablesurl+"/pbs/available", {signal: this.abortGetParamsController.signal})
      .then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({availablePassbands: json.passbands, availablePassbandSets: json.passband_sets, npassbandsPerSet: json.npassbands_per_set, availableContents: json.content, availableContentAtms: json.content_atms})

      }, err=> {
        // then we canceled the request
        console.log("received abort signal")
      })
      .catch(err => {
        console.log("received abort signal")
      });

  }
  mapContent = (content) => {
    if (content.split(':').slice(-1) === 'ext') {
      return content + ' (extinction)'
    } else if (content.split(':').slice(-1) === 'Inorm') {
      return content + ' (normal intensities)'
    } else if (content.split(':').slice(-1) === 'Imu') {
      return content + ' (projected intensities)'
    } else if (content.split(':').slice(-1) === 'ld') {
      return content + ' (limb-darkening)'
    } else if (content.split(':').slice(-1) === 'ldint') {
      return content + ' (integrated limb-darkening profiles)'
    } else {
      return content
    }
  }
  onChangePassbandsMode = (e) => {
    this.setState({requestedPassbandsMode: e.value})
  }
  onChangePassbands = (e) => {
    let value = []
    if (e) {
      value = e.map((item) => item.value)
    }
    this.setState({requestedPassbands: value})
  }
  onChangePassbandSets = (e) => {
    let value = []
    if (e) {
      value = e.map((item) => item.value)
    }
    this.setState({requestedPassbandSets: value})
  }
  onChangeContentsMode = (e) => {
    this.setState({requestedContentsMode: e.value})
  }
  onChangeContents = (e) => {
    let value = []
    if (e) {
      value = e.map((item) => item.value)
    }
    this.setState({requestedContents: value})
  }
  onChangeContentAtms = (e) => {
    let value = []
    if (e) {
      value = e.map((item) => item.value)
    }
    this.setState({requestedContentAtms: value})
  }
  onChangeFormat = (e) => {
    this.setState({requestedFormat: e.value})
  }
  render() {
    let tablesurl_fetch = tablesurl + "/pbs"
    let fetch_tar = false
    let validSelectionPassband = false
    let validSelectionContent = false

    if (this.state.requestedPassbandsMode === 'all') {
      tablesurl_fetch = tablesurl_fetch + "/all"
      fetch_tar = true
      validSelectionPassband = true
    } else if (this.state.requestedPassbandsMode === 'choose list of individual passbands') {
      tablesurl_fetch = tablesurl_fetch + "/" + this.state.requestedPassbands.join(",")
      if (this.state.requestedPassbands.length > 1) {
        fetch_tar = true
      }
      if (this.state.requestedPassbands.length) {
        validSelectionPassband = true
      }
    } else if (this.state.requestedPassbandsMode === 'choose list of passband sets') {
      tablesurl_fetch = tablesurl_fetch + "/" + this.state.requestedPassbandSets.join(",")

      if (this.state.requestedPassbandSets.length > 1 || this.state.npassbandsPerSet[this.state.requestedPassbandSets[0]] > 1) {
        fetch_tar = true
      }
      if (this.state.requestedPassbandSets.length) {
        validSelectionPassband = true
      }
    }

    if (this.state.requestedContentsMode === 'all') {
      tablesurl_fetch = tablesurl_fetch + "/all"
      validSelectionContent = true
    } else if (this.state.requestedContentsMode === 'choose list of individual contents'){
      tablesurl_fetch = tablesurl_fetch + "/" + this.state.requestedContents.join(",")
      if (this.state.requestedContents.length) {
        validSelectionContent = true
      }
    } else if (this.state.requestedContentsMode === 'choose list of atmospheres'){
      tablesurl_fetch = tablesurl_fetch + "/" + this.state.requestedContentAtms.join(",")
      if (this.state.requestedContentAtms.length) {
        validSelectionContent = true
      }
    }

    if (this.state.requestedFormat === '.fits.gz') {
      tablesurl_fetch = tablesurl_fetch + "?gzipped=true"
    }


    let formatLabels = {'.fits': '.fits (larger filesize, quicker loadtime)', '.fits.gz': '.fits.gz (smaller filesize, longer loadtime)'}
    // add "/" this.state.requestedPhoebeVersion if we ever want to support selecting a version (will default to 'latest' otherwise)

    return (
      <div>
        <Helmet>
          <title>PHOEBE | Passband, Atmosphere, and Limb-Darkening Tables</title>
          <meta name="keywords" content={metaKeywords+", tables, passbands, atmospheres, limb-darkening"}/>
          <meta name="description" content="Passband Atmosphere and Limb-Darkening Tables for PHOEBE 2"/>
        </Helmet>
        <TablesHeader title={"Tables | Passbands & Atmospheres"} titlexs={"Passbands"}/>

        <Content>

          <Alert level="warning">
            <p><b>Note:</b> These passband files are compatible with PHOEBE 2.2+ only.  For passband files for PHOEBE 2.0.x and 2.1.x, see the <Link to="https://github.com/phoebe-project/phoebe2-tables">phoebe2-tables repo</Link>.  For tables for PHOEBE 1 (legacy), see <Link to="/1.0">phoebe-project.org/1.0</Link>.</p>
          </Alert>

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
            <Select options={["choose list of individual passbands", "choose list of passband sets", "all"].map((choice) => ({value: choice, label: choice}))}  value={{value: this.state.requestedPassbandsMode, label: this.state.requestedPassbandsMode}} onChange={this.onChangePassbandsMode} isMulti={false} isClearable={false} closeMenuOnSelect={true}/>
            {this.state.requestedPassbandsMode === 'choose list of individual passbands'
              ?
              <Select options={this.state.availablePassbands.map((choice) => ({value: choice, label: choice}))}  value={this.state.requestedPassbands.map((choice) => ({value: choice, label: choice}))} onChange={this.onChangePassbands} isMulti={true} isClearable={true} closeMenuOnSelect={false}/>
              :
              null
            }
            {this.state.requestedPassbandsMode === 'choose list of passband sets'
              ?
              <Select options={this.state.availablePassbandSets.map((choice) => ({value: choice, label: choice}))}  value={this.state.requestedPassbandSets.map((choice) => ({value: choice, label: choice}))} onChange={this.onChangePassbandSets} isMulti={true} isClearable={true} closeMenuOnSelect={false}/>
              :
              null
            }


            <h3>Choose Atmospheres/Tables:</h3>
            <p><b>NOTE</b>: these tables may not all exist for each passband, but those that are selected will be included whenever available.</p>

            <Select options={["choose list of individual contents", "choose list of atmospheres", "all"].map((choice) => ({value: choice, label: choice}))}  value={{value: this.state.requestedContentsMode, label: this.state.requestedContentsMode}} onChange={this.onChangeContentsMode} isMulti={false} isClearable={false} closeMenuOnSelect={true}/>
            {this.state.requestedContentsMode === 'choose list of individual contents'
              ?
              <Select options={this.state.availableContents.map((choice) => ({value: choice, label: this.mapContent(choice)}))}  value={this.state.requestedContents.map((choice) => ({value: choice, label: this.mapContent(choice)}))} onChange={this.onChangeContents} isMulti={true} isClearable={true} closeMenuOnSelect={false}/>
              :
              null
            }
            {this.state.requestedContentsMode === 'choose list of atmospheres'
              ?
              <Select options={this.state.availableContentAtms.map((choice) => ({value: choice, label: this.mapContent(choice)}))}  value={this.state.requestedContentAtms.map((choice) => ({value: choice, label: this.mapContent(choice)}))} onChange={this.onChangeContentAtms} isMulti={true} isClearable={true} closeMenuOnSelect={false}/>
              :
              null
            }

            <h3>Choose File Format:</h3>
            <Select options={[".fits", ".fits.gz"].map((choice) => ({value: choice, label: formatLabels[choice]}))}  value={{value: this.state.requestedFormat, label: formatLabels[this.state.requestedFormat]}} onChange={this.onChangeFormat} isMulti={false} isClearable={false} closeMenuOnSelect={true}/>


          </div>

          <div className="row" style={{textAlign: "center", paddingTop: "50px", paddingBottom: "50px"}}>
            {validSelectionPassband && validSelectionContent ?
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

export class TablesPTFs extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }

  render() {

    return (
      <div>
        <Helmet>
          <title>PHOEBE | Passband Transmission Functions</title>
          <meta name="keywords" content={metaKeywords+", tables, passbands, ptfs"}/>
          <meta name="description" content="Passband Transmission Functions for PHOEBE 2"/>
        </Helmet>
        <TablesHeader title={"Tables | Passband Transmission Functions"} titlexs={"PTFs"}/>

        <Content>

          <Alert level="warning">
            <p><b>Note:</b> These passband transmission functions are used to build the <Link to="/tables/pbs">passband files</Link>, but are not used by PHOEBE directly.</p>
          </Alert>

          <div className="row">
            <p>
              <Link to="/tables/ptfs">Passband Transmission Functions (PTFs)</Link> are used to build the <Link to="/tables/pbs">Passband Tables</Link>, but are not directly used by PHOEBE and are not required to download or install.
              These are required, however, to build <Link to="/docs/latest/tutorials/passbands.ipynb">custom passband/atmosphere tables</Link>.
              These ASCII files consist of two columns: wavelength and transmission.
              These files can be found at the <Link to="https://github.com/phoebe-project/phoebe2-tables/tree/master/ptf">phoebe2-tables GitHub repo</Link>.
            </p>
          </div>
        </Content>
      </div>
    );
  }
}

class ATMEntry extends Component {
  render() {
    return (
      <div className="row" style={{marginTop: "80px"}}>
          <div className="col-md-3" style={{textAlign: "center"}}>
            <h3>
              {this.props.model}
            </h3>
            <span>
              <Link to={this.props.refLink}>{this.props.reference}</Link>
            </span>
          </div>
          <div className="col-md-7" style={{marginTop: "40px"}}>
            <span>
              <Link to={"/static/atms/"+this.props.filename}>{this.props.filename}</Link> ({this.props.filesize}, updated: {this.props.filedate})
            </span>
          </div>
      </div>
    )
  }
}

export class TablesATMs extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }

  render() {

    return (
      <div>
        <Helmet>
          <title>PHOEBE | Model Atmosphere Tables</title>
          <meta name="keywords" content={metaKeywords+", tables, passbands, ptfs, atmospheres, model atmospheres"}/>
          <meta name="description" content="Model Atmosphere Tables for PHOEBE 2"/>
        </Helmet>
        <TablesHeader title={"Tables | Model Atmospheres"} titlexs={"ATMs"}/>

        <Content>

          <Alert level="warning">
            <p><b>Note:</b> These model atmosphere tables are used to build the <Link to="/tables/pbs">passband files</Link>, but are not used by PHOEBE directly.</p>
          </Alert>

          <div className="row">
            <p>
              <Link to="/tables/atms">Model atmosphere tables</Link> contain specific emergent intensities as a function of atmospheric parameters
                (effective temperature, surface gravity, heavy metal abundance and direction w.r.t. the normal); they are needed to compute custom
                passbands on the user side. These tables are <em>modified</em> from their original versions and adapted for the purposes of PHOEBE.
                Depending on what passband response you plan to compute, you need one or more of these tables.
                To build custom passband tables, see the <Link to="/docs/latest/tutorials/passbands.ipynb">custom passbands tutorial</Link>.
            </p>

            <ATMEntry model="ck2004" filename="ck2004.tgz" filesize="32GB" filedate="2022-06-02" reference="Castelli & Kurucz 2004" refLink="https://wwwuser.oats.inaf.it/castelli/grids.html"/>
            <ATMEntry model="PHOENIX" filename="phoenix.tgz" filesize="43GB" filedate="2022-06-02" reference="Husser et al. 2013" refLink="https://ui.adsabs.harvard.edu/abs/2013A%26A...553A...6H"/>
            {/* <ATMEntry model="TMAP" filename="tmap.tgz" filesize="10GB" filedate="2022-06-01" reference="Werner et al. 2012" refLink="https://ui.adsabs.harvard.edu/abs/2012ascl.soft12015W"/> */}

          </div>

        </Content>
      </div>
    );
  }
}
