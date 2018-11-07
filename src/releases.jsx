import React, { Component } from 'react';

import {Content, Link, Redirect, Image} from './common';
import {NotFound} from './errors';
import {docs_versions} from './docs';
import {Header} from './header';

export class Releases extends Component {
  render() {
    // NOTE: we do this to force a deep-copy
    var docs_versions_reverse = JSON.parse(JSON.stringify(docs_versions.concat("legacy"))).reverse()
    return (
      <div>
        <Header>
          <h1>Releases</h1>
        </Header>
        <Content>
          <p>
            The first version of PHOEBE (0.20) was officially released in 2003.
            Development on the 2.X versions of PHOEBE began in 2011, with the <Link to="/releases/2.0">2.0 version</Link> finally released in 2017.
            Since then, the <Link to="/help/devel">development team</Link> has been working on incorporating new features into the code.
            The latest available version is <Link to={"/releases/"+docs_versions[0]}>PHOEBE {docs_versions[0]}</Link>.
            Below is a chronological list of the major releases of PHOEBE along with a description of the major (and sometimes minor) changes introduced in that release.
          </p>
        </Content>
        {/* NOTE: don't wrap inside Content since each ReleaseContent is wrapped itself */}
        {docs_versions_reverse.map((version, index) => <ReleaseContent version={version} dark={Boolean(index % 2)} showHeader={true}/>)}
      </div>
    );
  }
}

export class ReleaseVersion extends Component {
  render() {
    var version = this.props.match.params.version

    if (version==='latest') {
      // allow latest as the version in the URL, but show whatever is latest
      version = docs_versions[0]
    } else if (version==='1.0' || version==='legacy') {
    //   // then redirect to the 1.0 page
    //   return(<Redirect to="/1.0/download"/>)
      version = 'legacy'
    } else if (docs_versions.indexOf(version)===-1){
      // something not recognized, let's throw a page not found
      return (<NotFound>Release version {version} not found, try all <Link to="/releases">releases</Link></NotFound>)
    }

    return (
      <div>
        <Header>
          <h1>PHOEBE {version}</h1>
        </Header>
        {/* NOTE: don't wrap inside Content since each ReleaseContent is wrapped itself */}
        <ReleaseContent version={version}/>
      </div>
    )
  }
}

class ReleaseContent extends Component {
  render() {
    var logo = "logo_blue.svg";
    var content = null;
    if (this.props.version === '1.0' || this.props.version === 'legacy') {
      logo = "phoebe-gui.png"
      content = <div>
                  <p>The legacy releases of PHOEBE (0.x and soon culminating in the official release of version 1.0) are built upon the <Link to="ftp://ftp.astro.ufl.edu/pub/wilson">Wilson-Devinney code</Link>.</p>
                  <p>All the archived 0.x releases of PHOEBE and their respective changelogs can be found on the <Link to="/install/1.0">PHOEBE legacy install page</Link>.</p>
                  <p>Although widely tested and more efficient than PHOEBE 2, the legacy version of PHOEBE is no longer being actively maintained and lacks the precision for modern observations, so new users should consider starting with PHOEBE 2.  For more information, see the page on <Link to="/1.0">PHOEBE Legacy</Link>.</p>
                </div>
    } else if (this.props.version === '2.0') {
      logo = "logo_blue.svg"
      content = <div>
                  <p>PHOEBE 2.0 is the first official release of the completely redesigned and rewritten version of PHOEBE with a Python frontend interface.  The 2.0 release aims to provide fully-tested functionality that matches that of the <Link to="/1.0">legacy version of PHOEBE</Link> (light curve and radial velocity forward model of binary star systems) but with improved precision and the introduction of a Python frontend.</p>
                  <p>
                    Supported Physics (from PHOEBE legacy):
                    <ul>
                      <li>detached and semi-detached (since 2.0.5) roche binaries</li>
                      <li>keplerian orbits (including eccentric orbits with volume conservation)</li>
                      <li>passbands/atmospheres</li>
                      <li>limb-darkening</li>
                      <li>gravity darkening</li>
                      <li>reflection (heating without redistribution)</li>
                      <li>finite integration time via oversampling (for light curves only)</li>
                      <li>circular spots</li>
                      <li>contact systems (to mimic WD)</li>
                    </ul>

                    New Physics (not in PHOEBE legacy):
                    <ul>
                      <li>Doppler boosting</li>
                      <li>Single rotating stars</li>
                      <li>Labert scattering</li>
                    </ul>

                    Unsupported Physics (from PHOEBE legacy) PHOEBE 2.0 can not yet handle:
                    <ul>
                      <li>X-ray binaries</li>
                    </ul>

                    Unsupported Convenience functionality
                    <ul>
                      <li>fitting (planned future development)</li>
                      <li>GUI (in development)</li>
                      <li>data in magnitudes (dropping support - must convert to fluxes manually)</li>
                      <li>data in phases (dropping support - but a function is provided to convert manually when importing data)</li>
                    </ul>

                  </p>
                </div>
    } else if (this.props.version === '2.1') {
      content = <div>
                  <p>PHOEBE 2.1 builds on the <Link to="/releases/2.0">2.0 release</Link> and introduces support for spin-orbit misalignment and spectral line-profiles as an observable dataset.</p>
                  <p>
                    New Physics introduced in version 2.1:
                    <ul>
                      <li>Spin-orbit misalignment (via pitch and yaw parameters)</li>
                      <li>Support for creating <Link to="/docs/2.1/tutorials/LP">synthetic line profiles</Link></li>
                    </ul>

                    Major changes since 2.0:
                    <ul>
                      <li>switch parameterization from <Link to="/docs/2.1/tutorials/20_21_requiv">rpole/pot to requiv</Link> (including new <Link to="/docs/2.1/tutorials/20_21_semidetached">semi-detached</Link> and contact constraints)</li>
                      <li>rewrite of <Link to="/docs/2.1/tutorials/20_21_plotting">plotting infrastructure</Link> to use <Link to="http://github.com/kecnry/autofig">autofig</Link></li>
                      <li>rewrite of <Link to="/docs/2.1/tutorials/20_21_mesh">mesh dataset infrastructure</Link> to allow choosing which columns are exposed in the model</li>
                      <li>Distringuish Roche (xyz) from Plane-of-Sky (uvw) coordinates</li>
                    </ul>
                  </p>
                </div>
    } else {
      content = <div style={{color: "red"}}>
                  Description for PHOEBE {this.props.version} release not available.
                </div>
    }

    return (
      <Content dark={this.props.dark}>
        {this.props.showHeader ? <h2><Link to={"releases/"+this.props.version+"/"}>PHOEBE {this.props.version}</Link></h2> : null}
        <div className="row">
          <div className="col-md-2 text-center">
            <Image src={logo} width="128"/>
          </div>
          <div className="col-md-10">
            <Link to={"/install/"+this.props.version+"/"}><span className="fa fa-download"></span> Install PHOEBE {this.props.version}</Link> &nbsp;&nbsp;&nbsp;
            <Link to={"/docs/"+this.props.version+"/"}><span className="fa fa-book-open"></span> Read PHOEBE {this.props.version} docs</Link>
            <br/><br/>
            {content}

            <br/><br/>
            <b>TODO: add individual releases and changelog dynamically pulled from github README, with each patch release pointing to its own download link (example <Link to={"https://github.com/phoebe-project/phoebe2/archive/2.1.0.zip"} hideExternal={true}>PHOEBE 2.0.11 .zip file</Link> and  <Link to={"https://github.com/phoebe-project/phoebe2/archive/2.1.0.tar.gz"} hideExternal={true}>PHOEBE 2.0.11 .tar.gz file</Link>) and install link (example: <Link to={"/install/2.0.11"}>install PHOEBE 2.0.11</Link>)</b>
          </div>
        </div>
      </Content>
    )
  }
}
