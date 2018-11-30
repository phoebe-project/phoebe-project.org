import React, { Component } from 'react';

import './logo.css';

export class LogoSpinner extends Component {
  render() {
    var divClasses = "PhoebeLogoSpinner AnimateFade AnimateSpinner"
    var pltStyle = this.props.pltStyle || {}

    return(
      <div className={divClasses}>
        <div className='PLT PLT1' style={pltStyle} ref={this.plt1}/>
        <div className='PLT PLT2' style={pltStyle} ref={this.plt2}/>
        <div className='PLT PLT3' style={pltStyle} ref={this.plt3}/>
        <div className='PLT PLT4' style={pltStyle} ref={this.plt4}/>
        <div className='PLT PLT5' style={pltStyle} ref={this.plt5}/>
        <div className='PLT PLT6' style={pltStyle} ref={this.plt6}/>
        <div className='PLT PLT7' style={pltStyle} ref={this.plt7}/>
        <div className='PLT PLT8' style={pltStyle} ref={this.plt8}/>
      </div>
    )
  }
}

export class LogoSplash extends Component {
  constructor(props) {
    super(props);
    this.didClearTransitionIn = false;
    this.phoebelogo = React.createRef();
    this.plt1 = React.createRef();
    this.plt2 = React.createRef();
    this.plt3 = React.createRef();
    this.plt4 = React.createRef();
    this.plt5 = React.createRef();
    this.plt6 = React.createRef();
    this.plt7 = React.createRef();
    this.plt8 = React.createRef();
    this.pltb1 = React.createRef();
    this.pltb2 = React.createRef();
    this.pltb3 = React.createRef();
    this.pltb4 = React.createRef();
    this.pltb5 = React.createRef();
    this.pltb6 = React.createRef();
    this.pltb7 = React.createRef();
  }
  onMouseEnter = () => {
    // console.log("LogoSplash.onMouseEnter")
    console.log(this.phoebelogo)

    if (this.didClearTransitionIn==false) {
      // console.log("clearing TransitionIn");
      this.phoebelogo.current.classList.remove('TransitionIn');
      this.didClearTransitionIn = true;
    }
    this.plt8.current.classList.add('tmphide');
    this.pltb1.current.classList.add('tmpshow');
    this.pltb2.current.classList.add('tmpshow');
    this.pltb3.current.classList.add('tmpshow');
    this.pltb4.current.classList.add('tmpshow');
    this.pltb5.current.classList.add('tmpshow');
    this.pltb6.current.classList.add('tmpshow');
    this.pltb7.current.classList.add('tmpshow');
  }
  onMouseLeave = () => {
    // console.log("LogoSplash.onMouseLeave")
    HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
    for (var element of this.phoebelogo.current.children) {
      element.classList.remove('tmphide', 'tmpshow');
    }
  }

  render() {
    var divClasses = "PhoebeLogo TransitionIn"
    var pltStyle = this.props.pltStyle || {}

    return(
      <div className={divClasses} ref={this.phoebelogo} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <div className='PLT PLT1' style={pltStyle} ref={this.plt1}/>
        <div className='PLT PLT2' style={pltStyle} ref={this.plt2}/>
        <div className='PLT PLT3' style={pltStyle} ref={this.plt3}/>
        <div className='PLT PLT4' style={pltStyle} ref={this.plt4}/>
        <div className='PLT PLT5' style={pltStyle} ref={this.plt5}/>
        <div className='PLT PLT6' style={pltStyle} ref={this.plt6}/>
        <div className='PLT PLT7' style={pltStyle} ref={this.plt7}/>
        <div className='PLT PLT8' style={pltStyle} ref={this.plt8}/>
        <div className='PLTB PLTB1' style={pltStyle} ref={this.pltb1}></div>
        <div className='PLTB PLTB2' style={pltStyle} ref={this.pltb2}></div>
        <div className='PLTB PLTB3' style={pltStyle} ref={this.pltb3}></div>
        <div className='PLTB PLTB4' style={pltStyle} ref={this.pltb4}></div>
        <div className='PLTB PLTB5' style={pltStyle} ref={this.pltb5}></div>
        <div className='PLTB PLTB6' style={pltStyle} ref={this.pltb6}></div>
        <div className='PLTB PLTB7' style={pltStyle} ref={this.pltb7}></div>
      </div>
    )

  }
}
