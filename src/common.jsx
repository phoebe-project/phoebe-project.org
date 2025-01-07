import React, { Component } from 'react';
import { Link as RouterLink, NavLink as RouterNavLink, Navigate as RouterRedirect, useParams, useLocation, useNavigate} from 'react-router-dom';

// let smoothScroll = require('smoothscroll'); // https://github.com/alicelieutier/smoothScroll

export const metaKeywords = "phoebe, phoebe-project, eclipsing binaries, eclipsing binary, eclipsing binary stars, modeling, astronomy, software, program, code, python, package";

export function withRouter(Children){
   return (props)=>{

      const match = {params: useParams()}
      const location = useLocation()
      const navigate = useNavigate()

      return <Children {...props} match={match} location={location} navigate={navigate}/>
  }
}


function processLink(link) {
  if (link.startsWith("http") || link.startsWith("ftp")) {
    return link
  }

  if (link.startsWith("#")) {
    return link
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
  let largestPatchVersion = 0
  if (Object.keys(release_changelogs).indexOf(version_short)!==-1) {
    largestPatchVersion = release_changelogs[version_short].length - 1
  }
  return version_short + "." + largestPatchVersion
}

export class Content extends Component {
  componentDidMount() {
    // smoothScroll(0, 500);
    if (!this.props.preventscrolltop) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    let style = {paddingTop: "25px", paddingLeft: "10%", paddingRight: "10%", paddingBottom: this.props.paddingBottom || "50px"}
    let className = "content"

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
    let to = processLink(this.props.to)
    // console.log("redirect to "+to)
    if (to.startsWith("http") || to.startsWith("ftp")) {
      window.location.replace(to)
      return null
    } else {
      return (
        <RouterRedirect {...this.props} to={to}>{this.props.children}</RouterRedirect>
      )
    }
  }
}

export class NavLink extends Component {
  reloadIfNecessary = (e) => {
    if (window.location.href.indexOf("docs") !== -1) {
      // unloading the github content occasionally causes a white screen
      // for now we'll get around that by reloading the whole app when clicking away
      // probably due to a depracted NotebookPreview package - if this continues
      // to cause issues, we may need to find an alternative or freeze the
      // react dependency
      e.preventDefault();
      window.location.href = processLink(this.props.to)
    }
  }
  render() {
    let to = processLink(this.props.to)

    if (to.startsWith("http") || to.startsWith("ftp")) {
      return (
        <a {...this.props} href={to} target="_blank" rel="noopener noreferrer">{this.props.hideExternal ? null : <span className="fas fa-external-link-alt"> </span>}{this.props.children}</a>
      )
    } else {
      return (
        /* data-toggle and data-target will collapse the drop-down menu on mobile if open */
        <RouterNavLink {...this.props} to={to} data-toggle="collapse" data-target=".navbar-collapse.in" onClick={this.reloadIfNecessary}>{this.props.children}</RouterNavLink>
      )
    }
  }
}

export class Link extends Component {
  constructor(props) {
    super(props);
    this.state = {
      href: null,
    };
  }
  componentDidMount() {
  }
  reloadIfNecessary = (e) => {
    if (window.location.href.indexOf("docs") !== -1) {
      // unloading the github content occasionally causes a white screen
      // for now we'll get around that by reloading the whole app when clicking away
      // probably due to a depracted NotebookPreview package - if this continues
      // to cause issues, we may need to find an alternative or freeze the
      // react dependency
      e.preventDefault();
      window.location.href = processLink(this.props.to)
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let to = processLink(this.props.to)
    if (to!==this.state.href) {
      this.setState({href: to})
    }
  }

  render() {
    let to = processLink(this.props.to)

    if (to.startsWith("http") || to.startsWith("ftp")) {
      let icon = 'fa-external-link-alt';
      if (to.endsWith("py") || to.endsWith("ipynb")) {
        icon = 'fa-file-download';
      }
      return (
        <a {...this.props} href={to} target="_blank" rel="noopener noreferrer">{this.props.hideexternal ? null : <span className={"fas fa-fw "+icon}> </span>}{this.props.children}</a>
      )
    } else if (to.startsWith(process.env.PUBLIC_URL) || to.startsWith("/static/")) {
      return (
        <a {...this.props} href={to}>{this.props.children}</a>
      )
    } else {
      return (
        <RouterLink {...this.props} to={to} onClick={this.reloadIfNecessary}>{this.props.children}</RouterLink>
      )
    }
  }
}

export class Image extends Component {
  render() {
    let src = processLink(this.props.src)
    if (this.props.href) {
      return <a href={this.props.href} target="_blank" rel="noopener noreferrer"><Image {...this.props} href="false"/></a>
    }

    return (
      <img {...this.props} src={src} alt=""/>
    )
  }
}

export class Separator extends Component {
  render() {
    let height = this.props.height || "24px"
    let marginTop = this.props.marginTop || "30px"
    let marginBottom = this.props.marginBottom || "-62px"
    let marginRight = this.props.marginRight || "auto"
    if (this.props.large) {
      height = this.props.height || "40px"
      marginTop = this.props.marginTop || "0px"
      marginBottom = this.props.marginBottom || "-45px"
    }
    let className = this.props.className || ""

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
    let description = this.props.description
    if (!description) {
      description = this.props.title
    }
    let level = this.props.level || "primary"

    return (
      <Link role="button" className={"btn btn-"+level} style={this.props.style} title={description} to={this.props.to} hideexternal={this.props.hideexternal || this.props.icon}><span className={this.props.icon}></span> {this.props.title}</Link>
    )
  }
}

export class Alert extends Component {
  render() {
    let level = this.props.level
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

export class TestsDiv extends Component {
  render() {
    let python = this.props.python || "python"
    let version_short = this.props.version_short || 2.3

    return (
      <div>
        <p>The following additional dependencies are required to run the tests:</p>
        <ul>
          <li><Link to="https://docs.pytest.org">pytest</Link></li>
          {version_short < 2.4 ?
            <li><Link to="https://github.com/phoebe-project/phoebe1">PHOEBE 1.0</Link> with the phoebe-py wrapper</li>
            :
            null
          }
          <li><Link to="https://github.com/phoebe-project/photodynam">photodynam</Link></li>
          <li><Link to="https://github.com/hannorein/rebound">rebound</Link></li>
        </ul>
        <p>To run all tests locally on your machine, run <code>pytest</code> in the <code>tests</code> directory in the source.</p>
      </div>
    )
  }
}
