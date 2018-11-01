import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import './App.css';

import {Navbar} from './navbar';
import {Home} from './home';
import {Docs} from './docs';
import {News, NewsEntry} from './news';
import {Publications} from './publications';
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
            <Route exact path={process.env.PUBLIC_URL + '/docs/:version'} component={Docs}/>
            <Route exact path={process.env.PUBLIC_URL + '/docs/:version/:kind/:slug'} component={Docs}/>
            <Route exact path={process.env.PUBLIC_URL + '/news'} component={News}/>
            <Route path={process.env.PUBLIC_URL + '/news'} component={NewsEntry}/>
            <Route exact path={process.env.PUBLIC_URL + '/publications'} component={Publications}/>
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