import React from 'react';

import {Link, Image} from './common';

export class Footer extends React.Component {
  render() {

    return (
      <div className="jumbotron" style={{marginBottom: "0px", marginTop: "50px"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-1">
              <Image src="/nsf1.gif" height="60"/>
            </div>
            <div className="col-lg-11">
               <p style={{marginTop: "10px"}}>PHOEBE is funded in part by the National Science Foundation (<a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1517474" style={{textDecoration: "none", color: "#E6E6E6"}} target="_blank" rel="noopener noreferrer">NSF grant #1517474</a>)</p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
