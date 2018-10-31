import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import {Content, AlertVersion} from './common';
import {HeaderIndex} from './header';
import {Footer} from './footer';

export class Home extends Component {
  render() {
    return (
      <div>
        <HeaderIndex />
        <Content>
          <h1>Introducing PHOEBE 2</h1>
          <AlertVersion/>

          <div class="col-md-12">
            <p>PHOEBE is an eclipsing binary modeling suite - reproducing and fitting light curve and radial velocity curves of eclipsing systems.</p>
            <p>PHOEBE 2 is a completely rewritten version of the popular <Link to="/1.0">PHOEBE legacy suite</Link> that aims to provide better precision, new physics, and modeling of additional observables - all with intuitive and powerful python interfaces.</p>
          </div>

          <div class="col-md-12">
            <p>PHOEBE is written by an international team of <Link to="/help/devel">professional astronomers</Link>, and is completely <a href="http://github.com/phoebe-project" class="" target="_blank"><span class="fa fa-external-link"></span> open-source</a>.</p>
            <p>Feel free to <Link to="/docs#download-and-installation">download and install</Link> PHOEBE and then follow the <Link to="/docs/latest#tutorials">tutorials</Link>.  If (or when) you get stuck, refer to the <Link to="/docs">documentation</Link>, or always feel free to <Link to="/help/contact">contact us</Link>.</p>
          </div>

          <br/>

          <div class="row">
            <div class="col-md-4">
              <h3>Better precision</h3>
              <p>PHOEBE 2 uses a new method for meshing surfaces and <Link to="/docs/latest/tutorials/eclipse/">handling eclipsing regions</Link> - allowing for high-precision modeling of eclipse events.</p>
            </div>
            <div class="col-md-4">
              <h3>New Physics</h3>
              <p>PHOEBE 2 allows for new physics to be included in your model.  Many of these features are currently still being tested.</p>

              <Expander expandText="List new physics">
                <ul>
                  <li><a href="/docs/latest/tutorials/beaming_boosting/">Doppler boosting/beaming</a></li>
                  <li>Roemer and light-time delay (LTTE effects)</li>
                  <li><b>Coming soon:</b> Reflection with heat redistribution</li>
                  <li><b>Coming soon:</b> Pulsations (spherical and oblique)</li>
                  <li><b>Coming soon:</b> Differential Rotation</li>
                  <li><b>Coming soon:</b> Magnetic Fields</li>
                  <li><b>Coming soon:</b> Rings/Accretion Disks</li>
                  <li><b>Coming soon:</b> Hierarchical Multiple Systems</li>
                </ul>
              </Expander>

            </div>


            <div class="col-md-4">
              <h3>Additional Observables</h3>
              <p>PHOEBE 2 now has the capability of modeling a large range of multiple observable types, all of which can be included while fitting your model to available data.  Many of these new observables still require testing or are not yet fully supported.</p>

              <Expander expandText="List observables">
                <ul>
                  <li>Photometry (Light Curves)</li>
                  <li>Radial Velocities</li>
                  <li><b>Coming soon:</b> Spectra</li>
                  <li><b>Coming soon:</b> Polarimetry</li>
                  <li><b>Coming soon:</b> Interferometry</li>
                  <li><b>Coming soon:</b> Astrometry</li>
                  <li><b>Coming soon:</b> Eclipse Timing Variations</li>
                </ul>
              </Expander>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <h3>Interface with Fitting Routines</h3>
              <p><b>Coming soon:</b> PHOEBE 2 will include wrappers that interface directly with many off-the-shelf fitting routines.</p>

              <Expander expandText="List fitting routines">
                <ul>
                  <li><b>Coming soon:</b> <a href="http://dan.iel.fm/emcee" class="" target="_blank"><span class="fa fa-external-link"></span> emcee</a> (MCMC)</li>
                  <li>
                      <a href="http://lmfit.github.io/lmfit-py/" class="" target="_blank"><span class="fa fa-external-link"></span> lmfit</a>
                      <ul>
                          <li>Least Squares</li>
                          <li>Nelder-Mead</li>
                      </ul>
                  </li>
                  <li><b>Coming soon:</b> <a href="http://pymc-devs.github.io/pymc/" class="" target="_blank"><span class="fa fa-external-link"></span> pymc</a></li>
                  <li><b>Coming soon:</b> <a href="http://seal.web.cern.ch/seal/snapshot/work-packages/mathlibs/minuit/" class="" target="_blank"><span class="fa fa-external-link"></span> minuit</a></li>
                </ul>
                <p>as well as several built into PHOEBE iteslf:</p>
                <ul>
                  <li><b>Coming soon:</b> grid search</li>
                  <li><b>Coming soon:</b> differential corrections</li>
                </ul>
              </Expander>
            </div>

            <div class="col-md-4">
              <h3>Swappable Backends and Plugins</h3>
              <p>The PHOEBE 2 frontend can do more than just run its own backend - it also wraps backends of other popular codes, including:</p>

              <Expander expandText="List supported backends">
                <ul>
                  <li><a href="/docs/latest/examples/legacy/">PHOEBE 1.0 Legacy</a> (Wilson-Devinney)</li>
                  <li><b>Coming soon:</b> <a href="http://www.astro.keele.ac.uk/jkt/codes/jktebop.html">jktebop</a></li>
                  <li><b>Coming soon:</b> Josh Carter's <a href="https://github.com/dfm/photodynam">photodynam</a></li>
                </ul>
                <p>Follow along with the <a href="/docs/latest/tutorials/alternate_backends/">alternate backends tutorial</a> for how to utilize these alternate backends.</p>
                <p><a href="/help/contact">Contact Us</a> if you'd like another backend supported.</p>
              </Expander>
            </div>

            <div class="col-md-4">
              <h3>Parallelization</h3>
              <p><b>Coming soon:</b> PHOEBE 2 will be parallelized at both the per-fitting-iteration and per-time-computation levels.  Submitting a computational job with a scheduler will be integrated right into the frontend interface.</p>

              <Expander expandText="List supported types">
                <ul>
                  <li><a href="http://mpi4py.scipy.org/" class="" target="_blank"><span class="fa fa-external-link"></span> mpi4py</a></li>
                  <li><b>Coming soon:</b> <a href="http://www.adaptivecomputing.com/products/open-source/torque/" class="" target="_blank"><span class="fa fa-external-link"></span> torque</a></li>
                  <li><b>Coming soon:</b> <a href="https://computing.llnl.gov/linux/slurm/" class="" target="_blank"><span class="fa fa-external-link"></span>  slurm</a></li>
                </ul>
              </Expander>
            </div>
          </div>


          <div class="row">
            <div class="col-md-4">
              <h3>Convenient Web Interface</h3>
              <p><b>Coming soon: </b> PHOEBE 2 will soon have an online web-interface, allowing you to model systems all from a web browser, with no installation required.</p>
            </div>

            <div class="col-md-4">
              <h3>Intuitive Python Frontend</h3>
              <p>PHOEBE 2 now includes an intuitive python frontend that allows you to store all information about your system (system parameters, datasets, computing and fitting options) in a single python object that is saveable to disk.</p>
            </div>

            <div class="col-md-4">
              <h3>Powerful Python Backend</h3>
              <p>If the frontend is not quite powerful enough for your needs, you can wield the full power of the backend.  Follow along with the <a href="/docs/latest/tutorials/backend/">backend tutorial</a> to learn how to access these lower-level functionalities.</p>
            </div>
          </div>


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
      <div class="expand">
        <div class="expandee" style={expandeeStyle}>
          {this.props.children}
        </div>
        <div class="expander">
          <a onClick={this.toggleExpand} style={{cursor: "pointer"}}>{toggleText}</a>
        </div>
      </div>
    )
  }
}
