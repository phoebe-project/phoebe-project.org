import React, { Component } from 'react';

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import {Content, Link, Redirect, Image, Separator, NosetestsDiv, metaKeywords} from './common';
import {NotFound} from './errors';
import {Header, HeaderNavButton} from './header';



export class Contribute extends Component {
  constructor(props) {
      super(props);
      this.state = {
        hash: null,
      };
      this.reftesting = React.createRef();
      this.refissues = React.createRef();
      this.reffeatures = React.createRef();
      this.refdevelop = React.createRef();
  }
  scrollToHash() {
    var offsetTop = null;
    var hash = this.state.hash
    if (hash==='#testing') {
      offsetTop = this.reftesting.current.offsetTop;
    } else if (hash==='#issues') {
      offsetTop = this.refissues.current.offsetTop;
    } else if (hash==='#features') {
      offsetTop = this.reffeatures.current.offsetTop;
    } else if (hash==='#develop') {
      offsetTop = this.refdevelop.current.offsetTop;
    }

    if (offsetTop) {
      window.scrollTo(0,offsetTop-80);
    }
  }
  componentDidUpdate() {
    this.scrollToHash()
  }
  render() {
    if (this.props.location.hash !== this.state.hash) {
      this.setState({hash: this.props.location.hash})
    }


    return (
      <div>
        <Helmet>
          <title>PHOEBE | Contribute</title>
          <meta name="keywords" content={metaKeywords+", contribute"}/>
          <meta name="description" content="Contribute to the development of PHOEBE"/>
        </Helmet>
        <Header>
          <h1>Contribute</h1>

          <div className="row">
             <div className="col-md-4"></div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Testing" description="Test PHOEBE" to={"#testing"} icon="fa fa-vial"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Report Issues" description="Report Bugs in PHOEBE" to={"#issues"} icon="fas fa-bug"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Request Features" description="Request New Features" to={"#features"} icon="fas fa-flask"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Join Us" description="Join Us and Help Develop PHOEBE" to={"#develop"} icon="fas fa-user-plus"/>
             </div>
           </div>
        </Header>
        <Content preventScrollTop={this.props.location.hash}>
          <h2 ref={this.reftesting}><span className="fa fa-xs fa-vial"></span> Testing PHOEBE</h2>
          <p>
            The easiest way to help contribute to PHOEBE is to help by testing the code - both by testing systems and configurations we may not have considered and also on a variety of different machines and installations.
          </p>
          <p>
            We use a suite of tests, called nosetests, which are run everytime we commit a change to the code and before every release by <Link to="https://travis-ci.org/phoebe-project/phoebe2">Travis CI</Link>.  You can start by running this suite of tests on your own machine/installation and making sure all tests pass.
          </p>
          <NosetestsDiv/>
          <p>
            If any of the tests fail, see below on how to <Link to="#issues">report an issue</Link>.
          </p>
          <p>
            Once all of the tests pass, you know that your installation is working as far as all the official tests.  Now continue to abuse PHOEBE, are report anytime that PHOEBE crashes, takes an exceedingly long amount of time, or returns wrong science.
          </p>
          <p>
            If you find a corner of PHOEBE that is not covered by the nosetests, feel free to write and submit your own.  You can always fork the <Link to="http://github.com/phoebe-project/phoebe2">GitHub repository</Link> and submit a Pull-Request, or see below for more information on how to <Link to="#develop">join the development team</Link>, if you so wish.
          </p>

          <Separator large={false}/>
        </Content>
        <Content dark={true} preventScrollTop={this.props.location.hash}>
          <h2 ref={this.refissues}><span className="fas fa-xs fa-bug"></span> Report Bugs and Issues</h2>
          <p>
            Found an issue or a bug?  Let us know so that we can try to fix it.
          </p>
          <p>
            If the issue is with the documentation, file a bug in the <Link to="http://github.com/phoebe-project/phoebe2-docs/issues/new">phoebe2-docs issue tracker</Link>.  Make sure to include the version and page with the issue (or click the link on the top-right of the page in the documentation directly).
          </p>
          <p>
            If you found an issue with this website (broken link, etc), file a bug in the <Link to="http://github.com/phoebe-project/phoebe-project.org/issues/new">phoebe-project.org issue tracker</Link>, including a link to the URL in question.
          </p>
          <p>
            If the issue is with PHOEBE itself, file a bug in the <Link to="http://github.com/phoebe-project/phoebe2/issues/new">phoebe2 issue tracker</Link>.  Please specify the <Link to="/help/version">version of PHOEBE you have installed</Link> and, if possible, include a minimal script that can reproduce the bug.
          </p>
          <Separator large={false} flip={true}/>
        </Content>
        <Content preventScrollTop={this.props.location.hash}>
          <h2 ref={this.reffeatures}><span className="fas fa-xs fa-flask"></span> Request New Features</h2>
          <p>
            Think PHOEBE should be able to do something that it can't?  This could be any of the following:
          </p>
          <ul>
            <li>support for new physics</li>
            <li>new dataset/observable type</li>
            <li>support for an additional alternate backend</li>
            <li>additional atmosphere table</li>
            <li>additional passband</li>
          </ul>
          <p>
            To submit a feature request, file a request in the <Link to="http://github.com/phoebe-project/phoebe2/issues/new?title=feature+request:&labels=feature">phoebe2 issue tracker</Link> tagged with "feature".  Include as much information as possible, and we'll try to get back to you if its feasible.  For large features, you may also consider <Link to="#develop">contributing and writing it yourself</Link> (we're of course happy to help you get started).
          </p>
          <Separator large={false}/>
        </Content>
        <Content dark={true} preventScrollTop={this.props.location.hash}>
          <h2 ref={this.refdevelop}><span className="fas fa-xs fa-user-plus"></span> Join Us and Help Develop PHOEBE</h2>
          <p>
            Interested in getting your hands dirty and writing some code?  We'd be happy to help you get started.
          </p>
          <p>
            All development occurs in the various <Link to="/source">GitHub repositories</Link>.  Without being a member of the team, you will be unable to push changes to the repository.  For small changes, you're welcome to create a fork under your own username and open a pull-request back to the official repository.  If you're interested in leading the development of a new feature, for example, you may want to join the <Link to="/help/devel">PHOEBE development team</Link> so that you have permissions to push directly to the official repositories.  The development team generally meets weekly by telecon and contributes to all feature <Link to="/releases">releases</Link> and <Link to="/publications">publications</Link>.  If this interests you, reach out to us on the <Link to="/help/contact/phoebe-devel">phoebe-devel mailing list</Link>.
          </p>
          <p>
            Whether forking or pushing to the official repositories, its important to make sure you're developing in the appropriate branch.
          </p>
          <ul>
            <li><Link to="http://github.com/phoebe-project/phoebe2">phoebe2</Link>: <b>NO</b> development is done directly in the master branch.  Changes that warrant a bug-fix release are done in branches off of master and merged via a pull-request.  The development of new features are done in branches off of development and merged once ready to be released.  Other smaller changes are done within development (or a branch off development and then merged) and are released with the next feature release.</li>
            <li><Link to="http://github.com/phoebe-project/phoebe2-docs">phoebe2-docs</Link>: each branch in the repository represents a minor release of PHOEBE.  Changes affecting multiple releases should therefore be "cherrypicked" between all the relevant branches.  The latest release can be merged into master via a pull-request.</li>
            <li><Link to="http://github.com/phoebe-project/phoebe2-tables">phoebe2-tables</Link>: all development is done directly in the master branch (or a branch off of master and then merged in via a pull-request).  Once in master, the files will be live for all users of PHOEBE - so make sure not to break backwards-compatibility.</li>
            <li><Link to="http://github.com/phoebe-project/phoebe-project.org">phoebe-project.org</Link>: all development is currently committed or merged into the master branch as soon as its tested and ready to be pushed live to the website.  Any experimental changes that are not ready to go live should be done in a separate branch and a pull-request submitted once ready to be merged.</li>
          </ul>
          <p>
            <b>COMING SOON</b>: we're working on a document/tutorial to help find your way around the PHOEBE source-code.  Until then, feel free to reach out to us and we can help you find your way around and get started.
          </p>
        </Content>

      </div>
    );
  }
}
