import React from 'react';

import {Link, Image} from './common';

export class NoHeader extends React.Component {
  render() {
    return (
      <div style={{paddingTop: "60px"}}></div>
    )
  }
}

export class Header extends React.Component {
  render() {
    return (
      <div className="jumbotron header" style={{backgroundColor: "#2B71B1", color: "#E6E6E6", overflowX: "hidden", paddingTop: "50px", paddingBottom: "25px", paddingLeft: "25px", paddingRight: "25px"}}>
        <div className="container">
          {this.props.children}
        </div>
      </div>

    )
  }
}

export class HeaderIndex extends React.Component {
  render() {
    return (
      <Header>
        <div>
          <div className="row">
              <div className="col-md-2 col-xs-4 text-center">
                  <Image src="/logo_invert.svg" alt="Home" style={{maxHeight: "160px"}}/>
              </div>
              <div className="col-md-8">
                  <h1 style={{color: "#E6E6E6", fontFamily: "Merriweather"}}>PHOEBE</h1>
                  <h4 style={{color: "#E6E6E6", fontFamily: "Merriweather"}}><i>PHysics Of Eclipsing BinariEs</i></h4>
              </div>
          </div>
          <div className="row">
              <div className="col-md-4">
              </div>
              <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
                  <HeaderNavButton title="Install" description="Download &amp; Install PHOEBE 2" to="/install" icon="fa fa-download"/>
              </div>
              <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
                  <HeaderNavButton title="Documentation" to="/docs" icon="fa fa-book"/>
              </div>
              <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
                  <HeaderNavButton title="News" to="/news" icon="fa fa-newspaper-o"/>
              </div>
              <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
                  <HeaderNavButton title="Contact" to="/help/contact" icon="fa fa-envelope-o"/>
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
            <div className="col-md-2 col-xs-4 text-center">
              <Image src="phoebe-gui.png" alt="logo" style={{minHeight: "100px", maxHeight: "160px"}}/>
            </div>
            <div className="col-md-8">
              <h1>PHOEBE 1.0 (legacy)</h1><h4><i>PHysics of Eclipsing BinariEs</i></h4>
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
               <HeaderNavButton title="Documentation" description="PHOEBE 1.0 documentation" to="/1.0/docs" icon="fa fa-book"/>
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
