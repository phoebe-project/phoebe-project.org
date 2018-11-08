import React, { Component } from 'react';

import {Content, Link, Redirect, Image, Alert, getLatestPatchVersion} from './common';
import {NotFound} from './errors';
import {docs_versions, getDocsLink} from './docs';
import {Header, HeaderNavButton} from './header';



export class Install extends Component {
  constructor(props) {
      super(props);
      this.state = {
        hash: null,
      };
      this.refpip = React.createRef();
      this.refsource = React.createRef();
      this.reftesting = React.createRef();
  }
  scrollToHash() {
    var offsetTop = null;
    var hash = this.state.hash
    if (hash==='#pip') {
      offsetTop = this.refpip.current.offsetTop;
    } else if (hash==='#source') {
      offsetTop = this.refsource.current.offsetTop;
    } else if (hash==='#testing') {
      offsetTop = this.reftesting.current.offsetTop;
    }

    if (offsetTop) {
      window.scrollTo(0,offsetTop-80);
    }
  }
  // componentDidMount() {
  //   console.log("componentDidMount "+this.state.hash)
  //   this.scrollToHash()
  // }
  componentDidUpdate() {
    console.log("componentDidUpdate "+this.state.hash)
    this.scrollToHash()
  }
  render() {
    var version = this.props.match.params.version
    var version_long = null
    var version_short = null

    if (this.props.location.hash != this.state.hash) {
      this.setState({hash: this.props.location.hash})
    }

    if (version==null) {
      // then we'll display generic instructions
      version = null;
    } else if (version==='latest') {
      // allow latest as the version in the URL, but show whatever is latest
      version = docs_versions[0]
    } else if (version==='1.0' || version==='legacy') {
      // then redirect to the 1.0 page
      return(<Redirect to="/1.0/download"/>)
    }

    // handle 2.1.0 vs 2.1 cases (we want the full version for the instructions, but short version for docs/internal links)
    if (version==null) {
      version_short = docs_versions[0]
      version_long = getLatestPatchVersion(version_short, this.props.release_changelogs)
    } else if ((version.match(/\./g) || []).length === 1){
      // then we have the short version already (one .)
      version_short = version
      version_long = getLatestPatchVersion(version_short, this.props.release_changelogs)
    } else if ((version.match(/\./g) || []).length === 2){
      // then we have the long version (two .s)
      version_long = version
      version_short = version.slice(0, version.lastIndexOf("."))
    } else {
      return (<NotFound>Release version {version} not found, try the general <Link to="/install">download instructions</Link> or choose from one of the available <Link to="/releases">releases</Link>.</NotFound>)
    }

    if (version_short && docs_versions.indexOf(version_short)===-1){
      // something not recognized, let's throw a page not found
      return (<NotFound>Release version {version_short} not found, try the general <Link to="/install">download instructions</Link> or choose from one of the available <Link to="/releases">releases</Link>.</NotFound>)
    }



    return (
      <div>
        <Header>
          <h1>Download &amp; Install PHOEBE {version_long}</h1>

          <div className="row">
             <div className="col-md-6"></div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Install from PIP" description="Install from PIP" to={"#pip"} icon="fab fa-python"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Install from Source" description="Install from Source" to={"#source"} icon="fa fa-code"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Testing" description="Testing" to={"#testing"} icon="fa fa-vial"/>
             </div>
           </div>
        </Header>
        <Content preventScrollTop={this.props.location.hash}>
          {/* <b style={{color: "red"}}>version long: {version_long} (<b>TODO:</b> need to get the latest patch version if not specified)<br/>version short: {version_short}</b> */}
          {version ?
            <Alert level={version_short==docs_versions[0] ? "warning" : "danger"}>
              <p><b>Warning:</b> these instructions will download and install the {version_long} version of PHOEBE.  To download and install a different version, choose and click install from the appropriate <Link to="/releases">release</Link>, or follow instructions to <Link to="install">install the latest version</Link>.</p>
            </Alert>
            :
            <Alert level="warning">
              <p><b>Note:</b> these instruction will download and install the <Link to="/releases/latest">latest release (version {docs_versions[0]})</Link> of PHOEBE.  To install a specific version, choose and click install from the appropriate <Link to="/releases">release</Link>.</p>
            </Alert>
          }

          <h2 ref={this.refpip}>Installing from PIP</h2>
          <p>Installing PHOEBE from PIP is probably the easiest.  {version ? "To install version "+version_long : 'To install the latest version'}:</p>
          <pre>
            pip install phoebe{version ? "=="+version_long : null}
          </pre>

          {version ?
            <div>
              <p>To upgrade/downgrad a previous installation to version {version_long}:</p>
              <pre>
                pip install -I phoebe=={version_long}
              </pre>
            </div>
            :
            <div>
              <p>To update a previous installation to the <Link to="/releases/latest">latest release</Link>:</p>
              <pre>
                pip install -U phoebe
              </pre>
            </div>
          }


          <p>And to uninstall:</p>
          <pre>
            pip uninstall phoebe
          </pre>

          <p>If pip gives any problems automatically installing dependencies, install them manually first:</p>
          <pre>
            pip install numpy scipy matplotlib "astropy&gt;=1.0,&lt;3.0"
          </pre>

          <p>If pip cannot build the C-sources, make sure you have Python.h headers for the correct version of Python, by installing python-dev or python3-dev via your package manager.  For debian systems, the following should work:</p>
          <pre>
            sudo apt-get install python-dev
          </pre>

          <p>Please check the version of PHOEBE you have installed to make sure you are using the corresponding version of the <Link to={getDocsLink(version_short, null, null)}>documentation</Link>.  You can check the version once PHOEBE is imported via</p>
          <pre>
            python -c "import phoebe; print(phoebe.__version__)"
          </pre>

          <h3>Virtual Environments</h3>
          <p>If installing in a virtual environment, PHOEBE sets the matplotlib backend to ‘TkAgg’ instead of ‘Agg’ by default.  To override this, set the backend yourself before importing PHOEBE.  To use ‘TkAgg’, you may need to have python-tk installed on your system.  See <Link to="http://matplotlib.org/faq/virtualenv_faq.html">http://matplotlib.org/faq/virtualenv_faq.html</Link> for more information.</p>
          <p>To create a virtual environment and install PHOEBE, do the following, replacing “&lt;myphoebedir&gt;” with your (perferably empty or not existing) directory of choice:</p>
          <pre>
            pip install virtualenv<br/>
            virtualenv &lt;myphoebedir&gt;<br/>
            source &lt;myphoebedir&gt;/bin/activate<br/>
            pip install numpy scipy "astropy&gt;=1.0,&lt;3.0" matplotlib phoebe{version ? "=="+version_long : null}
          </pre>

          <p>To leave the virtual environment:</p>
          <pre>
            deactivate
          </pre>

          <p>And to destroy the virtual environment permanently:</p>
          <pre>
            rm -rf &lt;myphoebedir&gt;
          </pre>
          <h2 ref={this.refsource}>From Source</h2>
          <h3>Download Source Code</h3>

          <p>Download the archive version below and unpack the source-code:
            <ul>
              <li><Link to={"https://github.com/phoebe-project/phoebe2/archive/"+version_long+".tar.gz"} hideExternal={true}><span className="far fa-file-archive"></span> PHOEBE.{version_long}.tar.gz</Link></li>
              <li><Link to={"https://github.com/phoebe-project/phoebe2/archive/"+version_long+".zip"} hideExternal={true}><span className="fas fa-archive"></span> PHOEBE.{version_long}.zip</Link></li>
              <li><Link to="/releases"><span className="fa fa-tags"></span> other releases</Link></li>
            </ul>
          </p>

          <p>Or, to download via the <Link to="https://github.com/phoebe-project/phoebe2/">github repository</Link>, run:</p>
          <pre>
            git clone --depth=1 {version ? '-b "'+version_long+'"' : null} https://github.com/phoebe-project/phoebe2.git
          </pre>
          <p>Note: developers should exclude the depth=1 to get the entire git history (download size will be larger).</p>


          <h3>Dependencies</h3>
          <p>
            Note for <strong>mac users</strong>: it is suggested to use <Link to="https://joernhees.de/blog/2014/02/25/scientific-python-on-mac-os-x-10-9-with-homebrew/">homebrew to install a parallel version of python</Link>.
            PHOEBE has currently been tested to compile correctly using homebrew on El Capitan.
          </p>
          <p>The C++ code in PHOEBE requires a compiler that supports C++11, either of the following should build correctly:</p>
          <ul>
            <li>g++5 (or newer)</li>
            <li>clang3.3 (or newer)</li>
          </ul>
          <p>Note for <strong>Ubuntu 14.04 users</strong>: g++5 is not installed by default.  You’ll likely need to to do the following in order to install PHOEBE:</p>
          <pre>
            sudo add-apt-repository ppa:ubuntu-toolchain-r/test<br/>
            sudo apt-get install g++-5 gcc-5 libstdc++-5-dev<br/>
            export CXX=g++-5
          </pre>

          <p>PHOEBE requires python 2.7+ (not yet fully tested on python 3.x) with the following packages:</p>
          <ul>
            <li>python-dev or python3-dev (Python.h needed to compile C-sources)</li>
            <li>numpy (1.10+)</li>
            <li>scipy</li>
            <li>astropy (1.0+ but not 3.0+ as that requires Python 3)</li>
          </ul>
          <p>And suggested packages (required for some optional but commonly used features):</p>
          <ul>
            <li>matplotlib (suggested for plotting)</li>
            <li>sympy (for safer and more flexible constraints)</li>
          </ul>



          <h3>Installation</h3>
          <p>To install without admin rights for a single-user:</p>
          <pre>
            python setup.py build<br/>
            python setup.py install --user
          </pre>

          <p>or to install system-wide with admin rights:</p>
          <pre>
            python setup.py build<br/>
            sudo python setup.py install
          </pre>

          <h2 ref={this.reftesting}>Testing</h2>
          <p>The following additional dependencies are required to run the nosetests:</p>
          <ul>
            <li><Link to="http://nose.readthedocs.io/en/latest/">nose</Link></li>
            <li><Link to="https://github.com/phoebe-project/phoebe1">PHOEBE 1.0</Link> with the phoebe-py wrapper</li>
            <li><Link to="https://github.com/phoebe-project/photodynam">photodynam</Link></li>
            <li><Link to="https://github.com/hannorein/rebound">rebound</Link></li>
          </ul>
          <p>To run all tests locally on your machine, run the following in the ‘tests’ directory in the source.</p>
          <pre>
            python run_tests nosetests
          </pre>

          <p>Please <Link to="https://github.com/phoebe-project/phoebe2/issues">report any issues or bugs</Link>.</p>
        </Content>
      </div>
    );
  }
}
