import React, { Component } from 'react';

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import {Content, Link, Redirect, Image, Separator, Alert, getLatestPatchVersion, metaKeywords, NosetestsDiv} from './common';
import {VersionSwitcherContainer, VersionSwitcher} from './versionswitcher';
import {NotFound} from './errors';
import {docs_versions, getDocsLink} from './docs';
import {Header, HeaderNavButton} from './header';

// NOTE: we do this to force a deep-copy
var docs_versions_reverse = JSON.parse(JSON.stringify(docs_versions)).reverse()

var versions_os = ["auto", "mac", "linux", "windows"]
var versions_py = ["python2", "python3"]

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
  componentDidUpdate() {
    this.scrollToHash()
  }
  render() {
    var version = this.props.match.params.version
    var version_long = null
    var version_short = null

    if (this.props.location.hash !== this.state.hash) {
      this.setState({hash: this.props.location.hash})
    }

    if (version==null) {
      // then we'll display generic instructions
      version = "latest";
      // version = docs_versions[0]
    } else if (version==='latest') {
      // allow latest as the version in the URL, but show whatever is latest
      // version = docs_versions[0]
      version = "latest";
    } else if (version==='1.0' || version==='legacy') {
      // then redirect to the 1.0 page
      return(<Redirect to="/1.0/download"/>)
    }

    // handle 2.1.0 vs 2.1 cases (we want the full version for the instructions, but short version for docs/internal links)
    if (version == "latest") {
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

    if (version_short && docs_versions.indexOf(version_short) === -1){
      // something not recognized, let's throw a page not found
      return (<NotFound>Release version {version_short} not found, try the general <Link to="/install">download instructions</Link> or choose from one of the available <Link to="/releases">releases</Link>.</NotFound>)
    }

    /* http://www.javascripter.net/faq/operatin.htm */


    var version_os = this.props.match.params.version_os || "auto"

    var OSName=null;
    if (version_os === "auto") {
      if (navigator.appVersion.indexOf("Win")!=-1) OSName="windows";
      if (navigator.appVersion.indexOf("Mac")!=-1) OSName="max";
      // if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
      if (navigator.appVersion.indexOf("Linux")!=-1) OSName="linux";
    } else {
      OSName = version_os
    }

    var version_py = this.props.match.params.version_py || "python2"

    return (
      <div>
        <Helmet>
          <title>PHOEBE | Download & Install</title>
          <meta name="keywords" content={metaKeywords+", download, install"}/>
          <meta name="description" content="Instructions for downloading and installing PHOEBE 2"/>
        </Helmet>
        <Header>
          <h1>Download &amp; Install PHOEBE {version_long}</h1>

          <div className="row">
             <div className="col-md-6"></div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="From PIP" description="Install from PIP" to={"#pip"} icon="fab fa-python"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="From Source" description="Install from Source-Code" to={"#source"} icon="fa fa-code"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Testing" description="Testing" to={"#testing"} icon="fa fa-vial"/>
             </div>
           </div>
        </Header>
        <Content preventScrollTop={this.props.location.hash}>
          {/* <b style={{color: "red"}}>version long: {version_long} (<b>TODO:</b> need to get the latest patch version if not specified)<br/>version short: {version_short}</b> */}
          {version!=='latest' ?
            <Alert level={version_short === docs_versions[0] ? "warning" : "danger"}>
              <p><b>Warning:</b> these instructions will download and install the {version_long} version of PHOEBE.  To download and install a different version, choose and click install from the appropriate <Link to="/releases">release</Link>, or follow instructions to <Link to="install">install the latest version</Link>.</p>
            </Alert>
            :
            <Alert level="warning">
              <p><b>Note:</b> these instructions will download and install the <Link to="/releases/latest">latest release (version {docs_versions[0]})</Link> of PHOEBE.  To install a specific version, choose and click install from the appropriate <Link to="/releases">release</Link>.</p>
            </Alert>
          }

          {version_short < 2.2 ?
            <Alert level="warning">
              <p><b>Note:</b> PHOEBE {version_short} only supports Python 2.7+. Support for Python 3 is currently under development and will be introduced in a future release.</p>
            </Alert>
            :
            null
          }


          {OSName === 'windows' ?
            <Alert level="danger">
              <p>PHOEBE is not yet officially supported on Windows.  If you're interested in helping port and test PHOEBE to Windows, please <Link to="/help/contact">contact us</Link>.</p>
            </Alert>
            :
            null
          }

          {OSName === 'mac' ?
            <Alert level="warning">
              <p>
                <b>Note for mac users</b>: it is suggested to use <Link to="https://joernhees.de/blog/2014/02/25/scientific-python-on-mac-os-x-10-9-with-homebrew/">homebrew to install a parallel version of Python</Link>.
                PHOEBE has currently been tested to compile correctly using homebrew on El Capitan.
              </p>
            </Alert>
            :
            null
          }

          <h2 ref={this.refpip}><span className="fab fa-fw fa-xs fa-python"></span> Installing from PIP</h2>
          <p>Installing PHOEBE from PIP is probably the easiest.  {version!=='latest' ? "To install version "+version_long : 'To install the latest version'}:</p>
          <pre>
            pip install phoebe{version!=='latest' ? "=="+version_long : null}
          </pre>

          {version!=='latest' ?
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

          <p>If pip cannot build the C-sources, make sure you have Python.h headers for the correct version of Python, by installing python-dev {version_short < 2.2 ? null : <span>or python3-dev</span>} via your package manager.  For debian systems, the following should work:</p>
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
            pip install numpy scipy "astropy&gt;=1.0,&lt;3.0" matplotlib phoebe{version!=='latest' ? "=="+version_long : null}
          </pre>

          <p>To leave the virtual environment:</p>
          <pre>
            deactivate
          </pre>

          <p>And to destroy the virtual environment permanently:</p>
          <pre>
            rm -rf &lt;myphoebedir&gt;
          </pre>
          <Separator large={false}/>
        </Content>
        <Content dark={true} preventScrollTop={this.props.location.hash}>
          <h2 ref={this.refsource}><span className="fa fa-fw fa-xs fa-code"></span> Installing from Source</h2>
          <h3>Download Source Code</h3>

          <p>Download the archive version below and unpack the source-code:</p>
          <ul>
            <li><Link to={"https://github.com/phoebe-project/phoebe2/archive/"+version_long+".tar.gz"} hideExternal={true}><span className="far fa-file-archive"></span> PHOEBE.{version_long}.tar.gz</Link></li>
            <li><Link to={"https://github.com/phoebe-project/phoebe2/archive/"+version_long+".zip"} hideExternal={true}><span className="fas fa-archive"></span> PHOEBE.{version_long}.zip</Link></li>
            <li><Link to="/releases"><span className="fa fa-tags"></span> other releases</Link></li>
          </ul>

          <p>Or, to download via the <Link to="https://github.com/phoebe-project/phoebe2/">github repository</Link>, run:</p>
          <pre>
            git clone --depth=1 {version!=='latest' ? '-b "'+version_long+'"' : null} https://github.com/phoebe-project/phoebe2.git
          </pre>
          <p>Note: developers should exclude the depth=1 to get the entire git history (download size will be larger).</p>


          <h3>Dependencies</h3>
          <p>The C++ code in PHOEBE requires a compiler that supports C++11, either of the following should build correctly:</p>
          <ul>
            <li>g++5 (or newer)</li>
            <li>clang3.3 (or newer)</li>
          </ul>
          {OSName === 'linux' ?
            <div>
              <p>Note for <strong>Ubuntu 14.04 users</strong>: g++5 is not installed by default.  You’ll likely need to to do the following in order to install PHOEBE:</p>
              <pre>
                sudo add-apt-repository ppa:ubuntu-toolchain-r/test<br/>
                sudo apt-get install g++-5 gcc-5 libstdc++-5-dev<br/>
                export CXX=g++-5
              </pre>
            </div>
            :
            null
          }


          {version_short < 2.2 ?
            <p>PHOEBE {version_short} requires Python 2.7+ (but does not support Python 3.x) with the following packages:</p>
            :
            <p>PHOEBE {version_short} requires Python 2.7+ or 3.6+ with the following packages:</p>
          }
          <ul>
            <li>python-dev {version_short < 2.2 ? null : <span>or python3-dev</span>} (Python.h needed to compile C-sources)</li>
            <li>numpy (1.10+)</li>
            <li>scipy</li>
            <li>astropy {version_short < 2.2 ? <span>(1.0+ but not 3.0+ as that requires Python 3)</span> : <span>(1.0+)</span>}</li>
          </ul>
          <p>And suggested packages (required for some optional but commonly used features):</p>
          <ul>
            <li>matplotlib (suggested for plotting)</li>
            {/* <li>sympy (for safer and more flexible constraints)</li> */}
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
          <Separator large={false} flip={true}/>
        </Content>
        <Content preventScrollTop={this.props.location.hash}>
          <h2 ref={this.reftesting}><span className="fa fa-fw fa-xs fa-vial"></span> Running Nosetests</h2>
          <NosetestsDiv/>

          <p>
            For more information, read about <Link to="/contribute#testing">testing PHOEBE</Link> and <Link to="/contribute#issues">reporting issues and bugs</Link>.
            If you run into issues, you can always contact us on the <Link to="/help/contact/phoebe-devel">phoebe-devel mailing list</Link>.
          </p>

        </Content>
        <VersionSwitcherContainer>
          <VersionSwitcher titleLong="Python:" titleShort="Py:" version={version_py.slice(-1)} versions={versions_py} versionLinks={versions_py.map(version_py => "/install/"+version+"/"+version_os+"/"+version_py)}/>
          <VersionSwitcher titleLong="OS:" titleShort="OS:" version={version_os} versions={versions_os} versionLinks={versions_os.map(version_os => "/install/"+version+"/"+version_os+"/"+version_py)}/>
          <VersionSwitcher titleLong="PHOEBE:" titleShort="PHOEBE:" version={version} versions={docs_versions_reverse} versionLinks={docs_versions_reverse.map(version => "/install/"+version+"/"+version_os+"/"+version_py)}/>
        </VersionSwitcherContainer>

      </div>
    );
  }
}
