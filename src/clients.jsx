import React, { Component } from 'react'

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import Container from "react-bootstrap/Container";
import {Content, Link, Button, Separator, metaKeywords, withRouter} from './common'
import {WebUI, DesktopUI} from './mockups'
import {Header, HeaderNavButton} from './header'


class Clients extends Component {
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
    let offsetTop = null;
    let hash = this.state.hash
    if (hash === '#web') {
      offsetTop = this.refweb.current.offsetTop;
    } else if (hash === '#desktop') {
      offsetTop = this.refdesktop.current.offsetTop;
    } else if (hash === '#python') {
      offsetTop = this.refpython.current.offsetTop;
    } else if (hash === '#server') {
      offsetTop = this.refserver.current.offsetTop;
    }
    if (offsetTop) {
      window.scrollTo(0,offsetTop-80);
    }
  }
  componentDidUpdate() {
    if (this.props.location.hash !== this.state.hash) {
      this.setState({hash: this.props.location.hash})
    }
    this.scrollToHash()
  }
  render() {
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
               <HeaderNavButton title="Desktop Client" description="Installation Instructions for Desktop Client" to={"#desktop"} icon="fas fa-desktop"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Web Client" description="Web/Browser Client" to={"#web"} icon="fas fa-window-maximize"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Python Client" description="Installation Instructions for Python Client" to={"#python"} icon="fas fa-terminal"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="PHOEBE Server" description="Installation Instructions for PHOEBE Server" to={"#server"} icon="fas fa-server"/>
             </div>

           </div>

        </Header>

        <Content preventscrolltop={this.props.location.hash}>

          <div className="row">
            <p>
              PHOEBE 2 is an <Link to="/install">installable python package</Link> which is designed to have a <Link to="/docs">flexible but high-level frontend interface</Link>.  If you want to interact with PHOEBE more... interactively, we have also developed a "server-client" infrastructure to allow for point-and-click clients that can talk to PHOEBE running in any number of environment, including compute clusters.  This consists of the following components:
            </p>
          </div>

          <div className="row">
            <div className="col-md-4">
              <Link to="#desktop"><span className="fa-10x fa-fw fas fa-desktop" style={{width: "100%", textAlign: "center", color: "#666666", padding: "20px"}}/></Link>
              <Link to="#desktop"><h3>Desktop UI Client</h3></Link>
              <p>a native desktop application point-and-click user interface which connects to a <Link to="#server">phoebe-server</Link> instance (either locally or remote) running an installation of PHOEBE.</p>
              <Button level="primary" style={{lineHeight: "2.5em", fontSize: "16px", width: "calc(50% - 10px)", marginRight: "10px"}} to={"#desktop"} icon="fa fa-fw fa-info" title={"Learn More"}/>
              <Button level="primary" style={{lineHeight: "2.5em", fontSize: "16px", width: "calc(50% - 10px)", marginLeft: "10px"}} to={"https://github.com/phoebe-project/phoebe2-ui/releases"} icon="fa fa-fw fa-download" title={"Install"}/>
            </div>
            <div className="col-md-4">
              <Link to="#web"><span className="fa-10x fa-fw fas fa-window-maximize" style={{width: "100%", textAlign: "center", color: "#666666", padding: "20px"}}/></Link>
              <Link to="#web"><h3>Web UI Client</h3></Link>
              <p>an in-browser version of the dedicated <Link to="#desktop">desktop client</Link> with the same interface but some limitations.  Accessible from <Link to="http://ui.phoebe-project.org">ui.phoebe-project.org</Link> without the need for any setup or installation, the web-client is convenient for getting started.</p>
              <Button level="primary" style={{lineHeight: "2.5em", fontSize: "16px", width: "calc(50% - 10px)", marginRight: "10px"}} to={"#web"} icon="fa fa-fw fa-info" title={"Learn More"}/>
              <Button level="primary" style={{lineHeight: "2.5em", fontSize: "16px", width: "calc(50% - 10px)", marginLeft: "10px"}} to={"http://ui.phoebe-project.org"} icon="fa fa-fw fa-play-circle" title={"Launch"}/>
            </div>
            <div className="col-md-4">
              <Link to="/install"><span className="fa-10x fa-fw fab fa-python" style={{width: "100%", textAlign: "center", color: "#666666", padding: "20px"}}/></Link>
              <Link to="/install"><h3>PHOEBE Python Package</h3></Link>
              <p>PHOEBE 2.3+ includes the PHOEBE Python frontend in addition to the ability to run as a <Link to="#python">python client</Link> and comes with <Link to="#server">phoebe-server</Link> which handles syncing multiple clients and phoebe-autofig which allows for interactive matplotlib figures.  These are required to run PHOEBE entirely offline on a local machine, but the clients are standalone and can be attached to an instance of <Link to="#server">phoebe-server</Link> running on any machine.</p>
              <Button level="primary" style={{lineHeight: "2.5em", fontSize: "16px", width: "calc(50% - 10px)", marginRight: "10px"}} to={"#python"} icon="fa fa-fw fa-info" title={"Learn More"}/>
              <Button level="primary" style={{lineHeight: "2.5em", fontSize: "16px", width: "calc(50% - 10px)", marginLeft: "10px"}} to={"/install"} icon="fa fa-fw fa-download" title={"Install"}/>
            </div>
          </div>

          <div className="row" style={{paddingTop: "50px"}}>
            <p>
              Looking for the PHOEBE Legacy GUI? See more information and installation instruction on the <Link to="/1.0">PHOEBE Legacy Releases</Link>.
            </p>
          </div>

          <Separator large={false} flip={false}/>
        </Content>
        <Content dark={1} preventscrolltop={this.props.location.hash}>


          <h2 ref={this.refdesktop}><span className="fas fa-fw fa-xs fa-desktop"></span>  Desktop UI Client</h2>

          <div className="row">
            <p>
              The PHOEBE desktop client is designed along the same principals as PHOEBE itself and allows for filtering parameters, changing values, as well as running multiple compute and solver backends.
            </p>
            <p>
              Although there are not currently any dedicated UI tutorials, the introductory <Link to="/docs/latest/tutorials">tutorials</Link> may still be useful to grasp the general concepts of using PHOEBE (just don't worry about the specific python-syntax),
              and the <Link to="/docs/latest/physics">physics example scripts</Link> may give a good overview of the various parameters and their uses.
              In addition, the UI itself does include some useful tips for learning your way around the interface for new users.
            </p>
            <p>
              With the high computational expense of running some models or fitting algorithms, the client has specifically been designed to allow the user to work interactively locally, tweak parameters by hand, configure options for expensive tasks, and then provide an easy way to "export" these expensive tasks to an external HPC, when necessary.
            </p>
            <p>
              As such, the desktop client is released and versioned separately from the <Link to="/releases">PHOEBE releases</Link> themselves.  Although its always suggested to run the latest versions of each, backwards and forwards compatibility will be maintained whenever possible.  The client will provide warnings whenever the installed version may not support all features, and will refuse to connect when incompatible.  That said, please <Link to="https://github.com/phoebe-project/phoebe2-ui/issues/new">submit an issue</Link> if anything does not work as expected - along with your versions of PHOEBE and the client.
            </p>
            <p>
              The desktop client is a standalone installed version of the <Link to="#web">web client</Link>.  As such, it has a few extra abilities including:
            </p>
            <ul>
              <li>The ability to run offline (although you still need a connection to whatever <Link to="#server">server</Link> you're using).</li>
              <li>The ability to automatically spawn (on launch) a local <Link to="#server">server</Link> on your own machine (running on localhost).</li>
              <li>The ability to natively launch <Link to="#python">Python clients</Link> instead of requiring copying and pasting from a popup alert in the browser into a python console.</li>
              <li>The ability to be launched from the <Link to="#python">Python client</Link> by calling  <Link to="/docs/latest/api/phoebe.parameters.ParameterSet.ui.md"><code>PS.ui()</code></Link>.  In Python this will popup a new window and in Jupyter this will include an inline version of client (see <Link to="/docs/latest/tutorials/ui_jupyter.ipynb">launching the UI from Jupyter</Link>).</li>
              <li>No annoying URL bar, and the ability to launch the PHOEBE UI directly from your OS.</li>
            </ul>
            <p>
              To install the desktop client, download the appropriate installer/archive from the <Link to="https://github.com/phoebe-project/phoebe2-ui/releases">phoebe2-ui releases</Link>.
            </p>
            <p>
              <b>NOTE</b> for users installing from the binary archive or building manually (i.e. not using an installer): phoebe must be available on your path in order to be launched from the <Link to="#python">python client</Link>.  See the <Link to="https://github.com/phoebe-project/phoebe2-ui#readme">installation notes</Link> for more details.
            </p>

          </div>

          <div className="hidden-xs hidden-sm">
            <DesktopUI dark={1} height="650px"/>
          </div>
          <div className="visible-xs visible-sm">
            <DesktopUI dark={1} height="800px"/>
          </div>

          <div className="row" style={{textAlign: "center", paddingTop: "50px", paddingBottom: "50px"}}>
            <Container>
              <Button level="primary-invert" style={{lineHeight: "2.5em", fontSize: "16px"}} to={"https://github.com/phoebe-project/phoebe2-ui/releases"} icon="fa fa-fw fa-download" title={"Install PHOEBE Desktop Client"}/>
            </Container>
          </div>

          <Separator large={false} flip={true}/>
        </Content>
        <Content dark={0} preventscrolltop={this.props.location.hash}>

          <h2 ref={this.refweb}><span className="fas fa-fw fa-xs fa-window-maximize"></span>  Web UI Client</h2>

          <div className="row">

            <p>
              The web client allows you to run PHOEBE in your browser, without any installation!  It shares the same UI and source-code as the <Link to="#desktop">desktop</Link> client, but with some important limitations:
            </p>
            <ul>
              <li>You'll need to have a constant internet connection (unless you run the web-client locally, but then you might as well install the desktop client), and a slow internet connection could result in laggy performance.</li>
              <li>PHOEBE is running on our servers (unless you have your own <Link to="#server">server installation</Link>), so you won't have fine control of the version and depending on the demand on resources, could be slower than necessary.  Additionally, the publicly available server is limited in the number of datapoints and does not allow running optimizers or samplers.</li>
              <li>There is always a chance the server or the client itself could go down or lose connection, in which case your work may be lost.  Save often!</li>
              <li>You'll still need a local installation of PHOEBE if you want to do anything advanced in Python.</li>
              <li>You'll also need a local installation of PHOEBE if you want to make use of the <Link to="#python">Python client</Link>.</li>
            </ul>
          </div>
          <p>
            With those caveats out of the way, the web client is a good way to get familiar with PHOEBE as well as the client.  If you need something more powerful,
            you can install the practically-identical looking <Link to="#desktop">desktop client</Link>, manage your own <Link to="#server">PHOEBE server</Link> installation on your own computing resources (including AWS), or migrate over to using the <Link to="/install">PHOEBE Python package</Link> itself, which will also come along with support for the <Link to="#python">Python client</Link>.
          </p>
          <p>
            If for some reason you want to deploy your own version of the web-client (for students or a research group, etc), see the installation notes in the <Link to="https://github.com/phoebe-project/phoebe2-ui">phoebe2-ui repository</Link>.
            But to run just locally on your own system, it is suggested to just install and use the <Link to="#desktop">desktop client</Link> instead.
          </p>

          <div className="hidden-xs hidden-sm">
            <WebUI dark={0} height="650px"/>
          </div>
          <div className="visible-xs visible-sm">
            <WebUI dark={0} height="800px"/>
          </div>

          <div className="row" style={{textAlign: "center", paddingTop: "50px", paddingBottom: "50px"}}>
            <Container>
              <Button level="primary" style={{lineHeight: "2.5em", fontSize: "16px"}} to={"http://ui.phoebe-project.org"} icon="far fa-fw fa-play-circle" title={"Launch PHOEBE Web Client"}/>
            </Container>
          </div>

          <Separator large={false} flip={false}/>
        </Content>
        <Content dark={1} preventscrolltop={this.props.location.hash}>

          <h2 ref={this.refpython}><span className="fas fa-fw fa-xs fa-terminal"></span>  Python Client</h2>

          <div className="row">
            <p>
              The python client allows interacting with a bundle <b>simultaneously</b> in both python and through the <Link to="#desktop">desktop</Link> or <Link to="#web">web</Link> clients.
              In this mode, all operations are handled by the <Link to="#server">PHOEBE server</Link>, with all clients being synchronized.
              This can also be useful to submit computation jobs to a compute cluster running <Link to="#server">PHOEBE server</Link>, but does have some overhead and lag associated with the sync operations.
            </p>
            <p>
              There are several different ways to "start" a python client instance:
            </p>
            <ul>
              <li>Call <Link to="/docs/latest/api/phoebe.frontend.bundle.Bundle.as_client"><code>b.as_client</code></Link> on an existing bundle in python</li>
              <li>Call <Link to="/docs/latest/api/phoebe.from_server"><code>phoebe.from_server</code></Link> to load an existing bundle from the <Link to="#server">server</Link></li>
              <li>Click on the button in the top bar in the <Link to="#desktop">desktop</Link> (in which case a terminal will be spawned with PHOEBE in client mode) or <Link to="#web">web</Link> (in which case you'll need to copy and paste the provided code) clients.</li>
            </ul>
            <p>
              Additionally, you can launch the <Link to="#desktop">desktop</Link> or <Link to="#web">web</Link> client in a blocking or non-blocking mode via <Link to="/docs/latest/api/phoebe.parameters.ParameterSet.ui"><code>PS.ui()</code></Link>.  In Python this will popup a new window and in Jupyter this will include an inline version of the <Link to="#desktop">desktop</Link> or <Link to="#web">web</Link> client (see <Link to="/docs/latest/tutorials/ui_jupyter.ipynb">launching the UI from Jupyter</Link>).
            </p>
            <p>
              Note that the python client is only supported for PHOEBE 2.3+.
            </p>
          </div>

          <div className="row" style={{textAlign: "center", paddingTop: "50px", paddingBottom: "50px"}}>
            <Container>
              <Button level="primary-invert" style={{lineHeight: "2.5em", fontSize: "16px"}} to={"/install"} icon="fa fa-fw fa-download" title={"Install Python Client with PHOEBE"}/>
            </Container>
          </div>

          <Separator large={false} flip={true}/>
        </Content>
        <Content dark={0} preventscrolltop={this.props.location.hash}>

          <h2 ref={this.refserver}><span className="fas fa-fw fa-xs fa-server"></span>  PHOEBE Server</h2>

          <div className="row">
            <p>
              The PHOEBE server is the common workhorse for all of the clients mentioned above.  In essence, the server handles synchronizing between all connected clients and making calls directly to an installation of PHOEBE.  <code>phoebe-server</code> is installed by default with PHOEBE 2.3+ (see <Link to="/install">installation instructions</Link>).
            </p>
            <p>
              The <Link to="#desktop">desktop client</Link> will automatically attempt to launch an instance of <code>phoebe-server</code> on the local machine (via localhost).  To launch an instance of the server manually (either on the same machine or any machine with a public facing port) call <code>phoebe-server -h</code> for a list of available command-line configuation options, including <code>--port</code> to choose the port that exposes the server.
            </p>
            <p>
              If PHOEBE 2.3+ is installed locally, but <code>phoebe-server</code> cannot be found, you may need to manually add it to your path.  Feel free to <Link to="/help/contact">contact us</Link> or <Link to="http://github.com/phoebe-project/phoebe2/issues/new">submit an issue</Link> if you run into any problems.
            </p>
          </div>

          <div className="row" style={{textAlign: "center", paddingTop: "50px", paddingBottom: "50px"}}>
            <Container>
              <Button level="primary" style={{lineHeight: "2.5em", fontSize: "16px"}} to={"/install"} icon="fa fa-fw fa-download" title={"Install phoebe-server with PHOEBE"}/>
            </Container>
          </div>

        </Content>
      </div>
    );
  }
}

export default withRouter(Clients)
