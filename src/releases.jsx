import React, { Component } from 'react';

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import ReactMarkdown from "react-markdown"; // https://github.com/rexxars/react-markdown

import {Content, Link, Redirect, Image, Separator, getLatestPatchVersion} from './common';
import {NotFound} from './errors';
import {docs_versions} from './docs';
import {Header, HeaderNavButton} from './header';

export class Releases extends Component {
  render() {
    var docs_versions_incl_legacy = docs_versions.concat("legacy")
    var latest_patch_version = getLatestPatchVersion(docs_versions[0], this.props.release_changelogs)
    return (
      <div>
        <Helmet>
          <title>PHOEBE | Releases</title>
          <meta name="description" content="PHOEBE software version-releases."/>
        </Helmet>
        <Header>
          <h1>Releases</h1>
          <div className="row">
             <div className="col-md-10"></div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Latest Release" description="View Latest Release" to={"/releases/latest"} icon="fas fa-tag"/>
             </div>
           </div>


        </Header>
        <Content>
          <div className="col-md-12">
            <p>
              The first version of PHOEBE (<Link to="/releases/legacy">0.20</Link>) was officially released in 2003.
              Development on the 2.X versions of PHOEBE began in 2011, with the <Link to="/releases/2.0">2.0 version</Link> finally released in 2017.
              Since then, the <Link to="/help/devel">development team</Link> has been working on incorporating new features into the code.
              The latest available version is currently <Link to={"/releases/"+docs_versions[0]}>PHOEBE {latest_patch_version}</Link>.
              Below is a chronological list of the major releases of PHOEBE along with a description of the major (and sometimes minor) changes introduced in that release.
            </p>
            <p>Not sure whether to use PHOEBE 2 or PHOEBE 1 (legacy)?  Read this overview of the <Link to="/help/1vs2">differences between PHOEBE 1 and 2</Link>.</p>
          </div>
        </Content>
        {/* NOTE: don't wrap inside Content since each ReleaseContent is wrapped itself */}
        {docs_versions_incl_legacy.map((version, index) => <ReleaseContent version={version} release_changelogs={this.props.release_changelogs} dark={Boolean(index % 2)} showSeparator={Boolean(index < docs_versions_incl_legacy.length - 1)} showHeader={true}/>)}
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
        <Helmet>
          <title>PHOEBE | {version} Release</title>
        </Helmet>
        <Header>
          <h1>PHOEBE {version}</h1>
        </Header>
        {/* NOTE: don't wrap inside Content since each ReleaseContent is wrapped itself */}
        <ReleaseContent version={version} release_changelogs={this.props.release_changelogs}/>
      </div>
    )
  }
}

class ReleaseContent extends Component {
  render() {
    var logo = "logo_blue.svg";
    var content = null;
    if (this.props.version === '1.0' || this.props.version === 'legacy') {
      logo = "logo_release_10.png"
      content = <div>
                  <p>The legacy releases of PHOEBE (0.x and soon culminating in the official release of version 1.0) are built upon the <Link to="ftp://ftp.astro.ufl.edu/pub/wilson">Wilson-Devinney code</Link>.</p>
                  <p>All the archived 0.x releases of PHOEBE and their respective changelogs can be found on the <Link to="/install/1.0">PHOEBE legacy install page</Link>.</p>
                  <p>Although widely tested and more efficient than PHOEBE 2, the legacy version of PHOEBE is no longer being actively maintained and lacks the precision for modern observations, so new users should consider starting with PHOEBE 2.  For more information, see the page on <Link to="/1.0">PHOEBE Legacy</Link>.</p>
                </div>
    } else if (this.props.version === '2.0') {
      logo = "logo_release_20.svg"
      content = <div>
                  <p>PHOEBE 2.0 is the first official release of the completely redesigned and rewritten version of PHOEBE with a Python frontend interface.  The 2.0 release aims to provide fully-tested functionality that matches that of the <Link to="/1.0">legacy version of PHOEBE</Link> (light curve and radial velocity forward model of binary star systems) but with improved precision and the introduction of a Python frontend.</p>
                  <p>
                    Supported Physics (from PHOEBE legacy):
                  </p>

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

                  <p>
                    New Physics (not in PHOEBE legacy):
                  </p>
                  <ul>
                    <li>Doppler boosting</li>
                    <li>Single rotating stars</li>
                    <li>Lambert scattering</li>
                  </ul>

                  <p>
                    Unsupported Physics (from PHOEBE legacy) PHOEBE 2.0 can not yet handle:
                  </p>
                  <ul>
                    <li>X-ray binaries</li>
                  </ul>

                  <p>
                    Unsupported Convenience functionality
                  </p>
                  <ul>
                    <li>fitting (planned future development)</li>
                    <li>GUI (in development)</li>
                    <li>data in magnitudes (dropping support - must convert to fluxes manually)</li>
                    <li>data in phases (dropping support - but a function is provided to convert manually when importing data)</li>
                  </ul>

                </div>
    } else if (this.props.version === '2.1') {
      logo = "logo_release_21.svg"
      content = <div>
                  <p>PHOEBE 2.1 builds on the <Link to="/releases/2.0">2.0 release</Link> and introduces support for spin-orbit misalignment and spectral line-profiles as an observable dataset.</p>
                  <p>
                    New Physics introduced in version 2.1:
                  </p>
                  <ul>
                    <li>Spin-orbit misalignment (via pitch and yaw parameters)</li>
                    <li>Support for creating <Link to="/docs/2.1/tutorials/LP">synthetic line profiles</Link></li>
                  </ul>

                  <p>
                    Major changes since 2.0:
                  </p>
                  <ul>
                    <li>switch parameterization from <Link to="/docs/2.1/tutorials/20_21_requiv">rpole/pot to requiv</Link> (including new <Link to="/docs/2.1/tutorials/20_21_semidetached">semi-detached</Link> and contact constraints)</li>
                    <li>rewrite of <Link to="/docs/2.1/tutorials/20_21_plotting">plotting infrastructure</Link> to use <Link to="http://github.com/kecnry/autofig">autofig</Link></li>
                    <li>rewrite of <Link to="/docs/2.1/tutorials/20_21_mesh">mesh dataset infrastructure</Link> to allow choosing which columns are exposed in the model</li>
                    <li>Distinguish Roche (xyz) from Plane-of-Sky (uvw) coordinates</li>
                  </ul>
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
            <Image src={"/logos/"+logo} className={this.props.version!=='legacy' ? "img-handle-invert" : null} width="128"/>
          </div>
          <div className="col-md-10">
            <Link to={"/install/"+this.props.version+"/"}><span className="fa fa-download"></span> Install PHOEBE {this.props.version}</Link> &nbsp;&nbsp;&nbsp;
            <Link to={"/docs/"+this.props.version+"/"}><span className="fa fa-book-open"></span> Read PHOEBE {this.props.version} docs</Link>
            <br/><br/>
            {content}

            <br/><br/>
            {Object.keys(this.props.release_changelogs).indexOf(this.props.version)!==-1 ?
              <details>
                <summary><b>Individual Patch Releases and Changelog</b></summary>
                <ul>
                  {this.props.release_changelogs[this.props.version].map((changelogContent, patchIndex) => <li style={{paddingBottom: "15px"}}><ReleaseChangelogEntry versionLong={this.props.version+"."+patchIndex} changelogContent={changelogContent}/></li>)}
                </ul>
              </details>
              :
              Object.keys(this.props.release_changelogs).length > 0 ?
                null
                :
                <p>loading changelog entries...</p>
            }
          </div>
        </div>
        {this.props.showSeparator ?
          <Separator large={false} flip={this.props.dark}/>
          :
          null
        }
      </Content>
    )
  }
}

class ReleaseChangelogEntry extends Component {
  render() {
    return (
      <div>
        <b>PHOEBE {this.props.versionLong}</b>
        <br/>
        <div style={{paddingLeft: "20px", paddingTop: "5px", paddingBottom: "10px"}}>
          <Link to={"/install/"+this.props.versionLong}><span className="fa fa-download"></span> Install PHOEBE {this.props.versionLong}</Link>
          <br/>
          <Link to={"https://github.com/phoebe-project/phoebe2/archive/"+this.props.versionLong+".tar.gz"} hideExternal={true}><span className="fas fa-archive"></span> PHOEBE.{this.props.versionLong}.tar.gz</Link>
          <br/>
          <Link to={"https://github.com/phoebe-project/phoebe2/archive/"+this.props.versionLong+".zip"} hideExternal={true}><span className="far fa-file-archive"></span> PHOEBE.{this.props.versionLong}.zip</Link>
        </div>
        <ReactMarkdown source={this.props.changelogContent}/>
      </div>
    )
  }
}
