import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import 'babel-polyfill' // https://medium.com/@andrewzey/google-seo-with-create-react-app-fixing-the-hidden-gotcha-c164063106d

import './App.css';

import {Navbar} from './navbar';
import {Home} from './home';
import {Docs} from './docs';
import {News, NewsEntry} from './news';
import {Workshop, WorkshopRegistration} from './workshop';
import {Publications} from './publications';
import {Source} from './source';
import {Releases, ReleaseVersion} from './releases';
import {LegacyIntro, LegacyGPL, LegacyDocs, LegacyDownload} from './legacy';
import {HelpDevel, HelpContact, HelpMailingList, HelpFAQ} from './help';
import {NotFound} from './errors';

class App extends Component {
  render() {
    return (
      <Router>
        <div id='main'>
          <Navbar />

          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
            <Route exact path={process.env.PUBLIC_URL + '/docs'} component={Docs}/>
            <Route exact path={process.env.PUBLIC_URL + '/docs/:version/'} component={Docs}/>
            <Route exact path={process.env.PUBLIC_URL + '/docs/:version/:slug'} component={Docs}/>
            <Route exact path={process.env.PUBLIC_URL + '/docs/:version/:subdir/:slug'} component={Docs}/>
            <Route exact path={process.env.PUBLIC_URL + '/news'} component={News}/>
            <Route path={process.env.PUBLIC_URL + '/news'} component={NewsEntry}/>
            <Route exact path={process.env.PUBLIC_URL + '/workshop'} component={Workshop}/>
            <Route exact path={process.env.PUBLIC_URL + '/workshop/registration'} component={WorkshopRegistration}/>
            <Route exact path={process.env.PUBLIC_URL + '/workshop/:workshop'} component={Workshop}/>
            <Route exact path={process.env.PUBLIC_URL + '/workshop/:workshop/:slug'} component={Workshop}/>
            <Route exact path={process.env.PUBLIC_URL + '/publications'} component={Publications}/>
            <Route exact path={process.env.PUBLIC_URL + '/source'} component={Source}/>
            <Route exact path={process.env.PUBLIC_URL + '/install/:version/'} component={Install}/>
            <Route exact path={process.env.PUBLIC_URL + '/releases'} component={Releases}/>
            <Route exact path={process.env.PUBLIC_URL + '/releases/:version/'} component={ReleaseVersion}/>
            <Route exact path={process.env.PUBLIC_URL + '/1.0'} component={LegacyIntro}/>
            <Route exact path={process.env.PUBLIC_URL + '/1.0/gpl'} component={LegacyGPL}/>
            <Route exact path={process.env.PUBLIC_URL + '/1.0/docs'} component={LegacyDocs}/>
            <Route exact path={process.env.PUBLIC_URL + '/1.0/download'} component={LegacyDownload}/>
            <Route exact path={process.env.PUBLIC_URL + '/help/devel'} component={HelpDevel}/>
            <Route exact path={process.env.PUBLIC_URL + '/help/contact'} component={HelpContact}/>
            <Route exact path={process.env.PUBLIC_URL + '/help/contact/:mailinglist'} component={HelpMailingList}/>
            <Route exact path={process.env.PUBLIC_URL + '/help/faq'} component={HelpFAQ}/>
            <Route path="*" component={NotFound} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
