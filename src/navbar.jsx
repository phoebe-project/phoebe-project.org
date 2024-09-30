import React, { Component } from 'react';

import { NavLink, Image } from './common';


export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarDark: true,
    };
  }

  render() {
    let navbarClassName = "navbar navbar-fixed-top navbar-header-fix navbar-default";
    let navbarStyle = {}
    let navbarBrandStyle = {}
    let navbarLinkStyle = {}
    let navbarLogo = '/logos/logo_blue.svg'
    let navbarLogoClass="navbar-brand-logo"
    if (this.state.navbarDark) {
      navbarClassName = navbarClassName + " navbar-transparent"
      // navbarStyle = {backgroundColor: "#2B71B1", boxShadow: "none", transition: "none", color: "#E6E6E6"}
      navbarBrandStyle = {color: "#E6E6E6", fontVariant: "small-caps"}
      navbarLinkStyle = {color: "#E6E6E6"}
      navbarLogoClass = navbarLogoClass + " logo-invert"

    }

    navbarBrandStyle.fontFamily = 'Merriweather';
    navbarLinkStyle.fontFamily = 'Ubuntu';

    return (
      <div className={navbarClassName} style={navbarStyle} role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
              <NavLink to="/" className="navbar-brand" style={navbarBrandStyle}><b><Image className={navbarLogoClass} height="32px" src={navbarLogo} style={{paddingBottom: "5px"}}/>  PHOEBE</b></NavLink>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><NavLink to="/releases" style={navbarLinkStyle} title="Releases"><span className="fa fa-fw fa-tags"></span> <span className="hidden-sm">Releases</span></NavLink></li>
              <li><NavLink to="/install" style={navbarLinkStyle} title="Download & Install"><span className="fa fa-fw fa-download"></span> <span className="hidden-sm">Install</span></NavLink></li>
              <li><NavLink to="/clients" style={navbarLinkStyle} title="Interactive Clients"><span className="fa fa-fs fa-desktop"></span> <span className="hidden-sm">Clients</span></NavLink></li>
              <li><NavLink to="/tables" style={navbarLinkStyle} title="Passband & Atmosphere Tables"><span className="fa fa-fs fa-th"></span> <span className="hidden-sm">Tables</span></NavLink></li>
              <li><NavLink to="/docs" style={navbarLinkStyle} title="Documentation"><span className="fa fa-fw fa-book-open"></span> <span className="hidden-sm hidden-xs">Docs</span><span className="visible-xs-inline">Documentation</span></NavLink></li>
              <li><NavLink to="/news" style={navbarLinkStyle} title="News"><span className="far fa-fw fa-newspaper"></span> <span className="hidden-sm hidden-md">News</span></NavLink></li>
              <li><NavLink to="/publications" style={navbarLinkStyle} title="Publications"><span className="fas fa-fw fa-copy"></span> <span className="hidden-sm hidden-md">Publications</span></NavLink></li>
              <li><NavLink to="/workshops" style={navbarLinkStyle} title="Workshops"><span className="fas fa-fw fa-chalkboard-teacher"></span> <span className="hidden-sm hidden-md">Workshops</span></NavLink></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" title="Develop" style={navbarLinkStyle}><span className="fa fa-fw fa-code-branch"></span> <span className="hidden-sm hidden-md">Develop</span> <b className="caret"></b></a>
                <ul className="dropdown-menu">
                  <li><NavLink to="/source" style={navbarLinkStyle} title="Source-Code"><span className="fas fa-fw fa-code"></span> <span>Source Code</span></NavLink></li>
                  <li><NavLink to="/dependencies" style={navbarLinkStyle} title="Dependencies"><span className="fas fa-fw fa-stream"></span> <span>Dependencies</span></NavLink></li>
                  <li><NavLink to="/contribute" style={navbarLinkStyle} title="Contribute"><span className="fas fa-fw fa-user-plus"></span> <span>Contribute</span></NavLink></li>
                  <li><NavLink to="/development-team" style={navbarLinkStyle} title="PHOEBE Development Team"><span className="fa fa-fw fa-users"></span> Development Team</NavLink></li>
                  <li><NavLink to="/contribute/development-guide" style={navbarLinkStyle} title="Development Guide"><span className="fas fa-fw fa-microscope"></span> Development Guide</NavLink></li>
                  <li><NavLink to="/contribute#features" style={navbarLinkStyle} hideexternal="true" title="Request New Feature"><span className="fas fa-fw fa-flask"></span> Request New Feature</NavLink></li>
                  <li><NavLink to="/contribute#issues" style={navbarLinkStyle} hideexternal="true" title="Report an Issue"><span className="fas fa-fw fa-bug"></span> Report an Issue</NavLink></li>
                </ul>
              </li>

              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" title="Help" style={navbarLinkStyle}><span className="fa fa-fw fa-question"></span> <span className="hidden-sm hidden-md">Help</span> <b className="caret"></b></a>
                <ul className="dropdown-menu">
                  <li><NavLink to="/help/faq" style={navbarLinkStyle} title="Frequently Asked Questions"><span className="fa fa-fw fa-question"></span> FAQ</NavLink></li>
                  <li><NavLink to="/help/contact" style={navbarLinkStyle} title="Ask a Question"><span className="fas fa-fw fa-comment-alt"></span> Ask a Question</NavLink></li>
                  <li><NavLink to="/development-team" style={navbarLinkStyle} title="PHOEBE Development Team"><span className="fa fa-fw fa-users"></span> Development Team</NavLink></li>
                  <li><NavLink to="/contribute#features" style={navbarLinkStyle} hideexternal="true" title="Request New Feature"><span className="fas fa-fw fa-flask"></span> Request New Feature</NavLink></li>
                  <li><NavLink to="/contribute#issues" style={navbarLinkStyle} hideexternal="true" title="Report an Issue"><span className="fas fa-fw fa-bug"></span> Report an Issue</NavLink></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
