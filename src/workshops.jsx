import React, { Component } from 'react';

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import {Content, Link, Image, Separator, Alert} from './common';
import {GitHubContent} from './githubcontent';
import {Header, HeaderNavButton} from './header';
import {NotFound} from './errors';

var upcoming_workshops = {};  // REGISTRATION OPEN/ANNOUNCED THROUGH CLOSED
var active_workshops = {}; // REGISTRATION CLOSED THROUGH END OF WORKSHOP
var archived_workshops = {"2018june": "June 2018, Villanova PA",
                          "2019july": "July 2019, Villanova PA",
                          "2021june": "June 2021, Virtual Workshop",
                          "2022june": "June-July 2022, Villanova PA"}; // WORKSHOP OVER

// NOTE: "2020june": "June-July 2020, Villanova PA" canceled due to covid-19

export class Workshop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workshop: null,
    };
  }
  redirect = (workshop, slug) => {
    this.props.history.replace("/workshops/"+workshop+"/"+slug)
  }
  render() {
    // force re-render when workshop changes
    var workshop = this.state.workshop
    if (this.props.match.params.workshop !== this.state.workshop) {
      workshop = this.props.match.params.workshop
      this.setState({workshop: workshop})
    }

    var slug = this.props.match.params.slug

    if (slug && slug.endsWith(".html")) {
      // then strip the html and redirect
      slug = slug.slice(0,-5);
      this.redirect(workshop, slug)
    } else if (slug && slug.endsWith(".ipynb")) {
      // then strip the ipynb and redirect
      slug = slug.slice(0,-6);
      this.redirect(workshop, slug)
    } else if (slug && slug.endsWith(".md")) {
      // then strip the md and redirect
      slug = slug.slice(0,-3)
      this.redirect(workshop, slug)
    }

    if (workshop === null || workshop === undefined) {
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
            <p>
              PHOEBE workshops aim to provide an opportunity for the community and users to learn how to use PHOEBE, as well as an opportunity for the <Link to="/development-team">developers</Link> to learn what features and improvements can be made.
              Generally these dedicated workshops consist of a small group of participants and are organized to include both tutorials and short talks introducing the science and features implemented in the latest PHOEBE release as well as a sneak peak into features under development.
              These workshops have been made possible through generous support from the <Link to="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1517474">National Science Foundation</Link>, the Villanova University College of Arts and Sciences Faculty Research and Development Grant, and the <Link to="https://www1.villanova.edu/villanova/artsci/astronomy.html">Villanova Department of Astrophysics and Planetary Sciences</Link>.
            </p>
            <div style={{textAlign: "center", paddingTop: "15px", paddingBottom: "0px"}}>
              <Image src={"/images/workshops/PHOEBE_workshop_1_thumb.jpg"} href={"/static/workshops/PHOEBE_workshop_1.jpg"} style={{borderRadius: "4px", margin: "10px"}} height="200" maxWidth="80%" title="PHOEBE Workshop 2018"/>
              <Image src={"/images/workshops/PHOEBE_workshop_2_thumb.jpg"} href={"/static/workshops/PHOEBE_workshop_2.jpg"} style={{borderRadius: "4px", margin: "10px"}} height="200" maxWidth="80%" title="PHOEBE Workshop 2019"/>
              <Image src={"/images/workshops/PHOEBE_workshop_3_thumb.png"} href={"/static/workshops/PHOEBE_workshop_3.png"} style={{borderRadius: "4px", margin: "10px"}} height="200" maxWidth="80%" title="PHOEBE Virtual Workshop 2021"/>
            </div>
            <div style={{textAlign: "center", paddingTop: "15px", paddingBottom: "0px"}}>
              <Image src={"/images/workshops/PHOEBE_workshop_4_thumb.jpg"} href={"/static/workshops/PHOEBE_workshop_4.jpg"} style={{borderRadius: "4px", margin: "10px"}} height="200" maxWidth="80%" title="PHOEBE Workshop 2022"/>
              <Image src={"/images/workshops/PHOEBE_workshop_4b_thumb.png"} href={"/static/workshops/PHOEBE_workshop_4b.png"} style={{borderRadius: "4px", margin: "10px"}} height="200" maxWidth="80%" title="PHOEBE Workshop 2022 remote component"/>

            </div>
            <div style={{textAlign: "center", paddingTop: "5px", paddingBottom: "25px"}}>
              <Image src={"/images/workshops/PHOEBE_workshop_2_2_thumb.jpg"} href={"/static/workshops/PHOEBE_workshop_2_2.jpg"} style={{borderRadius: "4px", margin: "10px"}} className="hidden-sm hidden-xs" height="200" maxWidth="80%"/>
              <Image src={"/images/workshops/PHOEBE_workshop_2_1_thumb.jpg"} href={"/static/workshops/PHOEBE_workshop_2_1.jpg"} style={{borderRadius: "4px", margin: "10px"}} className="hidden-sm hidden-xs" height="200" maxWidth="80%"/>
              <Image src={"/images/workshops/PHOEBE_workshop_1_2_thumb.jpg"} href={"/static/workshops/PHOEBE_workshop_1_2.jpg"} style={{borderRadius: "4px", margin: "10px"}} className="hidden-sm hidden-xs" height="200" maxWidth="80%"/>
            </div>
            <p>See below for archived content from past workshops that have been held, as well as announcements and registration details for any planned upcoming workshops.  We hope you will be able to join us soon at a PHOEBE workshop soon!</p>
            <Separator large={false}/>
          </Content>
          <Content dark={true}>

            {Object.keys(active_workshops).length ?
              <div>
                <h2>Current Workshops</h2>
                <ul>{Object.keys(active_workshops).map(slug => <li><Link to={"/workshops/"+slug}>{active_workshops[slug]}</Link></li>)}</ul>
              </div>
              :
              <div>
                <h2>Upcoming Workshops</h2>
                {Object.keys(upcoming_workshops).length ?
                  <ul>{Object.keys(upcoming_workshops).map(slug => <li><Link to={"/workshops/"+slug}>{upcoming_workshops[slug]}</Link></li>)}</ul>
                  :
                  <p>There are no currently planned workshops.  Check back soon or contact us if you'd be interested in hosting the next PHOEBE workshop.</p>
                }
              </div>
            }

            <Separator flip={true} large={false}/>
          </Content>
          <Content>
            <h2>Past Workshops</h2>
            <ul>{Object.keys(archived_workshops).map(slug => <li><Link to={"/workshops/"+slug}>{archived_workshops[slug]}</Link></li>)}</ul>
          </Content>

        </div>
      )
    } else if (Object.keys(active_workshops).indexOf(this.state.workshop)!==-1) {
      return(<WorkshopEntry active={true} upcoming={false} history={this.props.history} workshop={this.state.workshop} slug={this.props.match.params.slug}/>)
    } else if (Object.keys(upcoming_workshops).indexOf(this.state.workshop)!==-1) {
      return(<WorkshopEntry active={true} upcoming={true} history={this.props.history} workshop={this.state.workshop} slug={this.props.match.params.slug}/>)
    } else if (Object.keys(archived_workshops).indexOf(this.state.workshop)!==-1) {
      return(<WorkshopEntry active={false} history={this.props.history} workshop={this.state.workshop} slug={this.props.match.params.slug}/>)
    } else {
      return(<NotFound>{this.state.workshop} workshop not found, try all <Link to="/workshops">workshops</Link></NotFound>)
    }
  }
}

class WorkshopEntry extends Component {
  redirect = (workshop, slug) => {
    this.props.history.replace("/workshops/"+workshop+"/"+slug)
  }
  render() {
    var active = this.props.active || false;
    var upcoming = this.props.upcoming || false;
    var workshop = this.props.workshop
    var description = ''
    if (active) {
      if (upcoming) {
        description = upcoming_workshops[workshop]
      } else {
        description = active_workshops[workshop]
      }
    } else {
      description = archived_workshops[workshop]
    }
    var slug = this.props.slug

    if (!slug) {
      if (upcoming) {
        slug = "rationale"
      } else {
        slug = "materials"
      }
      this.redirect(workshop, slug)
    }

    var path = slug
    var isNotebook = false;
    if (["rationale", "registration", "important_dates", "schedule", "organizing_committee", "at_the_meeting", "materials"].indexOf(slug) !== -1) {
      path = slug + ".md"
    } else {
      path = slug + ".ipynb"
      isNotebook = true;
    }


    return (
      <div>
        <Helmet>
          <title>PHOEBE | Workshops | {description}</title>
          <meta name="ROBOTS" content="NOINDEX, NOFOLLOW"/>
        </Helmet>
        <Header>
          <h1>PHOEBE Workshop | {description}</h1>

             {active ?
               upcoming ?
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
                   <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
                     <HeaderNavButton title="Rationale" description="Rationale" to={"/workshops/"+workshop+"/rationale"} icon="fas fa-scroll"/>
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
                   <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
                     <HeaderNavButton title="Materials" description="Materials" to={"/workshops/"+workshop+"/materials"} icon="far fa-file-alt"/>
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
          {(isNotebook || slug==='materials') && !active ?
            upcoming ?
              <Alert level="danger">
                <p><b>WARNING:</b> these tutorials are still under development for the upcoming workshop and may yet undergo changes!</p>
              </Alert>

              :
              <Alert level="danger">
                <p><b>WARNING:</b> these tutorials are not kept up-to-date with changes since the workshop.  Make sure you're using the same version of PHOEBE as used in the workshop or follow the updated <Link to="/docs/latest/tutorials">online tutorials</Link>.</p>
              </Alert>
            :
              null
          }

          <GitHubContent repo='phoebe2-workshop' branch={workshop} path={path} history={this.props.history} loadingText="LOADING WORKSHOP CONTENT..." ></GitHubContent>
        </Content>
      </div>
    )
  }
}

export class WorkshopRegistration extends Component {
  render() {
    window.location = 'https://forms.gle/FSrDbzabFAZBD7re6'
    return(
      null
    )
  }
}
