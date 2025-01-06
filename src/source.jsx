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

        <Content dark={1}>
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
      <div style={{marginBottom: "12px"}}>
        <Link to={this.props.githubLink} hideexternal="true">{this.props.title}</Link> - {this.props.children}
      </div>
    )
  }
}

export class Dependencies extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>PHOEBE | Dependencies</title>
          <meta name="description" content="PHOEBE dependencies including: distl, autofig, nparray, distl"/>
        </Helmet>
        <Header>
          <h1>PHOEBE Dependencies</h1>
        </Header>
        <Content>

          <h2>Built-In Dependencies</h2>

          <div className="row">
            <p>PHOEBE includes several built-in python packages which were developed with PHOEBE in mind, but also to be standalone packages that can be installed and used (as well as tested) outside of PHOEBE.</p>
          </div>

          <DependencyInfo image="autofig.png" imageTxt="autofig">
            <Link to="https://autofig.readthedocs.io">autofig</Link> (included in PHOEBE since the <Link to="/releases/2.1">2.1 release</Link>) provides plotting functionality with a high-level consistent interface around <Link to="https://matplotlib.org">matplotlib</Link> to creating subfigures, animations, and varying the size or color of points based on an input array.  Within PHOEBE, autofig is used for the vast majority of calls sent through <Link to="/docs/latest/api/phoebe.parameters.ParameterSet.plot">b.plot</Link>, with the exception of distributions and solver-specific plotting styles.  See the <Link to="https://autofig.readthedocs.io/en/latest/gallery/">autofig gallery</Link> for an overview of the capabilities of using autofig outside PHOEBE>
          </DependencyInfo>

          <DependencyInfo image="nparray.png" imageTxt="nparray">
            <Link to="https://nparray.readthedocs.io">nparray</Link> (included in PHOEBE since the <Link to="/releases/2.1">2.1 release</Link>) provides high-level functions for creating "numpy array generator objects".  These store the input arguments to <i>create</i> numpy arrays and allow translation between different types (arange, linspace, etc) all while resulting in a much smaller footprint when exporting the array to a file.  Several of these functions are exposed at the top-level of PHOEBE: <Link to="/docs/latest/api/phoebe.arange.md">arange</Link>, <Link to="/docs/latest/api/phoebe.linspace.md">linspace</Link>, <Link to="/docs/latest/api/phoebe.invspace.md">invspace</Link>, <Link to="/docs/latest/api/phoebe.logspace.md">logspace</Link>, and <Link to="/docs/latest/api/phoebe.geomspace.md">geomspace</Link>.
          </DependencyInfo>

          <DependencyInfo image="distl.png" imageTxt="distl">
            <Link to="https://distl.readthedocs.io">distl</Link> (included in PHOEBE since the <Link to="/releases/2.3">2.3 release</Link>) provides a python object-interface on top of <Link to="https://docs.scipy.org/doc/scipy/reference/stats.html">scipy.stats</Link> for defining, manipulating with math operators, drawing samples, computing probabilities, and storing probability distribution functions.  Several of the distribution creation functions from distl are available from the top-level of PHOEBE, including: <Link to="/docs/latest/api/phoebe.gaussian.md">gaussian</Link>, <Link to="/docs/latest/api/phoebe.mvgaussian.md">mvgaussian</Link>, <Link to="/docs/latest/api/phoebe.uniform.md">uniform</Link>, and <Link to="/docs/latest/api/phoebe.histogram.md">histogram</Link> (among others) and are used as input to <Link to="/docs/latest/api/phoebe.frontend.bundle.Bundle.add_distribution.md">add_distribution</Link> for sampling distributions and priors.
          </DependencyInfo>

          <DependencyInfo image="crimpl.png" imageTxt="crimpl">
            <Link to="https://crimpl.readthedocs.io">crimpl</Link> (included in PHOEBE since the <Link to="/releases/2.4">2.4 release</Link>) provides an object-oriented interface to submit and monitor jobs submitted to external compute resources.  Currently, crimpl supports <Link to="https://crimpl.readthedocs.io/en/latest/RemoteSlurm/">remote servers running slurm</Link>, <Link to="https://crimpl.readthedocs.io/en/latest/AWSEC2/">AWS EC2 instances</Link>, and running jobs in a <Link to="https://crimpl.readthedocs.io/en/latest/LocalThread/">local detached thread</Link>.  Once a server is defined and the configuration saved on your local machine, you can then enable the server for use within PHOEBE by calling <Link to="/docs/latest/api/phoebe.frontend.bundle.Bundle.add_server.md">add_server</Link>.
          </DependencyInfo>

          <DependencyInfo image="ligeor.png" imageTxt="ligeor">
            <Link to="https://github.com/gecheline/ligeor">ligeor</Link> (included in PHOEBE since the <Link to="/releases/2.4">2.4 release</Link>) handles the logic for the lc and rv geometry estimator backends.
          </DependencyInfo>

          <DependencyInfo imageTxt="IAU2015">
            A small python package called <Link to="https://github.com/kecnry/astropy-units-IAU2015">astropy-units-IAU2015</Link> is included in PHOEBE to ensure that units and constants (provided by <Link to="https://www.astropy.org/">astropy</Link>) are consistent with IAU conventions.  Astropy 2.0+ adopted these conventions, but this small package makes the same adaptations if using astropy 1.x.
          </DependencyInfo>


          <DependencyInfo imageTxt="schwimmbad">
            A modified version of <Link to="https://schwimmbad.readthedocs.io/">schwimmbad</Link> (included in PHOEBE since the <Link to="/releases/2.3">2.3 release</Link>) provides internal capability to create and manage MPI and multiprocessing pools.
          </DependencyInfo>


          <Separator large={false}/>
        </Content>

        <Content dark={1}>
          <h2>Optional Dependencies</h2>

          <div className="row">
            <p>PHOEBE also has several optional dependencies that are not required for a base installation (although plotting dependencies are installed by default if installing through pip), but are required for specific use-cases or backends.</p>
          </div>

          <h3>Plotting Dependencies</h3>

          <DependencyInfo image="mpl.svg" imageTxt="matplotlib">
            <Link to="https://matplotlib.org">matplotlib</Link> is a widely-used python package that is required for any plotting within PHOEBE, but is not a required dependency otherwise (useful for installing on servers, for example).  Within PHOEBE, matplotlib is used from higher-level wrappers: either <Link to="https://autofig.readthedocs.io">autofig</Link>, <Link to="https://corner.readthedocs.io">corner</Link>, or <Link to="https://distl.readthedocs.io">distl</Link>.
          </DependencyInfo>

          <DependencyInfo imageTxt="corner.py">
            <Link to="https://corner.readthedocs.io">corner</Link> is a python plotting package (which makes use of <Link to="https://matplotlib.org">matplotlib</Link> and is used by <Link to="https://distl.readthedocs.io">distl</Link>) for creating corner/triangle plots showing one- and two-dimensional slices through an n-dimensional parameter space (including multivariate distributions and posteriors).
          </DependencyInfo>

          <h3 style={{marginTop: "140px"}}>Compute Backends</h3>
          <DependencyInfo image="phoebe1.png" imageTxt="phoebe1">
            <Link to="/1.0">PHOEBE Legacy</Link>, based on the Wilson-Devinney code, has been included as an alternate backend in PHOEBE as of the <Link to="/releases/2.0">2.0 release</Link>.
          </DependencyInfo>

          <DependencyInfo imageTxt="ellc">
            Pierre Maxted's <Link to="https://github.com/pmaxted/ellc">ellc</Link> has been included as an alternate backend in PHOEBE as of the <Link to="/releases/2.3">2.3 release</Link>.
          </DependencyInfo>

          <DependencyInfo imageTxt="jktebop">
            John Southworth's <Link to="https://www.astro.keele.ac.uk/jkt/codes/jktebop.html">jktebop</Link> has been included as an alternate backend in PHOEBE as of the <Link to="/releases/2.3">2.3 release</Link>.
          </DependencyInfo>


          <h3 style={{marginTop: "140px"}}>Solver Backends</h3>
          <DependencyInfo image="sklearn.png" imageTxt="scikit-learn">
            PHOEBE uses <Link to="https://scikit-learn.org/stable/">scikit-learn</Link> for KNN in the ebai estimator.
          </DependencyInfo>

          <DependencyInfo image="emcee.png" imageTxt="emcee">
            <Link to="https://emcee.readthedocs.io">emcee</Link> is a python package (widely used in astronomy) for Markov-Chain Monte Carlo.  PHOEBE supports running EMCEE as one of the sampler solvers.
          </DependencyInfo>

          <DependencyInfo image="dynesty.gif" imageTxt="dynesty">
            <Link to="https://dynesty.readthedocs.io">dynesty</Link> is a python package that implements dynamic nested sampling.  PHOEBE supports running dynesty as one of the sampler solvers.
          </DependencyInfo>


          <h3 style={{marginTop: "140px"}}>Features</h3>
          <DependencyInfo image="celerite2_inv.png" imageTxt="celerite2">
            PHOEBE supports using <Link to="https://celerite2.readthedocs.io/en/latest/">celerite2</Link> for Gaussian Processes.
          </DependencyInfo>

          <DependencyInfo image="sklearn.png" imageTxt="scikit-learn">
            PHOEBE also supports using <Link to="https://scikit-learn.org/stable/">scikit-learn</Link> for Gaussian Processes.
          </DependencyInfo>

          <Separator large={false} flip={true}/>
        </Content>

        <Content>
          <h2>Other Dependencies</h2>

          <div className="row">
            <p>PHOEBE also depends on several widely-used python packages</p>
          </div>

          <DependencyInfo image="astropy.png" imageTxt="astropy">
            PHOEBE depends heavily on the units and constants package from <Link to="https://www.astropy.org/">astropy</Link> to allow defining parameters in any valid units and seemlessly converting to the native units within PHOEBE's backend.  Additionally, PHOEBE's periodogram solvers use astropy's timeseries package.
          </DependencyInfo>

          <DependencyInfo image="numpy.png" imageTxt="numpy">
            PHOEBE (and <Link to="https://nparray.readthedocs.io">nparray</Link>) relies on <Link to="https://numpy.org">numpy</Link> array structures, as well as countless other functionalities that numpy brings to extend the base functionality of Python to numerical applications.
          </DependencyInfo>

          <DependencyInfo image="scipy.png" imageTxt="scipy">
            PHOEBE makes use of <Link to="https://docs.scipy.org/doc/">scipy</Link> for interpolation, integration, and wraps several of scipy's optimizers as solvers.  Furthermore, <Link to="https://distl.readthedocs.io">distl</Link> works its magic by wrapping around several of the functions provided by <Link to="https://docs.scipy.org/doc/scipy/reference/stats.html">scipy.stats</Link>.
          </DependencyInfo>

          <DependencyInfo image="tqdm.gif" imageTxt="tqdm">
            PHOEBE uses <Link to="https://tqdm.github.io/">tqdm</Link> for progressbars to indicate progress during compute and solver runs.
          </DependencyInfo>

          <DependencyInfo image="flask.png" imageTxt="flask">
            The <Link to="/clients#server">PHOEBE Server</Link> (used for communicating with <Link to="/clients">PHOEBE clients</Link>) runs on <Link to="https://flask.palletsprojects.com/en/2.0.x/">flask</Link>.
          </DependencyInfo>


        </Content>


      </div>
    );
  }
}

class DependencyInfo extends Component {
  render() {
    return (
      <div className="row" style={{marginTop: "80px"}}>
          <div className="col-md-3" style={{textAlign: "right"}}>
              {this.props.image ?
                <Image src={"/images/dependencies/"+this.props.image} alt={this.props.imageTxt} style={{maxWidth: "256px", maxHeight: "64px", width: "auto", height: "auto"}}/>
                :
                <h3 style={{margin: "auto"}}>{this.props.imageTxt}</h3>
              }
          </div>
          <div className="col-md-7">
              <p>{this.props.children}</p>
          </div>
      </div>
    )
  }
}
