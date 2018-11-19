import React, { Component } from 'react';

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import {Content, Link} from './common';
import {Header} from './header';

export class Source extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>PHOEBE | Source-Code</title>
        </Helmet>
        <Header>
          <h1>Source-Code</h1>
        </Header>
        <Content>
          <div>
            <p>All PHOEBE repositories are hosted on the <Link to="http://github.com/phoebe-project">phoebe-project GitHub page</Link>.  Below we list the major repositories under development by the <Link to="/help/devel">PHOEBE development team</Link>.</p>
          </div>
          <SourceEntry githubLink="http://github.com/phoebe-project/phoebe2" title="PHOEBE 2">Source-code for all <Link to="/releases">PHOEBE 2.x releases</Link></SourceEntry>
          <SourceEntry githubLink="http://github.com/phoebe-project/phoebe1" title="PHOEBE 1">Source-code for all <Link to="/1.0">PHOEBE legacy (0.x and 1.x) releases</Link></SourceEntry>
          <SourceEntry githubLink="http://github.com/phoebe-project/phoebe2-tables" title="PHOEBE 2 Tables">Atmosphere and passband tables used within PHOEBE 2.  These are downloaded automatically by PHOEBE 2 when requested.</SourceEntry>
          <SourceEntry githubLink="http://github.com/phoebe-project/phoebe2-docs" title="PHOEBE 2 Documentation">Jupyter notebooks and markdown sources for PHOEBE 2 tutorials, examples, and documentation.  These are also rendered and available via the <Link to="/docs">documentation section on this website</Link>.</SourceEntry>
          <SourceEntry githubLink="http://github.com/phoebe-project/phoebe2-workshop" title="PHOEBE Workshop Materials">Jupyter notebooks and links to talks/videos for <Link to="/workshop">PHOEBE Workshops</Link>.</SourceEntry>
          <SourceEntry githubLink="http://github.com/phoebe-project/phoebe-project.org" title="phoebe-project.org">Source-code for this website, written in ReactJS.</SourceEntry>
        </Content>
      </div>
    );
  }
}

class SourceEntry extends Component {
  render() {
    // props: adsLink, authors, title, release (optional)
    return (
      <div className="row">
        <Link to={this.props.githubLink}>{this.props.title}</Link> - {this.props.children}
      </div>
    )
  }
}
