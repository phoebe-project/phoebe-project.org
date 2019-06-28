import React, { Component } from 'react';

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import {Content, Link, Redirect, Button, Image, Separator, Alert, getLatestPatchVersion, metaKeywords, NosetestsDiv} from './common';
import {VersionSwitcherContainer, VersionSwitcher} from './versionswitcher';
import {WebUI, DesktopUI} from './mockups';
import {NotFound} from './errors';
import {docs_versions, getDocsLink} from './docs';
import {Header, HeaderNavButton} from './header';


export class Clients extends Component {
  constructor(props) {
      super(props);
      this.state = {
        hash: null,
      };
      // this.refinfo = React.createRef();
      this.refweb = React.createRef();
      this.refdesktop = React.createRef();
      this.refpython = React.createRef();
      this.refserver = React.createRef();
  }
  scrollToHash() {
    var offsetTop = null;
    var hash = this.state.hash
    if (hash==='#web') {
      offsetTop = this.refweb.current.offsetTop;
    } else if (hash==='#desktop') {
      offsetTop = this.refdesktop.current.offsetTop;
    } else if (hash=='#python') {
      offsetTop = this.refpython.current.offsetTop;
    } else if (hash=='#server') {
      offsetTop = this.refserver.current.offsetTop;
    }

    if (offsetTop) {
      window.scrollTo(0,offsetTop-80);
    }
  }
  componentDidUpdate() {
    this.scrollToHash()
  }
  render() {
    if (this.props.location.hash !== this.state.hash) {
      this.setState({hash: this.props.location.hash})
    }

    return (
      <div>
        <Helmet>
          <title>PHOEBE | Interactive Clients</title>
          <meta name="keywords" content={metaKeywords+", user-interface, ui, gui, app, webapp"}/>
          <meta name="description" content="User Interface for PHOEBE 2"/>
        </Helmet>
        <Header>
          <h1>PHOEBE Interactive Clients</h1>

          <div className="row">
             <div className="col-md-4"></div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Web Client" description="Web/Browser Client" to={"#web"} icon="fas fa-window-maximize"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Desktop Client" description="Installation Instructions for Desktop Client" to={"#desktop"} icon="fas fa-desktop"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Python Client" description="Installation Instructions for Python Client" to={"#python"} icon="fas fa-terminal"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="PHOEBE Server" description="Installation Instructions for PHOEBE Server" to={"#server"} icon="fas fa-server"/>
             </div>

           </div>

        </Header>

        <Content preventScrollTop={this.props.location.hash}>

          <Alert level="danger">
            <p><b>Warning:</b> The PHOEBE Interactive Clients are currently under development and should be considered experimental.  <b>PROCEED WITH CAUTION.</b></p>
          </Alert>

          <div className="row">
            <p>
              Our goal in developing PHOEBE 2 was to prioritize <b>precision</b>, even when at the cost of computational efficiency.  Unfortunately this often means that doing science with PHOEBE is no longer feasible on a standalone desktop machine or laptop.  For this reason, despite the appeal of a point-and-click user-interface, the previous approach in <Link to="/1.0">PHOEBE legacy</Link> for a standalone native GTK GUI no longer makes sense.
            </p>
            <p>
              PHOEBE 2 is an <Link to="/install">installable python package</Link> which is designed to have a <Link to="/docs">flexible but high-level frontend interface</Link>.  If you want to interact with PHOEBE more... interactively, we have also developed a "server-client" infrastructure to allow for point-and-click clients that can talk to PHOEBE running in any number of environment, including compute clusters.  This consists of the following components:
            </p>
            <ul>
              <li><Link to="/install">PHOEBE Python Package</Link>: PHOEBE itself, this must be installed on the machine which will do the computations.  For the web-client, we hope to provide <b>limited use</b> on a pre-installed version on our servers.</li>
              <li><Link to="#server">PHOEBE Server</Link>: <b>(COMING SOON)</b> installed automatically when you install PHOEBE.  This is not required to run PHOEBE without a client, but must be running on the machine in order for clients to communicate with PHOEBE.  It's really just communication and synchronization layer between any number of clients and the Python interface of PHOEBE.</li>
              <li><Link to="#web">Web UI Client</Link>: <b>(COMING SOON)</b> an in-browser point-and-click user interface which connects to a PHOEBE server running an installation of PHOEBE.</li>
              <li><Link to="#desktop">Desktop UI Client</Link>: <b>(COMING SOON)</b> a native desktop application point-and-click user interface which connects to a PHOEBE server running an installation of PHOEBE.</li>
              <li><Link to="#python">Python Client</Link>: <b>(COMING SOON)</b> installed automatically when you install PHOEBE.  This allows you to enter the same python interface as a local installation, but synchronize with a server and any other attached clients.  Particularly useful if you want to mix some scripting and some point-and-clicking.</li>
            </ul>

          </div>

          <div className="row">
            <p>
              Looking for the PHOEBE Legacy GUI? See more information and installation instruction on the <Link to="/1.0">PHOEBE Legacy Releases</Link>.
            </p>
          </div>

          <Separator large={false} flip={false}/>
        </Content>
        <Content dark={true} preventScrollTop={this.props.location.hash}>

          <h2 ref={this.refweb}><span className="fas fa-fw fa-xs fa-window-maximize"></span>  Web UI Client</h2>

          <div className="row">

            <Alert level="danger">
              <p><b>Warning:</b> The web client is currently under development and should be considered an experimental preview.  The link below is active, but is lacking in major features and may change substantially before official release.</p>
            </Alert>

            <p>
              The web client allows you to run PHOEBE in your browser, without any installation!  However, this does come with some important limitations:
            </p>
            <ul>
              <li>You'll need to have a constant internet connection, and a slow internet connection could result in laggy performance.</li>
              <li>PHOEBE is running on our servers (unless you have your own <Link to="#server">server installation</Link>), so you won't have fine control of the version and depending on the demand on resources, could be slower than necessary.</li>
              <li>There is always a chance the server or the client itself could go down or lose connection, in which case your work may be lost.  Save often!</li>
              <li>You'll still need a local installation of PHOEBE if you want to do anything advanced in Python.</li>
              <li>You'll also need a local installation of PHOEBE if you want to make use of the <Link to="#python">Python client</Link>.</li>
            </ul>
          </div>
          <p>
            With those caveats out of the way, the web client is a good way to get familiar with PHOEBE as well as the client.  If you need something more powerful,
            you can install the practically-identical looking <Link to="#desktop">desktop client</Link>, manage your own <Link to="#server">PHOEBE server</Link> installation on your own computing resources (including AWS), or migrate over to using the <Link to="/install">PHOEBE Python package</Link> itself, which will also come along with support for the <Link to="#python">Python client</Link>.
          </p>

          <WebUI dark={true}/>

          <div className="row" style={{textAlign: "center", paddingTop: "50px", paddingBottom: "50px"}}>
            <Button level="primary-invert" style={{lineHeight: "2.5em", fontSize: "16px"}} to={"http://ui.phoebe-project.org"} icon="far fa-fw fa-play-circle" title={"Launch (EXPERIMENTAL/PREVIEW) PHOEBE Web Client"}/>
          </div>

          <Separator large={false} flip={true}/>
        </Content>
        <Content dark={false} preventScrollTop={this.props.location.hash}>


          <h2 ref={this.refdesktop}><span className="fas fa-fw fa-xs fa-desktop"></span>  Desktop UI Client</h2>

          <div className="row">
            <Alert level="danger">
              <p><b>COMING SOON:</b> The desktop client is currently under development.  Please check back soon, but not that soon.</p>
            </Alert>

            <p>
              The desktop client is a standalone installed version of the web client.  As such, it has a few extra abilities including:
            </p>
            <ul>
              <li>The ability to run offline (although you still need a connection to whatever <Link to="#server">server</Link> you're using).</li>
              <li>The ability to automatically spawn (on launch) a local <Link to="#server">server</Link> on your own machine (running on localhost).</li>
              <li>The ability to natively launch <Link to="#python">Python clients</Link> instead of requiring copying and pasting from a popup alert in the browser into a python console.</li>
              <li>No annoying URL bar, and the ability to launch the PHOEBE UI directly from your OS.</li>
            </ul>
          </div>

          <DesktopUI/>

          <Separator large={false} flip={false}/>
        </Content>
        <Content dark={true} preventScrollTop={this.props.location.hash}>

          <h2 ref={this.refpython}><span className="fas fa-fw fa-xs fa-terminal"></span>  Python Client</h2>

          <Alert level="danger">
            <p><b>COMING SOON:</b> The python client is currently under development and will be included in a future <Link to="/releases">release</Link> of the PHOEBE python package.  Please check back soon, but not that soon.</p>
          </Alert>

          <div className="row">
            <p>
              The python client allows interacting with a bundle <b>simultaneously</b> in both python and through the <Link to="#web">web</Link> or <Link to="#desktop">desktop</Link> clients.
              In this mode, all operations are handled by the <Link to="#server">PHOEBE server</Link>, with all clients being synchronized.
              This can also be useful to submit computation jobs to a compute cluster running <Link to="#server">PHOEBE server</Link>, but does have some overhead and lag associated with the sync operations.
            </p>
            <p>
              There are several different ways to "start" a python client instance:
            </p>
            <ul>
              <li>Call <code>b.as_client</code> on an existing bundle in python</li>
              <li>Call <code>phoebe.from_server</code> to load an existing bundle from the <Link to="#server">server</Link></li>
              <li>Click on the button in the top bar in the <Link to="#web">web</Link> (in which case you'll need to copy and paste the provided code) or the <Link to="#desktop">desktop</Link> (in which case a terminal will be spawned with PHOEBE in client mode) clients.</li>
            </ul>
          </div>

          <Separator large={false} flip={true}/>
        </Content>
        <Content dark={false} preventScrollTop={this.props.location.hash}>

          <h2 ref={this.refserver}><span className="fas fa-fw fa-xs fa-server"></span>  PHOEBE Server</h2>

          <Alert level="danger">
            <p><b>COMING SOON:</b> The PHOEBE Server is currently under development and will be included in a future <Link to="/releases">release</Link> of the PHOEBE python package.  Please check back soon, but not that soon.</p>
          </Alert>

          <div className="row">
            <p>
              The PHOEBE server is the common workhorse for all of the clients mentioned above.  In essence, the server handles synchronizing between all connected clients and making calls directly to an installation of PHOEBE.  As of right now this is under heavy-development so is not available for self-installation.  Your only choice for now is to try out an experimental preview through the <Link to="#web">web client</Link>.
            </p>
          </div>

        </Content>
      </div>
    );
  }
}
