import React from 'react';
import {Link, NavLink} from 'react-router-dom';

// var smoothScroll = require('smoothscroll'); // https://github.com/alicelieutier/smoothScroll


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
