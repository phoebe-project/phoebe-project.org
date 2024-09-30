import React, { Component } from 'react';

import { Helmet } from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import {Content, Separator, Link, Button, getLatestPatchVersion} from './common';
import {HeaderIndex} from './header';
import {Footer} from './footer';
import {newsStoriesDicts, NewsContent} from './news';
import {InteractiveGettingStarted, DesktopUI} from './mockups';
import {docs_versions} from './docs';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: new Date(),
    };
  }
  render() {
    let newsStoryDate = null;
    let newsStoryPinnedDays = null;
    let pinnedNewsStoryDicts = [];
    newsStoriesDicts.forEach((newsStoryDict, index) => {
      newsStoryDate = new Date(newsStoryDict.date)
      newsStoryPinnedDays = newsStoryDict.pinnedDays || 30
    	if (this.state.now - newsStoryDate < newsStoryPinnedDays*24*60*60*1000) {
        pinnedNewsStoryDicts.push(newsStoryDict)
      }
    });

    let version_latest_long = getLatestPatchVersion(docs_versions[0], this.props.release_changelogs)

    return (
      <div>
        <Helmet>
          <title>PHOEBE | Eclipsing Binary Modeling Software</title>
        </Helmet>
        <HeaderIndex />
        <Content>
          {pinnedNewsStoryDicts.length > 0 ?
            <div style={{paddingBottom: "40px"}}>
              {pinnedNewsStoryDicts.map(newsStoryDict => <NewsContent title={newsStoryDict.title} slug={newsStoryDict.slug} author={newsStoryDict.author} date={newsStoryDict.date} showAsSummary={true} wrapHeight={newsStoryDict.wrapHeight || 100}>{newsStoryDict.content}</NewsContent>)}
            </div>
            :
            null
          }


          <div className="row">
            {/* use col-lg-6 col-md-12 and uncomment other div once clients are supported */}
            <div className="col-lg-6 col-md-12">
            {/* <div className="col-lg-6 col-md-12"> */}
              <div style={{padding: "20px", maxWidth: "800px", height: "130px", margin: "0px auto", textAlign: "center"}}>
                <pre style={{backgroundColor: "white", border: "none", fontSize: "20px", textAlign: "center", padding: "0px", margin: "0px", height: "40px"}}>
                  pip install phoebe
                </pre>
                <span>latest release: <Link to="/releases/latest">PHOEBE {version_latest_long}</Link></span>
                <br/>
                <span><Link to="/install">full installation instructions</Link></span>
              </div>

              <div className="hidden-xs hidden-sm">
                <InteractiveGettingStarted height="650px"/>
              </div>
              <div className="visible-xs visible-sm">
                <InteractiveGettingStarted height="780px"/>
              </div>

            </div>
            <div className="col-lg-6 col-md-12">
              <div style={{padding: "20px", maxWidth: "800px", height: "130px", margin: "0px auto", textAlign: "center"}}>
                <Button level="primary" style={{lineHeight: "2.3em", fontSize: "12px", height: "40px"}} to={"http://ui.phoebe-project.org"} icon="far fa-fw fa-play-circle" title={"Launch PHOEBE Web Client"}/>
                <br/>
                <span>or install the <Link to="/clients#desktop">desktop client</Link></span>
                <br/>
                <span><Link to="/clients">full client information</Link></span>
              </div>

              <div className="hidden-xs hidden-sm">
                <DesktopUI height="650px"/>
              </div>
              <div className="visible-xs visible-sm">
                <DesktopUI height="750px"/>
              </div>
            </div>

          </div>


          <Separator large={false} flip={false}/>
        </Content>
        <Content dark="true">

          <h1 style={{display: "flex", justifyContent: "space-between"}}>Meet PHOEBE
            <div className="hidden-xs" style={{marginRight: "-40px"}}>
              <iframe src="https://ghbtns.com/github-btn.html?user=phoebe-project&repo=phoebe2&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
            </div>
          </h1>

          <div className="row visible-xs">
            <div style={{paddingLeft: "15px"}}>
              <iframe src="https://ghbtns.com/github-btn.html?user=phoebe-project&repo=phoebe2&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <p>PHOEBE is an eclipsing binary modeling code - reproducing and fitting light curves, radial velocity curves, and spectral line profiles of eclipsing systems.</p>
              <p>PHOEBE 2 is a completely rewritten version of the popular <Link to="/1.0">PHOEBE legacy suite</Link> that aims to provide improved precision, <Link to="/docs/latest/physics">new advanced physics</Link>, and modeling of <Link to="/docs/latest/datasets">additional observables</Link> - all with an intuitive and powerful python package interface.</p>
            </div>

            <div className="col-md-12">
              <p>Not sure whether to use PHOEBE 2 or PHOEBE 1 (legacy)?  Read this overview on a <Link to="/help/1vs2">comparison between PHOEBE 1 and 2</Link> or go to the main <Link to="/1.0">PHOEBE 1 (legacy) landing page</Link>.</p>
            </div>

            <div className="col-md-12">
              <p>PHOEBE is written by an international team of <Link to="/development-team">professional astronomers</Link>, and is completely <Link to="/source">open-source</Link>, under a <Link hideexternal="true" to="https://github.com/phoebe-project/phoebe2/blob/master/LICENSE.md">GPL v3 License</Link>.</p>
              <p>Feel free to <Link to="/install">download and install</Link> the latest version of PHOEBE (or any of the <Link to="/releases">previous releases</Link>) and then follow the <Link to="/docs/latest/tutorials">tutorials</Link>.  If (or when) you get stuck, refer to the <Link to="/docs">documentation</Link>, or always feel free to <Link to="/help/contact">contact us</Link>.</p>
              <p>
                If you want to try PHOEBE before installing, feel free to jump into the <Link to="/quickstart"><span className="far fa-fw fa-play-circle"></span> PHOEBE {docs_versions[0]} Quickstart</Link>.
                You can also run any of the <Link to="/docs/latest/tutorials">tutorials</Link> or <Link to="/docs/latest/examples">example scripts</Link> by clicking the link in the upper-left corner.
              </p>
            </div>
          </div>


          <Separator large={false} flip={true}/>
        </Content>
        <Content>

          <h1>Features &amp; Capabilities</h1>


          <div className="row">
            <div className="col-md-4">
              <span className="fa-8x fa-fw fas fa-ruler" style={{width: "100%", textAlign: "center", color: "#666666", padding: "20px"}}/>
              <h3>Improved Precision</h3>
              <p>PHOEBE 2 uses a new method for meshing surfaces and <Link to="/docs/latest/tutorials/eclipse/">handling eclipsing regions</Link> - allowing for high-precision modeling of eclipse events.  PHOEBE also includes full <Link to="/docs/latest/tutorials/atm_passbands">atmosphere and passband</Link>, <Link to="/docs/latest/tutorials/limb_darkening">limb-darkening</Link> and <Link to="/docs/latest/tutorials/gravb_bol">gravity brightening/darkening</Link> support.</p>

              <Expander expandText="List supported atmospheres">
                <ul>
                  <li>blackbody</li>
                  <li>Castelli-Kurucz (ck2004)</li>
                  <li>PHOENIX (as of the <Link to="/releases/2.2">2.2 release</Link>)</li>
                </ul>
              </Expander>

            </div>
            <div className="col-md-4">
              <span className="fa-8x fa-fw fas fa-atom" style={{width: "100%", textAlign: "center", color: "#666666", padding: "20px"}}/>
              <h3>Advanced Physics</h3>
              <p>PHOEBE 2 allows for advanced <Link to="/docs/latest/physics">physics effects</Link> to be included in your model.  We're currently working on implementing more advanced physics into the model in future releases.</p>

              <Expander expandText="List advanced physics">
                <ul>
                  {/* <li><Link to="/docs/latest/tutorials/beaming_boosting">Doppler boosting/beaming</Link></li> */}
                  <li><Link to="/docs/latest/examples/sun">Single rotating stars</Link></li>
                  <li><Link to="/docs/latest/tutorials/ltte">Rømer and Light Travel Time Effects (ltte)</Link></li>
                  <li><Link to="/docs/latest/tutorials/irrad_method_horvat">Irradiation with Lambert Scattering</Link></li>
                  <li><Link to="/docs/latest/tutorials/pitch_yaw">Spin-orbit misalignment</Link> (as of the <Link to="/releases/2.1">2.1 release</Link>)</li>
                  <li><Link to="/docs/latest/tutorials/ebv_Av_Rv">Reddening and Extinction</Link> (as of the <Link to="/releases/2.2">2.2 release</Link>)</li>
                  <li><b>Coming Soon:</b> Blended Atmospheres</li>
                  <li><b>Coming Soon:</b> Pulsations (spherical and oblique)</li>
                  <li><b>Coming Someday:</b> Hierarchical Multiple Systems</li>

                  {/* <li><b>Coming soon:</b> Reflection with heat redistribution</li> */}
                  {/* <li><b>Coming soon:</b> Differential Rotation</li> */}
                  {/* <li><b>Coming soon:</b> Magnetic Fields</li> */}
                  {/* <li><b>Coming soon:</b> Rings/Accretion Disks</li> */}
                </ul>
              </Expander>

            </div>


            <div className="col-md-4">
              <span className="fa-8x fa-fw fas fa-satellite" style={{width: "100%", textAlign: "center", color: "#666666", padding: "20px"}}/>
              <h3>Additional Observables</h3>
              <p>PHOEBE 2 has the capability of modeling a large range of multiple <Link to="/docs/latest/datasets">observable types</Link>, all of which can be included while fitting your model to available data.</p>

              <Expander expandText="List observables">
                <ul>
                  <li><Link to="/docs/latest/tutorials/LC">Photometry (Light Curves)</Link></li>
                  <li><Link to="/docs/latest/tutorials/RV">Radial Velocities</Link></li>
                  <li><Link to="/docs/latest/tutorials/ORB">Orbits</Link> (positions and velocities)</li>
                  <li><Link to="/docs/latest/tutorials/LP">Line Profiles</Link> (as of the <Link to="/releases/2.1">2.1 release</Link>)</li>
                  <li><Link to="/docs/latest/tutorials/MESH">Underlying Mesh Model</Link></li>
                  {/* <li><b>Coming soon:</b> Spectra</li>
                  <li><b>Coming soon:</b> Polarimetry</li>
                  <li><b>Coming soon:</b> Interferometry</li>
                  <li><b>Coming soon:</b> Astrometry</li> */}
                  <li><b>Coming Someday:</b> Eclipse Timing Variations</li>
                </ul>
              </Expander>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <span className="fa-8x fa-fw fas fa-network-wired" style={{width: "100%", textAlign: "center", color: "#666666", padding: "20px"}}/>
              <h3>Parallelization</h3>
              <p>As of the <Link to="/releases/2.1">2.1 release</Link>, PHOEBE 2 supports parallelization via MPI.</p>
              <p>And as of the <Link to="/releases/2.3">2.3 release</Link>, PHOEBE 2 supports automatic parallelization for all inverse solvers using either MPI or multiprocessing, when available.</p>

              {/* <Expander expandText="List supported types">
                <ul>
                  <li><Link to="http://mpi4py.scipy.org/">mpi4py</Link> (see <Link to="/docs/latest/api/phoebe.mpi_on">phoebe.mpi_on API docs</Link>)</li>
                  <li><b>Coming Soon:</b> <Link to="http://www.adaptivecomputing.com/products/open-source/torque/">torque</Link></li>
                  <li><b>Coming Soon:</b> <Link to="https://computing.llnl.gov/linux/slurm/">slurm</Link></li>
                </ul>
              </Expander> */}
            </div>

            <div className="col-md-4">
              <span className="fa-8x fa-fw fas fa-random" style={{width: "100%", textAlign: "center", color: "#666666", padding: "20px"}}/>
              <h3>Swappable Forward-Model Backends</h3>
              <p>The PHOEBE 2 frontend can do more than just run its own backend - it also wraps backends of other popular codes, including:</p>

              <Expander expandText="List supported backends">
                <ul>
                  <li><Link to="/docs/latest/api/phoebe.parameters.compute.legacy">PHOEBE 1.0 Legacy</Link> (based on Wilson-Devinney)</li>
                  <li>John Southworth's <Link to="/docs/latest/api/phoebe.parameters.compute.jktebop">jktebop</Link> (as of the <Link to="/releases/2.3">2.3 release</Link>)</li>
                  <li>Pierre Maxted's <Link to="/docs/latest/api/phoebe.parameters.compute.ellc">ellc</Link> (as of the <Link to="/releases/2.3">2.3 release</Link>)</li>
                  <li><b>Coming Someday:</b> Josh Carter's <Link to="https://github.com/dfm/photodynam">photodynam</Link></li>
                  <li><b>Coming Someday:</b> Jerry Orosz's <Link to="https://ui.adsabs.harvard.edu/abs/2018AJ....156..297S">elc</Link></li>
                </ul>
                <p>Follow along with the <Link to="/docs/latest/tutorials/alternate_backends/">alternate backends tutorial</Link> for how to utilize these alternate backends.</p>
                <p><Link to="/help/contact">Contact Us</Link> if you'd like another backend supported.</p>
              </Expander>
            </div>

            <div className="col-md-4">
              <span className="fa-8x fa-fw fas fa-chart-area" style={{width: "100%", textAlign: "center", color: "#666666", padding: "20px"}}/>
              <h3>Inverse Problem Solvers</h3>
              <p>As of the <Link to="/releases/2.3">2.3 release</Link>, PHOEBE 2 includes wrappers that interface directly with many off-the-shelf optimization and sampling routines.</p>

              <Expander expandText="List solver routines">
                <ul>
                  <li><Link to="/docs/latest/api/phoebe.parameters.solver.estimator.lc_periodogram.md">LC Periodogram</Link></li>
                  <li><Link to="/docs/latest/api/phoebe.parameters.solver.estimator.rv_periodogram.md">RV Periodogram</Link></li>
                  <li><Link to="/docs/latest/api/phoebe.parameters.solver.estimator.lc_geometry.md">LC Geometry</Link></li>
                  <li><Link to="/docs/latest/api/phoebe.parameters.solver.estimator.rv_geometry.md">RV Geometry</Link></li>
                  <li><Link to="/docs/latest/api/phoebe.parameters.solver.estimator.ebai.md">EBAI</Link> (Artificial Neural Network)</li>
                  <li><Link to="/docs/latest/api/phoebe.parameters.solver.differential_corrections.md">Differential Corrections</Link> (as of the <Link to="/release/2.4">2.4 release</Link>)</li>
                  <li>Scipy Optimizers (<Link to="/docs/latest/api/phoebe.parameters.solver.optimizer.cg.md">Conjugate Gradient</Link>, <Link to="/docs/latest/api/phoebe.parameters.solver.optimizer.nelder_mead.md">Nelder-Mead</Link>, <Link to="/docs/latest/api/phoebe.parameters.solver.optimizer.powell.md">Powell</Link>)</li>
                  <li><Link to="/docs/latest/api/phoebe.parameters.solver.differential_evolution.md">Differential Evolution</Link> (as of the <Link to="/release/2.4">2.4 release</Link>)</li>
                  <li><Link to="/docs/latest/api/phoebe.parameters.solver.sampler.dynesty.md">Dynesty</Link> (Dynamic Nested Sampling)</li>
                  <li><Link to="/docs/latest/api/phoebe.parameters.solver.sampler.emcee.md">Emcee</Link> (MCMC)</li>
                </ul>

              </Expander>
            </div>
          </div>


          {/* <div className="row">
            <div className="col-md-4">
              <h3>Convenient Web Interface</h3>
              <p><b>Coming soon: </b> PHOEBE 2 will soon have an online web-interface, allowing you to model systems all from a web browser, with no installation required.</p>
            </div>

            <div className="col-md-4">
              <h3>Intuitive Python Frontend</h3>
              <p>PHOEBE 2 now includes an intuitive python frontend that allows you to store all information about your system (system parameters, datasets, computing and fitting options) in a single python object that is saveable to disk.</p>
            </div>
          </div> */}

          {/* <Separator large={false} flip={false}/> */}
        </Content>
        {/* <Content dark={true}>
          <h1>Getting Started</h1>
          <div className="row">
            <div className="col-md-4">
              <h3>Install</h3>
              <pre>
                $ pip install numpy phoebe
              </pre>
              or see the full <Link to="/install">installation instructions</Link>.
            </div>

            <div className="col-md-4">
              <h3>Import</h3>
              <pre>
                >>> import phoebe
                <br/>
                >>> b=phoebe.default_binary()
              </pre>
              or try the <Link to="/quickstart"><span className="far fa-fw fa-play-circle"></span> PHOEBE {docs_versions[0]} Quickstart</Link>.
            </div>

            <div className="col-md-4">
              <h3>Learn</h3>

            </div>
          </div>

          <Separator large={false} flip={true}/>
        </Content> */}
        {/* <Content>

          <h1>Community</h1>


          <h1>Sponsors</h1>

        </Content> */}

        <Footer />

      </div>
    );
  }
}

class Expander extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }
  toggleExpand = () => {
    this.setState({expanded: !this.state.expanded})
  }
  render() {
    let toggleText = null;
    if (this.state.expanded) {
      toggleText = this.props.collapseText
      if (!toggleText) {
        toggleText = 'Collapse'
      }
    } else {
      toggleText = this.props.expandText
      if (!toggleText) {
        toggleText = 'Expand'
      }
    }

    let expandeeStyle = null;
    if (!this.state.expanded) {
      expandeeStyle = {display: "none"}
    }


    return (
      <div className="expand">
        <div className="expandee" style={expandeeStyle}>
          {this.props.children}
        </div>
        <div className="expander">
          <a onClick={this.toggleExpand} style={{cursor: "pointer"}}>{toggleText}</a>
        </div>
      </div>
    )
  }
}
