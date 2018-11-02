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
    var navbarStyle = {}
    var navbarBrandStyle = {}
    var navbarLinkStyle = {}
    var navbarLogo = '/logo_blue.svg'
    if (this.state.navbarDark) {
      navbarStyle = {backgroundColor: "#2B71B1", boxShadow: "none", transition: "none", color: "#E6E6E6"}
      navbarLogo = '/logo_invert.svg'
      navbarBrandStyle = {color: "#E6E6E6"}
      navbarLinkStyle = {color: "#E6E6E6"}

    }

    navbarBrandStyle.fontFamily = 'Merriweather';
    navbarLinkStyle.fontFamily = 'Ubuntu';

    return (
      <div className="navbar navbar-fixed-top navbar-header-fix navbar-default" style={navbarStyle} role="navigation">
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
              <NavLink to="/" className="navbar-brand text-brand" style={navbarBrandStyle}><b><Image className="navbar-brand-logo" height="32px" src={navbarLogo} style={{paddingBottom: "5px"}}/>  PHOEBE</b></NavLink>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><NavLink to="/docs" style={navbarLinkStyle}><span className="fa fa-book"></span> Docs</NavLink></li>
              <li><NavLink to="/news" style={navbarLinkStyle}><span className="fa fa-newspaper-o"></span> News</NavLink></li>
              <li><NavLink to="/publications" style={navbarLinkStyle}><span className="fa fa-clone"></span> Publications</NavLink></li>
              <li><NavLink to="http://github.com/phoebe-project/phoebe2" target="_blank" rel="noopener noreferrer" style={navbarLinkStyle}><span className="fa fa-code"></span> Source</NavLink></li>
              <li><NavLink to="/1.0" style={navbarLinkStyle}><span className="fa fa-archive"></span> Legacy</NavLink></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" title="Help" style={navbarLinkStyle}><span className="fa fa-question"></span><span className="hidden-sm"> Help</span> <b className="caret"></b></a>
                <ul className="dropdown-menu">
                  <li><NavLink to="/help/devel" style={navbarLinkStyle}>Development Team</NavLink></li>
                  <li><NavLink to="/help/contact" style={navbarLinkStyle}>Mailing Lists</NavLink></li>
                  <li><NavLink to="/docs/latest/#faq" style={navbarLinkStyle}>FAQ</NavLink></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
