import React from 'react';
import EventListener, {withOptions} from 'react-event-listener'; // https://www.npmjs.com/package/react-event-listener

import {Link, NavLink, Image} from './common';

export class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarDark: true,
    };
  }
  updateScroll = () => {
    var scrollTop = window.document.body.scrollTop || document.documentElement.scrollTop;
    var change_height = 50;
    if(scrollTop >  change_height) {
      this.setState({navbarDark: false});
    } else {
      this.setState({navbarDark: true});
    }
  }
  render() {
    var navbarClassName = "navbar navbar-fixed-top navbar-header-fix navbar-default";
    var navbarStyle = {}
    var navbarBrandStyle = {}
    var navbarLinkStyle = {}
    var navbarLogo = '/logos/logo_blue.svg'
    var navbarLogoClass="navbar-brand-logo"
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
        <EventListener
          target="window"
          onResize={this.updateScroll}
          onScroll={withOptions(this.updateScroll, {passive: true, capture: false})}
        />
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
              <li><NavLink to="/releases" style={navbarLinkStyle} title="Releases"><span className="fa fa-fw fa-tags"></span> Releases</NavLink></li>
              <li><NavLink to="/install" style={navbarLinkStyle} title="Download & Install"><span className="fa fa-fw fa-download"></span> <span>Install</span></NavLink></li>
              <li><NavLink to="/docs" style={navbarLinkStyle} title="Documentation"><span className="fa fa-fw fa-book-open"></span> <span className="hidden-md hidden-sm">Documentation</span><span className="visible-md-inline-block visible-sm-inline-block">Docs</span></NavLink></li>
              <li><NavLink to="/news" style={navbarLinkStyle} title="News"><span className="far fa-fw fa-newspaper"></span> <span className="hidden-sm">News</span></NavLink></li>
              <li><NavLink to="/workshops" style={navbarLinkStyle} title="Workshops"><span className="fas fa-fw fa-chalkboard-teacher"></span> <span className="hidden-sm">Workshops</span></NavLink></li>
              <li><NavLink to="/publications" style={navbarLinkStyle} title="Publications"><span className="fas fa-fw fa-copy"></span> <span className="hidden-md hidden-sm">Publications</span><span className="visible-md-inline-block hidden-sm">Papers</span></NavLink></li>
              <li><NavLink to="/source" style={navbarLinkStyle} title="Source-Code"><span className="fas fa-fw fa-code-branch"></span> <span className="hidden-md hidden-sm">Source</span></NavLink></li>
              <li><NavLink to="/contribute" style={navbarLinkStyle} title="Contribute"><span className="fas fa-fw fa-user-plus"></span> <span className="hidden-md hidden-sm">Contribute</span></NavLink></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" title="Help" style={navbarLinkStyle}><span className="fa fa-fw fa-question"></span> <span className="hidden-sm hidden-md">Help</span> <b className="caret"></b></a>
                <ul className="dropdown-menu">
                  <li><NavLink to="/help/devel" style={navbarLinkStyle} title="PHOEBE Development Team"><span className="fa fa-fw fa-users"></span> Development Team</NavLink></li>
                  <li><NavLink to="/help/contact" style={navbarLinkStyle} title="Mailing Lists & Contact Info"><span className="far fa-fw fa-envelope"></span> Mailing Lists</NavLink></li>
                  <li><NavLink to="/help/faq" style={navbarLinkStyle} title="Frequently Asked Questions"><span className="fa fa-fw fa-question"></span> FAQ</NavLink></li>
                  <li><NavLink to="/contribute/development-guide" style={navbarLinkStyle} title="Development Guide"><span className="fas fa-fw fa-microscope"></span> Development Guide</NavLink></li>
                  <li><NavLink to="/contribute#issues" style={navbarLinkStyle} hideExternal={true} title="Report an Issue"><span className="fas fa-fw fa-bug"></span> Report an Issue</NavLink></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
