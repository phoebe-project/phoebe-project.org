import React from 'react';

import {LogoSplash} from './logo';
import {Link, Image, Separator} from './common';

export class NoHeader extends React.Component {
  render() {
    return (
      <div style={{paddingTop: "60px"}}></div>
    )
  }
}

export class Header extends React.Component {
  render() {
    var separator = this.props.separator || "left"

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

export class HeaderIndex extends React.Component {
  render() {
    return (
      <Header separator='right'>
        <div>
          <div className="row visible-sm visible-xs" style={{paddingBottom: "25px"}}>
              <div className="col-md-2 col-sm-4 col-xs-12 text-center">
                  <Image src="/logos/logo_invert.svg" alt="Home" style={{maxHeight: "160px"}}/>
              </div>
              <div className="visible-md visible-sm col-sm-8">
                  <h1 style={{color: "#E6E6E6", fontFamily: "Merriweather"}}>PHOEBE</h1>
                  <h4 style={{color: "#E6E6E6", fontFamily: "Merriweather"}}><i>PHysics Of Eclipsing BinariEs</i></h4>
              </div>
              <div className="visible-xs col-xs-12" style={{textAlign: "center"}}>
                  <h1 style={{color: "#E6E6E6", fontFamily: "Merriweather"}}>PHOEBE</h1>
                  <h4 style={{color: "#E6E6E6", fontFamily: "Merriweather"}}><i>PHysics Of Eclipsing BinariEs</i></h4>
              </div>
          </div>
          <div className="row hidden-sm hidden-xs" style={{textAlign: "center", paddingBottom: "20px"}}>
              <LogoSplash/>
              <h1 style={{color: "#E6E6E6", fontFamily: "Merriweather"}}>PHOEBE</h1>
              <h4 style={{color: "#E6E6E6", fontFamily: "Merriweather"}}><i>PHysics Of Eclipsing BinariEs</i></h4>
              <h5 style={{color: "#E6E6E6", fontFamily: "Merriweather"}}>Eclipsing Binary Modeling Software</h5>
          </div>
          <div className="row visible-xs">
              <div className="col-md-4">
              </div>
              <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
                  <HeaderNavButton title="Install" description="Download &amp; Install PHOEBE 2" to="/install" icon="fa fa-download"/>
              </div>
              <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
                  <HeaderNavButton title="Documentation" to="/docs" icon="fa fa-book-open"/>
              </div>
              <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
                  <HeaderNavButton title="News" to="/news" icon="far fa-newspaper"/>
              </div>
              <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
                  <HeaderNavButton title="Contact" to="/help/contact" icon="far fa-envelope"/>
              </div>
          </div>
        </div>
      </Header>

    )
  }
}


export class HeaderLegacy extends React.Component {
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
               <HeaderNavButton title="About" description="About PHOEBE 1.0" to="/1.0" icon="fa fa-info"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Install" description="Download and Install PHOEBE 1.0" to="/1.0/download" icon="fa fa-download"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Documentation" description="PHOEBE 1.0 documentation" to="/1.0/docs" icon="fa fa-book-open"/>
             </div>
           </div>
        </div>
      </Header>

    )
  }
}

export class HeaderNavButton extends React.Component {
  render() {
    var description = this.props.description
    if (!description) {
      description = this.props.title
    }
    return (
      <Link role="button" className="btn btn-transparent btn-block" title={description} to={this.props.to}><span className={this.props.icon}></span> {this.props.title}</Link>
    )
  }
}
