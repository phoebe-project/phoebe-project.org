import React, { Component } from 'react';

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import ReactMarkdown from "react-markdown"; // https://github.com/rexxars/react-markdown

import {Content, Link, Redirect, Image, Separator, getLatestPatchVersion} from './common';
import {NotFound} from './errors';
import {docs_versions} from './docs';
import {Header, HeaderNavButton} from './header';

export class ReleaseVersionRedirect extends Component {
  render() {
    var version = this.props.match.params.version
    if (docs_versions.indexOf(version)!==-1) {
      return (
        <Redirect to={"/releases/"+version}/>
      )
    } else {
      return (
        <NotFound/>
      )
    }
  }
}

export class Releases extends Component {
  render() {
    var docs_versions_incl_legacy = docs_versions.concat("legacy")
    // to test a new release before its included in the changelog (make sure to comment out before building and pushing live version)
    // docs_versions_incl_legacy.unshift("2.3")
    // docs_versions_incl_legacy.unshift("2.4")
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
          <div className="hidden-xs" style={{display: "flex", justifyContent: "space-between"}}>
            <span/>
            <div style={{marginRight: "-40px"}}>
              <iframe src="https://ghbtns.com/github-btn.html?user=phoebe-project&repo=phoebe2&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
            </div>
          </div>

          <div className="row visible-xs">
            <div style={{paddingLeft: "15px"}}>
              <iframe src="https://ghbtns.com/github-btn.html?user=phoebe-project&repo=phoebe2&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <p>
                The first version of PHOEBE (<Link to="/releases/legacy">0.20</Link>) was officially released in 2003.
                Development on the 2.X versions of PHOEBE began in 2011, with the <Link to="/releases/2.0">2.0 version</Link> finally released in 2017.
                Since then, the <Link to="/development-team">development team</Link> has been working on incorporating new features into the code.
                The latest available version is currently <Link to={"/releases/"+docs_versions[0]}>PHOEBE {latest_patch_version}</Link>.
                Below is a reverse-chronological list of the major releases of PHOEBE along with a description of the major (and sometimes minor) changes introduced in that release.
              </p>
              <p>Not sure whether to use PHOEBE 2 or PHOEBE 1 (legacy)?  Read this overview of the <Link to="/help/1vs2">differences between PHOEBE 1 and 2</Link>.</p>
            </div>
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
        <ReleaseContent version={version} release_changelogs={this.props.release_changelogs} open_changelog={true}/>
      </div>
    )
  }
}

class ReleaseContent extends Component {
  render() {
    var logo = "logo_blue.svg";
    var releasePaper = "Release Paper"
    var publicationLink = null
    var quickstart = true
    var content = null;
    if (this.props.version === '1.0' || this.props.version === 'legacy') {
      logo = "logo_release_10.png"
      releasePaper = "Prša & Zwitter (2005)"
      publicationLink = "/publications/2005Prsa+"
      quickstart = false
      content = <div>
                  <p>The legacy releases of PHOEBE (0.x and soon culminating in the official release of version 1.0) are built upon the <Link to="ftp://ftp.astro.ufl.edu/pub/wilson">Wilson-Devinney code</Link>.</p>
                  <p>All the archived 0.x releases of PHOEBE and their respective changelogs can be found on the <Link to="/install/1.0">PHOEBE legacy install page</Link>.</p>
                  <p>Although widely tested and more efficient than PHOEBE 2, the legacy version of PHOEBE is no longer being actively maintained and lacks the precision for modern observations, so new users should consider starting with PHOEBE 2.  For more information, see the page on <Link to="/1.0">PHOEBE Legacy</Link>.</p>
                </div>
    } else if (this.props.version === '2.0') {
      logo = "logo_release_20.svg"
      releasePaper = "Prša et al. (2016)"
      publicationLink = "/publications/2016Prsa+"
      content = <div>
                  <p>PHOEBE 2.0 is the first official release of the completely redesigned and rewritten version of PHOEBE with a Python frontend interface.  The 2.0 release aims to provide fully-tested functionality that matches that of the <Link to="/1.0">legacy version of PHOEBE</Link> (light curve and radial velocity forward model of binary star systems) but with improved precision and the introduction of a Python frontend.</p>
                  <p>
                    Supported Physics (from PHOEBE legacy):
                  </p>

                  <ul>
                    <li>detached and semi-detached (since 2.0.5) roche binaries</li>
                    <li>keplerian orbits (including <Link to="/docs/2.0/tutorials/ecc">eccentric orbits with volume conservation</Link>)</li>
                    <li><Link to="/docs/2.0/tutorials/atm_passbands">passbands/atmospheres</Link></li>
                    <li><Link to="/docs/2.0/tutorials/limb_darkening">limb-darkening</Link></li>
                    <li><Link to="/docs/2.0/tutorials/gravb_bol">gravity brightening/darkening</Link></li>
                    <li><Link to="/docs/2.0/tutorials/reflection_heating">reflection</Link> (heating without redistribution)</li>
                    <li><Link to="/docs/2.0/tutorials/fti">finite time of integration</Link> via oversampling (for light curves only)</li>
                    <li><Link to="/docs/2.0/examples/binary_spots">circular spots</Link></li>
                    <li><Link to="/docs/2.0/examples/minimal_contact_binary">contact systems</Link> (to mimic WD)</li>
                  </ul>

                  <p>
                    New Physics (not in PHOEBE legacy):
                  </p>
                  <ul>
                    <li><Link to="/docs/2.0/tutorials/beaming_boosting">Doppler boosting</Link></li>
                    <li><Link to="/docs/2.0/examples/sun">Single rotating stars</Link></li>
                    <li><Link to="/docs/2.0/tutorials/ltte">Rømer and Light Travel Time Effects (ltte)</Link></li>
                    <li><Link to="/docs/2.0/tutorials/irrad_method_horvat">Lambert scattering</Link></li>
                  </ul>

                  <p>
                    Unsupported Physics (from PHOEBE legacy) that PHOEBE 2.0 can not yet handle:
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
      releasePaper = "Horvat et al. (2018)"
      publicationLink = "/publications/2018Horvat+"
      content = <div>
                  <p>PHOEBE 2.1 builds on the <Link to="/releases/2.0">2.0 release</Link> and introduces support for spin-orbit misalignment and spectral line-profiles as an observable dataset.</p>
                  <p>
                    New Physics introduced in version 2.1:
                  </p>
                  <ul>
                    <li><Link to="/docs/2.1/examples/diher_misaligned">Spin-orbit misalignment</Link> (via <Link to="/docs/2.1/tutorials/pitch_yaw">pitch and yaw</Link> parameters)</li>
                    <li>Support for creating <Link to="/docs/2.1/tutorials/LP">synthetic line profiles</Link></li>
                  </ul>

                  <p>
                    Major changes since 2.0:
                  </p>
                  <ul>
                    <li>switch parameterization from <Link to="/docs/2.1/tutorials/20_21_requiv">rpole/pot to requiv</Link> (including new <Link to="/docs/2.1/tutorials/20_21_semidetached">semi-detached</Link> and <Link to="/docs/2.1/tutorials/20_21_contact">contact</Link> constraints)</li>
                    <li>rewrite of <Link to="/docs/2.1/tutorials/20_21_plotting">plotting infrastructure</Link> to use <Link to="http://github.com/kecnry/autofig">autofig</Link></li>
                    <li>rewrite of <Link to="/docs/2.1/tutorials/20_21_mesh">mesh dataset infrastructure</Link> to allow choosing which columns are exposed in the model</li>
                    <li>Distinguish <Link to="/docs/2.1/tutorials/20_21_xyz_uvw">Roche (xyz) from Plane-of-Sky (uvw) coordinates</Link></li>
                  </ul>
                </div>
    } else if (this.props.version === '2.2') {
      logo = "logo_release_22.svg"
      releasePaper = "Jones et al. (2020)"
      publicationLink = "/publications/2020Jones+"
      content = <div>
                  <p>PHOEBE 2.2 introduces support for interstellar reddening and extinction as well as support for Python 3.</p>
                  <p>
                    New Physics introduced in version 2.2:
                  </p>
                  <ul>
                    <li><Link to="/docs/2.2/examples/extinction_BK_binary">Interstellar extinction</Link> (via <Link to="/docs/2.2/tutorials/ebv_Av_Rv">ebv, Av, and Rv</Link> parameters)</li>
                    <li><Link to="/docs/2.2/tutorials/atm_passbands">PHOENIX atmospheres</Link></li>
                  </ul>

                  <p>
                    Major changes since 2.1:
                  </p>
                  <ul>
                    <li>support for installing in Python 2.7+ or Python 3.6+.  See the <Link to="/install/2.2">installation instructions</Link> for more details.</li>
                    <li>overhaul of limb-darkening with new <Link to="/docs/2.2/tutorials/21_22_ld_mode">ld_mode and ld_coeffs_source parameters</Link>.</li>
                    <li>overhaul of passband luminosity and flux scaling with the new <Link to="/docs/2.2/tutorials/21_22_pblum_mode">pblum_mode parameter</Link>.</li>
                    <li>ability to provide third light in either flux or percentage units, via the new <Link to="/docs/2.2/tutorials/21_22_l3_mode">l3_mode and l3_frac parameters</Link>.</li>
                    <li>support for computing a model at different times than the observations, via the <Link to="/docs/2.2/tutorials/21_22_compute_times_phases">compute_times or compute_phases parameter</Link>.</li>
                    <li>a transition from pickled to FITS passband files, with automatic detection for <Link to="/docs/2.2/tutorials/passband_updates">available updates</Link>.  The tables can now also be accessed via <Link to="/tables">tables.phoebe-project.org</Link>.</li>
                    <li><b>disabled</b> support for <Link to="/docs/2.2/tutorials/beaming_boosting">beaming and boosting</Link>.</li>
                  </ul>
                </div>
    } else if (this.props.version === '2.3') {
      logo = "logo_release_23.svg"
      releasePaper = "Conroy et al. (2020)"
      publicationLink = "/publications/2020Conroy+"
      content = <div>
                  <p>PHOEBE 2.3 introduces a general framework for solving the inverse problem with estimators, optimizers, and samplers, as well as the introduction of the <Link to="/clients">PHOEBE user-interface</Link>.</p>
                  <p>
                    New capabilities introduced in version 2.3:
                  </p>
                  <ul>
                    <li><Link to="/docs/2.3/tutorials/solver.ipynb">inverse problem solvers</Link> (<Link to="/docs/2.3/api/phoebe.parameters.solver.estimator">estimators</Link>, <Link to="/docs/2.3/api/phoebe.parameters.solver.optimizer">optimizers</Link>, and <Link to="/docs/2.3/api/phoebe.parameters.solver.sampler">samplers</Link>)</li>
                    <li><Link to="/docs/2.3/tutorials/distributions.ipynb">distributions</Link></li>
                    <li><Link to="/docs/2.3/examples/minimal_GPs.ipynb">gaussian processes</Link></li>
                    <li><Link to="/docs/2.3/tutorials/mask_phases.ipynb">phase masking</Link></li>
                  </ul>
                  <p>
                    New <Link to="/docs/2.3/backends">compute backends</Link> introduced in version 2.3
                  </p>
                  <ul>
                    <li><Link to="/docs/2.3/api/phoebe.parameters.compute.ellc">ellc</Link></li>
                    <li><Link to="/docs/2.3/api/phoebe.parameters.compute.jktebop">jktebop</Link></li>
                  </ul>
                  <p>
                    New Physics introduced in version 2.3:
                  </p>
                  <ul>
                    <li>Per-component and per-dataset <Link to="/docs/2.3/tutorials/rv_offset.ipynb">radial velocity offsets</Link></li>
                  </ul>
                  <p>
                    Major changes since 2.2:
                  </p>
                  <ul>
                    <li><Link to="/docs/2.3/tutorials/22_23_dpdt_phasing.ipynb">fixed phasing in time-dependent systems</Link></li>
                    <li><Link to="/docs/2.3/tutorials/22_23_period_anom.ipynb">distinction between anomalous and sidereal period in apsidal motion cases</Link></li>
                    <li><Link to="/docs/2.3/tutorials/22_23_extinction.ipynb">extinction moved from per-dataset to system-level</Link></li>
                    <li><Link to="/docs/2.3/tutorials/22_23_run_checks.ipynb">run_checks split into run_checks_system, compute, solver, solution</Link></li>
                    <li><Link to="/docs/2.3/tutorials/22_23_requivsumfrac.ipynb">requivsum constraint replaced by requivsumfrac</Link></li>
                    <li><Link to="/docs/2.3/tutorials/22_23_scipy.ipynb">scipy dependency updated to 1.7+</Link></li>
                  </ul>
                </div>
    } else if (this.props.version === '2.4') {
      logo = "logo_release_24.svg"
      releasePaper = "Prša et al. (2020)"
      publicationLink = "/publications/2020Prsa+"
      content = <div>
                  <p>PHOEBE 2.4 .</p>
                  <p>
                    New Physics introduced in version 2.3:
                  </p>
                  <ul>
                    <li>blended atmospheres</li>
                    <li>TLUSTY atmospheres</li>
                  </ul>
                  <p>
                    Major changes since 2.3:
                  </p>
                  <ul>

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
            <div style={{marginTop: 0}}>
              <Link to={"/install/"+this.props.version+"/"}><span className="fa fa-fw fa-download"></span> Install PHOEBE {this.props.version}</Link>
            </div>
            <div style={{marginTop: 0}}>
              <Link to={"/docs/"+this.props.version+"/"}><span className="fa fa-fw fa-book-open"></span> Read PHOEBE {this.props.version} docs</Link>
            </div>
            {quickstart ?
              <div style={{marginTop: 0}}>
                <Link to={"/quickstart/"+this.props.version}><span className="far fa-fw fa-play-circle"></span> PHOEBE {this.props.version} Quickstart</Link>
              </div>
              :
              null
            }
            {publicationLink!==null ?
              <div style={{marginTop: 0}}>
                <Link to={publicationLink}> <span className="fas fa-fw fa-copy"></span> {releasePaper}</Link>
              </div>
              :
              null
            }


            <div style={{paddingTop: "15px"}}>
              {content}

              <br/><br/>
              {Object.keys(this.props.release_changelogs).indexOf(this.props.version)!==-1 ?
                <details open={this.props.open_changelog}>
                  <summary><b>Individual Patch Releases and Changelog</b></summary>
                  <ul style={{display: "flex", flexDirection: "column-reverse"}}>
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
        <span><b>PHOEBE {this.props.versionLong}</b></span>
        <div style={{paddingLeft: "20px", paddingTop: "5px", paddingBottom: "10px"}}>
          <Link to={"/install/"+this.props.versionLong}><span className="fa fa-fw fa-download"></span> Install PHOEBE {this.props.versionLong}</Link>
          <br/>
          <Link to={"https://github.com/phoebe-project/phoebe2/archive/"+this.props.versionLong+".tar.gz"} hideExternal={true}><span className="fas fa-fw fa-archive"></span> PHOEBE.{this.props.versionLong}.tar.gz</Link>
          <br/>
          <Link to={"https://github.com/phoebe-project/phoebe2/archive/"+this.props.versionLong+".zip"} hideExternal={true}><span className="far fa-fw fa-file-archive"></span> PHOEBE.{this.props.versionLong}.zip</Link>
        </div>
        <b style={{paddingLeft: "20px"}}>{this.props.changelogContent.title}</b>
        <ReactMarkdown source={this.props.changelogContent.description}/>
      </div>
    )
  }
}
