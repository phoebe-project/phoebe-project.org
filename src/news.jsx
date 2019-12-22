import React, { Component } from 'react';

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import {Content, Link, Image} from './common';
import {Header} from './header';
import {NotFound} from './errors';

// NEWER entries on TOP of list
export var newsStoriesDicts = [
  {
    title: "PHOEBE 2.2 released",
    slug: "phoebe-22-released",
    pinnedDays: 45,
    date: "December 22, 2019",
    author: "Kyle Conroy",
    content: <div>
              <p>
                <Link to="/releases/2.2">PHOEBE 2.2</Link> is officially released - adding interstellar extinction as well as support for Python 3 (in addition to Python 2) to PHOEBE.  See the <Link to="/publications/2020Jones+">release paper on extinction</Link> submitted to ApJS and checkout the <Link to="/docs/2.2">documentation</Link>.
              </p>
            </div>
  },
  {
    title: "Third PHOEBE Workshop",
    slug: "phoebe-workshop-3",
    pinnedDays: 67,
    date: "December 9, 2019",
    author: "Kyle Conroy",
    content: <div>
              <p>
                Dear Colleagues,
              </p>
              <p>
                We will be holding the Third PHOEBE Workshop at Villanova University, Villanova, Pennsylvania, USA, <b>June 22nd - July 3rd, 2020</b>.
                This year the workshop will cover two weeks: with the first week covering an introduction to PHOEBE and the second week covering fitting and advanced scientific topics of interest (such as pulsations).
                Participants can choose to register for either week or both, depending on their interest and current level of comfort with using PHOEBE.
                Past participants are welcome and encouraged to apply to attend the second week if they wish to get more experience in particular areas of science or work on fitting their data.
              </p>
              <p>
                Further information and the registration form can be found at <Link to="/workshops/2020june">http://phoebe-project.org/workshops/2020june</Link>.  Registration is now open and will remain open until <b>February 14th, 2020</b>.
              </p>
              <p>
                We look forward to welcoming you to Villanova University in June/July!
              </p>
              <p>
                Kind regards,<br/>
                The <Link to="/development-team">PHOEBE team</Link>
              </p>
            </div>
  },
  {
    title: "Second PHOEBE Workshop",
    slug: "phoebe-workshop-2",
    pinnedDays: 30,
    date: "March 15, 2019",
    author: "Kyle Conroy",
    content: <div>
              <p>
                Dear Colleagues,
              </p>
              <p>
                We will be holding the second PHOEBE Workshop at Villanova University, Villanova, Pennsylvania, USA, July 8th-12th, 2019.
              </p>
              <p>
                Further information and the registration form can be found at <Link to="/workshops/2019july">http://phoebe-project.org/workshops/2019july</Link>.  Registration is now open and will remain open until April 15th, 2019.
              </p>
              <p>
                We look forward to welcoming you to Villanova University in July!
              </p>
              <p>
                Kind regards,<br/>
                The <Link to="/development-team">PHOEBE team</Link>
              </p>
            </div>
  },
  {
    title: "New Book: Modeling and Analysis of Eclipsing Binary Stars",
    slug: "modeling-and-analysis-book",
    pinnedDays: 30,
    date: "January 23, 2019",
    author: "Kyle Conroy",
    content: <div>
              <div>
                <div style={{textAlign: "center", paddingBottom: "15px"}}>
                  <Link to="https://doi.org/10.1088/978-0-7503-1287-5" hideExternal={true}><Image src="/images/book_cover.jpg" className="img-dropshadow" height="200px"/></Link>
                </div>
                <div>
                  <p>
                    "Modeling and Analysis of Eclipsing Binary Stars: The theory and design principles of PHOEBE" by Andrej Prša has officially been released as an <Link to="https://doi.org/10.1088/978-0-7503-1287-5">IOP ebook</Link>.
                    This new book gives a comprehensive overview of the approaches to modeling binary star systems - particularly focused on providing a theoretical basis to the implementation adopted within PHOEBE.
                  </p>
                  <p>
                    You can find a link to this book, as well as various other journal, poster, and conference proceedings on the <Link to="/publications">publications</Link> page.
                  </p>
                </div>
              </div>




             </div>
  },
  {
    title: "Improved Tutorials and API Documentation",
    slug: "improved-tutorials-and-api-documentation",
    pinnedDays: 30,
    date: "November 27, 2018",
    author: "Kyle Conroy",
    content: <div>
              <p>
                The phoebe-project.org website has been re-written (and is now also <Link to="http://github.com/phoebe-project/phoebe-project.org">open-source</Link>) to improve the ability to navigate the tutorials and documentation for various releases.
              </p>
              <ul>
                <li>Documentation will be preserved for each minor release.  All internal links will point to the latest release, but you can use the version switcher in the lower-right to access old releases.  For example, you can still access <Link to="/docs/2.0">docs for PHOEBE 2.0.x here</Link>.</li>
                <li>Information about each release, including changelog for each bugfix release, has been moved from the Documentation page to the <Link to="/releases">Releases</Link> page.</li>
                <li>Installation instructions, per-release, can now be found on the dedicated <Link to="/install">Install</Link> page.</li>
                <li>The FAQ has been moved from buried deep at the bottom of the documentation page to its own <Link to="/help/faq">FAQ page</Link> under the "Help" dropdown in the menu.</li>
                <li>The <Link to="/docs">Documentation</Link> page is now subdivided into several categories: <Link to="/docs/latest/tutorials">tutorials</Link>, <Link to="/docs/latest/datasets">datasets</Link>, <Link to="/docs/latest/physics">physics</Link>, <Link to="/docs/latest/examples">examples</Link>, and <Link to="/docs/latest/api">API documentation</Link>.</li>
                <li>The <Link to="/docs/latest/api">API Documentation</Link> is now formatted much cleaner and is simpler to navigate.  All backend and developer methods are hidden to avoid adding noise.</li>
                <li>A warning is shown on the install and documentation pages if viewing documentation for an older release.  Consider upgrading, or at least double-checking that your version of PHOEBE matches the docs you're reading.</li>
              </ul>
              <p>
                Along with these changes, each page includes a link to submit a bug report on <em>that particular page's content</em>.  We try to keep the tutorials and API's updated for each minor release of PHOEBE, but we're hoping this will make it easier to report any discrepancies or need for further explanation in the docs.
              </p>
            </div>
  },
  {
    title: "PHOEBE 2.1 released",
    slug: "phoebe-21-released",
    pinnedDays: 45,
    date: "October 29, 2018",
    author: "Kyle Conroy",
    content: <div>
              <p>
                <Link to="/releases/2.1">PHOEBE 2.1</Link> is officially released adding support for spin-orbit misalignment to PHOEBE.  See the <Link to="/publications/2018Horvat+">release paper on misalignment</Link> published in ApJS and checkout the <Link to="/docs/2.1">documentation</Link>.
              </p>
            </div>
  },
  {
    title: "PHOEBE 2.1 coming soon!",
    slug: "phoebe-21-coming-soon",
    date: "June 25, 2018",
    author: "Kyle Conroy",
    content: <div>
              <p>
                With the <Link to="https://arxiv.org/abs/1806.07680">release paper on misalignment</Link> accepted to ApJS, we are now working on some final details in testing and releasing the accompanying 2.1 version of PHOEBE.  Please check back here and on the <Link to="http://github.com/phoebe-project/phoebe2">github repository</Link> for the official 2.1 release in the coming weeks.
              </p>
            </div>
  },
  {
    title: "First PHOEBE Workshop",
    slug: "phoebe-workshop-1",
    date: "February 13, 2018",
    author: "Kyle Conroy",
    content: <div>
              <p>
                Dear Colleagues,
              </p>
              <p>
                We will be holding the first PHOEBE Workshop at Villanova University, Villanova, Pennsylvania, USA, June 18th-22nd, 2018.
              </p>
              <p>
                Further information and the registration form can be found at <Link to="/workshops">http://phoebe-project.org/workshops</Link>.  Registration is now open and will remain open until March 30th, 2018.
              </p>
              <p>
                We look forward to welcoming you to Villanova University in June!
              </p>
              <p>
                Kind regards,<br/>
                The <Link to="/development-team">PHOEBE team</Link>
              </p>
            </div>
  },
  {
    title: "Official PHOEBE 2.0 Release",
    slug: "official-phoebe-20-release",
    date: "March 22, 2017",
    author: "Kyle Conroy",
    content: <div>
              <p>
                Dear PHOEBE users,
              </p>
              <p>
                Now that the <Link to="/publications/2016Prsa+">release paper</Link> has officially been accepted and published, we are pleased to announce the release of <Link to="/releases/2.0">PHOEBE 2.0</Link> (no longer in beta!).
              </p>
              <p>
                You can access the <Link to="https://github.com/phoebe-project/phoebe2/releases/tag/2.0.0">release on github</Link> or read the <Link to="/intall/2.0">installation instructions</Link> and <Link to="/docs/2.0">documentation</Link> on our website.
              </p>
              <p>
                We are already working hard on further computational optimizations and the next few feature releases, including planned support for the following in the near future:
              </p>
              <ul>
                <li>heat redistribution</li>
                <li>triple and multiple star systems including ETV support</li>
                <li>full-support for contact binaries</li>
                <li>built-in support for bayesian fitting via MCMC</li>
                <li>fully-functional web-interface GUI</li>
              </ul>
              <p>
                Although we have done our best to thoroughly test for this release, please submit any issues through github or, as always, feel free to email us with any problems.
              </p>
              <p>
                The <Link to="/development-team">PHOEBE development team</Link>
              </p>
            </div>
  },
  {
    title: "PHOEBE 2.0-beta Released!",
    slug: "phoebe-20-beta-released",
    date: "September 27, 2016",
    author: "Kyle Conroy",
    content: <div>
              <p>
                Dear PHOEBE enthusiasts,
              </p>
              <p>
                After a tremendous amount of work and effort, the PHOEBE team is proud to announce the beta release of PHOEBE 2.0! We hope you will join us for the ride as you experience the latest version of the code and make it work for your set of problems in binary star astrophysics!
              </p>
              <ul>
                <li><Link to="https://github.com/phoebe-project/phoebe2/releases/tag/2.0b">Download on GitHub</Link></li>
                <li><Link to="http://arxiv.org/abs/1609.08135">Release paper (submitted, arXiv)</Link></li>
              </ul>
              <p>
                The <Link to="/development-team">PHOEBE development team</Link>
              </p>
            </div>
  },
  {
    title: "New Website",
    slug: "new-website",
    date: "January 26, 2016",
    author: "Kyle Conroy",
    content: <div>
              <p>
                With the gradual transition of development from PHOEBE 2.0 alpha to beta we have redesigned our entire website.
              </p>
              <p>
                Until the beta version is fully tested and officially released, we highly suggest NOT using it for actual science.
              </p>
              <ul>
                <li>PHOEBE 1.0 (legacy) should be used if you want to get any trustable science results</li>
                <li>PHOEBE 2.0 alpha should be used if you want to play with support for new physics and observables, but should not be used for science and is no longer actively supported. Documentation and tutorials may be slightly out-of-date, but will remain available online for the near future.</li>
                <li>PHOEBE 2.0 beta should be used to learn the interface for PHOEBE going forward and for testing, but should not be used for science results until officially released. Watch here or subscribe to the phoebe announcements mailing list to be notified when the beta version is officially released. If you do choose to give the development version a try, please contact us.</li>
              </ul>
            </div>
  },
  {
    title: "Phoebe being introduced and used at the Binary workshop in Leuven (BE)",
    slug: "phoebe-being-introduced-and-used-at-the-binary-wor",
    date: "April 13, 2015",
    author: "Kyle Conroy",
    content: <div>
              <p>
                This week (13-17 April 2015) a binary workshop is being organised in Leuven (BE) in the framework of the SpaceInn project (<Link to="http://www.spaceinn.eu">http://www.spaceinn.eu</Link>).
                From our <Link to="/development-team">devel team</Link>, Kyle Conroy, Angela Kochoska, Jonas Debosscher and Steven Bloemen are present to train the participants to use Phoebe 2.0 to model binary star light curves and radial velocity curves.
                The tutorials and slides prepared by Kyle for this workshop are available below <b>(note: these will not be updated with changes to the frontend syntax.  Please see the frontend examples in the docs for up-to-date scripts)</b>:
              </p>
              <p>
                <Link to="http://keplerebs.villanova.edu/includes/phoebe/phoebe.pdf">Slides</Link>
              </p>
              <p>
                Forward Model:
              </p>
              <ul>
                <li><Link to="http://keplerebs.villanova.edu/includes/phoebe/binary_simple.py">binary_simple.py</Link></li>
                <li><Link to="http://keplerebs.villanova.edu/includes/phoebe/binary_anim.py">binary_anim.py</Link></li>
                <li><Link to="http://keplerebs.villanova.edu/includes/phoebe/mesh_star.py">mesh_star.py</Link></li>
                <li><Link to="http://keplerebs.villanova.edu/includes/phoebe/puls_mode.py">puls_mode.py</Link></li>
              </ul>
              <p>
                Fitting:
              </p>
              <ul>
                <li><Link to="http://keplerebs.villanova.edu/includes/phoebe/fit_createfakedata.py">fit_createfakedata.py</Link> (run this first to create your "fake data")</li>
                <li><Link to="http://keplerebs.villanova.edu/includes/phoebe/fit_mcmc.py">fit_mcmc.py</Link></li>
                <li><Link to="http://keplerebs.villanova.edu/includes/phoebe/fit_loadresults.py">fit_loadresults.py</Link></li>
                <li><Link to="http://keplerebs.villanova.edu/includes/phoebe/fit_lmfit.py">fit_lmfit.py</Link></li>
              </ul>
              <p>
                For more information, see <Link to="https://fys.kuleuven.be/ster/meetings/binary-2015">https://fys.kuleuven.be/ster/meetings/binary-2015</Link>
              </p>
            </div>
  },
  {
    title: "Power meeting: fun with temperature distributions",
    slug: "power-meeting-fun-with-temperature-distributions",
    date: "October 14, 2014",
    author: "Andrej Prsa",
    content: <div>
              <p>
                Guess what!? It's not all work and no play! We are digging deep into the backend and making sure that everything is in place and as general as possible. In the process of validating the backend, we are playing with temperature distributions. Here is a movie of a very realistic temperature distribution, featuring our two developers Kyle and Bert. Enjoy! (and join us next time!)
              </p>
              <p>
                <em>this video file was (tragically) lost</em>
              </p>
            </div>
  },
  {
    title: "6th PHOEBE power-meeting",
    slug: "6th-phoebe-power-meeting",
    date: "October 12, 2014",
    author: "Andrej Prsa",
    content: <div>
              <p><strong>Villanova, Oct 13-24, 2014</strong></p>
              <p>
                  The PHOEBE development team is proud to announce the 6th power-meeting at <a href="http://www.villanova.edu/">Villanova University</a>, Villanova, USA. This power-meeting is devoted to stabilizing the PHOEBE backend and meeting the goals for the PHOEBE 2.0-beta release. These include a completed documentation, all critical tracker items closed, and a comprehensive scientific library of validated results. If you are interested in attending the meeting, please join us! There is no registration fee. We are looking forward to seeing you at Villanova!
              </p>
            </div>
  },
  {
    title: "PHOEBE 2.0-alpha released!",
    slug: "phoebe-20-alpha-released",
    date: "April 28, 2014",
    author: "Andrej Prsa",
    content: <div>
              <p>
                Dear PHOEBE enthusiasts,
              </p>
               <p>
                   It is our immense pleasure to introduce the alpha version of PHOEBE 2.0! After nearly 4 years of design and work, PHOEBE has been rebuilt from scratch. In includes completely new paradigms that allow the users to model virtually any configuration of opaque systems on the sky. Alongside the release we are unveiling the new webpage that has been modernized and we believe that it will provide a good resource for modeling binary stars and more. As we continue to work on PHOEBE and its website, we kindly invite you to give this alpha release a go and tell us <Link to="mailto:phoebe-devel@lists.sourceforge.net">what you think</Link>! Start with the About (link removed) section, continue to the Download (link removed) section and give the Documentation (link removed) a whirl. Before using PHOEBE 2.0-alpha for any scientific work, please carefully read the Release Notes (link removed).
               </p>
               <p>
                 Wishing you an enjoyable experience while taking the new PHOEBE for a spin!
               </p>
               <p>
                 Your <Link to="/development-team">PHOEBE development team</Link>
               </p>
            </div>
  },
  {
    title: "5th PHOEBE power-meeting",
    slug: "5th-phoebe-power-meeting",
    date: "April 10, 2014",
    author: "Andrej Prsa",
    content: <div>
              <p>
                <strong>
                  Nijmegen, Apr 7-18, 2014
                </strong>
              </p>
              <p>
                The PHOEBE development team announces the 5th power-meeting taking place in Nijmegen, Netherlands. Power meetings are 1- to 2-week get-togethers of developers devoted to brainstorming and implementation of new ideas. With everyone away from their daily obligations for a couple of weeks, we focus solely on PHOEBE development in a collaborative, productive environment. The 5th power-meeting in Nijmegen is devoted to the finalization of the front-end, thorough testing of the back-end and, barring any major show-stoppers, the release of the official PHOEBE 2.0 version. If you would like to join us at the power-meeting, please send us an email to phoebe-devel@list.sourceforge.net.
              </p>
            </div>
  }

]



export class News extends Component {
  render() {
    var filteredNewsStoryDicts = newsStoriesDicts;
    var headerTitle = "News";
    var helmetTitle = "News";

    if (this.props.match.params.slug) {
      var filteredNewsStoryDicts = [];
      newsStoriesDicts.forEach((newsStoryDict, index) => {
      	if (this.props.match.params.slug === newsStoryDict.slug) {
          // NOTE: if for some reason 2 have the same slug, this will return the OLDER
          filteredNewsStoryDicts.push(newsStoryDict)
          headerTitle = newsStoryDict.title
          helmetTitle = "News | "+newsStoryDict.title
        }
      });
      if (! filteredNewsStoryDicts.length) {
        return (
          <NotFound>No matching news story could be found.  See <Link to="/news">all news stories</Link>.</NotFound>
        )
      }
    }

    return (
      <div>
        <Helmet>
          <title>PHOEBE | {helmetTitle}</title>
          <meta name="description" content={"PHOEBE News: "+helmetTitle}/>
        </Helmet>
        <Header>
          <h1>{headerTitle}</h1>
        </Header>
        <Content>
          {filteredNewsStoryDicts.map(newsStoryDict => <NewsContent title={newsStoryDict.title} slug={newsStoryDict.slug} author={newsStoryDict.author} date={newsStoryDict.date} showAsSummary={this.props.match.params.slug==null}>{newsStoryDict.content}</NewsContent>)}
        </Content>
      </div>
    );
  }
}

export class NewsContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      newsWrapHeight: 0,
    };
    this.newsWrap = React.createRef();
  }
  toggleExpand = () => {
    this.setState({expanded: !this.state.expanded});
  }
  componentDidMount() {
    this.setState({newsWrapHeight: this.newsWrap.current.clientHeight});
  }
  render() {
    var wrapHeight = this.props.wrapHeight || 500
    var showAsSummary = this.props.showAsSummary

    if (this.state.newsWrapHeight <= wrapHeight) {
      showAsSummary = false
    }

    if (!this.props.showAsSummary && !this.state.expanded) {
      this.setState({expanded: true})
    }



    var newsWrapStyle = {overflow: "hidden"};
    if (!this.state.expanded && showAsSummary) {
      newsWrapStyle.maxHeight = wrapHeight+"px"
    }

    return (
      <div className="panel news-callout" data-i="7">
        <h2>{this.props.title} {this.props.showAsSummary ? <Link to={"/news/"+this.props.slug} className="news-permalink" title="Permalink to this article">¶</Link> : null}</h2>
        <div className="news-info">
          <h6>
            <small>
              Date: {this.props.date}<br/>
              Author: {this.props.author}<br/>
            </small>
          </h6>
        </div>
        <div ref={this.newsWrap} className="news-wrap" style={newsWrapStyle}>
          {this.props.children}
        </div>
        <br/>
        {showAsSummary ?
          <div className="read-more">
            <a onClick={this.toggleExpand} style={{cursor: "pointer"}}>{this.state.expanded ? "Collapse" : "Read More"}</a>
          </div>
          :
          null
        }

      </div>
    )
  }
}
