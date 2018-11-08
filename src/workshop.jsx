import React, { Component } from 'react';

import {Content, Link, Redirect} from './common';
import {Header, HeaderNavButton} from './header';
import {NotFound} from './errors';

var active_workshops = {"2019may": "May 2019, Chile"};
var archived_workshops = {"2018june": "June 2018, Villanova PA"};

export class Workshop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workshop: null,
    };
  }
  render() {
    // force re-render when workshop changes
    if (this.props.match.params.workshop !== this.state.workshop) {
      this.setState({workshop: this.props.match.params.workshop})
    }


    if (this.state.workshop==null) {
      return(
        <div>
          <Header>
            <h1>PHOEBE Workshops</h1>
          </Header>
          <Content>
            <p>PHOEBE Workshops aim to provide an opportunity for the community and users to learn how to use PHOEBE, as well as an opportunity for the <Link to="/help/devel">developers</Link> to learn what features and improvements can be made.</p>
            <p>These workshops are made possible through generous support from the <Link to="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1517474">National Science Foundation</Link>.</p>
            <h1>Upcoming Workshops</h1>
              {Object.keys(active_workshops).length ?
                <ul>{Object.keys(active_workshops).map(slug => <li><Link to={"/workshop/"+slug}>{active_workshops[slug]}</Link></li>)}</ul>
                :
                <p>There are no currently planned workshops.  Check back soon or contact us if you'd be interested in hosting the next PHOEBE workshop.</p>
              }
            <h1>Past Workshops</h1>
              <ul>{Object.keys(archived_workshops).map(slug => <li><Link to={"/workshop/"+slug}>{archived_workshops[slug]}</Link></li>)}</ul>


          </Content>
        </div>
      )
    } else if (Object.keys(active_workshops).indexOf(this.state.workshop)!==-1) {
      return(<WorkshopActive workshop={this.state.workshop}/>)
    } else if (Object.keys(archived_workshops).indexOf(this.state.workshop)!==-1) {
      return(<WorkshopArchived workshop={this.state.workshop}/>)
    } else {
      return(<NotFound>{this.state.workshop} workshop not found, try all <Link to="/workshop">workshops</Link></NotFound>)
    }
  }
}

class WorkshopActive extends Component {
  render() {
    var workshop = this.props.workshop
    var description = active_workshops[workshop]

    return (
      <div>
        <Header>
          <h1>PHOEBE Workshop | {description}</h1>

          <div className="row">
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Rationale" description="Rationale" to={"/workshop/"+workshop+"/rationale"} icon="fas fa-scroll"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Registration" description="Registration" to={"/workshop/"+workshop+"/registration"} icon="fas fa-user-plus"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Important Dates" description="Important Dates" to={"/workshop/"+workshop+"/important-dates"} icon="far fa-calendar-alt"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Schedule" description="Schedule" to={"/workshop/"+workshop+"/schedule"} icon="fas fa-clipboard-list"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Committee" description="Organizing Committee" to={"/workshop/"+workshop+"/organizing_committee"} icon="fas fa-people-carry"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="At the Meeting" description="At the Meeting" to={"/workshop/"+workshop+"/at_the_meeting"} icon="fas fa-map-marker-alt"/>
             </div>
           </div>

        </Header>
        <Content>
          <p>workshop content here, dynamically loaded from GitHub similar to <Link to="/docs">docs</Link></p>
        </Content>
      </div>
    )
  }
}

class WorkshopArchived extends Component {
  render() {
    var workshop = this.props.workshop
    var description = archived_workshops[workshop]

    return (
      <div>
        <Header>
          <h1>PHOEBE Workshop | {description}</h1>

          <div className="row">
             <div className="col-md-4"></div>


             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Materials" description="Materials" to={"/workshop/"+workshop+"/materials"} icon="far fa-file-alt"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Rationale" description="Rationale" to={"/workshop/"+workshop+"/rationale"} icon="fas fa-scroll"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Committee" description="Organizing Committee" to={"/workshop/"+workshop+"/organizing_committee"} icon="fas fa-people-carry"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Attendees" description="Attendees" to={"/workshop/"+workshop+"/attendees"} icon="fas fa-users"/>
             </div>

           </div>

        </Header>
        <Content>
          <p>workshop content here, dynamically loaded from GitHub similar to <Link to="/docs">docs</Link></p>
        </Content>
      </div>
    )
  }
}

export class WorkshopRegistration extends Component {
  render() {
    return(<Redirect to="https://docs.google.com/forms/d/e/1FAIpQLSfjVAb4zAjdoO7GeEVTPCupxhkIrrk611__8a_3Ya6rqVNj4Q/viewform"/>)
  }
}
