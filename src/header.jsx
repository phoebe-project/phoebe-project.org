import React, { Component } from 'react';

import { LogoSplash } from './logo';
import { Link, Image, Separator } from './common';
import {FaBookOpen, FaCopy, FaDownload, FaInfo, FaNewspaper, FaTags} from "react-icons/fa6"

export class NoHeader extends Component {
  render() {
    return (
      <div style={{paddingTop: "60px"}}></div>
    )
  }
}

export class Header extends Component {
  render() {
    let separator = this.props.separator || "left"

    return (
      <div className="jumbotron header" style={{backgroundColor: "#2B71B1", color: "#E6E6E6", overflow: "visible", paddingTop: "25px", paddingBottom: "25px", paddingLeft: "25px", paddingRight: "25px"}}>
        <div className="container">
          {this.props.children}
        </div>
        {separator==='left' ?
          <Separator large={true} flip={true} marginRight="85%" className="hidden-sm hidden-xs"/>
          :
          null
        }
        {separator==='center' ?
          <Separator large={true} flip={true} marginRight="auto" className="hidden-sm hidden-xs"/>
          :
          null
        }
        {separator==='right' ?
          <Separator large={true} flip={true} marginRight="15%" className="hidden-sm hidden-xs"/>
          :
          null
        }
      </div>
    )
  }
}

export class HeaderIndex extends Component {
  render() {
    return (
      <Header separator='right'>
        <div>
          <div className="row" style={{textAlign: "center", paddingBottom: "20px"}}>
              <div style={{zoom: 0.7}}>
                <LogoSplash excludeTriple={true} transitionIn="transitionInContact" onMouseEnter="showContact" />
              </div>
              <h1 style={{color: "#E6E6E6", fontFamily: "Merriweather"}}>PHOEBE</h1>
              <h4 className="hidden-xs" style={{color: "#E6E6E6", fontFamily: "Merriweather"}}><i>PHysics Of Eclipsing BinariEs</i></h4>
              <h5 style={{color: "#E6E6E6", fontFamily: "Merriweather"}}>Eclipsing Binary Modeling Software</h5>
          </div>
          <div className="row visible-xs">
              <div className="col-md-4">
              </div>
              <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
                  <HeaderNavButton title="Releases" to="/releases" icon={<FaTags />}/>
              </div>
              <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
                  <HeaderNavButton title="Documentation" to="/docs" icon={<FaCopy />}/>
              </div>
              <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
                  <HeaderNavButton title="Publications" to="/publications" icon={<FaNewspaper />}/>
              </div>
          </div>
        </div>
      </Header>
    )
  }
}


export class HeaderLegacy extends Component {
  render() {
    return (
      <Header>
        <div>
          <div className="row">
            <div className="col-md-2 col-sm-4 col-xs-12 text-center">
              <Image src="/logos/phoebe-gui.png" alt="logo" style={{minHeight: "100px", maxHeight: "160px"}}/>
            </div>
            <div className="hidden-xs col-md-10 col-sm-8">
                <h1 style={{color: "#E6E6E6", fontFamily: "Merriweather"}}>PHOEBE 1.0 (legacy)</h1>
                <h4 style={{color: "#E6E6E6", fontFamily: "Merriweather"}}><i>PHysics Of Eclipsing BinariEs</i></h4>
            </div>
            <div className="visible-xs col-xs-12" style={{textAlign: "center"}}>
                <h1 style={{color: "#E6E6E6", fontFamily: "Merriweather"}}>PHOEBE 1.0 (legacy)</h1>
                <h4 style={{color: "#E6E6E6", fontFamily: "Merriweather"}}><i>PHysics Of Eclipsing BinariEs</i></h4>
            </div>
          </div>

          <div className="row">
             <div className="col-md-6"></div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="About" description="About PHOEBE 1.0" to="/1.0" icon={<FaInfo />}/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Install" description="Download and Install PHOEBE 1.0" to="/1.0/download" icon={<FaDownload />}/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Documentation" description="PHOEBE 1.0 documentation" to="/1.0/docs" icon={<FaBookOpen />}/>
             </div>
           </div>
        </div>
      </Header>

    )
  }
}

export class HeaderNavButton extends Component {
  render() {
    let description = this.props.description
    if (!description) {
      description = this.props.title
    }
    return (
      <Link role="button" className="btn btn-transparent btn-block" title={description} to={this.props.to}>{this.props.icon} {this.props.title}</Link>
    )
  }
}
