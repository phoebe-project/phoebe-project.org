import React, { Component } from 'react';
import {Link as RouterLink, NavLink as RouterNavLink, Redirect as RouterRedirect} from 'react-router-dom';

// var smoothScroll = require('smoothscroll'); // https://github.com/alicelieutier/smoothScroll

export const metaKeywords = "phoebe, phoebe-project, eclipsing binaries, eclipsing binary, eclipsing binary stars, modeling, astronomy, software, program, code, python, package";

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

export class Content extends Component {
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

export class Redirect extends Component {
  render() {
    var to = processLink(this.props.to)
    // console.log("redirect to "+to)
    if (to.startsWith("http") || to.startsWith("ftp")) {
      window.location.replace(to)
      return (null)
    } else {
      return (
        <RouterRedirect {...this.props} to={to}>{this.props.children}</RouterRedirect>
      )
    }
  }
}

export class NavLink extends Component {
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

export class Link extends Component {
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
            <a {...this.props} href={"data:text/plain,"+this.state.downloadContent} type="text/x-python" download={this.props.downloadFilename}><span className="fas fa-fw fa-file-download"></span> {this.props.children}</a>
          )
        } else {
          return (
            <p style={{display: "inline"}}>{this.props.children}</p>
          )
        }
      } else {
        return (
          <a {...this.props} href={to} target="blank" target="_blank" rel="noopener noreferrer">{this.props.hideExternal ? null : <span className="fas fa-fw fa-external-link-alt"> </span>}{this.props.children}</a>
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

export class Image extends Component {
  render() {
    var src = processLink(this.props.src)
    return (
      <img {...this.props} src={src}/>
    )
  }
}

export class Separator extends Component {
  render() {
    var height = this.props.height || "24px"
    var marginTop = this.props.marginTop || "30px"
    var marginBottom = this.props.marginBottom || "-62px"
    var marginRight = this.props.marginRight || "auto"
    if (this.props.large) {
      var height = this.props.height || "40px"
      var marginTop = this.props.marginTop || "0px"
      var marginBottom = this.props.marginBottom || "-45px"
    }
    var className = this.props.className || ""

    if (this.props.flip) {
      className = className + " img-flip-vert"
    }

    return (
      <Image src="/logos/hex_separator.svg" className={"img-center "+className} style={{height: height, marginTop: marginTop, marginBottom: marginBottom, marginRight: marginRight}}/>
    )
  }
}

export class Button extends Component {
  render() {
    var description = this.props.description
    if (!description) {
      description = this.props.title
    }
    // var level = this.props.level || "primary"

    return (
      <Link role="button" className="btn btn-primary" style={this.props.style} title={description} to={this.props.to} hideExternal={this.props.hideExternal || this.props.icon}><span className={this.props.icon}></span> {this.props.title}</Link>
    )
  }
}

export class Alert extends Component {
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

export class NosetestsDiv extends Component {
  render() {
    return (
      <div>
        <p>The following additional dependencies are required to run the nosetests:</p>
        <ul>
          <li><Link to="http://nose.readthedocs.io/en/latest/">nose</Link></li>
          <li><Link to="https://github.com/phoebe-project/phoebe1">PHOEBE 1.0</Link> with the phoebe-py wrapper</li>
          <li><Link to="https://github.com/phoebe-project/photodynam">photodynam</Link></li>
          <li><Link to="https://github.com/hannorein/rebound">rebound</Link></li>
        </ul>
        <p>To run all tests locally on your machine, run the following in the ‘tests’ directory in the source.</p>
        <pre>
          python run_tests.py nosetests
        </pre>
      </div>
    )
  }
}
