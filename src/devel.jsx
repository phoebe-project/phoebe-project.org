import React, { Component } from 'react';

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import {Content, Link, Redirect, Image, Separator, NosetestsDiv, metaKeywords} from './common';
import {NotFound} from './errors';
import {Header, HeaderNavButton} from './header';



export class Devel extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>PHOEBE | phoebe-devel</title>
          <meta name="description" content="PHOEBE Development"/>
          <meta name="ROBOTS" content="NOINDEX, NOFOLLOW"/>
        </Helmet>
        <Header>
          <h1>phoebe-devel</h1>
        </Header>
        <Content>
          <ul>
            <li>
              <Link to="/devel/telecon">Telecon (Zoom) Link</Link>
            </li>
            <li>
              <Link to="/devel/telecon-notes">Telecon Notes</Link>
            </li>
          </ul>

        </Content>
      </div>
    );
  }
}

export class TeleconRedirect extends Component {
  render () {
    window.location = 'https://villanova.zoom.us/j/165200239m'
    return (
      null
    )
  }
}

export class TeleconNotesRedirect extends Component {
  render() {
    window.location = 'https://docs.google.com/document/d/1qBiLnspQUCB6LtSqajtlqa7RYZqdKzxPRqtpyqlYjF8/edit'
    return (
      null
    )
  }
}
