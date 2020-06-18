import React, { Component } from 'react';

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import {Content, Link, Image, Separator} from './common';
import {Header} from './header';

export class Source extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>PHOEBE | Source-Code</title>
          <meta name="description" content="links to various PHOEBE source-code repositories"/>
        </Helmet>
        <Header>
          <h1>Source-Code</h1>
        </Header>
        <Content>
          <div>
            <p>All PHOEBE repositories are hosted on the <Link to="http://github.com/phoebe-project">phoebe-project GitHub page</Link>.  Below we list the major repositories under development by the <Link to="/development-team">PHOEBE development team</Link>.</p>
          </div>

          <h2>PHOEBE 2 Repositories</h2>
          <div className="row">
            <div className="col-md-2 text-center">
              <Image src={"/logos/logo_release_20.svg"} className="img-handle-invert" width="128"/>
            </div>
            <div className="col-md-10">
              <SourceEntry githubLink="http://github.com/phoebe-project/phoebe2" title="PHOEBE 2">Source-code for all <Link to="/releases">PHOEBE 2.x releases</Link></SourceEntry>
              <SourceEntry githubLink="http://github.com/phoebe-project/phoebe2-ui" title="PHOEBE 2 UI">Source-code for the <Link to="/clients">desktop and web UI clients</Link> built on ReactJS and Electron</SourceEntry>
              <SourceEntry githubLink="http://github.com/phoebe-project/phoebe2-docs" title="PHOEBE 2 Documentation">Jupyter notebooks and markdown sources for PHOEBE 2 tutorials, examples, and documentation.  These are also rendered and available via the <Link to="/docs">documentation section on this website</Link>.</SourceEntry>
              <SourceEntry githubLink="http://github.com/phoebe-project/phoebe2-tables" title="PHOEBE 2 Tables">Atmosphere and passband tables used within PHOEBE 2.0.x and 2.1.x.  These are downloaded automatically by PHOEBE 2 when requested.  For tables for PHOEBE 2.2+, see <Link to="/tables">tables.phoebe-project.org</Link></SourceEntry>
            </div>
          </div>

          <Separator large={false}/>
        </Content>

        <Content dark={true}>
          <h2>PHOEBE 1 (legacy) Repositories</h2>
          <div className="row">
            <div className="col-md-2 text-center">
              <Image src={"/logos/logo_release_10.png"} width="128"/>
            </div>
            <div className="col-md-10">
              <SourceEntry githubLink="http://github.com/phoebe-project/phoebe1" title="PHOEBE 1">Source-code for all <Link to="/1.0">PHOEBE legacy (0.x and 1.x) releases</Link></SourceEntry>
              <SourceEntry githubLink="https://sourceforge.net/projects/phoebe/" title="PHOEBE 1 (sourceforge)">Previous repository used for PHOEBE legacy - no longer updated, use GitHub repository above for current development</SourceEntry>
            </div>
          </div>

          <Separator large={false} flip={true}/>
        </Content>
        <Content>
          <h2>Miscellaneous Repositories</h2>
          <SourceEntry githubLink="http://github.com/phoebe-project/phoebe2-workshop" title="PHOEBE Workshop Materials">Jupyter notebooks and links to talks/videos for <Link to="/workshops">PHOEBE Workshops</Link>.</SourceEntry>
          <SourceEntry githubLink="http://github.com/phoebe-project/phoebe-project.org" title="phoebe-project.org">Source-code for this website, written in ReactJS.</SourceEntry>
          <SourceEntry githubLink="http://github.com/phoebe-project/tables.phoebe-project.org" title="tables.phoebe-project.org">Source-code for PHOEBE tables served by <Link to="/tables">tables.phoebe-project.org</Link></SourceEntry>

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
        <Link to={this.props.githubLink} hideExternal={true}>{this.props.title}</Link> - {this.props.children}
      </div>
    )
  }
}
