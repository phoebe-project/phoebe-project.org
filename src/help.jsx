import React, { Component } from 'react';

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import {Content, Link, Image, Redirect} from './common';
import {Header} from './header';
import {NotFound} from './errors';

export class HelpDevel extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>PHOEBE | Development Team</title>
          <meta name="description" content="PHOEBE development-team"/>
        </Helmet>
        <Header>
          <span className="hidden-xs"><h1>PHOEBE Development Team</h1></span>
          <span className="visible-xs"><h1>PHOEBE Dev Team</h1></span>
        </Header>
        <Content>
          <h2>Active Developers</h2>

          <DeveloperInfo image="andrej.jpg">
            <Link to="http://astro4.ast.villanova.edu/aprsa" hideExternal={true}>Andrej Prša</Link> is a professor at Villanova University in Pennsylvania, USA. He has been working on eclipsing binaries for over a decade, including the <Link to="/1.0">initial legacy version</Link> of PHOEBE. Andrej is mainly interested in bulk statistics of binary and multiple stars (mass, radius and luminosity distributions), stellar and orbital evolution, and unusual stellar systems (intrinsic pulsators in binaries). He is working on PHOEBE's probabilistic fitting engine.
          </DeveloperInfo>


          <DeveloperInfo image="kyle.jpg">
            <Link to="http://www.keconroy.com" hideExternal={true}>Kyle Conroy</Link> is a post-doc at Villanova University after having received his PhD from Vanderbilt University researching the dynamics of stellar multiples and their role in constraining theories on binary star formation.  He is implementing support for multiple stellar systems (&gt;2 bodies with both hierarchical and N-body support) and eclipse timings into PHOEBE 2 and leads the development and releases of PHOEBE 2.  Kyle also developed and maintains this website.
          </DeveloperInfo>


          <DeveloperInfo image="martin.jpg">
            <Link to="http://chaos.fmf.uni-lj.si/horvat" hideExternal={true}>Martin Horvat</Link> is an assistant professor from the Faculty of Mathematics and Physics at the University of Ljubljana. His research interests include dynamical systems (classical and quantum chaos), statistical physics, mathematical physics, and  <Link to="https://www.springer.com/gp/book/9783319786186">computational physics</Link>, as well as general relativity. He is developing the background calculations of PHOEBE 2 related to meshing of stellar objects and accurate calculation of their properties and lead the <Link to="/releases/2.1">2.1 release featuring misaligned orbits</Link>.  He is also working on developing the framework for heat redistribution.
          </DeveloperInfo>


          <DeveloperInfo image="angela.png">
            Angela Kochoska is a post-doc at Villanova University from the University of Ljubljana. Her focus is the development of the theoretical framework of contact binary stars and large-scale data classification.
          </DeveloperInfo>


          <DeveloperInfo image="bert.jpg">
            Bert Pablo is a postdoctoral fellow at the University of Montreal. He is currently part of the BRITE-Constellation project, a set of six nano-satellites designed for continuous observations of the brightest stars in the sky. His interests lie mainly in variable stars with a focus on those in binary systems. Within PHOEBE, he works mainly on developing the wrapper to interact with PHOEBE legacy, testing, and hopefully on improving the grid of atmosphere models.
          </DeveloperInfo>


          <DeveloperInfo image="joe.jpg">
            Joe Giammarco is a professor of physics at Eastern University in Pennsylvania, USA.  He is also an adjunct member of the Villanova University Physics Department.  His research interests have most recently been in applying computational techniques to problems in optical tomography and binary stars, mostly from the point of view of solving the inverse problem (image reconstruction and parameter estimation).  His involvement in PHOEBE has been in algorithm development and model validation.
          </DeveloperInfo>


          <DeveloperInfo image="dave.jpeg">
            <Link to="http://www.drdjones.net" hideExternal={true}>Dave Jones</Link> is a postdoc at the Insituto de Astrofisica de Canarias in Spain having previously worked at the European Southern Observatory's Very Large Telescope.  Dave is primarily interested in the impact of binarity on the late stages of stellar evolution, in particular the common envelope phase.  He is currently working on incorporating interstellar extinction correction into the framework of PHOEBE 2.
          </DeveloperInfo>


          <h2>Past Developers</h2>

          <DeveloperInfo image="pieter.jpg">
            <Link to="http://www.ster.kuleuven.be/~pieterd" hideExternal={true}>Pieter Degroote</Link> was a postdoc at the Institute of Astronomy at the KULeuven, Belgium, where he mainly worked on asteroseismology of massive stars. His main scientific interests were in determining accurate fundamental parameters of stars and planets, focusing on correct observational treatment of the physics. Pieter developed the core implementation and backend of PHOEBE 2.0-alpha, much of which has either been adopted into the 2.0 release or is planned to be reimplemented in future releases.
          </DeveloperInfo>

          <DeveloperInfo image="steven.jpg">
            Steven Bloemen works as a postdoc at the Radboud University Nijmegen, The Netherlands, and is the Instrument Scientist of the BlackGEM array. He is mainly interested in compact binary stars.
          </DeveloperInfo>

          <DeveloperInfo image="kelly.jpg">
            Kelly Hambleton is a postdoctoral researcher at Villanova University after receiving her PhD from the University of Central Lancashire, England. Her main research interests include pulsating stars and binary star systems, specifically heartbeat stars with tidally induced pulsations. Kelly developed the parsing algorithms that enabled PHOEBE 2.0-alpha to use PHOEBE legacy parameter files.
          </DeveloperInfo>

          <div className="row">&nbsp;</div>

          <div className="row">
            <div className="col-md-2">
            </div>
            <div className="col-md-10">
              <p>We also thank all the additional developers and contributors who helped make and improve the <Link to="/1.0">PHOEBE legacy version</Link>.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
            </div>
            <div className="col-md-10">
              <p>You can contact us through the <Link to="/help/contact/phoebe-devel">phoebe-devel mailing list</Link>.  Or if you're interested in contributing, see how to <Link to="/contribute#testing">test PHOEBE</Link>, <Link to="/contribute#issues">report issues</Link>, <Link to="/contribute#features">request new features</Link>, or even <Link to="/contribute#develop">join the development team</Link>.</p>
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
      <div className="row" style={{marginTop: "20px"}}>
          <div className="col-md-2 text-center">
              <Image src={"/images/devel/"+this.props.image} style={{borderRadius: "8px"}} width="128"/>
          </div>
          <div className="col-md-10">
              <p>{this.props.children}</p>
          </div>
      </div>
    )
  }
}

export class HelpFAQ extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>PHOEBE | FAQ</title>
          <meta name="description" content="PHOEBE 2 frequently asked questions"/>
        </Helmet>
        <Header>
          <h1><span className="hidden-xs">Frequently Asked Questions</span><span className="visible-xs">FAQ</span></h1>
        </Header>
        <Content>
          Q: Is PHOEBE 2.x backwards compatible with PHOEBE 2.0 alpha releases?
          <br/>
          A: Unfortunately, no. We simply learned too much from the alpha-release that we decided that a complete rewrite was needed. However, many of the syntax concepts should be very familiar if you’ve used the frontend in the alpha releases.
          <br/><br/>
          Q: Can I speed up plotting in any way?
          <br/>
          A: You could try changing your backend, e.g via matplotlib.rcParams['backend'] = 'Agg' but do this before importing Phoebe.
          <br/><br/>
          Q: How do I add a custom passband to PHOEBE 2?
          <br/>
          A: You will need a table of intensities that you can download from the PHOEBE homepage. Then you should follow the instructions available phoebe.atmospheres.passbands.Passband
          <br/><br/>
          Q: Is PHOEBE 2.x Python 3.x ready?
          <br/>
          A: PHOEBE has been tested on Python 2.7 with various compilers. We are working towards testing PHOEBE on Python 3.x.
          <br/><br/>
          Q: Is it safe to use PHOEBE?
          <br/>
          A: For the most part, yes. If you do not have sympy installed, then constraints will be evaluated using the ‘eval’ command - which could potentially be dangerous if you blindly open a bundle from an untrusted source. To avoid this, simply install the sympy optional dependency.
        </Content>
      </div>
    )
  }
}

export class HelpIPYNB extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>PHOEBE | How To: Jupyter Notebooks</title>
          <meta name="description" content="How to download and run the jupyter notebooks provided for the PHOEBE 2 tutorials and examle scripts"/>
        </Helmet>
        <Header>
          <h1><span className="hidden-xs">How To: Jupyter/Ipython Notebooks</span><span className="visible-xs">How To: ipynb</span></h1>
        </Header>
        <Content>
          <p>Any tutorial or example script in the <Link to="/docs">documentation</Link> can be downloaded as an IPython/Jupyter Notebook or a python script (see the link at the top of any tutorial). To run these locally you’ll need PHOEBE <Link to="/install">installed</Link> on your system, as well as IPython &amp; Jupyter notebooks (<code>sudo pip install jupyter; sudo apt-get install ipython-notebook</code>). Then simply start the notebook service (<code>ipython notebook</code> or <code>jupyter notebook</code>, depending on your version). This will allow you to interact with the tutorial - running it line-by-line and making alterations to see how they change the output.</p>
        </Content>
      </div>
    )
  }
}

export class HelpVersion extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>PHOEBE | How To: Check Installed Version of PHOEBE</title>
          <meta name="description" content="how to check your version of PHOEBE"/>
        </Helmet>
        <Header>
          <h1><span className="hidden-xs">How To: Check Installed Version of PHOEBE</span><span className="visible-xs">How To: PHOEBE Version</span></h1>
        </Header>
        <Content>
          <p>To check your version of PHOEBE, call <code>python -c "import phoebe; print(phoebe.__version__)"</code> at the command line or <code>print(phoebe.__version__)</code> from a python console with phoebe already imported.</p>
        </Content>
      </div>
    )
  }
}

export class HelpContact extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>PHOEBE | Contact Us</title>
          <meta name="description" content="mailing lists and contact the PHOEBE development team"/>
        </Helmet>
        <Header>
          <h1>Contact Us</h1>


        </Header>
        <Content>
          <div className="row">
            <p>
              There are several options to get help with PHOEBE. The obvious one is to start with the <Link to="/docs/latest/">documentation and tutorials</Link>. If you think you've found a bug, please <Link to="/contribute#issues">report an issue</Link> or if you can't find something that you think should exist, <Link to="/contribute#features">request a new feature</Link>.
            </p>
            <p>
              We also have several mailing lists set up where you can ask questions and exchange experiences with other users and developers.
              These Electronic mailing lists enable people to communicate, ask for help and share experiences with other subscribers on the given list. There are three PHOEBE-related mailing lists where you are invited to participate:
            </p>
          </div>

          <div className="row">
              <div className="col-sm-2">
                  <Link to="/help/contact/phoebe-announce"><strong>PHOEBE announcements</strong></Link>
              </div>
              <div className="col-sm-10">
                  PHOEBE announcements is a low traffic list. It informs you of new releases and critical updates concerning PHOEBE. Typically the number of messages that are sent out is 1 per month.
              </div>
          </div>

          <div className="row">
              <div className="col-sm-2">
                  <Link to="/help/contact/phoebe-discuss"><strong>PHOEBE discussion</strong></Link>
              </div>
              <div className="col-sm-10">
                  PHOEBE discussion is a higher traffic list. It is meant for active and potential PHOEBE users to exchange knowledge and experience and to help others with their problems.
              </div>
          </div>

          <div className="row">
              <div className="col-sm-2">
                  <Link to="/help/contact/phoebe-devel"><strong>PHOEBE development</strong></Link>
              </div>
              <div className="col-sm-10">
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
        <Helmet>
          <title>PHOEBE | {mailinglist} mailinglist</title>
          <meta name="description" content={"PHOEBE mailinglist "+mailinglist}/>
        </Helmet>
        <Header>
          <h1>{mailinglist}</h1>
        </Header>
        <Content>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">About {title}</h3>
              </div>
              <div className="panel-body">
                {description}

                To see the collection of prior postings to the list, visit the <Link to={"http://sourceforge.net/mailarchive/forum.php?forum_name="+mailinglist}>{mailinglist} archives</Link>.
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Using {title}</h3>
              </div>
              <div className="panel-body">
                To post a message to all the list members, send email to:
                <center><a href={"mailto:"+mailinglist+"@lists.sourceforge.net"}>{mailinglist}@lists.sourceforge.net</a>. </center>

                You can subscribe to the list, or change your existing subscription, in the sections below.
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Subscribing to {title}</h3>
              </div>
              <div className="panel-body">
                <form className="form-horizontal" role="form" method="post" action={"https://lists.sourceforge.net/lists/subscribe/"+mailinglist}>

                    Subscribe to {mailinglist} by filling out the following form. You will be sent email requesting confirmation, to prevent others from gratuitously subscribing you.


                    <div className="form-group">
                        <label for="email" className="col-sm-4 control-label">Email</label>
                        <div className="col-sm-6 required">
                          <input type="email" className="form-control" name="email" placeholder="me@example.com"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="name" className="col-sm-4 control-label">Name (optional)</label>
                        <div className="col-sm-6">
                          <input type="text" className="form-control" name="fullname" placeholder=""/>
                        </div>
                    </div>


                    You may enter a privacy password below. This provides only mild security, but should prevent others from messing with your subscription. <strong>Do not use a valuable password</strong>, as it might be occasionally emailed back to you in cleartext.

                    If you choose not to enter a password, one will be automatically generated for you, and it will be sent to you once you've confirmed your subscription.  You can always request a mail-back of your password when you edit your personal options.

                    <div className="form-group">
                        <label for="pw" className="col-sm-4 control-label">Password</label>
                        <div className="col-sm-6 required">
                          <input type="password" className="form-control" name="pw"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="pw-conf" className="col-sm-4 control-label">Confirm Password</label>
                        <div className="col-sm-6 required">
                          <input type="password" className="form-control" name="pw-conf"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="digest" className="col-sm-4 control-label">Format</label>
                        <div className="col-sm-6">
                            <select name="digest" className="form-control">
                                <option value="0">Individual emails</option>
                                <option value="1">Daily digest</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                      <div className="col-sm-offset-4 col-sm-6">
                        <button type="submit" name="email-button" className="btn btn-default btn-block">Subscribe to {title}</button>
                      </div>
                    </div>

                </form>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">{title} preferences</h3>
              </div>
              <div className="panel-body">
                <form className="form-horizontal" role="form" method="POST" action={"https://lists.sourceforge.net/lists/options/"+mailinglist}>
                    To get a password reminder, or change your subscription options, or unsubscribe from {mailinglist}, enter your subscription email address:

                    <div className="form-group">
                        <label for="email" className="col-sm-4 control-label">Email</label>
                        <div className="col-sm-6 required">
                          <input type="email" className="form-control" name="email" placeholder="me@example.com"/>
                        </div>
                    </div>

                    <input name="language" type="HIDDEN" value="en"/>

                    <div className="form-group">
                      <div className="col-sm-offset-4 col-sm-6">
                        <button type="submit" name="UserOptions" className="btn btn-default btn-block">Edit options</button>
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
