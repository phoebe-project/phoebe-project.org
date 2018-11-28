import React from 'react';
import {Link as RouterLink, NavLink as RouterNavLink, Redirect as RouterRedirect} from 'react-router-dom';

// var smoothScroll = require('smoothscroll'); // https://github.com/alicelieutier/smoothScroll

export const metaKeywords = "phoebe, phoebe-project, eclipsing binaries, eclipsing binary stars, astronomy";

function processLink(link) {
  if (link.startsWith("http") || link.startsWith("ftp")) {
    return link
  }

  if (link.startsWith("#")) {
    link = link
  } else {
    if (!link.startsWith("/")) {
      link = "/" + link
    }
    if (!link.startsWith(process.env.PUBLIC_URL)) {
      link = process.env.PUBLIC_URL + link
    }
  }
  return link
}

export function getLatestPatchVersion(version_short, release_changelogs) {
  // console.log("getLatestPatchVersion version_short: "+version_short+"  release_changelogs: "+release_changelogs)
  var largestPatchVersion = 0
  if (Object.keys(release_changelogs).indexOf(version_short)!==-1) {
    largestPatchVersion = release_changelogs[version_short].length - 1
  }
  return version_short + "." + largestPatchVersion
}

export class Content extends React.Component {
  componentDidMount() {
    // smoothScroll(0, 500);
    if (!this.props.preventScrollTop) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    var style = {paddingTop: "25px", paddingLeft: "10%", paddingRight: "10%", paddingBottom: "50px"}
    var className = "content"

    if (this.props.dark) {
      className = className + " content-dark"
    }

    Object.assign(style, this.props.style)

    return (
      <div {...this.props} className={className} style={style}>
        {this.props.children}
      </div>
    )
  }
}

export class Redirect extends React.Component {
  render() {
    var to = processLink(this.props.to)
    console.log("redirect to "+to)
    return (
      <RouterRedirect {...this.props} to={to}>{this.props.children}</RouterRedirect>
    )
  }
}

export class NavLink extends React.Component {
  render() {
    var to = processLink(this.props.to)

    if (to.startsWith("http") || to.startsWith("ftp")) {
      return (
        <a {...this.props} href={to} target="blank" target="_blank" rel="noopener noreferrer">{this.props.hideExternal ? null : <span className="fas fa-external-link-alt"> </span>}{this.props.children}</a>
      )
    } else {
      return (
        /* data-toggle and data-target will collapse the drop-down menu on mobile if open */
        <RouterNavLink {...this.props} to={to} data-toggle="collapse" data-target=".navbar-collapse.in"s>{this.props.children}</RouterNavLink>
      )
    }
  }
}

export class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      downloadContent: null,
      href: null,
    };
  }
  componentDidMount() {
    if (this.props.downloadFilename) {
      fetch(processLink(this.props.to))
        .catch(() => this.setState({content: null}))
        .then(res => {
          if (res.ok) {
            return res.text();
          } else {
            return null;
          }
        })
        .then(content => this.setState({downloadContent: content}))
      }
  }
  render() {
    var to = processLink(this.props.to)
    if (to!==this.state.href) {
      this.setState({href: to})
    }

    if (to.startsWith("http") || to.startsWith("ftp")) {
      if (this.props.downloadFilename) {
        if (this.state.downloadContent) {
          return (
            <a {...this.props} href={"data:text/plain,"+this.state.downloadContent} type="text/x-python" download={this.props.downloadFilename}><span className="fas fa-file-download"></span> {this.props.children}</a>
          )
        } else {
          return (
            <p style={{display: "inline"}}>{this.props.children}</p>
          )
        }
      } else {
        return (
          <a {...this.props} href={to} target="blank" target="_blank" rel="noopener noreferrer">{this.props.hideExternal ? null : <span className="fas fa-external-link-alt"> </span>}{this.props.children}</a>
        )
      }
    } else if (to.startsWith(process.env.PUBLIC_URL) || to.startsWith("/static/")) {
      return (
        <a {...this.props} href={to}>{this.props.children}</a>
      )
    } else {
      return (
        <RouterLink {...this.props} to={to}>{this.props.children}</RouterLink>
      )
    }
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
      <div className={"alert alert-"+level} role="alert">
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
            <li><Link to="/releases/legacy">PHOEBE 1.0 (legacy)</Link> should be used for reliable <em>trustable science results</em> and for cases that do not require the precision or additional physics introduced by PHOEBE 2.  PHOEBE 1.0 (legacy) is still significantly faster than PHOEBE 2.</li>
            <li><Link to="/releases/latest">PHOEBE 2</Link> should be used to learn the interface for PHOEBE going forward, and will be updated with future releases to include new physics. Although we have made every effort to test the science-results, please make sure all results make sense and report any issues.</li>

        </ul>
      </Alert>
    )
  }
}
