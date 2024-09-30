import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { Helmet } from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import 'babel-polyfill' // https://medium.com/@andrewzey/google-seo-with-create-react-app-fixing-the-hidden-gotcha-c164063106d

import './App.css';

import { metaKeywords } from './common';
import { Navbar } from './navbar';
import { Home } from './home';
import { Releases, ReleaseVersion, ReleaseVersionRedirect } from './releases';
import { Quickstart } from './quickstart';
import { Install } from './install';
import { Tables, TablesPBs, TablesPTFs, TablesATMs } from './tables';
import { Clients } from './clients';
import { Docs } from './docs';
import { News } from './news';
import { Workshop, WorkshopRegistration } from './workshops';
import { Publications, PublicationEntry } from './publications';
import { Source, Dependencies } from './source';
import { Contribute, ContributeDevelopment,TourFrontend, TourBackend, TourLibphoebe } from './contribute';
import { LegacyIntro, LegacyGPL, LegacyDocs, LegacyDownload } from './legacy';
import { HelpDevel, HelpDevelRedirect, HelpContact, HelpMailingList, HelpFAQ, Help1vs2, HelpVersion, HelpIPYNB, HelpColab } from './help';
import { Devel, TeleconRedirect, TeleconNotesRedirect } from './devel';
import { NotFound } from './errors';

function parseReadmeChangelog(text) {
  let textChangelog = text.slice(text.indexOf("CHANGELOG")+9, text.indexOf("QUESTIONS?"))
  let textVersions = textChangelog.split("### ")

  let versions = {}
  let splitIndex = null;
  let version_long = null;
  let version_short = null;
  let versionTitle = null;
  let versionDescription = null;
  for (let textVersion of textVersions.reverse()) {
    if (!textVersion.startsWith("\n")) {
      splitIndex = Math.min(textVersion.indexOf(" "), textVersion.indexOf("\n"))
      version_long = textVersion.slice(0, splitIndex)
      version_short = version_long.slice(0, version_long.lastIndexOf("."))
      versionDescription = textVersion.slice(splitIndex)
      if (Object.keys(versions).indexOf(version_short) === -1) {
        versions[version_short] = []
      }
      if (versionDescription.split("\n")[0].indexOf('-') !== -1) {
        versionTitle = versionDescription.split("\n\n")[0].split("- ")[1]
      } else {
        versionTitle = ''
      }
      versions[version_short].push({title: versionTitle.replace("\\_", "_"), description: versionDescription.replace("- "+versionTitle, "")})
    }
  }
  return versions
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      release_changelogs: {},
    };
  }
  componentDidMount() {
    let url = "https://raw.githubusercontent.com/phoebe-project/phoebe2/master/README.md";
    console.log("fetching "+url)

    fetch(url)
      .catch(() => this.setState({versions: null}))
      .then(res => {
        if (res.ok) {
          return res.text();
        } else {
          return null;
        }
      })
      .then(text => this.setState({release_changelogs: parseReadmeChangelog(text)}))
  }
  render() {
    return (
      <Router>
        <div id='main'>
          <Helmet>
              <title>PHOEBE</title>
              <meta name="description" content="PHOEBE is an astronomical python software package which robustly generates synthetic models of the light curves, radial velocity curves, and spectral line profiles of eclipsing system and eclipsing binary stars."/>
              <meta name="keywords" content={metaKeywords}/>
          </Helmet>

          <Navbar />

          <Routes>
            <Route path={process.env.PUBLIC_URL + '/'} element={<Home {...this.props} release_changelogs={this.state.release_changelogs}/>}/>
            <Route path={process.env.PUBLIC_URL + '/releases'} element={<Releases {...this.props} release_changelogs={this.state.release_changelogs}/>}/>
            <Route path={process.env.PUBLIC_URL + '/releases/:version/'} element={<ReleaseVersion {...this.props} release_changelogs={this.state.release_changelogs}/>}/>
            <Route path={process.env.PUBLIC_URL + '/quickstart'} component={Quickstart}/>
            <Route path={process.env.PUBLIC_URL + '/quickstart/:version/'} component={Quickstart}/>
            <Route path={process.env.PUBLIC_URL + '/install'} element={<Install {...this.props} release_changelogs={this.state.release_changelogs}/>}/>
            <Route path={process.env.PUBLIC_URL + '/install/:version/'}element={<Install {...this.props} release_changelogs={this.state.release_changelogs}/>}/>
            <Route path={process.env.PUBLIC_URL + '/install/:version/:version_os'} element={<Install {...this.props} release_changelogs={this.state.release_changelogs}/>}/>
            <Route path={process.env.PUBLIC_URL + '/install/:version/:version_os/:version_py'} element={<Install {...this.props} release_changelogs={this.state.release_changelogs}/>}/>
            <Route path={process.env.PUBLIC_URL + '/tables'} component={Tables}/>
            <Route path={process.env.PUBLIC_URL + '/tables/pbs'} component={TablesPBs}/>
            <Route path={process.env.PUBLIC_URL + '/tables/ptfs'} component={TablesPTFs}/>
            <Route path={process.env.PUBLIC_URL + '/tables/atms'} component={TablesATMs}/>
            <Route path={process.env.PUBLIC_URL + '/clients'} component={Clients}/>
            <Route path={process.env.PUBLIC_URL + '/docs'} component={Docs}/>
            <Route path={process.env.PUBLIC_URL + '/docs/:version/'} component={Docs}/>
            <Route path={process.env.PUBLIC_URL + '/docs/:version/:slug'} component={Docs}/>
            <Route path={process.env.PUBLIC_URL + '/docs/:version/:subdir/:slug'} component={Docs}/>
            <Route path={process.env.PUBLIC_URL + '/news'} component={News}/>
            <Route path={process.env.PUBLIC_URL + '/news/:slug'} component={News}/>
            <Route path={process.env.PUBLIC_URL + '/workshops'} component={Workshop}/>
            <Route path={process.env.PUBLIC_URL + '/workshops/registration'} component={WorkshopRegistration}/>
            <Route path={process.env.PUBLIC_URL + '/workshops/:workshop'} component={Workshop}/>
            <Route path={process.env.PUBLIC_URL + '/workshops/:workshop/:slug'} component={Workshop}/>
            <Route path={process.env.PUBLIC_URL + '/workshop'} element={<Navigate to="/workshops"/>}/> {/* old website used "workshop" instead of "workshops" */}
            <Route path={process.env.PUBLIC_URL + '/publications'} component={Publications}/>
            <Route path={process.env.PUBLIC_URL + '/publications/:publication/'} component={PublicationEntry}/>
            <Route path={process.env.PUBLIC_URL + '/source'} component={Source}/>
            <Route path={process.env.PUBLIC_URL + '/dependencies'} component={Dependencies}/>
            <Route path={process.env.PUBLIC_URL + '/contribute'} component={Contribute}/>
            <Route path={process.env.PUBLIC_URL + '/contribute/development-guide'} component={ContributeDevelopment}/>
            <Route path={process.env.PUBLIC_URL + '/contribute/tour/frontend'} component={TourFrontend}/>
            <Route path={process.env.PUBLIC_URL + '/contribute/tour/backend'} component={TourBackend}/>
            <Route path={process.env.PUBLIC_URL + '/contribute/tour/libphoebe'} component={TourLibphoebe}/>
            <Route path={process.env.PUBLIC_URL + '/1.0'} component={LegacyIntro}/>
            <Route path={process.env.PUBLIC_URL + '/1.0/gpl'} component={LegacyGPL}/>
            <Route path={process.env.PUBLIC_URL + '/1.0/docs'} component={LegacyDocs}/>
            <Route path={process.env.PUBLIC_URL + '/1.0/download'} component={LegacyDownload}/>
            <Route path={process.env.PUBLIC_URL + '/development-team'} component={HelpDevel}/>
            <Route path={process.env.PUBLIC_URL + '/help/devel'} component={HelpDevelRedirect}/>
            <Route path={process.env.PUBLIC_URL + '/help/contact'} component={HelpContact}/>
            <Route path={process.env.PUBLIC_URL + '/help/contact/:mailinglist'} component={HelpMailingList}/>
            <Route path={process.env.PUBLIC_URL + '/help/faq'} component={HelpFAQ}/>
            <Route path={process.env.PUBLIC_URL + '/help/1vs2'} component={Help1vs2}/>
            <Route path={process.env.PUBLIC_URL + '/help/version'} component={HelpVersion}/>
            <Route path={process.env.PUBLIC_URL + '/help/ipynb'} component={HelpIPYNB}/>
            <Route path={process.env.PUBLIC_URL + '/help/colab'} component={HelpColab}/>
            <Route path={process.env.PUBLIC_URL + '/devel'} component={Devel}/>
            <Route path={process.env.PUBLIC_URL + '/devel/telecon-notes'} component={TeleconNotesRedirect}/>
            <Route path={process.env.PUBLIC_URL + '/devel/telecon'} component={TeleconRedirect}/>

            <Route path={process.env.PUBLIC_URL + '/:version'} component={ReleaseVersionRedirect}/>
            <Route path="*" component={NotFound} />
          </Routes>

        </div>
      </Router>
    );
  }
}

export default App;
