import React, { Component } from 'react';

import { NavLink, Image } from './common';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav"
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from "react-bootstrap/NavDropdown";

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
            <NavLink to="/releases" style={navbarLinkStyle} title="Releases"><span className="fa fa-fw fa-tags"></span> <span className="hidden-sm">Releases</span></NavLink>
            <NavLink to="/install" style={navbarLinkStyle} title="Download & Install"><span className="fa fa-fw fa-download"></span> <span className="hidden-sm">Install</span></NavLink>
            <NavLink to="/clients" style={navbarLinkStyle} title="Interactive Clients"><span className="fa fa-fs fa-desktop"></span> <span className="hidden-sm">Clients</span></NavLink>
            <NavLink to="/tables" style={navbarLinkStyle} title="Passband & Atmosphere Tables"><span className="fa fa-fs fa-th"></span> <span className="hidden-sm">Tables</span></NavLink>
            <NavLink to="/docs" style={navbarLinkStyle} title="Documentation"><span className="fa fa-fw fa-book-open"></span> <span className="hidden-sm hidden-xs">Docs</span></NavLink>
            <NavLink to="/news" style={navbarLinkStyle} title="News"><span className="far fa-fw fa-newspaper"></span> <span className="hidden-sm hidden-md">News</span></NavLink>
            <NavLink to="/publications" style={navbarLinkStyle} title="Publications"><span className="fas fa-fw fa-copy"></span> <span
              className="hidden-sm hidden-md">Publications</span></NavLink>
            <NavLink to="/workshops" style={navbarLinkStyle} title="Workshops"><span className="fas fa-fw fa-chalkboard-teacher"></span> <span
              className="hidden-sm hidden-md">Workshops</span></NavLink>
            <NavDropdown title={<><span className="fa fa-fw fa-code-branch"></span> <span className="hidden-sm hidden-md">Develop</span></>}>
              <NavDropdown.Item><NavLink to="/source" style={navbarLinkStyle} title="Source-Code"><span className="fas fa-fw fa-code"></span> <span>Source Code</span></NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/dependencies" style={navbarLinkStyle} title="Dependencies"><span className="fas fa-fw fa-stream"></span> <span>Dependencies</span></NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/contribute" style={navbarLinkStyle} title="Contribute"><span className="fas fa-fw fa-user-plus"></span> <span>Contribute</span></NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/development-team" style={navbarLinkStyle} title="PHOEBE Development Team"><span className="fa fa-fw fa-users"></span> Development Team</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/contribute/development-guide" style={navbarLinkStyle} title="Development Guide"><span className="fas fa-fw fa-microscope"></span> Development Guide</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/contribute#features" style={navbarLinkStyle} hideexternal="true" title="Request New Feature"><span className="fas fa-fw fa-flask"></span> Request New
                Feature</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/contribute#issues" style={navbarLinkStyle} hideexternal="true" title="Report an Issue"><span className="fas fa-fw fa-bug"></span> Report an Issue</NavLink></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<><span className="fa fa-fw fa-question"></span> <span className="hidden-sm hidden-md">Help</span></>}>
              <NavDropdown.Item><NavLink to="/help/faq" style={navbarLinkStyle} title="Frequently Asked Questions"><span className="fa fa-fw fa-question"></span> FAQ</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/help/contact" style={navbarLinkStyle} title="Ask a Question"><span className="fas fa-fw fa-comment-alt"></span> Ask a Question</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/development-team" style={navbarLinkStyle} title="PHOEBE Development Team"><span className="fa fa-fw fa-users"></span> Development Team</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/contribute#features" style={navbarLinkStyle} hideexternal="true" title="Request New Feature"><span className="fas fa-fw fa-flask"></span> Request New Feature</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/contribute#issues" style={navbarLinkStyle} hideexternal="true" title="Report an Issue"><span className="fas fa-fw fa-bug"></span> Report an Issue</NavLink></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
