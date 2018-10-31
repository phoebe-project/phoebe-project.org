import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export class Footer extends React.Component {
  render() {

    return (
      <div className="jumbotron" style={{marginBottom: "0px", marginTop: "50px"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-1">
              <img src="/nsf1.gif" height="60"/>
            </div>
            <div className="col-lg-11">
               <p style={{marginTop: "10px"}}>PHOEBE is funded in part by the National Science Foundation (NSF grant #1517474)</p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
