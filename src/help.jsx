import React, { Component } from 'react';

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import {Content, Link, Image, Redirect, Button} from './common';
import {Header} from './header';
import {NotFound} from './errors';

export class HelpDevelRedirect extends Component {
  render () {
    window.location = '/development-team'
    return (
      null
    )
  }
}

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
            <Link to="http://aprsa.villanova.edu" hideExternal={true}>Andrej Prša</Link> is a professor at Villanova University in Pennsylvania, USA. He has been working on eclipsing binaries for over a decade, including the <Link to="/1.0">initial legacy version</Link> of PHOEBE. Andrej is mainly interested in bulk statistics of binary and multiple stars (mass, radius and luminosity distributions), stellar and orbital evolution, and unusual stellar systems (intrinsic pulsators in binaries).  Additionally, Andrej leads the development of the passband and atmosphere framework within PHOEBE 2.
          </DeveloperInfo>


          <DeveloperInfo image="kyle.jpg">
            <Link to="http://www.keconroy.com" hideExternal={true}>Kyle Conroy</Link> is a postdoctoral researcher at Villanova University after having received his PhD from Vanderbilt University researching the dynamics of stellar multiples and their role in constraining theories on binary star formation.  He lead the <Link to="/releases/2.3">2.3 release with built-in support for fitting algorithms and distributions</Link>, is implementing support for multiple stellar systems (&gt;2 bodies with both hierarchical and N-body support) and eclipse timings, and leads the development and releases of PHOEBE 2 and the <Link to="/clients">UI clients</Link>.  Kyle also developed and maintains this website.
          </DeveloperInfo>


          <DeveloperInfo image="angela.png">
            Angela Kochoska is a <Link to="https://www1.villanova.edu/villanova/artsci/research/MendelPostdoctoralFellows.html">Mendel Postdoctoral Fellow</Link> at Villanova University from the University of Ljubljana. Her focus is the development of the theoretical framework of contact binary stars and large-scale data classification.
          </DeveloperInfo>


          <DeveloperInfo image="bert.jpg">
            Bert Pablo is a staff astronomer at <Link to="https://www.aavso.org/">AAVSO</Link> after completing a postdoctoral fellow at the University of Montreal as a part of the BRITE-Constellation project, a set of six nano-satellites designed for continuous observations of the brightest stars in the sky. His interests lie mainly in variable stars with a focus on those in binary systems. Within PHOEBE, he works mainly on developing the wrapper to interact with PHOEBE legacy, testing, and hopefully on improving the grid of atmosphere models.
          </DeveloperInfo>


          <DeveloperInfo image="joe.jpg">
            Joe Giammarco is a professor of physics at Eastern University in Pennsylvania, USA.  He is also an adjunct member of the Villanova University Physics Department.  His research interests have most recently been in applying computational techniques to problems in optical tomography and binary stars, mostly from the point of view of solving the inverse problem (image reconstruction and parameter estimation).  His involvement in PHOEBE has been in algorithm development and model validation.
          </DeveloperInfo>


          <DeveloperInfo image="dave.jpeg">
            <Link to="http://www.drdjones.net" hideExternal={true}>Dave Jones</Link> is a postdoc at the Insituto de Astrofisica de Canarias in Spain having previously worked at the European Southern Observatory's Very Large Telescope.  Dave is primarily interested in the impact of binarity on the late stages of stellar evolution, in particular the common envelope phase.  He lead the <Link to="/releases/2.2">2.2 release incorporating interstellar extinction correction</Link> into the framework of PHOEBE 2.
          </DeveloperInfo>

          <DeveloperInfo image="michael.jpg">
            Michael Abdul-Masih is a postdoctoral fellow at the European Southern Observatory.  He received his PhD from KU Leuven, where he worked on non-spherical massive stars, and how accounting for the 3D geometry affects the derived stellar parameters and thus evolutionary future of these objects.  His primary research interests include distorted massive stars and the integration of 3D geometries into spectral fitting techniques.
          </DeveloperInfo>


          <h2>Past Developers</h2>

          <DeveloperInfo image="martin.jpg">
            <Link to="http://chaos.fmf.uni-lj.si/horvat" hideExternal={true}>Martin Horvat</Link> is an assistant professor from the Faculty of Mathematics and Physics at the University of Ljubljana. His research interests include dynamical systems (classical and quantum chaos), statistical physics, mathematical physics, and  <Link to="https://www.springer.com/gp/book/9783319786186">computational physics</Link>, as well as general relativity. He lead the <Link to="/releases/2.1">2.1 release featuring misaligned orbits</Link>, the <Link to="https://ui.adsabs.harvard.edu/abs/2019ApJS..240...36H">theoretical paper on irradiation effects</Link>, and developed the C-backend of PHOEBE 2 responsible for meshing stellar objects, determining eclipsing regions, and handling irradiation.
          </DeveloperInfo>

          <DeveloperInfo image="pieter.jpg">
            Pieter Degroote was a postdoc at the Institute of Astronomy at the KULeuven, Belgium, where he mainly worked on asteroseismology of massive stars. His main scientific interests were in determining accurate fundamental parameters of stars and planets, focusing on correct observational treatment of the physics. Pieter developed the core implementation and backend of PHOEBE 2.0-alpha, much of which has either been adopted into the 2.X releases or is planned to be re-implemented in future releases.
          </DeveloperInfo>

          <DeveloperInfo image="steven.jpg">
            Steven Bloemen was a postdoc (and is now a faculty member) at the Radboud University Nijmegen, The Netherlands, and the Instrument Scientist of the BlackGEM array. He is mainly interested in compact binary stars.  Steven was part of the original team that designed and developed the alpha version of PHOEBE 2.0.
          </DeveloperInfo>

          <DeveloperInfo image="kelly.jpg">
            Kelly Hambleton was a postdoctoral researcher (and is now a faculty member) at Villanova University after receiving her PhD from the University of Central Lancashire, England. Her main research interests include pulsating stars and binary star systems, specifically heartbeat stars with tidally induced pulsations. Kelly developed the parsing algorithms that enabled PHOEBE 2.0-alpha to use PHOEBE legacy parameter files and continues to serve as a consultant on Gaussian Processes and pulsations in binaries.
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
          <p>
            <b>
              For a list of questions asked by the community, see <Link to="https://github.com/phoebe-project/phoebe2/discussions">PHOEBE GitHub Discussions</Link> (currently encouraged over the mailing lists) and the <Link to="https://sourceforge.net/p/phoebe/mailman/phoebe-discuss/">phoebe-discuss mailing list archive</Link>.
            </b>
          </p>
          <p>Below is an overview of the most commonly asked questions:</p>

          Q: Which release of PHOEBE should I use?
          <br/>
          A: That depends.  If you're considering using PHOEBE 1 (legacy) or a version of PHOEBE 2, click <Link to="/help/1vs2">here to read about the differences</Link>.  Otherwise, unless there is a good reason, its suggested that you use the <Link to="/releases/latest">latest release</Link>.
          <br/><br/>

          Q: Can I speed up plotting in any way?
          <br/>
          A: You could try changing your backend, e.g via <code>matplotlib.rcParams['backend'] = 'Agg'</code> but do this before importing Phoebe.
          <br/><br/>

          Q: How do I add a custom passband to PHOEBE 2?
          <br/>
          A: You will need a table of intensities that you can download from the PHOEBE homepage. Then you should follow the instructions available in the <Link to="/docs/latest/tutorials/passbands">custom passbands tutorial</Link> and reference the <Link to="/docs/latest/api/phoebe.atmospheres.passbands.Passband">passband API docs</Link>.
          Alternatively, you can <Link to="https://github.com/phoebe-project/phoebe2-tables/issues/new?title=passband+request:&labels=passband+request">request a passband</Link> - please provide all necessary information and we'll see if we can add it to the repository.
          <br/><br/>

          Q: <Link to="/docs/latest/api/phoebe.list_online_passbands">phoebe.list_online_passbands()</Link> returns an empty list and <Link to="/docs/latest/api/phoebe.download_passband">phoebe.download_passband()</Link> fails with the following error:
          <pre>
            ssl.SSLError: [SSL: TLSV1_ALERT_PROTOCOL_VERSION] tlsv1 alert protocol version
          </pre>
          <br/>
          A: Assuming you're on Mac OS, this seems to be caused by the native openssl of Mac OS X not being sufficiently recent to deal with the url redirect on github. You can solve this by updating openssl and forcing python to use that version (with brew this is relatively straightforward just running <code>brew install openssl</code> followed by <code>brew install python@3</code>).
          <br/><br/>

          Q: The following error is being raised while compiling PHOEBE:
          <pre>
            error: ‘void it0’ has incomplete type it0 = P.insert(it_min, Pi + 1, Pi + nt - 1)
          </pre>
          <br/>
          A: This probably means your compiler does not support C++11.  Make sure you meet all the dependencies on the <Link to="/install">install instructions</Link>.
          <br/><br/>

          Q: The following error is being raised when I try importing PHOEBE:
          <pre>/lib64/libstdc++.so.6: version `CXXABI_1.3.8' not found</pre>
          <br/>
          A: If you installed PHOEBE via pip, its possible that you need to force the compilation to be done on your own machine instead of using the precompiled binaries.  Try <code>pip install --no-binary :all: phoebe</code>.
          <br/><br/>

          Q: I get an error when trying to run PHOEBE inside MCMC/EMCEE/mpirun, what's the problem?
          <br/>
          A: If you're running PHOEBE inside any other code that handles parallelization, you need to disable PHOEBE's internal handling of parallelization, via <Link to="/docs/latest/api/phoebe.mpi_off">phoebe.mpi_off()</Link>.  Also see the <Link to="/docs/latest/tutorials/mpi">tutorial on running PHOEBE in MPI</Link> for more information.
          <br/><br/>

          Q: I get the following error when calling <code>b.run_solver</code>:
          <pre>
            RuntimeError: <br/>
                An attempt has been made to start a new process before the<br/>
                current process has finished its bootstrapping phase.<br/>
                This probably means that you are not using fork to start your<br/>
                child processes and you have forgotten to use the proper idiom<br/>
                in the main module
          </pre>
          <br/>
          A: The multiprocessing setup on your machine is not compatible with PHOEBE.  We are working on fixing this, but in the meantime you can call <Link to="/docs/latest/api/phoebe.multiprocessing_off">phoebe.multiprocessing_off()</Link> or setting the enviroment variable <code>export PHOEBE_MULTIPROC_NPROCS=0</code>.
          <br/><br/>

          Q: Is PHOEBE 2.x Python 3.x ready?
          <br/>
          A: As of the <Link to="/releases/2.3">2.3 release</Link>, PHOEBE only supports Python 3.6+.  The <Link to="/releases/2.2">2.2 release</Link> supported both Python 3.6+ and 2.7+.  Earlier releases, however, only support Python 2.7+.  See the <Link to="/install">install</Link> page for more information.
          <br/><br/>

          Q: Is it safe to use PHOEBE?
          <br/>
          A: For the most part, yes. Constraints will be evaluated using the <code>eval</code> command - which could potentially be dangerous if you blindly open a bundle from an untrusted source.
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
          <meta name="description" content="How to download and run the jupyter notebooks provided for the PHOEBE 2 tutorials and example scripts"/>
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

export class HelpColab extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>PHOEBE | How To: Live Sessions in Google Colab</title>
          <meta name="description" content="How to download and run the jupyter notebooks provided for the PHOEBE 2 tutorials and example scripts"/>
        </Helmet>
        <Header>
          <h1><span className="hidden-xs">How To: Live Sessions in Google Colab</span><span className="visible-xs">How To: Colab</span></h1>
        </Header>
        <Content>
          <p>
            Any tutorial or example script in the <Link to="/docs">documentation</Link> can be opened in a live <Link to="http://colab.research.google.com">Google Colab</Link> session.
            Additionally, a <Link to="/quickstart">quickstart</Link> script can launched for any <Link to="/releases">release</Link> of PHOEBE, allowing you to quickly install that version and import phoebe, along with a few links to get started.
            Running in these sessions will allow you to run the script <i>without</i> installing PHOEBE on your local machine (but you will have to wait for PHOEBE and the dependencies to install in each separate session/notebook).
            This gives the convenience of being able to try any release of PHOEBE from a web browser without having to install - but ultimately, if you want to do science with PHOEBE, you'll likely see better performance (and not have to reinstall everytime you restart a script) if you have a <Link to="/install">local installation</Link>.
          </p>
          <p>
            In order to open the notebook, you may need to log in with your Google account and accept that you trust the source of the file.
          </p>
          <p>
            Once opened, you can run each cell by selecting it and pressing shift+Enter (to execute and select the next cell), ctrl+Enter (to execute and stay selected on the current cell), or alt+Enter (to execute and create a new cell below).
            On mobile, you can run a cell by clicking the play button on the left.
          </p>
          <p>
            Note: because of the default installation of matplotlib in Colab, importing PHOEBE will likely give a bunch of warnings.  So long as they're just warnings from matplotlib, they're nothing to be too concerned about.
          </p>
          <p>
            You can read more about <Link to="http://colab.research.google.com">Google Colab</Link> on <Link to="https://research.google.com/colaboratory/faq.html">their FAQ page</Link>.
          </p>
        </Content>
      </div>
    )
  }
}

export class Help1vs2 extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>PHOEBE | PHOEBE 1 (legacy) vs PHOEBE 2</title>
          <meta name="description" content="PHOEBE 1 vs PHOEBE 2"/>
        </Helmet>
        <Header>
          <h1>PHOEBE 1 vs. PHOEBE 2</h1>
        </Header>
        <Content>
          <p>
          PHOEBE 2 is officially released and under active-development.  The PHOEBE 1.0 (legacy) is no longer under active-development, but is still available for download and installation.
          </p>
          <ul>
            <li><Link to="/releases/legacy">PHOEBE 1.0 (legacy)</Link> is well-tested, fast, and includes a user-interface.  There is a custom-scripting interface, but we suggest that new users learn the python interface in PHOEBE 2 instead.</li>
            <li><Link to="/releases/latest">PHOEBE 2</Link> is precise, includes a python scripter, and is under active-development and new feature-releases.  The frontend-interface is a Python package, which does include a bit of a learning curve for new users, especially if not already familiar with Python.  With support for running <Link to="/docs/latest/tutorials/alternate_backends">alternate backends</Link>, we suggest new users learn the interface for PHOEBE 2 and choose the appropriate backend for their science and accuracy needs.  As PHOEBE 2 has not been around as long, we encourage testing all results across multiple forward-model backends and <Link to="/contribute#issues">report any issues</Link>.</li>
          </ul>
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
          <title>PHOEBE | Ask A Question</title>
          <meta name="description" content="mailing lists and contact the PHOEBE development team"/>
        </Helmet>
        <Header>
          <h1>Ask A Question</h1>


        </Header>
        <Content>
          <div className="row">
            <p>
              There are several options to get help with PHOEBE. The obvious one is to start with the <Link to="/docs/latest/">documentation and tutorials</Link>. If you think you've found a bug, please <Link to="/contribute#issues">report an issue</Link>, or if you can't find something that you think should exist, <Link to="/contribute#features">request a new feature</Link>.
            </p>
            <p>
              To ask for help/advice from the developers and community of other users, we are now using these "GitHub Discussions" boards so that previous questions and answers are available for others to browse in the future.
              To subscribe and get emails about other posts to the discussion board, follow the GitHub repository (you can select "custom" to only get notifications about new discussions and/or releases).
              We have active discussion boards for both PHOEBE itself (the python package) as well as the UI (for any <Link to="/clients">client</Link> related questions or comments):
            </p>
            <div style={{textAlign: "center", paddingBottom: "48px"}} className="row">
              <div className="col-md-6" style={{paddingTop: "12px"}}>
                <Button level="primary" style={{lineHeight: "2.5em", fontSize: "16px", width: "250px", marginLeft: "10px"}} to={"https://github.com/phoebe-project/phoebe2/discussions"} icon="far fa-fw fa-comment-alt" title={"PHOEBE Discussions"}/>
              </div>
              <div className="col-md-6" style={{paddingTop: "12px"}}>
                <Button level="primary" style={{lineHeight: "2.5em", fontSize: "16px", width: "250px", marginLeft: "10px"}} to={"https://github.com/phoebe-project/phoebe2-ui/discussions"} icon="far fa-fw fa-comment-alt" title={"PHOEBE UI Discussions"}/>
              </div>
            </div>
            <p>
              In the past, we have used several mailing lists.  Although we now encourage using <Link to="https://github.com/phoebe-project/phoebe2/discussions">PHOEBE GitHub Discussions</Link> to allow for customized email notifications and to make posts more accessible, these lists will remain active and all posts remain available in their respective archives.
            </p>
          </div>

          <div className="row">
              <div className="col-sm-2">
                  <Link to="/help/contact/phoebe-announce"><strong>PHOEBE announcements</strong></Link>
              </div>
              <div className="col-sm-10">
                  PHOEBE announcements is a low traffic list. It informs you of new releases and critical updates concerning PHOEBE. Typically the number of messages that are sent out is 1 per month. (<Link to="https://sourceforge.net/p/phoebe/mailman/phoebe-announce/">browse the archives</Link>)
              </div>
          </div>

          <div className="row">
              <div className="col-sm-2">
                  <Link to="/help/contact/phoebe-discuss"><strong>PHOEBE discussion</strong></Link>
              </div>
              <div className="col-sm-10">
                  PHOEBE discussion is a higher traffic list. It was meant for active and potential PHOEBE users to exchange knowledge and experience and to help others with their problems.  We now encourage posting these questions to <Link to="https://github.com/phoebe-project/phoebe2/discussions">PHOEBE GitHub discussions</Link>. (<Link to="https://sourceforge.net/p/phoebe/mailman/phoebe-discuss/">browse the archives</Link>)
              </div>
          </div>

          <div className="row">
              <div className="col-sm-2">
                  <Link to="/help/contact/phoebe-devel"><strong>PHOEBE development</strong></Link>
              </div>
              <div className="col-sm-10">
                  PHOEBE development mailing list is meant for people that are or would like to join active PHOEBE development. Technical and programming issues were discussed here (but are now more often discussed in weekly telecons or in GitHub discussions and issues). (<Link to="https://sourceforge.net/p/phoebe/mailman/phoebe-devel/">browse the archives</Link>)
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
                <h3 className="panel-title">{title} Preferences</h3>
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
