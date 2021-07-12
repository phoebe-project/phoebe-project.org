import React, { Component } from 'react';

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import {Content, Link, Redirect, Image, Separator, Alert, getLatestPatchVersion, metaKeywords, NosetestsDiv} from './common';
import {VersionSwitcherContainer, VersionSwitcher} from './versionswitcher';
import {NotFound} from './errors';
import {docs_versions, getDocsLink} from './docs';
import {Header, HeaderNavButton} from './header';

// NOTE: we do this to force a deep-copy
var docs_versions_reverse = JSON.parse(JSON.stringify(docs_versions)).reverse()

var versions_os = ["windows", "mac", "linux", "auto"]
var versions_py = ["python2", "python3"]

export class Install extends Component {
  constructor(props) {
      super(props);
      this.state = {
        hash: null,
      };
      this.refdeps = React.createRef();
      this.refpip = React.createRef();
      this.refconda = React.createRef();
      this.refvenv = React.createRef();
      this.refsource = React.createRef();
      this.reftesting = React.createRef();
  }
  scrollToHash() {
    var offsetTop = null;
    var hash = this.state.hash
    if (hash==='#dependencies') {
      offsetTop = this.refdeps.current.offsetTop;
    } else if (hash==='#pip') {
      offsetTop = this.refpip.current.offsetTop;
    } else if (hash==="#conda") {
      offsetTop = this.refconda.current.offsetTop;
    } else if (hash==="#venv") {
      offsetTop = this.refvenv.current.offsetTop;
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

    var OSName="linux";
    if (version_os === "auto") {
      if (navigator.appVersion.indexOf("Win")!=-1) OSName="windows";
      if (navigator.appVersion.indexOf("Mac")!=-1) OSName="mac";
      // if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
      if (navigator.appVersion.indexOf("Linux")!=-1) OSName="linux";
    } else {
      OSName = version_os
    }

    var version_py = "python3"
    var version_py_switcher = "python3"
    if (this.props.match.params.version_py && this.props.match.params.version_py != 'auto') {
      version_py = this.props.match.params.version_py
      version_py_switcher = version_py
    } else if (["2.0", "2.1"].indexOf(version_short) !== -1) {
      version_py = "python2"
      version_py_switcher = "auto"
    } else {
      version_py_switcher = "auto"
    }

    var python = 'python'
    var pip = 'pip'
    if (version_py==='python3') {
      python = 'python3'
      pip = 'pip3'
    }

    var show_instructions = true

    if (version_py==='python3' && version_short < 2.2) {
      show_instructions = false
    } else if (version_py==='python2' && version_short >= 2.3) {
      show_instructions = false
    }
    if (OSName==='windows') {
      show_instructions = false
    }

    return (
      <div>
        <Helmet>
          <title>PHOEBE | Download & Install</title>
          <meta name="keywords" content={metaKeywords+", download, install"}/>
          <meta name="description" content="Instructions for downloading and installing PHOEBE 2"/>
        </Helmet>
        <Header>
          <h1>Download &amp; Install PHOEBE {version=='latest' ? version_short : version_long}</h1>

          <div className="row">
             <div className="col-md-2"></div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="From PIP" description="Install from PIP" to={"#pip"} icon="fab fa-python"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Conda Env" description="Setup in a Conda Environment" to={"#conda"} icon="fab fa-cuttlefish"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Virtual Env" description="Setup in a Virtual Environmnet" to={"#venv"} icon="fa fa-laptop-code"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="From Source" description="Install from Source-Code" to={"#source"} icon="fa fa-code"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Testing" description="Testing" to={"#testing"} icon="fa fa-vial"/>
             </div>
           </div>
        </Header>
        <Content preventScrollTop={this.props.location.hash} paddingBottom="0px">

          <div class="row" style={{paddingBottom: "20px"}}>
            <div class="col-md-9 col-sm-12"></div>
            <div class="col-md-3 col-sm-12 float-right">
              <Link to={"http://github.com/phoebe-project/phoebe-project.org/issues/new?title=issue+with+install+instructions:+"+version_long+"/"+OSName+"/"+version_py} hideExternal={true}><span className="fas fa-fw fa-bug"></span> Issue/Question on this Page?</Link>
            </div>
          </div>

          {version_short >= 2.3 ?
            <Alert level='warning'>
              <p><b>Note:</b> these instructions will install the Python PHOEBE package.  The UI (optional) must be <Link to="/clients">installed separately</Link>.</p>
            </Alert>
            :
            null
          }

          {version!=='latest' ?
            <Alert level={version_short === docs_versions[0] ? "warning" : "danger"}>
              <p><b>Warning:</b> these instructions will download and install the {version_long} version of PHOEBE.  To download and install a different version, use the version switcher at the bottom-right of the page, choose and click install from the appropriate <Link to="/releases">release</Link>, or follow instructions to <Link to={"/install/latest/"+version_os+"/"+version_py}>install the latest version</Link>.</p>
            </Alert>
            :
            null
          }

          {version_short < 2.2 && version_py==='python3' ?
            <Alert level="danger">
              <p>PHOEBE {version_short} only supports <Link to={"/install/"+version+"/"+version_os+"/python2"}>Python 2.7+</Link>. Support for Python 3 is supported for PHOEBE 2.2+.</p>
            </Alert>
            :
            null
          }
          {version_short >= 2.3 && version_py==='python2' ?
          <Alert level="danger">
            <p>PHOEBE {version_short} only supports <Link to={"/install/"+version+"/"+version_os+"/python3"}>Python 2.6+</Link>. Support for Python 2 was removed as of the PHOEBE 2.3 release.</p>
          </Alert>
          :
          null
          }


          {OSName === 'windows' ?
            <Alert level="danger">
              <p>PHOEBE is not yet officially supported on Windows.  If you're running Windows 10 and use "Windows Subsystem for Linux", you should be able to successfully install PHOEBE there by following the <Link to={"/install/"+version+"/linux/"+version_py}>Linux installation instructions</Link>.</p>
              <p>If you're interested in helping port and test PHOEBE on Windows, please <Link to="/help/contact">contact us</Link>.  Or see instructions for installing on <Link to={"/install/"+version+"/linux/"+version_py}>Linux</Link> or <Link to={"/install/"+version+"/mac/"+version_py}>MacOS</Link>.</p>
            </Alert>
            :
            null
          }
          </Content>

          {show_instructions ?
            <div>
              <Content>
                <h2 ref={this.refdeps}><span className="fas fa-fw fa-xs fa-link"></span>  Dependencies</h2>

                {OSName === 'mac' ?
                  <div>
                    <p>
                      <b>Note for mac users</b>: it is suggested to use <Link to="https://joernhees.de/blog/2014/02/25/scientific-python-on-mac-os-x-10-9-with-homebrew/">homebrew</Link> or <Link to="#conda">conda</Link> to install a parallel version of {python} (and possibly compatible compilers).
                      PHOEBE has currently been tested to compile correctly using homebrew on El Capitan and Catalina.
                    </p>
                  </div>
                  :
                  null
                }

                {version_py==="python2" ?
                  <p>PHOEBE {version_short} has been tested to build and run on python 2.7+ {version_short >= 2.2 ? <span>(<Link to={"/install/"+version+"/"+version_os+"/python3#source"}>or python 3.6+</Link>)</span> : <span>(but does not support python 3)</span>}.  You can check your installed version of {python} with:</p>
                  :
                  <p>PHOEBE {version_short} has been tested to build and run on python 3.6+ {version_short == 2.2 ? (<Link to={"/install/"+version+"/"+version_os+"/python2#source"}>or python 2.7+</Link>) : null}.    You can check your installed version of {python} with:</p>
                }
                <pre>
                  {python} --version
                </pre>

                <p>The C++ code in PHOEBE requires a compiler that supports C++11, <b>either</b> of the following should build correctly:</p>
                <ul>
                  <li>g++ (g++-5 or newer)</li>
                  <li>clang (clang-3.3 or newer)</li>
                </ul>
                {OSName === 'linux' ?
                  <div>
                    <p>Note for <strong>Ubuntu 14.04 users</strong>: g++ is not installed by default.  You’ll likely need to to do the following in order to install PHOEBE:</p>
                    <pre>
                      sudo add-apt-repository ppa:ubuntu-toolchain-r/test<br/>
                      sudo apt-get install g++-5 gcc-5 libstdc++-5-dev<br/>
                      export CXX=g++-5
                    </pre>
                  </div>
                  :
                  null
                }

                {OSName === 'mac' ?
                  <div>
                    <p>
                      On Catalina, the default system compiler may not work correctly.  Updating XCode may be required (confirmed to work with XCode 12.4).  If the compiler cannot find the XCode libraries, try adding it to the CPATH environment variable:
                    </p>
                    <pre>
                      export CPATH=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk/usr/include<br/>
                    </pre>
                  </div>
                  :
                  null
                  }


                <p>Additionally, in order to build the C-sources, make sure you have Python.h headers for the correct version of {python}, by installing {python}-dev via your package manager.</p>
                {OSName === 'linux' ?
                  <div>
                    <p>The following should work for debian-based systems (Ubuntu, etc):</p>
                    <pre>
                      sudo apt-get install {python}-dev
                    </pre>
                    <p>or for rpm-based systems (Fedora, etc):</p>
                    <pre>
                      yum install {python}-devel
                    </pre>
                  </div>
                  :
                  null
                }


                <Separator large={false} flip={false}/>
              </Content>
              <Content dark={true} preventScrollTop={this.props.location.hash}>

                <h2 ref={this.refpip}><span className="fab fa-fw fa-xs fa-python"></span> Installing from PIP</h2>
                <p>The simplest way to install PHOEBE is via <Link to="https://pypi.org/">pip</Link> (the python package manager).</p>
                <p>If you are worried about conflicts with other packages or have multiple python installations, it may be worth installing PHOEBE using pip within a <Link to="#conda">conda environment</Link> or <Link to="#venv">virtual environment</Link>.</p>

                <p>If you have multiple python and/or pip installations, it is important to make sure they point to the same version of {python}.  You can check the installation of {python} corresponding to {pip} via <code>{pip} -V</code> or can replace all instances of <code>{pip}</code> below with <code>{python} -m pip</code>.</p>



                <p>Since the build process requires numpy, we'll make sure that's installed first.  {version!=='latest' ? "To install version "+version_long+" of PHOEBE" : 'To install the latest version of PHOEBE'}:</p>
                <pre>
                  {pip} install numpy phoebe{version!=='latest' ? "=="+version_long : null}
                </pre>

                {version!=='latest' ?
                  <div>
                    <p>To upgrade/downgrade a previous installation to version {version_long}:</p>
                    <pre>
                      {pip} install -I phoebe=={version_long}
                    </pre>
                  </div>
                  :
                  <div>
                    <p>To update a previous installation to the <Link to="/releases/latest">latest release</Link>:</p>
                    <pre>
                      {pip} install -U phoebe
                    </pre>
                  </div>
                }

                <p>And to uninstall:</p>
                <pre>
                  {pip} uninstall phoebe
                </pre>

                <p>Please check the version of PHOEBE you have installed to make sure you are using the corresponding version of the <Link to={getDocsLink(version_short, null, null)}>documentation</Link>.  You can check the version once PHOEBE is installed via:</p>
                <pre>
                  {python} -c "import phoebe; print(phoebe.__version__)"
                </pre>

                  <Separator large={false} flip={true}/>
                </Content>
                <Content dark={false} preventScrollTop={this.props.location.hash}>

                <h2 ref={this.refconda}><span className="fab fa-fw fa-xs fa-cuttlefish"></span>  Conda Environments</h2>
                <p>Conda environments allow having an isolated environment for phoebe, with its own installation of python, compilers, package dependencies, etc and avoid conflicts with other software you may have installed.</p>
                <p>
                  Once you have <Link to="https://docs.conda.io/en/latest/miniconda.html">conda installed and setup</Link>, you can create and activate an environment for PHOEBE:
                </p>
                <pre>
                  conda create -n name_of_phoebe_environment python={version_py === 'python3' ? 3.8 : 2.7 }<br/>
                  conda activate name_of_phoebe_environment
                </pre>
                <p>
                  (where you can set the name of environment and provide any supported version of python).  {python==='python3' ? <span>Note that within the environment <code>python</code> (instead of <code>{python}</code>) will point to the version of python you specified.</span> : null }
                </p>
                {OSName == 'mac' ?
                  <div>
                    <p>
                      Conda environments also allow easily installing a supported compiler.  For example, within the created environment you can install a compiler and link the XCode libraries before installing PHOEBE:
                    </p>
                    <pre>
                      export CPATH=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk/usr/include<br/>
                      conda install clangxx_osx-64  # or clang-12.0.0
                    </pre>
                  </div>
                  :
                  null
                }

                <p>
                  Now you can use pip (or <code>python -m pip</code>) to install PHOEBE {version_long} (or <Link to="#source">install from source</Link>):
                </p>
                <pre>
                  pip install numpy phoebe{version!=='latest' ? "=="+version_long : null}
                </pre>

                <p>
                  To leave the PHOEBE environment and return to the base environment:
                </p>
                <pre>
                  conda deactivate
                </pre>

                <p>
                  To setup a Jupyter notebook kernel for the PHOEBE environment, make sure Jupyter is installed in the <i>base environment</i>:
                </p>
                <pre>
                  conda install -c conda-forge notebook<br/>
                  conda install -c conda-forge nb_conda_kernels
                </pre>
                <p>
                  and then install a kernel within the PHOEBE environment:
                </p>
                <pre>
                  conda activate name_of_phoebe_environment<br/>
                  conda install -c anaconda ipykernel<br/>
                  python -m ipykernel install --user --name phoebe_env --display-name "PHOEBE env"
                </pre>
                <p>
                  Now you can launch Jupter notebook or Juyter lab from the base environment and "PHOEBE env" should show up in the choices of kernels.
                </p>

                  <Separator large={false} flip={false}/>
                </Content>
                <Content dark={true} preventScrollTop={this.props.location.hash}>

                <h2 ref={this.refvenv}><span className="fa fa-fw fa-xs fa-laptop-code"></span> Virtual Environments</h2>
                <p>
                  To create and activate a virtual environment, do the following, replacing “&lt;myphoebedir&gt;” with your (perferably empty or not existing) directory of choice:
                </p>
                <pre>
                  {pip} install virtualenv<br/>
                  virtualenv &lt;myphoebedir&gt;<br/>
                  source &lt;myphoebedir&gt;/bin/activate<br/>
                </pre>

                <p>
                  Now you can use {pip} (or <code>{python} -m pip</code>) to install PHOEBE {version_long} (or <Link to="#source">install from source</Link>):
                </p>
                <pre>
                  {pip} install numpy phoebe{version!=='latest' ? "=="+version_long : null}
                </pre>

                <p>To leave the virtual environment:</p>
                <pre>
                  deactivate
                </pre>

                <p>And to destroy the virtual environment permanently:</p>
                <pre>
                  rm -rf &lt;myphoebedir&gt;
                </pre>

                <p>If installing in a virtual environment, PHOEBE sets the matplotlib backend to ‘TkAgg’ instead of ‘Agg’ by default.  To override this, set the backend yourself before importing PHOEBE.  To use ‘TkAgg’, you may need to have python-tk installed on your system.  See <Link to="http://matplotlib.org/faq/virtualenv_faq.html">http://matplotlib.org/faq/virtualenv_faq.html</Link> for more information.</p>

                <Separator large={false} flip={true}/>
              </Content>
              <Content dark={false} preventScrollTop={this.props.location.hash}>
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
                <p>In addition to the <Link to="#dependencies">system dependencies</Link>, PHOEBE {version_short} requires the following {python} packages:</p>

                <ul>
                  <li>numpy (1.10+)</li>
                  <li>scipy {version_short < 2.3 ? <span>(0.17+)</span> : <span>(1.2+)</span>}</li>
                  <li>astropy {version_py==="python2" ? <span>(1.0+ but not 3.0+ as that requires Python 3)</span> : <span>(1.0+)</span>}</li>
                  {version_short >= 2.4 ? <li>tqdm</li> : null}
                  {version_short >= 2.3 ? <li>requests</li> : null}
                  {version_short >= 2.3 ? <li>python-socketio[client]</li> : null}
                  {version_short >= 2.3 ? <li><b>required for phoebe-server</b>: flask, flask-cors, flask-socketio, gevent-websocket</li> : null}
                </ul>
                <p>And suggested packages (required for some optional but commonly used features):</p>
                <ul>
                  <li>matplotlib (suggested for plotting)</li>
                  {version_short >= 2.3 ? <li>corner (for distribution plotting)</li> : null}
                  {version_short == 2.3 ? <li>tqdm (for progressbars)</li> : null}
                  {/* <li>sympy (for safer and more flexible constraints)</li> */}
                </ul>

                For more details, see <Link to="/dependencies">dependencies and built-in dependencies</Link>.

                <h3>Installation</h3>
                <p>To install without admin rights for a single-user:</p>
                <pre>
                  {python} setup.py build<br/>
                  {python} setup.py install --user
                </pre>

                <p>or to install system-wide with admin rights:</p>
                <pre>
                  {python} setup.py build<br/>
                  sudo {python} setup.py install
                </pre>

                {version_short >= 2.3 ?
                  <p>To install without the phoebe-server or phoebe-autofig scripts (i.e. if not using client-mode at all or installing on an HPC), set <code>PHOEBE_SKIP_SCRIPTS=TRUE</code> as an environment variable.</p>
                  :
                  null
                }

                <p>Please check the version of PHOEBE you have installed to make sure you are using the corresponding version of the <Link to={getDocsLink(version_short, null, null)}>documentation</Link>.  You can check the version once PHOEBE is installed via:</p>
                <pre>
                  {python} -c "import phoebe; print(phoebe.__version__)"
                </pre>

                <Separator large={false} flip={false}/>
              </Content>
              <Content dark={true} preventScrollTop={this.props.location.hash}>
                <h2 ref={this.reftesting}><span className="fa fa-fw fa-xs fa-vial"></span> Running Nosetests</h2>
                <NosetestsDiv python={python} version_short={version_short}/>

                <p>
                  For more information, read about <Link to="/contribute#testing">testing PHOEBE</Link> and <Link to="/contribute#issues">reporting issues and bugs</Link>.
                  If you run into issues, you can always <Link to="/help/contact/">reach out</Link>.
                </p>

                <div style={{height: "100px"}}>
                </div>

              </Content>

            </div>
            :
            <div>
              <h2 ref={this.refdeps}></h2>
              <h2 ref={this.refpip}></h2>
              <h2 ref={this.refconda}></h2>
              <h2 ref={this.refvenv}></h2>
              <h2 ref={this.refsource}></h2>
              <h2 ref={this.reftesting}></h2>
            </div>
          }
        <VersionSwitcherContainer>
          <VersionSwitcher titleLong="Python:" titleShort="Py:" version={version_py.slice(-1)} versions={versions_py} versionLinks={versions_py.map(version_py => "/install/"+version+"/"+version_os+"/"+version_py)}/>
          <VersionSwitcher titleLong="OS:" titleShort="OS:" version={version_os} versions={versions_os} versionLinks={versions_os.map(version_os => "/install/"+version+"/"+version_os+"/"+version_py_switcher)}/>
          <VersionSwitcher titleLong="PHOEBE:" titleShort="PHOEBE:" version={version} versions={["1.0"].concat(docs_versions_reverse).concat("latest")} versionLinks={["/1.0/download"].concat(docs_versions_reverse.map(version => "/install/"+version+"/"+version_os+"/"+version_py_switcher)).concat("/install/latest"+"/"+version_os+"/"+version_py_switcher)}/>
        </VersionSwitcherContainer>

      </div>
    );
  }
}
