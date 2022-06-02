import React, { Component } from 'react';

import {Image} from './common';


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
      <div style={{padding: "15px", height: this.props.height || "650px", maxWidth: "800px", margin: "0px auto", marginBottom: "40px", border: "1px solid #666666", borderRadius: "6px", borderBottom: "none", paddingBottom: "6px"}}>
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

        <div className="row" style={{paddingTop: "12px", marginLeft: "-10px", marginRight: "-10px"}}>
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
    if (this.props.dark) {
      borderColor = 'white'
    }

    return (
      <div style={{padding: "15px", height: this.props.height, maxWidth: "800px", margin: "0px auto", marginBottom: "40px", border: "1px solid "+borderColor, backgroundColor: "white", color: "#666666", borderRadius: "6px", borderBottom: "none", paddingBottom: "6px"}}>
        <div style={{borderBottom: "1px solid #666666", backgroundColor: "rgba(102, 102, 102, 0.15)", borderRadius: "6px 6px 0px 0px", marginTop: "-16px", marginLeft: "-16px", marginRight: "-16px", padding: "6px", paddingLeft: "12px", fontSize: "16px", fontFamily: "Menlo,Monaco,Consolas,Courier New,monospace"}}>
          <div style={{paddingTop: "2px"}}>
            <span className="far fa-circle" style={{paddingLeft: "4px"}}/>
            <span className="far fa-circle" style={{paddingLeft: "4px"}}/>
            <span className="far fa-circle" style={{paddingLeft: "4px"}}/>
            <span style={{paddingLeft: "12px", userSelect: "none"}}>Web Browser</span>
          </div>
        </div>
        <div style={{backgroundColor: "#f0f0f0", borderBottom: "1px solid #666666", borderLeft: "1px solid "+borderColor, borderRight: "1px solid "+borderColor, borderRadius: "0px", marginLeft: "-16px", marginRight: "-16px", padding: "6px", paddingLeft: "12px", fontSize: "12px", fontFamily: "Menlo,Monaco,Consolas,Courier New,monospace"}}>
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
      <div style={{padding: "15px", height: this.props.height, maxWidth: "800px", margin: "0px auto", marginBottom: "40px", border: "1px solid "+borderColor, backgroundColor: "white", color: "#666666", borderRadius: "6px", borderBottom: "none", paddingBottom: "6px"}}>
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

class UIHeader extends Component {
  render() {
    return (
      <div className={this.props.className} style={{display: "block", width: "100%", marginLeft: "0px", paddingLeft: "15px", paddingRight: "10px", backgroundColor: "rgba(102, 102, 102, 0.45)", color: "#ffffff", height: "32px", fontWeight: "700", paddingTop: "4px", marginTop: "5px", marginBottom: "7px", borderRadius: "4px", boxShadow: "0 2px 2px 0 rgba(102, 102, 102, 0.6)"}}>{this.props.children}</div>
    )
  }
}

class UITag extends Component {
  render() {
    return (
      <span onClick={this.props.onClick} style={{cursor: "pointer", backgroundColor: this.props.checked ? "rgba(43,113,177,.16862745098039217)" : "#ffffff", color: "#3b71b1", boxShadow: this.props.checked ? "inset 0.5px 0.5px 1px 0 rgba(21,21,22,.8392156862745098)" : "0.5px 0.5px 3px 0 rgba(21,21,22,.8392156862745098)", padding: "0px 4px 2px 14px", margin: "-5px 0px", borderRadius: "4px", fontSize: "0.9em", textAlign: "left", overflow: "hidden", display: "inline-block", width: "100%"}}>{this.props.children}</span>
    )
  }
}

class UIParameter extends Component {
  render() {
    if (!this.props.visible) {
      return null
    }
    return (
      <div style={{display: "block", width: "100%", backgroundColor: "#ffffff", color: "#000000", borderRadius: "4px", boxShadow: "1px 1px 4px 0 rgba(69,101,131,.75)", marginTop: "5px"}}>{this.props.children}</div>
    )
  }
}

class UIContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      primary: false,
      secondary: false,
      binary: false,
      mass: false,
      requiv: false,
      sma: false,
      teff: false,
      q: false,
      autoCycle: 0,
    };
  }
  componentDidMount() {
    this.intervalId = setInterval(
      () => {
          if (this.state.autoCycle === 0) {
            // primary
            this.setState({autoCycle: 1, primary: true, secondary: false, binary: false, mass: false, requiv: false, sma: false, teff: false, q: false})
          } else if (this.state.autoCycle === 1) {
            // primary, teff
            this.setState({autoCycle: 2, primary: true, secondary: false, binary: false, mass: false, requiv: false, sma: false, teff: true, q: false})
          } else if (this.state.autoCycle === 2) {
            // primary, teff, mass
            this.setState({autoCycle: 3, primary: true, secondary: false, binary: false, mass: true, requiv: false, sma: false, teff: true, q: false})
          } else if (this.state.autoCycle === 3) {
            // primary, secondary, teff, mass
            this.setState({autoCycle: 4, primary: true, secondary: true, binary: false, mass: true, requiv: false, sma: false, teff: true, q: false})
          } else if (this.state.autoCycle === 4) {
            // blank
            this.setState({autoCycle: 5, primary: false, secondary: false, binary: false, mass: false, requiv: false, sma: false, teff: false, q: false})
          } else if (this.state.autoCycle === 5) {
            // sma
            this.setState({autoCycle: 6, primary: false, secondary: false, binary: false, mass: false, requiv: false, sma: true, teff: false, q: false})
          } else if (this.state.autoCycle === 6) {
            // sma, binary
            this.setState({autoCycle: 7, primary: false, secondary: false, binary: true, mass: false, requiv: false, sma: true, teff: false, q: false})
          } else if (this.state.autoCycle === 7) {
            // binary
            this.setState({autoCycle: 8, primary: false, secondary: false, binary: true, mass: false, requiv: false, sma: false, teff: false, q: false})
          } else {
            // reset to blank state
            this.setState({autoCycle: 0, primary: false, secondary: false, binary: false, mass: false, requiv: false, sma: false, teff: false, q: false})

          }
        },
        3000  // every 3 seconds
      );
    }
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }
  toggle = (tag) => {
    clearInterval(this.intervalId)
    this.setState({[tag]: !this.state[tag]})
  }
  allCleared = () => {
    return (!this.state.primary && !this.state.secondary && !this.state.binary && !this.state.mass && !this.state.requiv && !this.state.sma && !this.state.teff && !this.state.q)
  }
  allClearedQualifier = () => {
    return (!this.state.mass && !this.state.requiv && !this.state.sma && !this.state.teff && !this.state.q)
  }
  allClearedComponent = () => {
    return (!this.state.primary && !this.state.secondary && !this.state.binary)
  }

  visible = (tags) => {
    if (this.allCleared()) {
      return true
    }
    for (var tag of tags) {
      if (!this.state[tag]) {
        if (['primary', 'secondary', 'binary'].indexOf(tag) === -1) {
          // then this is a qualifier, so only return false if not allClearedQualifier
          if (!this.allClearedQualifier()) {
            return false
          }
        } else {
          if (!this.allClearedComponent()) {
            return false
          }
        }
      }
    }
    return true
  }
  render() {
    return (
      <div style={{fontFamily: "sans-serif"}}>
        <div className="row" style={{borderBottom: "1px solid #6666", color: "#6666", marginTop: "-2px", paddingBottom: "2px"}}>
          <span className="fa fa-lg fa-fw fas fa-file" style={{marginLeft: "8px", marginRight: "6px"}}></span>
          <span className="fa fa-lg fa-fw fas fa-folder-open" style={{marginRight: "6px"}}></span>
          <span className="fa fa-lg fa-fw fas fa-save" style={{marginRight: "6px"}}></span>
          <span className="fa fa-lg fa-fw fas fa-file-download" style={{marginRight: "6px"}}></span>
          <span className="fa fa-lg fa-fw fas fa-undo" style={{marginRight: "6px"}}></span>
          <div style={{float: "right"}}>
            <span className="fa fa-lg fa-fw fas fa-sliders-h" style={{marginRight: "6px"}}></span>
            <span className="fa fa-lg fa-fw fas fa-terminal" style={{marginRight: "6px"}}></span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3" style={{borderRight: "1px solid #6666", height: "85%", paddingLeft: "0px", paddingRight: "0px"}}>


            <UIHeader>Component</UIHeader>
            <UITag onClick={() => this.toggle('primary')} checked={this.state.primary}>primary</UITag>
            <UITag onClick={() => this.toggle('secondary')} checked={this.state.secondary}>secondary</UITag>
            <UITag onClick={() => this.toggle('binary')} checked={this.state.binary}>binary</UITag>

            <UIHeader className="hidden-sm hidden-xs">Dataset</UIHeader>
            <UIHeader className="hidden-sm hidden-xs">Compute</UIHeader>
            <UIHeader className="hidden-sm hidden-xs">Model</UIHeader>
            <UIHeader className="hidden-sm hidden-xs">Solver</UIHeader>
            <UIHeader className="hidden-sm hidden-xs">Solution</UIHeader>

            <UIHeader>Qualifier</UIHeader>
            <UITag onClick={() => this.toggle('mass')} checked={this.state.mass}>mass</UITag>
            <UITag onClick={() => this.toggle('requiv')} checked={this.state.requiv}>requiv</UITag>
            <UITag onClick={() => this.toggle('sma')} checked={this.state.sma}>sma</UITag>
            <UITag onClick={() => this.toggle('teff')} checked={this.state.teff}>teff</UITag>
            <UITag onClick={() => this.toggle('q')} checked={this.state.q}>q</UITag>

          </div>
          <div className="col-md-6">
            <UIParameter visible={this.visible(['mass', 'primary'])}><span style={{display: "inline-block", width: "calc(100% - 48px)", overflow: "hidden", verticalAlign: "middle", paddingLeft: "4px"}}><b>mass</b><span style={{color: "slategray"}}>@primary</span></span><span style={{display: "inline-block", width: "45px", marginTop: "-4px", color: "slategray"}}>1.415</span></UIParameter>
            <UIParameter visible={this.visible(['mass', 'secondary'])}><span style={{display: "inline-block", width: "calc(100% - 48px)", overflow: "hidden", verticalAlign: "middle", paddingLeft: "4px"}}><b>mass</b><span style={{color: "slategray"}}>@secondary</span></span><span style={{display: "inline-block", width: "45px", marginTop: "-4px", color: "slategray"}}>0.856</span></UIParameter>
            <UIParameter visible={this.visible(['q', 'binary'])}><span style={{display: "inline-block", width: "calc(100% - 48px)", overflow: "hidden", verticalAlign: "middle", paddingLeft: "4px"}}><b>q</b><span style={{color: "slategray"}}>@binary</span></span><span style={{display: "inline-block", width: "45px", marginTop: "-4px"}}>0.75</span></UIParameter>
            <UIParameter visible={this.visible(['requiv', 'primary'])}><span style={{display: "inline-block", width: "calc(100% - 48px)", overflow: "hidden", verticalAlign: "middle", paddingLeft: "4px"}}><b>requiv</b><span style={{color: "slategray"}}>@primary</span></span><span style={{display: "inline-block", width: "45px", marginTop: "-4px"}}>1.0</span></UIParameter>
            <UIParameter visible={this.visible(['requiv', 'secondary'])}><span style={{display: "inline-block", width: "calc(100% - 48px)", overflow: "hidden", verticalAlign: "middle", paddingLeft: "4px"}}><b>requiv</b><span style={{color: "slategray"}}>@secondary</span></span><span style={{display: "inline-block", width: "45px", marginTop: "-4px"}}>0.8</span></UIParameter>
            <UIParameter visible={this.visible(['sma', 'binary'])}><span style={{display: "inline-block", width: "calc(100% - 48px)", overflow: "hidden", verticalAlign: "middle", paddingLeft: "4px"}}><b>sma</b><span style={{color: "slategray"}}>@binary</span></span><span style={{display: "inline-block", width: "45px", marginTop: "-4px"}}>5.3</span></UIParameter>
            <UIParameter visible={this.visible(['sma', 'primary'])}><span style={{display: "inline-block", width: "calc(100% - 48px)", overflow: "hidden", verticalAlign: "middle", paddingLeft: "4px"}}><b>sma</b><span style={{color: "slategray"}}>@primary</span></span><span style={{display: "inline-block", width: "45px", marginTop: "-4px", color: "slategray"}}>2.27</span></UIParameter>
            <UIParameter visible={this.visible(['sma', 'secondary'])}><span style={{display: "inline-block", width: "calc(100% - 48px)", overflow: "hidden", verticalAlign: "middle", paddingLeft: "4px"}}><b>sma</b><span style={{color: "slategray"}}>@secondary</span></span><span style={{display: "inline-block", width: "45px", marginTop: "-4px", color: "slategray"}}>3.03</span></UIParameter>
            <UIParameter visible={this.visible(['teff', 'primary'])}><span style={{display: "inline-block", width: "calc(100% - 48px)", overflow: "hidden", verticalAlign: "middle", paddingLeft: "4px"}}><b>teff</b><span style={{color: "slategray"}}>@primary</span></span><span style={{display: "inline-block", width: "45px", marginTop: "-4px"}}>6000</span></UIParameter>
            <UIParameter visible={this.visible(['teff', 'secondary'])}><span style={{display: "inline-block", width: "calc(100% - 48px)", overflow: "hidden", verticalAlign: "middle", paddingLeft: "4px"}}><b>teff</b><span style={{color: "slategray"}}>@secondary</span></span><span style={{display: "inline-block", width: "45px", marginTop: "-4px"}}>5000</span></UIParameter>

          </div>
          <div className="col-md-3 hidden-sm hidden-xs" style={{borderLeft: "1px solid #6666", height: "85%"}}>
            <UIParameter visible={true}>
              <Image src={'/images/interactive_getting_started/teff:yes_q:yes_phase:yes_rv:yes.png'} width="100%"/>
            </UIParameter>

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
      <div className="col-md-3" style={{paddingLeft: "2px", paddingRight: "2px", paddingTop: "6px"}}>
        <button className={classes} title={this.props.title || this.props.children} onClick={this.props.onClick}>
          {this.props.children}
        </button>
      </div>
    )
  }
}
