import React, { Component } from 'react';

import {Image, Separator} from './common';

export class Footer extends Component {
  render() {

    return (
      <div className="jumbotron" style={{marginBottom: "0px", marginTop: "50px"}}>
        <Separator large={true} marginTop="-45px" marginBottom="0px" className="hidden-sm hidden-xs"/>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-xs-2 visible-sm visible-xs"/>
            <div className="col-md-2 col-sm-2 col-xs-4">
              <Image src="/logos/NSF_logo.gif" className="img-center" height="60" width="60" style={{marginTop: "15px", marginBottom: "15px"}}/>
            </div>
            <div className="col-sm-2 col-xs-4 visible-sm visible-xs">
              <Image src="/logos/NASA_logo.svg" className="img-center" height="70" width="70" style={{marginTop: "10px", marginBottom: "10px"}}/>
            </div>
            <div className="col-sm-4 col-xs-2 visible-sm visible-xs"/>
            <div className="col-md-8 col-xs-12">
               <p style={{marginTop: "10px", textAlign: "center", fontSize: "16px"}}>
                 PHOEBE is funded in part by
                 the National Science Foundation (NSF <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1517474" style={{textDecoration: "none", color: "#E6E6E6"}} target="_blank" rel="noopener noreferrer">#1517474</a>, <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1909109" style={{textDecoration: "none", color: "#E6E6E6"}} target="_blank" rel="noopener noreferrer">#1909109</a>)
                 and the National Aeronautics and Space Administration (<a href="https://ui.adsabs.harvard.edu/abs/2017adap.prop...68P" style={{textDecoration: "none", color: "#E6E6E6"}} target="_blank" rel="noopener noreferrer">NASA 17-ADAP17-68</a>).
              </p>
            </div>
            <div className="col-md-2 hidden-sm hidden-xs">
              <Image src="/logos/NASA_logo.svg" className="img-center" height="70" width="70" style={{marginTop: "10px", marginBottom: "10px"}}/>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
