import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import EventListener, {withOptions} from 'react-event-listener'; // https://www.npmjs.com/package/react-event-listener



export class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarDark: true,
    };
  }
  componentDidMount() {
  }
  componentWillUnmount() {
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
              <a className="navbar-brand text-brand active" href="/" style={navbarBrandStyle}><b><img className="navbar-brand-logo" height="32px" src={navbarLogo} style={{paddingBottom: "5px"}}/>  PHOEBE</b></a>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><a href="/docs/2.1/" style={navbarLinkStyle}><span className="fa fa-book"></span> Docs</a></li>
              <li><a href="/news" style={navbarLinkStyle}><span className="fa fa-newspaper-o"></span> News</a></li>
              <li><a href="/publications" style={navbarLinkStyle}><span className="fa fa-clone"></span> Publications</a></li>
              <li><a href="http://github.com/phoebe-project/phoebe2" target="_blank" rel="noopener noreferrer" style={navbarLinkStyle}><span className="fa fa-code"></span> Source</a></li>
              <li><a href="/1.0" style={navbarLinkStyle}><span className="fa fa-archive"></span> Legacy</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" title="Help" style={navbarLinkStyle}><span className="fa fa-question"></span><span className="hidden-sm"> Help</span> <b className="caret"></b></a>
                <ul className="dropdown-menu">
                  <li><a href="/help/devel">Development Team</a></li>
                  <li><a href="/help/contact">Mailing Lists</a></li>
                  <li><a href="/docs/2.1/#faq">FAQ</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
