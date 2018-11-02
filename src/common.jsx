import React from 'react';
import {Link as RouterLink, NavLink as RouterNavLink, Redirect as RouterRedirect} from 'react-router-dom';

// var smoothScroll = require('smoothscroll'); // https://github.com/alicelieutier/smoothScroll


function processLink(link) {
  if (!link.startsWith("http")) {
    if (!link.startsWith("/")) {
      link = "/" + link
    }
    link = process.env.PUBLIC_URL + link
  }
  return link
}

export class Content extends React.Component {
  componentDidMount() {
    // smoothScroll(0, 500);
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div id="content" style={{paddingTop: "25px", paddingLeft: "25px", paddingRight: "25px", paddingBottom: "50px"}}>
        {this.props.children}
      </div>
    )
  }
}

export class Redirect extends React.Component {
  render() {
    var to = processLink(this.props.to)
    return (
      <RouterRedirect {...this.props} to={to}>{this.props.children}</RouterRedirect>
    )
  }
}

export class NavLink extends React.Component {
  render() {
    var to = processLink(this.props.to)
    return (
      <RouterNavLink {...this.props} to={to}>{this.props.children}</RouterNavLink>
    )
  }
}

export class Link extends React.Component {
  render() {
    var to = processLink(this.props.to)
    return (
      <RouterLink {...this.props} to={to}>{this.props.children}</RouterLink>
    )
  }
}

export class Image extends React.Component {
  render() {
    var src = processLink(this.props.src)
    return (
      <img {...this.props} src={src}/>
    )
  }
}

export class Alert extends React.Component {
  render() {
    var level = this.props.level
    if (!level) {
      level = 'warning'
    }
    return (
      <div class={"alert alert-"+level} role="alert">
        {this.props.children}
      </div>
    )
  }
}


export class AlertVersion extends React.Component {
  render() {
    return (
      <Alert level='warning'>
        PHOEBE 2 is officially released, but does not fully support all features in the original version of PHOEBE and should still be used with some caution.

        Below are the versions we suggest using based on your needs:

        <ul>
            <li><Link to="/1.0">PHOEBE 1.0 (legacy)</Link> should be used for reliable <em>trustable science results</em> and for cases that do not require the precision or additional physics introduced by PHOEBE 2.  PHOEBE 1.0 (legacy) is still significantly faster than PHOEBE 2.</li>
            <li><Link to="/docs/">PHOEBE 2</Link> should be used to learn the interface for PHOEBE going forward, and will be updated with future releases to include new physics. Although we have made every effort to test the science-results, please make sure all results make sense and report any issues.</li>

        </ul>
      </Alert>
    )
  }
}
