import React, { Component } from 'react';

import {Link} from './common';

export class VersionSwitcherContainer extends Component {
  render() {
    return (
      <div className='versionSwitcherContainer' style={{position: 'fixed', textAlign: 'right', right: '10px', bottom: '10px', width: 'calc(100% - 10px)', padding: '0px', zIndex: 1}}>
        {this.props.children}
      </div>
    )
  }
}

export class VersionSwitcher extends Component {
  /* inspired by docs.djangoproject.com */
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }
  hoverOn = () => {
    this.setState({expanded: true});
  }
  hoverOff = () => {
    this.setState({expanded: false});
  }
  render() {
    return (
      <div className='versionSwitcher' style={{display: "block", verticalAlign: "bottom"}} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
        {this.props.versions.map((version, i) => <VersionSwitcherButton key={i} visible={this.state.expanded} version={version} to={this.props.versionLinks[i]}/>)}
        <VersionSwitcherTarget titleLong={this.props.titleLong} titleShort={this.props.titleShort} version={this.props.version}/>
      </div>
    )
  }
}

class VersionSwitcherTarget extends Component {
  render() {
    return (
      <div className="btn btn-primary btn-md current" style={{margin: '0px 3px 3px 0px', backgroundColor: "white"}}>
        <span className="hidden-xs">{this.props.titleLong || "Version:"} <strong>{this.props.version}</strong></span>
        <span className="visible-xs">{this.props.titleShort || "ver:"} <strong>{this.props.version}</strong></span>
      </div>
    )
  }
}

class VersionSwitcherButton extends Component {
  render() {
    if (!this.props.visible) {
      return null;
    }

    return (
      <Link to={this.props.to} style={{textDecoration: "none", margin: "0px 3px 3px 0px", color: "#2B71B1"}} className="btn btn-default btn-md other">{this.props.version}</Link>
    )
  }
}
