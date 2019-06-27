import React, { Component } from 'react';

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import {Content, Link, Image} from './common';
// import {Header} from './header';
// import {NotFound} from './errors';



export class InteractiveGettingStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionTeff: false,
      optionRV: false,
      optionQ: false,
      optionPhase: false,
    };
  }
  toggleTeff = () => {
    clearInterval(this.intervalId)
    this.setState({optionTeff: !this.state.optionTeff});
  }
  toggleQ = () => {
    clearInterval(this.intervalId)
    this.setState({optionQ: !this.state.optionQ});
  }
  toggleRV = () => {
    clearInterval(this.intervalId)
    this.setState({optionRV: !this.state.optionRV});
  }
  togglePhase = () => {
    clearInterval(this.intervalId)
    this.setState({optionPhase: !this.state.optionPhase});
  }
  componentDidMount() {
    this.intervalId = setInterval(
      () => {
          if (this.state.optionPhase) {
            // reset to blank state
            this.setState({optionTeff: false, optionRV: false, optionQ: false, optionPhase: false})
          } else if (this.state.optionQ) {
            this.setState({optionPhase: true})
          } else if (this.state.optionRV) {
            this.setState({optionQ: true})
          } else if (this.state.optionTeff) {
            this.setState({optionRV: true})
          } else {
            this.setState({optionTeff: true})
          }
        },
        3000  // every 3 seconds
      );
    }
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }
  render() {
    var s_teff = 'no'
    var s_q = 'no'
    var s_rv = 'no'
    var s_phase = 'no'

    if (this.state.optionTeff) {
      s_teff = 'yes'
    }
    if (this.state.optionQ) {
      s_q = 'yes'
    }
    if (this.state.optionRV) {
      s_rv = 'yes'
    }
    if (this.state.optionPhase) {
      s_phase = 'yes'
    }

    return (
      <div style={{padding: "15px", maxWidth: "800px", margin: "0px auto", marginBottom: "40px", border: "1px solid #666666", borderRadius: "6px", borderBottom: "none", paddingBottom: "6px"}}>
        <div style={{borderBottom: "1px solid #666666", backgroundColor: "rgba(102, 102, 102, 0.15)", borderRadius: "6px 6px 0px 0px", marginTop: "-16px", marginLeft: "-16px", marginRight: "-16px", padding: "6px", paddingLeft: "12px", fontSize: "16px", fontFamily: "Menlo,Monaco,Consolas,Courier New,monospace"}}>
          <div style={{paddingTop: "2px"}}>
            <span className="far fa-circle" style={{paddingLeft: "4px"}}/>
            <span className="far fa-circle" style={{paddingLeft: "4px"}}/>
            <span className="far fa-circle" style={{paddingLeft: "4px"}}/>
            <span style={{paddingLeft: "12px", userSelect: "none"}}>Python</span>
          </div>
        </div>


        <pre style={{backgroundColor: "white", border: "none", fontSize: "14px"}}>
          <PythonPrompt>import phoebe</PythonPrompt>
          <PythonPrompt>b=phoebe.default_binary()</PythonPrompt>
          {this.state.optionTeff ?
            <PythonPrompt>b.set_value('teff', component='secondary', value=5000)</PythonPrompt>
            :
            null
          }
          {this.state.optionQ ?
            <PythonPrompt>b.set_value('q', value=0.75)</PythonPrompt>
            :
            null
          }
          <PythonPrompt>b.add_dataset('lc', times=phoebe.linspace(0,2,101))</PythonPrompt>
          {this.state.optionRV ?
            <PythonPrompt>b.add_dataset('rv', times=phoebe.linspace(0,2,101))</PythonPrompt>
            :
            null
          }
          <PythonPrompt>b.run_compute()</PythonPrompt>
          <PythonPrompt>b.plot({this.state.optionPhase ? "x='phases', " : null}show=True)</PythonPrompt>

          {this.state.optionTeff || window.innerHeight < 700 ?
            null
            :
            <br/>
          }
          {this.state.optionQ || window.innerHeight < 700 ?
            null
            :
            <br/>
          }
          {this.state.optionRV || window.innerHeight < 700 ?
            null
            :
            <br/>
          }
        </pre>

        <div style={{textAlign: "center"}}>
          <Image src={'/images/interactive_getting_started/teff:'+s_teff+'_q:'+s_q+'_phase:'+s_phase+'_rv:'+s_rv+'.png'} width="400" maxWidth="80%"/>
        </div>

        <div class="row" style={{paddingTop: "12px", marginLeft: "-10px", marginRight: "-10px"}}>
          <ToggleButton title="change value of secondary effective temperature" active={this.state.optionTeff} onClick={this.toggleTeff}> change teff</ToggleButton>
          <ToggleButton title="include an RV dataset" active={this.state.optionRV} onClick={this.toggleRV}> rv dataset</ToggleButton>
          <ToggleButton title="change value of mass ratio" active={this.state.optionQ} onClick={this.toggleQ}> change q</ToggleButton>
          <ToggleButton title="plot in phase-space" active={this.state.optionPhase} onClick={this.togglePhase}> plot in phase</ToggleButton>
        </div>

      </div>
    );
  }
}

export class WebUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    var borderColor = "#666666"
    var backgroundColor: null;
    if (this.props.dark) {
      borderColor = 'white'
      backgroundColor = 'white'
    }

    return (
      <div style={{padding: "15px", maxWidth: "800px", margin: "0px auto", marginBottom: "40px", border: "1px solid "+borderColor, backgroundColor: "white", color: "#666666", borderRadius: "6px", borderBottom: "none", paddingBottom: "6px"}}>
        <div style={{borderBottom: "1px solid #666666", backgroundColor: "rgba(102, 102, 102, 0.15)", borderRadius: "6px 6px 0px 0px", marginTop: "-16px", marginLeft: "-16px", marginRight: "-16px", padding: "6px", paddingLeft: "12px", fontSize: "16px", fontFamily: "Menlo,Monaco,Consolas,Courier New,monospace"}}>
          <div style={{paddingTop: "2px"}}>
            <span className="far fa-circle" style={{paddingLeft: "4px"}}/>
            <span className="far fa-circle" style={{paddingLeft: "4px"}}/>
            <span className="far fa-circle" style={{paddingLeft: "4px"}}/>
            <span style={{paddingLeft: "12px", userSelect: "none"}}>Web Browser</span>
          </div>
        </div>
        <div style={{backgroundColor: "#f0f0f0", borderBottom: "1px solid #666666", borderRadius: "0px", marginLeft: "-16px", marginRight: "-16px", padding: "6px", paddingLeft: "12px", fontSize: "12px", fontFamily: "Menlo,Monaco,Consolas,Courier New,monospace"}}>
          <div style={{paddingTop: "2px"}}>
            <span className="fa fas fa-link" style={{color: "gray"}}></span>
            <span style={{paddingLeft: "12px", userSelect: "none", color: "black"}}>ui.phoebe-project.org</span>
          </div>
        </div>
        <div style={{backgroundColor: "white", borderRadius: "0px", marginLeft: "-12px", marginRight: "-6px", padding: "6px", paddingLeft: "12px", fontSize: "16px", fontFamily: "Menlo,Monaco,Consolas,Courier New,monospace"}}>
          <UIContent/>
        </div>
      </div>
    );
  }
}

export class DesktopUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    var borderColor = "#666666"
    if (this.props.dark) {
      borderColor = 'white'
    }

    return (
      <div style={{padding: "15px", maxWidth: "800px", margin: "0px auto", marginBottom: "40px", border: "1px solid "+borderColor, backgroundColor: "white", color: "#666666", borderRadius: "6px", borderBottom: "none", paddingBottom: "6px"}}>
        <div style={{borderBottom: "1px solid "+borderColor, backgroundColor: "rgba(102, 102, 102, 0.15)", borderRadius: "6px 6px 0px 0px", marginTop: "-16px", marginLeft: "-16px", marginRight: "-16px", padding: "6px", paddingLeft: "12px", fontSize: "16px", fontFamily: "Menlo,Monaco,Consolas,Courier New,monospace"}}>
          <div style={{paddingTop: "2px"}}>
            <span className="far fa-circle" style={{paddingLeft: "4px"}}/>
            <span className="far fa-circle" style={{paddingLeft: "4px"}}/>
            <span className="far fa-circle" style={{paddingLeft: "4px"}}/>
            <span style={{paddingLeft: "12px", userSelect: "none"}}>PHOEBE Desktop UI</span>
          </div>
        </div>
        <div style={{backgroundColor: "white", borderRadius: "0px", marginLeft: "-12px", marginRight: "-6px", padding: "6px", paddingLeft: "12px", fontSize: "16px", fontFamily: "Menlo,Monaco,Consolas,Courier New,monospace"}}>
          <UIContent/>
        </div>
      </div>
    );
  }
}

class UIContent extends Component {
  render() {
    return (
      <div>
        <div className="row" style={{borderBottom: "1px solid #6666", color: "#6666", marginTop: "-4px", paddingBottom: "2px"}}>
          <span className="fa fa-lg fa-fw fas fa-file" style={{marginLeft: "8px", marginRight: "6px"}}></span>
          <span className="fa fa-lg fa-fw fas fa-folder-open" style={{marginRight: "6px"}}></span>
          <span className="fa fa-lg fa-fw fas fa-save" style={{marginRight: "6px"}}></span>
          <span className="fa fa-lg fa-fw fas fa-undo" style={{marginRight: "6px"}}></span>
          <span className="fa fa-lg fa-fw fas fa-redo" style={{marginRight: "6px"}}></span>
          <div style={{float: "right"}}>
            <span className="fa fa-lg fa-fw fas fa-question" style={{marginRight: "6px"}}></span>
            <span className="fa fa-lg fa-fw fas fa-terminal" style={{marginRight: "6px"}}></span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3" style={{borderRight: "1px solid #6666"}}>
            <br/><br/>

          </div>
          <div className="col-md-6">
            <br/><br/>

          </div>
          <div className="col-md-3" style={{borderLeft: "1px solid #6666"}}>
            <br/><br/>

          </div>
        </div>
      </div>
    )
  }
}

class PythonPrompt extends Component {
  render() {
    return (
      <div>
        <span style={{userSelect: "none"}}>>>> </span>
        {this.props.children}
        <br/>
      </div>
    )
  }
}

class ToggleButton extends Component {
  render() {
    var classes = "btn btn-block btn-trasparent btn-transparent-light"
    if (this.props.active) {
      classes += "btn-transparent-light-active"
    }
    return (
      <div class="col-md-3" style={{paddingLeft: "2px", paddingRight: "2px", paddingTop: "6px"}}>
        <button className={classes} title={this.props.title || this.props.children} onClick={this.props.onClick}>
          {this.props.children}
        </button>
      </div>
    )
  }
}
