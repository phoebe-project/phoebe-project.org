import React, { Component } from 'react';

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import {Content, Link, AlertVersion} from './common';
import {HeaderIndex} from './header';
import {Footer} from './footer';
import {newsStoriesDicts, NewsContent} from './news';

export class Home extends Component {
  render() {
    var pinnedNewsStoryDicts = [];
    newsStoriesDicts.forEach((newsStoryDict, index) => {
    	if (newsStoryDict.pinned) {
        pinnedNewsStoryDicts.push(newsStoryDict)
      }
    });

    return (
      <div>
        <Helmet>
          <title>PHOEBE | Introducing PHOEBE 2</title>
        </Helmet>
        <HeaderIndex />
        <Content>
          {pinnedNewsStoryDicts.map(newsStoryDict => <NewsContent title={newsStoryDict.title} slug={newsStoryDict.slug} author={newsStoryDict.author} date={newsStoryDict.date} showAsSummary={true} wrapHeight={100}>{newsStoryDict.content}</NewsContent>)}

          <h1>Introducing PHOEBE 2</h1>
          <AlertVersion/>

          <div className="col-md-12">
            <p>PHOEBE is an eclipsing binary modeling suite - reproducing and fitting light curve and radial velocity curves of eclipsing systems.</p>
            <p>PHOEBE 2 is a completely rewritten version of the popular <Link to="/1.0">PHOEBE legacy suite</Link> that aims to provide better precision, <Link to="/docs/latest/physics">new physics</Link>, and modeling of <Link to="/docs/latest/datasets">additional observables</Link> - all with intuitive and powerful python interfaces.</p>
          </div>

          <div className="col-md-12">
            <p>PHOEBE is written by an international team of <Link to="/help/devel">professional astronomers</Link>, and is completely <Link to="/source">open-source</Link>.</p>
            <p>Feel free to <Link to="/install">download and install</Link> the latest version of PHOEBE (or any of the <Link to="/releases">previous releases</Link>) and then follow the <Link to="/docs/latest/tutorials">tutorials</Link>.  If (or when) you get stuck, refer to the <Link to="/docs">documentation</Link>, or always feel free to <Link to="/help/contact">contact us</Link>.</p>
          </div>

          <br/>

          <div className="row">
            <div className="col-md-4">
              <h3>Better precision</h3>
              <p>PHOEBE 2 uses a new method for meshing surfaces and <Link to="/docs/latest/tutorials/eclipse/">handling eclipsing regions</Link> - allowing for high-precision modeling of eclipse events.</p>
            </div>
            <div className="col-md-4">
              <h3>New Physics</h3>
              <p>PHOEBE 2 allows for new <Link to="/docs/latest/physics">physics</Link> to be included in your model.  Many of these features are currently still being tested.</p>

              <Expander expandText="List new physics">
                <ul>
                  <li><Link to="/docs/latest/tutorials/beaming_boosting/">Doppler boosting/beaming</Link></li>
                  <li>Roemer and light-time delay (LTTE effects)</li>
                  <li><b>Coming soon:</b> Reddening and Extinction</li>
                  <li><b>Coming soon:</b> Reflection with heat redistribution</li>
                  <li><b>Coming soon:</b> Pulsations (spherical and oblique)</li>
                  <li><b>Coming soon:</b> Differential Rotation</li>
                  <li><b>Coming soon:</b> Magnetic Fields</li>
                  <li><b>Coming soon:</b> Rings/Accretion Disks</li>
                  <li><b>Coming soon:</b> Hierarchical Multiple Systems</li>
                </ul>
              </Expander>

            </div>


            <div className="col-md-4">
              <h3>Additional Observables</h3>
              <p>PHOEBE 2 now has the capability of modeling a large range of multiple <Link to="/docs/latest/datasets">observable types</Link>, all of which can be included while fitting your model to available data.  Many of these new observables still require testing or are not yet fully supported.</p>

              <Expander expandText="List observables">
                <ul>
                  <li>Photometry (Light Curves) (as of the <Link to="/releases/2.0">2.0 release</Link>)</li>
                  <li>Radial Velocities (as of the <Link to="/releases/2.0">2.0 release</Link>)</li>
                  <li>Orbits (positions and velocities) (as of the <Link to="/releases/2.0">2.0 release</Link>)</li>
                  <li>Line profiles (as of the <Link to="/releases/2.1">2.1 release</Link>)</li>
                  <li><b>Coming soon:</b> Spectra</li>
                  <li><b>Coming soon:</b> Polarimetry</li>
                  <li><b>Coming soon:</b> Interferometry</li>
                  <li><b>Coming soon:</b> Astrometry</li>
                  <li><b>Coming soon:</b> Eclipse Timing Variations</li>
                </ul>
              </Expander>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <h3>Parallelization</h3>
              <p>As of the <Link to="/releases/2.1">2.1 release</Link>, PHOEBE 2 support parallelization via MPI.</p>
              <p><b>Coming Soon:</b> eventually PHOEBE will also be parallelized at the fitting level with support for submitting a computational job with a scheduler directly from the frontend interface.</p>

              <Expander expandText="List supported types">
                <ul>
                  <li><Link to="http://mpi4py.scipy.org/">mpi4py</Link> (see <Link to="/docs/latest/api/phoebe.mpi_on">phoebe.mpi_on API docs</Link>)</li>
                  <li><b>Coming soon:</b> <Link to="http://www.adaptivecomputing.com/products/open-source/torque/">torque</Link></li>
                  <li><b>Coming soon:</b> <Link to="https://computing.llnl.gov/linux/slurm/">slurm</Link></li>
                </ul>
              </Expander>
            </div>

            <div className="col-md-4">
              <h3>Swappable Backends and Plugins</h3>
              <p>The PHOEBE 2 frontend can do more than just run its own backend - it also wraps backends of other popular codes, including:</p>

              <Expander expandText="List supported backends">
                <ul>
                  <li><Link to="/docs/latest/examples/legacy/">PHOEBE 1.0 Legacy</Link> (Wilson-Devinney)</li>
                  <li><b>Coming soon:</b> <Link to="http://www.astro.keele.ac.uk/jkt/codes/jktebop.html">jktebop</Link></li>
                  <li><b>Coming soon:</b> Josh Carter's <Link to="https://github.com/dfm/photodynam">photodynam</Link></li>
                </ul>
                <p>Follow along with the <Link to="/docs/latest/tutorials/alternate_backends/">alternate backends tutorial</Link> for how to utilize these alternate backends.</p>
                <p><Link to="/help/contact">Contact Us</Link> if you'd like another backend supported.</p>
              </Expander>
            </div>

            <div className="col-md-4">
              <h3>Interface with Fitting Routines</h3>
              <p><b>Coming soon:</b> PHOEBE 2 will include wrappers that interface directly with many off-the-shelf fitting routines.</p>

              <Expander expandText="List fitting routines">
                <ul>
                  <li><b>Coming soon:</b> <Link to="http://dan.iel.fm/emcee">emcee</Link> (MCMC)</li>
                  <li>
                      <Link to="http://lmfit.github.io/lmfit-py/">lmfit</Link>
                      <ul>
                          <li>Least Squares</li>
                          <li>Nelder-Mead</li>
                      </ul>
                  </li>
                  <li><b>Coming soon:</b> <Link to="http://pymc-devs.github.io/pymc/">pymc</Link></li>
                  <li><b>Coming soon:</b> <Link to="http://seal.web.cern.ch/seal/snapshot/work-packages/mathlibs/minuit/">minuit</Link></li>
                </ul>
                <p>as well as several built into PHOEBE iteslf:</p>
                <ul>
                  <li><b>Coming soon:</b> grid search</li>
                  <li><b>Coming soon:</b> differential corrections</li>
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


        </Content>
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
    var toggleText = null;
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

    var expandeeStyle = null;
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
