import React, { Component } from 'react';

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import {Content, Link, Redirect, Separator} from './common';
import {GitHubContent} from './githubcontent';
import {Header, HeaderNavButton} from './header';
import {NotFound} from './errors';

var active_workshops = {};
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
          <Helmet>
            <title>PHOEBE | Workshops</title>
            <meta name="description" content="workshops are designed to help teach the community how to use the PHOEBE software package"/>
          </Helmet>
          <Header>
            <h1>PHOEBE Workshops</h1>
          </Header>
          <Content>
            <p>PHOEBE Workshops aim to provide an opportunity for the community and users to learn how to use PHOEBE, as well as an opportunity for the <Link to="/help/devel">developers</Link> to learn what features and improvements can be made.</p>
            <p>These workshops are made possible through generous support from the <Link to="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1517474">National Science Foundation</Link>.</p>
            <Separator large={false}/>
          </Content>
          <Content dark={true}>
            <h2>Past Workshops</h2>
            <ul>{Object.keys(archived_workshops).map(slug => <li><Link to={"/workshops/"+slug}>{archived_workshops[slug]}</Link></li>)}</ul>
            <Separator flip={true} large={false}/>
          </Content>
          <Content>
            <h2>Upcoming Workshops</h2>
            {Object.keys(active_workshops).length ?
              <ul>{Object.keys(active_workshops).map(slug => <li><Link to={"/workshops/"+slug}>{active_workshops[slug]}</Link></li>)}</ul>
              :
              <p>There are no currently planned workshops.  Check back soon or contact us if you'd be interested in hosting the next PHOEBE workshop.</p>
            }
          </Content>
        </div>
      )
    } else if (Object.keys(active_workshops).indexOf(this.state.workshop)!==-1) {
      return(<WorkshopEntry active={true} workshop={this.state.workshop} slug={this.props.match.params.slug}/>)
    } else if (Object.keys(archived_workshops).indexOf(this.state.workshop)!==-1) {
      return(<WorkshopEntry active={false} workshop={this.state.workshop} slug={this.props.match.params.slug}/>)
    } else {
      return(<NotFound>{this.state.workshop} workshop not found, try all <Link to="/workshops">workshops</Link></NotFound>)
    }
  }
}

class WorkshopActive extends Component {
  render() {
    var workshop = this.props.workshop
    var description = active_workshops[workshop]

    return (
      <div>
        <Helmet>
          <title>PHOEBE | Workshops | {description}</title>
        </Helmet>
        <Header>
          <h1>PHOEBE Workshop | {description}</h1>

          <div className="row">

           </div>

        </Header>
        <Content>
          <p>workshop content here, dynamically loaded from GitHub similar to <Link to="/docs">docs</Link></p>
        </Content>
      </div>
    )
  }
}

class WorkshopEntry extends Component {
  render() {
    var active = this.props.active;
    var workshop = this.props.workshop
    var description = archived_workshops[workshop]
    var slug = this.props.slug

    if (!slug) {
      if (active) {
        slug = "rationale"
      } else {
        slug = "materials"
      }
    }

    var path = slug + ".md"

    return (
      <div>
        <Helmet>
          <title>PHOEBE | Workshops | {description}</title>
          <meta name="ROBOTS" content="NOINDEX, NOFOLLOW"/>
        </Helmet>
        <Header>
          <h1>PHOEBE Workshop | {description}</h1>

             {active ?
               <div className="row">
                 <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
                   <HeaderNavButton title="Rationale" description="Rationale" to={"/workshops/"+workshop+"/rationale"} icon="fas fa-scroll"/>
                 </div>
                 <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
                   <HeaderNavButton title="Registration" description="Registration" to={"/workshops/"+workshop+"/registration"} icon="fas fa-user-plus"/>
                 </div>
                 <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
                   <HeaderNavButton title="Important Dates" description="Important Dates" to={"/workshops/"+workshop+"/important_dates"} icon="far fa-calendar-alt"/>
                 </div>
                 <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
                   <HeaderNavButton title="Schedule" description="Schedule" to={"/workshops/"+workshop+"/schedule"} icon="fas fa-clipboard-list"/>
                 </div>
                 <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
                   <HeaderNavButton title="Committee" description="Organizing Committee" to={"/workshops/"+workshop+"/organizing_committee"} icon="fas fa-people-carry"/>
                 </div>
                 <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
                   <HeaderNavButton title="At the Meeting" description="At the Meeting" to={"/workshops/"+workshop+"/at_the_meeting"} icon="fas fa-map-marker-alt"/>
                 </div>
               </div>
               :
               <div className="row">
                 <div className="col-md-4"></div>
                 <div className="col-md-2"></div>
                 <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
                   <HeaderNavButton title="Materials" description="Materials" to={"/workshops/"+workshop+"/materials"} icon="far fa-file-alt"/>
                 </div>
                 <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
                   <HeaderNavButton title="Rationale" description="Rationale" to={"/workshops/"+workshop+"/rationale"} icon="fas fa-scroll"/>
                 </div>
                 <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
                   <HeaderNavButton title="Committee" description="Organizing Committee" to={"/workshops/"+workshop+"/organizing_committee"} icon="fas fa-people-carry"/>
                 </div>
                 {/* <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
                   <HeaderNavButton title="Attendees" description="Attendees" to={"/workshops/"+workshop+"/attendees"} icon="fas fa-users"/>
                 </div> */}
               </div>
             }


        </Header>
        <Content>
          <GitHubContent repo='phoebe2-workshop' branch={workshop} path={path} loadingText="LOADING WORKSHOP CONTENT..." ></GitHubContent>
        </Content>
      </div>
    )
  }
}

export class WorkshopRegistration extends Component {
  render() {
    window.location = 'https://docs.google.com/forms/d/e/1FAIpQLSfjVAb4zAjdoO7GeEVTPCupxhkIrrk611__8a_3Ya6rqVNj4Q/viewform'
    return(
      null
    )
  }
}
