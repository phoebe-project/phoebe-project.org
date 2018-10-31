import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'

import {Content} from './common';
import {Header} from './header';
import {NotFound} from './errors';

export class HelpDevel extends Component {
  render() {
    return (
      <div>
        <Header>
          <h1>PHOEBE Development Team</h1>
        </Header>
        <Content>
          <h2>Active Developers</h2>

          <DeveloperInfo image="/andrej.jpg">
            <a href="http://astro4.ast.villanova.edu/aprsa" target="_blank">Andrej Prša</a> is a professor at Villanova University in Pennsylvania, USA. He has been working on eclipsing binaries for over a decade, including the <Link to="/1.0">initial legacy version</Link> of PHOEBE. Andrej is mainly interested in bulk statistics of binary and multiple stars (mass, radius and luminosity distributions), stellar and orbital evolution, and unusual stellar systems (intrinsic pulsators in binaries). He is working on PHOEBE's probabilistic fitting engine.
          </DeveloperInfo>


          <DeveloperInfo image="/kyle.jpg">
            <a href="http://www.keconroy.com" target="_blank">Kyle Conroy</a> is a post-doc at Villanova University after having received his PhD from Vanderbilt University researching the dynamics of stellar multiples and their role in constraining theories on binary star formation.  He is implementing support for multiple stellar systems (&gt;2 bodies with both hierarchical and N-body support) and eclipse timings into PHOEBE 2 and has led the development of the 2.0 release as well as building and maintaining this website.
          </DeveloperInfo>


          <DeveloperInfo image="/martin.jpg">
            <a href="http://chaos.fmf.uni-lj.si/horvat" target="_blank">Martin Horvat</a> is an assistant professor from the Faculty of Mathematics and Physics at the University of Ljubljana. His research interests include dynamical systems (classical and quantum chaos), statistical physics, mathematical physics, and  <a href="https://www.springer.com/gp/book/9783319786186" class="" target="_blank"><span class="fa fa-external-link"></span>  computational physics</a>, as well as general relativity. He is developing the background calculations of PHOEBE 2 related to meshing of stellar objects and accurate calculation of their properties. He is also developing the framework for misaligned orbits and heat redistribution.
          </DeveloperInfo>


          <DeveloperInfo image="/angela.png">
            Angela Kochoska is a post-doc at Villanova University from the University of Ljubljana. Her focus is the development of the theoretical framework of contact binary stars and large-scale data classification.
          </DeveloperInfo>


          <DeveloperInfo image="/bert.jpg">
            Bert Pablo is a postdoctoral fellow at the University of Montreal. He is currently part of the BRITE-Constellation project, a set of six nano-satellites designed for continuous observations of the brightest stars in the sky. His interests lie mainly in variable stars with a focus on those in binary systems. Within PHOEBE, he works mainly on developing the wrapper to interact with PHOEBE legacy, testing, and hopefully on improving the grid of atmosphere models.
          </DeveloperInfo>


          <DeveloperInfo image="/joe.jpg">
            Joe Giammarco is a professor of physics at Eastern University in Pennsylvania, USA.  He is also an adjunct member of the Villanova University Physics Department.  His research interests have most recently been in applying computational techniques to problems in optical tomography and binary stars, mostly from the point of view of solving the inverse problem (image reconstruction and parameter estimation).  His involvement in PHOEBE has been in algorithm development and model validation.
          </DeveloperInfo>


          <DeveloperInfo image="/dave.jpeg">
            <a href="http://www.drdjones.net" target="_blank">Dave Jones</a> is a postdoc at the Insituto de Astrofisica de Canarias in Spain having previously worked at the European Southern Observatory's Very Large Telescope.  Dave is primarily interested in the impact of binarity on the late stages of stellar evolution, in particular the common envelope phase.  He is currently working on incorporating interstellar extinction correction into the framework of PHOEBE 2.
          </DeveloperInfo>


          <h2>Past Developers</h2>

          <DeveloperInfo image="/pieter.jpg">
            <a href="http://www.ster.kuleuven.be/~pieterd" target="_blank">Pieter Degroote</a> was a postdoc at the Institute of Astronomy at the KULeuven, Belgium, where he mainly worked on asteroseismology of massive stars. His main scientific interests were in determining accurate fundamental parameters of stars and planets, focusing on correct observational treatment of the physics. Pieter developed the core implementation and backend of <a href="http://phoebe-project.org/2.0a" class="" target="_blank"><span class="fa fa-external-link"></span> PHOEBE 2.0-alpha</a>, much of which has either been adopted into the 2.0 release or is planned to be reimplemented in future releases.
          </DeveloperInfo>

          <DeveloperInfo image="/steven.jpg">
            Steven Bloemen works as a postdoc at the Radboud University Nijmegen, The Netherlands, and is the Instrument Scientist of the BlackGEM array. He is mainly interested in compact binary stars.
          </DeveloperInfo>

          <DeveloperInfo image="/kelly.jpg">
            Kelly Hambleton is a postdoctoral researcher at Villanova University after receiving her PhD from the University of Central Lancashire, England. Her main research interests include pulsating stars and binary star systems, specifically heartbeat stars with tidally induced pulsations. Kelly developed the parsing algorithms that enabled  <a href="http://phoebe-project.org/2.0a" class="" target="_blank"><span class="fa fa-external-link"></span> PHOEBE 2.0-alpha</a> to use PHOEBE legacy parameter files.
          </DeveloperInfo>

          <div class="row">&nbsp;</div>

          <div class="row">
              <div class="col-md-2">
              </div>
              <div class="col-md-10">
                  <p>We also thank all the additional developers and contributors who helped make and improve the PHOEBE legacy version.</p>
              </div>
          </div>
        </Content>
      </div>
    );
  }
}

class DeveloperInfo extends Component {
  render() {
    return (
      <div class="row">
          <div class="col-md-2 text-center">
              <img src={this.props.image} width="128"/>
          </div>
          <div class="col-md-10">
              <p>{this.props.children}</p>
          </div>
      </div>
    )
  }
}

export class HelpContact extends Component {
  render() {
    return (
      <div>
        <Header>
          <h1>Contact Us</h1>

          <p>There are several options to get help with PHOEBE. The obvious one is to start with the <a href="/docs/latest">documentation</a>, especially the <a href="/docs/latest#tutorials">tutorials</a>. We also have several mailing lists set up where you can ask questions and exchange experiences with other users and developers.</p>

        </Header>
        <Content>
          <div class="row">
          Electronic mailing lists enable people to communicate, ask for help and share experiences with other subscribers on the given list. There are three PHOEBE-related mailing lists where you are invited to participate:
          </div>

          <div class="row">
              <div class="col-sm-2">
                  <Link to="/help/contact/phoebe-announce"><strong>PHOEBE announcements</strong></Link>
              </div>
              <div class="col-sm-10">
                  PHOEBE announcements is a low traffic list. It informs you of new releases and critical updates concerning PHOEBE. Typically the number of messages that are sent out is 1 per month.
              </div>
          </div>

          <div class="row">
              <div class="col-sm-2">
                  <Link to="/help/contact/phoebe-discuss"><strong>PHOEBE discussion</strong></Link>
              </div>
              <div class="col-sm-10">
                  PHOEBE discussion is a higher traffic list. It is meant for active and potential PHOEBE users to exchange knowledge and experience and to help others with their problems.
              </div>
          </div>

          <div class="row">
              <div class="col-sm-2">
                  <Link to="/help/contact/phoebe-devel"><strong>PHOEBE development</strong></Link>
              </div>
              <div class="col-sm-10">
                  PHOEBE development mailing list is meant for people that are or would like to join active PHOEBE development. Technical and programming issues are discussed here.
              </div>
          </div>

        </Content>
      </div>
    );
  }
}

export class HelpMailingList extends Component {
  render() {
    var mailinglists = {'phoebe-announce': {'title': 'PHOEBE Announcements',
                                             'description': 'PHOEBE Announcements is a low traffic list. It informs you of new releases and critical updates concerning PHOEBE. Typically the number of sent out messages is 1 per month. '},
                        'phoebe-discuss': {'title': 'PHOEBE Discuss',
                                           'description': 'PHOEBE Discussion will hopefully become a higher traffic list. It is meant for active and potential PHOEBE users to exchange knowledge and experience and to help others with their problems.'},
                        'phoebe-devel': {'title': 'PHOEBE Development',
                                         'description': 'PHOEBE Development mailing list is meant for people that are or would like to join active PHOEBE development. Usually, technical and programming issues are discussed here.'}
                       }

    var mailinglist = this.props.match.params.mailinglist

    if (mailinglist in mailinglists) {
      var title = mailinglists[mailinglist].title
      var description = mailinglists[mailinglist].description
    } else {
      return (<NotFound/>)
    }

    return (
      <div>
        <Header>
          <h1>{mailinglist}</h1>
        </Header>
        <Content>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">About {title}</h3>
              </div>
              <div class="panel-body">
                {description}

                To see the collection of prior postings to the list, visit the <a class="" href={"http://sourceforge.net/mailarchive/forum.php?forum_name="+mailinglist} target="_blank"><span class="fa fa-external-link"></span> {mailinglist} archives</a>.
              </div>
            </div>

            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">Using {title}</h3>
              </div>
              <div class="panel-body">
                To post a message to all the list members, send email to:
                <center><a href={"mailto:"+mailinglist+"@lists.sourceforge.net"}>{mailinglist}@lists.sourceforge.net</a>. </center>

                You can subscribe to the list, or change your existing subscription, in the sections below.
              </div>
            </div>

            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">Subscribing to {title}</h3>
              </div>
              <div class="panel-body">
                <form class="form-horizontal" role="form" method="post" action={"https://lists.sourceforge.net/lists/subscribe/"+mailinglist}>

                    Subscribe to {mailinglist} by filling out the following form. You will be sent email requesting confirmation, to prevent others from gratuitously subscribing you.


                    <div class="form-group">
                        <label for="email" class="col-sm-4 control-label">Email</label>
                        <div class="col-sm-6 required">
                          <input type="email" class="form-control" name="email" placeholder="me@example.com"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="name" class="col-sm-4 control-label">Name (optional)</label>
                        <div class="col-sm-6">
                          <input type="text" class="form-control" name="fullname" placeholder=""/>
                        </div>
                    </div>


                    You may enter a privacy password below. This provides only mild security, but should prevent others from messing with your subscription. <strong>Do not use a valuable password</strong>, as it might be occasionally emailed back to you in cleartext.

                    If you choose not to enter a password, one will be automatically generated for you, and it will be sent to you once you've confirmed your subscription.  You can always request a mail-back of your password when you edit your personal options.

                    <div class="form-group">
                        <label for="pw" class="col-sm-4 control-label">Password</label>
                        <div class="col-sm-6 required">
                          <input type="password" class="form-control" name="pw"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="pw-conf" class="col-sm-4 control-label">Confirm Password</label>
                        <div class="col-sm-6 required">
                          <input type="password" class="form-control" name="pw-conf"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="digest" class="col-sm-4 control-label">Format</label>
                        <div class="col-sm-6">
                            <select name="digest" class="form-control">
                                <option value="0">Individual emails</option>
                                <option value="1">Daily digest</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                      <div class="col-sm-offset-4 col-sm-6">
                        <button type="submit" name="email-button" class="btn btn-default btn-block">Subscribe to {title}</button>
                      </div>
                    </div>

                </form>
              </div>
            </div>

            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">{title} preferences</h3>
              </div>
              <div class="panel-body">
                <form class="form-horizontal" role="form" method="POST" action={"https://lists.sourceforge.net/lists/options/"+mailinglist}>
                    To get a password reminder, or change your subscription options, or unsubscribe from {mailinglist}, enter your subscription email address:

                    <div class="form-group">
                        <label for="email" class="col-sm-4 control-label">Email</label>
                        <div class="col-sm-6 required">
                          <input type="email" class="form-control" name="email" placeholder="me@example.com"/>
                        </div>
                    </div>

                    <input name="language" type="HIDDEN" value="en"/>

                    <div class="form-group">
                      <div class="col-sm-offset-4 col-sm-6">
                        <button type="submit" name="UserOptions" class="btn btn-default btn-block">Edit options</button>
                      </div>
                    </div>

                </form>
              </div>
            </div>


        </Content>
      </div>
    );
  }
}

export class HelpFAQ extends Component {
  render() {
    return (
      <Redirect to="/docs/latest#FAQ"/>
    );
  }
}
