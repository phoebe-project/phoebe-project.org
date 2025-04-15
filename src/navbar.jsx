import React, { Component } from 'react';

import { NavLink, Image } from './common';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav"
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  FaTag,
  FaDownload,
  FaDesktop,
  FaDatabase,
  FaBookOpen,
  FaNewspaper,
  FaFile,
  FaChalkboard,
  FaTerminal,
  FaQuestion,
  FaUsers,
  FaFlask,
  FaBug,
  FaCode,
  FaUserPlus,
  FaMicroscope
} from "react-icons/fa6"
import {FaCommentAlt, FaStream} from "react-icons/fa";

export class MyNavbar extends Component {
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
  componentDidMount() {
    window.addEventListener('scroll', this.updateScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateScroll);
  }
  render() {
    let navbarClassName = "navbar navbar-fixed-top navbar-header-fix navbar-default";
    let navbarStyle = {}
    let navbarBrandStyle = {}
    let navbarLinkStyle = {textDecoration: 'none'}
    let navbarLogo = '/logos/logo_blue.svg'
    let navbarLogoClass="navbar-brand-logo"
    if (this.state.navbarDark) {
      navbarClassName = navbarClassName + " navbar-transparent"
      navbarBrandStyle = {color: "#E6E6E6", fontVariant: "small-caps"}
      navbarLinkStyle.color = "#E6E6E6"
      navbarLogoClass = navbarLogoClass + " logo-invert"
    }

    navbarBrandStyle.fontFamily = 'Merriweather';
    navbarLinkStyle.fontFamily = 'Ubuntu';

    return (
      <Navbar className={navbarClassName} fixed="top" expand="md">
        <Container>
        <Navbar.Brand>
          <NavLink to="/" className="navbar-brand"><b><Image className={navbarLogoClass} height="32px" src={navbarLogo} style={{paddingBottom: "5px"}}/>  PHOEBE</b></NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="w-100 justify-content-between">
            <NavLink to="/releases" style={navbarLinkStyle} title="Releases"><FaTag /> <span className="hidden-sm">Releases</span></NavLink>
            <NavLink to="/install" style={navbarLinkStyle} title="Download & Install"><FaDownload /> <span className="hidden-sm">Install</span></NavLink>
            <NavLink to="/clients" style={navbarLinkStyle} title="Interactive Clients"><FaDesktop /> <span className="hidden-sm">Clients</span></NavLink>
            <NavLink to="/tables" style={navbarLinkStyle} title="Passband & Atmosphere Tables"><FaDatabase /> <span className="hidden-sm">Tables</span></NavLink>
            <NavLink to="/docs" style={navbarLinkStyle} title="Documentation"><FaBookOpen /> <span className="hidden-sm hidden-xs">Docs</span></NavLink>
            <NavLink to="/news" style={navbarLinkStyle} title="News"><FaNewspaper /> <span className="hidden-sm hidden-md">News</span></NavLink>
            <NavLink to="/publications" style={navbarLinkStyle} title="Publications"><FaFile /> <span
              className="hidden-sm hidden-md">Publications</span></NavLink>
            <NavLink to="/workshops" style={navbarLinkStyle} title="Workshops"><FaChalkboard /> <span
              className="hidden-sm hidden-md">Workshops</span></NavLink>
            <NavDropdown title={<><FaTerminal /> <span className="hidden-sm hidden-md">Develop</span></>}>
              <NavDropdown.Item><NavLink to="/source" style={navbarLinkStyle} title="Source-Code"><FaCode /> <span>Source Code</span></NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/dependencies" style={navbarLinkStyle} title="Dependencies"><FaStream /> <span>Dependencies</span></NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/contribute" style={navbarLinkStyle} title="Contribute"><FaUserPlus /> <span>Contribute</span></NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/development-team" style={navbarLinkStyle} title="PHOEBE Development Team"><FaUsers /> Development Team</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/contribute/development-guide" style={navbarLinkStyle} title="Development Guide"><FaMicroscope /> Development Guide</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/contribute#features" style={navbarLinkStyle} hideexternal="true" title="Request New Feature"><FaFlask /> Request New
                Feature</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/contribute#issues" style={navbarLinkStyle} hideexternal="true" title="Report an Issue"><FaBug /> Report an Issue</NavLink></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<><FaQuestion /> <span className="hidden-sm hidden-md">Help</span></>}>
              <NavDropdown.Item><NavLink to="/help/faq" style={navbarLinkStyle} title="Frequently Asked Questions"><FaQuestion /> FAQ</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/help/contact" style={navbarLinkStyle} title="Ask a Question"><FaCommentAlt /> Ask a Question</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/development-team" style={navbarLinkStyle} title="PHOEBE Development Team"><FaUsers /> Development Team</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/contribute#features" style={navbarLinkStyle} hideexternal="true" title="Request New Feature"><FaFlask /> Request New Feature</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/contribute#issues" style={navbarLinkStyle} hideexternal="true" title="Report an Issue"><FaBug /> Report an Issue</NavLink></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
