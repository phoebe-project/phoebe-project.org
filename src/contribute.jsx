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
               <HeaderNavButton title="Write Code" description="Write Code and Help Develop PHOEBE" to={"#develop"} icon="fas fa-user-plus"/>
             </div>
           </div>
        </Header>
        <Content preventScrollTop={this.props.location.hash}>
          <h2 ref={this.reftesting}><span className="fa fa-fw fa-xs fa-vial"></span> Testing PHOEBE</h2>
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
            Once all of the tests pass, you know that your installation is working as far as all the official tests.  Now continue to abuse PHOEBE, and report anytime that PHOEBE crashes, takes an exceedingly long amount of time, or returns wrong science.
          </p>
          <p>
            If you find a corner of PHOEBE that is not covered by the nosetests, <Link to="/contribute/development-guide#nosetests">feel free to write and submit your own</Link>.  You can always fork the <Link to="http://github.com/phoebe-project/phoebe2">GitHub repository</Link> and submit a Pull-Request, or see below for more information on how to <Link to="#develop">join the development team</Link>, if you so wish.
          </p>

          <Separator large={false}/>
        </Content>
        <Content dark={true} preventScrollTop={this.props.location.hash}>
          <h2 ref={this.refissues}><span className="fas fa-fw fa-xs fa-bug"></span> Report Bugs and Issues</h2>
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
          <h2 ref={this.reffeatures}><span className="fas fa-fw fa-xs fa-flask"></span> Request New Features</h2>
          <p>
            Think PHOEBE should be able to do something that it can't?  This could be any of the following:
          </p>
          <ul>
            <li>support for new physics</li>
            <li>new dataset/observable type</li>
            <li>support for an additional alternate backend</li>
            <li>request an <Link to="https://github.com/phoebe-project/phoebe2-tables/issues/new?title=atmosphere+request:">additional atmosphere table</Link></li>
            <li>request an <Link to="https://github.com/phoebe-project/phoebe2-tables/issues/new?title=passband+request:&labels=passband+request">additional passband</Link></li>
          </ul>
          <p>
            To submit a feature request, file a request in the <Link to="http://github.com/phoebe-project/phoebe2/issues/new?title=feature+request:&labels=feature">phoebe2 issue tracker</Link> tagged with "feature".  Include as much information as possible, and we'll try to get back to you if its feasible.  For large features, you may also consider <Link to="#develop">contributing and writing it yourself</Link> (we're of course happy to help you get started).
          </p>
          <Separator large={false}/>
        </Content>
        <Content dark={true} preventScrollTop={this.props.location.hash}>
          <h2 ref={this.refdevelop}><span className="fas fa-fw fa-xs fa-user-plus"></span> Write Code &amp; Develop PHOEBE</h2>
          <p>
            Interested in getting your hands dirty and writing some code?  We'd be happy to help you get started.
          </p>
          <p>
            All development occurs in the various <Link to="/source">GitHub repositories</Link>.  Without being a member of the team, you will be unable to push changes to the repository.  For small changes, you're welcome to create a fork under your own username and open a pull-request back to the official repository.  If you're interested in leading the development of a new feature, for example, you may want to join the <Link to="/help/devel">PHOEBE development team</Link> so that you have permissions to push directly to the official repositories.  The development team generally meets weekly by telecon and contributes to all feature <Link to="/releases">releases</Link> and <Link to="/publications">publications</Link>.  If this interests you, reach out to us on the <Link to="/help/contact/phoebe-devel">phoebe-devel mailing list</Link>.
          </p>
          <p>
            Once you're ready to start coding, see the <Link to="/contribute/development-guide">development guide</Link> which will help you find your way around the code and make sure you're working in the <Link to="/contribute/development-guide#branches">appropriate branch</Link>.
          </p>
        </Content>

      </div>
    );
  }
}

export class ContributeDevelopment extends Component {
  constructor(props) {
      super(props);
      this.state = {
        hash: null,
      };
      this.refreleases = React.createRef();
      this.refbranches = React.createRef();
      this.reftours = React.createRef();
      this.refnosetests = React.createRef();
      this.refdocs = React.createRef();
  }
  scrollToHash() {
    var offsetTop = null;
    var hash = this.state.hash
    if (hash==='#releases') {
      offsetTop = this.releases.current.offsetTop;
    } else if (hash==='#branches') {
      offsetTop = this.refbranches.current.offsetTop;
    } else if (hash==='#tours') {
      offsetTop = this.reftours.current.offsetTop;
    } else if (hash==='#nosetests') {
      offsetTop = this.refnosetests.current.offsetTop;
    } else if (hash==='#docs') {
      offsetTop = this.refdocs.current.offsetTop;
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
          <title>PHOEBE | Development Guide</title>
          <meta name="keywords" content={metaKeywords+", contribute"}/>
          <meta name="description" content="Contribute to the development of PHOEBE"/>
        </Helmet>
        <Header>
          <h1>Development Guide</h1>

          <div className="row">
             <div className="col-md-2"></div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Releases" description="Release Conventions" to={"#releases"} icon="fa fa-tags"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Repos & Branches" description="Repositories and Branches" to={"#branches"} icon="fas fa-code-branch"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Code Tours" description="Tours of Code Layout and Structure" to={"#tours"} icon="fas fa-microscope"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Nosetests" description="Writing Nosetests" to={"#nosetests"} icon="fa fa-vial"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Documentation" description="Writing Documentation" to={"#docs"} icon="fa fa-book-open"/>
             </div>
           </div>
        </Header>
        <Content preventScrollTop={this.props.location.hash}>

          <p>
            Digging into the PHOEBE 2 <Link to="/source">source-code</Link>?
            The following sections aim to give an overview of the code-structure and conventions used throughout PHOEBE.
            If you run into any problems or think something should be here that isn't, please feel free to <Link to="/help/contact">reach out to us</Link>.
          </p>
          <p>
            See the page on <Link to="/contribute">contributing to PHOEBE</Link> for instructions on testing, forking, and joining the development team.
            The rest of this document assumes that you have a local copy of the source-code on your machine and are fairly comfortable as a PHOEBE user.
          </p>
          <p>
            If you're working on an unreleased branch of the source-code, see the <Link to="/docs/development">development branch documentation</Link> (which may not be entirely up-to-date).
          </p>

          <h2 ref={this.refreleases}><span className="fa fa-fw fa-xs fa-tags"></span> Releases</h2>
          <h3>Version Tag Conventions</h3>
          <p>
            PHOEBE 2 follows the conventions of <Link to="https://semver.org">semantic versioning</Link> as closely as possible.
            Versions of PHOEBE are tagged as MAJOR.MINOR.PATCH (i.e. 2.1.9 - note <b>no leading zeros</b>) where:
          </p>
          <ul>
            <li>MAJOR: an increment in the first digit represents a significant rewrite and infrastructure change.</li>
            <li>MINOR: an increment in the second digit generally represents the introduction of a significant new feature and is generally accompanied by a release paper.  Slightly different than the conventions of semantic versioning, we do allow changing the API in a way that may break backwards-compatibility with existing scripts, but make all efforts to clearly spell these out and handle importing saved files from previous releases into the new release.</li>
            <li>PATCH: an increment in the last digit represents a hot/bug-fix.  These should address critical issues in the current release that cannot wait to be merged into the next feature/minor release and should take all reasonable measures to avoid compatibility issues.  The documentation is only archived per-minor release, so any changes to API etc, must be explicitly noted.  For example: tutorials/example scripts/API will need notes stating the applicable differences.</li>
          </ul>

          <h3>Release Checklist</h3>
          <p>Bugfix releases:</p>
          <ul>
            <li>All bug release development should be done in their own independent <Link to="#branches">branch</Link> off of master.</li>
            <li>Update versioning information in setup.py and __init__.py and add changelog entry to README.md, commit to bugfix branch.</li>
            <li>Merge master into the branch if necessary (probably only if working on multiple bugfixes simultaneously).</li>
            <li>Open pull-request from the bugfix branch into master.</li>
            <li>Confirm all CI tests pass on Travis, both in the bugfix branch and the PR.</li>
            <li>Close pull-request by squashing if a single author, or merge commit otherwise.  Make sure to link to and close any relevant issues that the bugfix addresses.</li>
            <li>Create and tag release on GitHub.</li>
            <li>Merge master into development and any other active branches, merging in the changes to the readme, but leaving the version at 'devel'.</li>
            <li>See below for instructions on publishing to pip.</li>
          </ul>

          <p>Feature releases:</p>
          <ul>
            <li>All feature release or bug release development should be done in their own independent <Link to="#branches">branch</Link> off of development.</li>
            <li>Merge development (which should already include everything in master) into the feature/release branch (can create a new release-2.x branch if desired).</li>
            <li>Update versioning information in setup.py and __init__.py and add changelog entry to README.md, commit to feature/release branch.</li>
            <li>Create and prepare a 2.X branch on phoebe2-docs: update/rerun all tutorials, add migration tutorials, update API docs, etc.</li>
            <li>Open pull-request from feature/release into master.</li>
            <li>Confirm all CI tests pass on Travis, both on the feature/release and the PR.</li>
            <li>Close pull-request via a merge commit.</li>
            <li>Create and tag release on GitHub.</li>
            <li>Prepare release entry on website, see <Link to="https://github.com/phoebe-project/phoebe-project.org#releasing-a-new-version-of-phoebe">instructions here</Link>.</li>
            <li>Merge master into development and any other active branches, merging in the changes to the readme, but leaving the version at 'devel'.</li>
            <li>See below for instructions on publishing to pip.</li>
          </ul>

          <p>Publishing to PIP (see <Link to="https://packaging.python.org/distributing/#semantic-versioning-preferred">pip documentation</Link>):</p>
          <ul>
            <li>make sure you have a ~/.pypirc (<Link to="https://wiki.python.org/moin/TestPyPI">more info</Link>).</li>
            <li>make sure you have twine installed (<code>sudo pip install twine</code>).</li>
            <li>build distribution releases (<code>python setup.py sdist</code>).</li>
            <li>upload to pypi server (<code>twine upload -r pypi -u [username] -p [password] dist/phoebe-[VERSION].tar.gz</code>).</li>
            <li>test in a virtual environment:
              <ul>
                <li>make sure you have virtualenv installed (<code>sudo pip install virtualenv</code>).</li>
                <li>create temporary virtualenv (<code>virtualenv ~/.tmpvirtualenv</code>).</li>
                <li>activate virtualenv (<code>source ~/.tmpvirtualenv/bin/activate</code>).</li>
                <li>install phoebe (<code>pip install --no-cache-dir numpy phoebe</code>).</li>
                <li>run tests (or at least confirm that you can import phoebe from within python).</li>
                <li>leave virtualenv (<code>deactivate</code>).</li>
                <li>delete virtualenv (<code>rm -rf ~/.tmpvirtualenv</code>).</li>
              </ul>
            </li>

          </ul>
          <Separator large={false}/>
        </Content>
        <Content dark={true} preventScrollTop={this.props.location.hash}>
          <h2 ref={this.refbranches}><span className="fas fa-fw fa-xs fa-code-branch"></span> Repositories &amp; Branches</h2>

          <p>
            When developing, it is important to contribute your work to the appropriate repository/branch.
            If you are not a member of the development team, you will need to fork the repository under your own GitHub username, commit and push your changes to your forked repository, and then open a pull-request into the official repository (preferably to the appropriate branch).
            If you plan to make significant contributions, consider <Link to="/contribute#develop">joining the development team</Link>.
          </p>

          <h3>phoebe2 repo</h3>

          <p>
            The <Link to="http://github.com/phoebe-project/phoebe2">phoebe2 repository</Link> contains the source-code for PHOEBE 2 itself and is the main repository of the project.
            We follow a <Link to="https://nvie.com/posts/a-successful-git-branching-model/">Git-Flow like</Link> strategy for branches as follows:
          </p>

          <ul>
            <li>master: the master branch should always contain the latest release only.  Commits should not be made directly to the master branch, but rather are compiled and tested in their own pre-release branches before being merged and tagged as a new release in the master branch.  This way, the landing page of the repo always shows the latest stable released version.</li>
            <li>hotfix: bug fixes which will likely be assigned a hotfix/patch-release should be branched off of master, merged via a pull-request into *both master and development*, and tagged as a new release.  In general, these branches should be short-lived and consist of a minimal number of commits.  If possible (especially if all work is done by a single author), the pull-request should squash all commits.</li>
            <li>development: the development branch contains all current work that is not worthy of a hotfix or a part of a feature under development.  All changes in development will be incorporated into the next feature/minor release.  If working on something that requires multiple commits, consider creating a local branch off of development and squashing/merging once complete and tested.</li>
            <li>
              features: all feature branches should be branched off of development.
              These are often long-lived and take significant time and changes to the code before they're ready to be released, so it may be necessary to occasionally merge development into the feature branch (note: not the other way around).
              Once ready to release, development should be merged into the feature branch and the release prepared and tested.
              Once finalized, the release/feature branch should be merged into <i>both master and development</i>.
            </li>
          </ul>

          <h3>phoebe2-docs repo</h3>

          <p>
            The <Link to="http://github.com/phoebe-project/phoebe2-docs">phoebe2-docs repository</Link> contains all documentation (tutorials, example scripts, this document, etc).
            As this documentation is archived (but still editable) for all past feature/minor releases, the branch name corresponds directly the the PHOEBE 2 releases.
          </p>

          <ul>
            <li>master: the master branch is intentionally left blank (except for built .py and .ipynb files hosted by GitHub pages) with a README explaining the branch structure.</li>
            <li>2.0, 2.1, etc: a branch exists for each version of PHOEBE 2.  It is important when making changes to tutorials, etc, to commit and push to all applicable branches.  This way we can keep the documentation for older releases current.</li>
            <li>development, etc: branches can exist in the phoebe2-docs repository that correspond to branches (particularly feature branches) in the main phoebe2 repository.  These exist to prepare documentation for future releases (without knowing the release number yet).</li>
          </ul>

          <h3>phoebe2-tables repo</h3>

          <p>
            The <Link to="http://github.com/phoebe-project/phoebe2-tables">phoebe2-tables repository</Link> contains all passband/atmosphere tables available for download by any user's installation of PHOEBE.  Currently it only consists of a master branch.  Be careful when making updates - these updates must work for *all* versions of PHOEBE 2.x that anyone may still have installed.
          </p>

          <h3>phoebe-project.org repo</h3>

          <p>
            The <Link to="http://github.com/phoebe-project/phoebe-project.org">phoebe-project.org repository</Link> contains the source-code for the phoebe-project.org website.  Changes can be made to the master branch as long as they are tested and ready to go-live.  Changes under development can be made in other branches and merged into master when ready.  See the <Link to="http://github.com/phoebe-project/phoebe-project.org/blob/master/README.md">phoebe-project.org README</Link> for more information.
          </p>

          <Separator large={false} flip={true}/>
        </Content>
        <Content preventScrollTop={this.props.location.hash}>
          <h2 ref={this.reftours}><span className="fas fa-fw fa-xs fa-microscope"></span> Tours of Code Layout &amp; Structure</h2>

          <p>
            The source-code of PHOEBE 2 can be split into several different levels, starting with the frontend which you're probably most familiar with as a user and if reading through the <Link to="/docs">documentation</Link>.
            Depending on what you're trying to develop, you may need to dig deeper into the code.
            Below are code-tours of the different "layers" of PHOEBE.
            These aim to show you the general layout and structure of the PHOEBE code and get you familiar with where certain pieces of logic belong.
          </p>

          <ul>
            <li><Link to="/contribute/tour/frontend">frontend</Link></li>
            <li><Link to="/contribute/tour/backend">Python-backend</Link> (<b>COMING SOON</b>)</li>
            <li><Link to="/contribute/tour/libphoebe">C-backend (libphoebe)</Link> (<b>COMING SOON</b>)</li>
          </ul>

          <Separator large={false}/>
        </Content>
        <Content dark={true} preventScrollTop={this.props.location.hash}>
          <h2 ref={this.refnosetests}><span className="fa fa-fw fa-xs fa-vial"></span> Writing Nosetests</h2>

          <p>
            Nosetests run (via Travis-CI) after every commit is pushed to GitHub to ensure that that commit didn't break anything.
            If it does break a test, the author is notified so they can address the issue.
            Nevertheless, it's always a good idea to run the tests locally before pushing to GitHub.  If you're unfamiliar, see <Link to="/contribute#testing">how to run the tests</Link> on your own machine.
            However, the testing is only as good as the tests themselves, so as new features are developed it is important to cover them as thoroughly as possible through this suite of tests.
          </p>

          <p>
            The nosetests all live in the <Link to="https://github.com/phoebe-project/phoebe2/tree/master/tests/nosetests">tests/nosetests</Link> directory in the phoebe2 source-code.
            If you browse this directory, you'll see a list of subdirectories (each starting with 'test_') and one or multiple python files in each subdirectory.
            If you look at the <Link to="https://github.com/phoebe-project/phoebe2/blob/master/tests/nosetests/test_blackbody/test_blackbody.py">test/nosetests/test_blackbody/test_blackbody.py</Link>, for example, you'll then see one (or more in some cases) functions (also named 'test_').
            These functions are each run by nosetests (and Travis) and should consist of Assertion statements.  If any of these Assertion statements fail, the error will be printed in the Travis log, and the build will show as "broken".
            At the bottom of that file, you'll see: <code>if name=='__main__':</code>.  This section of the code is run only if calling the script directly, and just simply manually calls each of the 'test_' functions.
          </p>
          <p>
            Some of the existing nosetests test to make sure the physics remains unchanged.  These often compare the output model to that from PHOEBE 1 or a saved file.  Other nosetests make sure that errors are raised when necessary (if a forbidden value is provided, for example).
          </p>
          <p>
            If you think something needs to be added to the nosetests, browse around the existing tests and see if it can be added to one that already exists.  If not, go ahead and create a new subdirectory and/or file with a reasonable name.  Just make sure to follow these conventions:
          </p>
          <ul>
            <li>all subdirectories and files are named with the test_ prefix</li>
            <li>all functions within the test file that do not start with an underscore will be run by nosetests.  It doesn't hurt to prefix them with test_ as well, just to be clear.</li>
            <li>include all test_ functions in the main block at the bottom of the code so that any errors from nosetests can easily be reproduced simply by running the script from the command-line</li>
            <li>consider having a switch that defaults to False but is passed as True from the main-block for any debugging/verbose outputs</li>
            <li>never plot by default.  If plotting is helpful to debug, include in a switch which defaults to False.</li>
          </ul>

          <Separator large={false} flip={true}/>
        </Content>
        <Content preventScrollTop={this.props.location.hash}>
          <h2 ref={this.refdocs}><span className="fa fa-fw fa-xs fa-book-open"></span> Writing Documentation</h2>

          <p>
            The <Link to="/docs">documentation</Link> for PHOEBE is divided into several different styles or types:
          </p>
          <ul>
            <li>Tutorials: tutorials aim to provide a narrated introduction to concepts without getting in-depth and generally build on each other.  These are all Jupyter notebooks and in the tutorials directory and are linked from tutorials.md file in phoebe2-docs.</li>
            <li>Datasets/Physics: tutorials (although not as verbose as the ordered-tutorials above) that introduce the various datasets and types of physics implemented in PHOEBE.  These are all Jupyter notebooks in the tutorials directory and are linked from either datasets.md or physics.md in phoebe2-docs.</li>
            <li>Examples: example scripts aim to provide a more focused... example, but with less narration than tutorials.  They assume a basic understanding of using PHOEBE and skip over the basics.  These are also all Jupyter notebooks and in the examples directory and are linked from examples.md in phoebe2-docs.</li>
            <li>API Docs: API docs provide in-depth documentation for the arguments for each function/method.  These are in the docstrings of the PHOEBE code itself and are automatically generated into the api directory in phoebe2-docs.  Any changes to an archived version of PHOEBE can be made directly to the markdown files, but changes to the current or future releases should be done in the source-code itself.</li>
          </ul>

          <p>
            For all new Jupyter notebooks: please copy the template_tutorial.ipynb or template_example.ipynb file in the correct directory and rename it to something sensible.
          </p>

          <p>
            Note: make sure you're updating in the <Link to="#branches">correct branch</Link>.
          </p>


        </Content>

      </div>
    );
  }
}

export class TourFrontend extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>PHOEBE | Frontend Code Tour</title>
          <meta name="description" content="Tour of the frontend source-code"/>
        </Helmet>
        <Header>
          <h1>Frontend Code Tour</h1>
        </Header>
        <Content>
          <p>
            NOTE: this code tour is kept current (hopefully) for the <Link to="/releases/latest">latest release</Link>.  It should (mostly) apply to the development branch, but may not be accurate if you're working off of a previous release.
          </p>
          <p>
            The PHOEBE frontend consists of the user-interaction-layer of PHOEBE: all top-level convenience functions, the Bundle, ParameterSets, Parameters, and ParameterSet-creation functions (i.e. functions to create and attach datasets, compute options, etc).
            All of the public funtionality in the frontend is exposed in the <Link to="/docs/latest/api">API Docs</Link>, but there are also "private" methods, conventionally notated by the underscore or double-underscore prefix.
          </p>
          <h2>Top-Level Convenience Functions</h2>

          <ul>
            <li><Link to="https://github.com/phoebe-project/phoebe2/blob/master/phoebe/__init__.py" hideExternal={true}>phoebe.__init__.py source on GitHub</Link></li>
            <li><Link to="/docs/latest/api/phoebe">phoebe API Docs</Link></li>
          </ul>

          <p>
            Several commonly-used functions are exposed at the top-level of PHOEBE.
            Some of these are just imported from their respective sub-packages so that they're available as <code>phoebe.whatever</code>, while others are simple wrappers.
            For example, <code>phoebe.open</code> is defined as a wrapper in <Link to="https://github.com/phoebe-project/phoebe2/blob/master/phoebe/__init__.py" hideExternal={true}>__init__.py</Link> because its calling a classmethod of the Bundle rather than an actual function.
          </p>


          <p>
            <Link to="https://github.com/phoebe-project/phoebe2/blob/master/phoebe/__init__.py" hideExternal={true}>__init__.py</Link> is also responsible for exposing the logger and autofig/nparray convenience functions as well as setting reasonable defaults (for MPI for example) and parsing any supported environment variables.
            Lastly, but importantly, <Link to="https://github.com/phoebe-project/phoebe2/blob/master/phoebe/__init__.py" hideExternal={true}>__init__.py</Link> handles the MPI logic to keep any worker processors in a wait loop until they receive tasks.
          </p>

          <Separator large={false} flip={false}/>
        </Content>
        <Content dark={true}>
          <h2>The Bundle</h2>

          <ul>
            <li><Link to="https://github.com/phoebe-project/phoebe2/blob/master/phoebe/frontend/bundle.py" hideExternal={true}>phoebe.frontend.bundle source on GitHub</Link></li>
            <li><Link to="/docs/latest/api/phoebe.frontend.bundle.Bundle">phoebe.frontend.bundle.Bundle API Docs</Link></li>
          </ul>

          <p>
            The bundle subpackage (<Link to="https://github.com/phoebe-project/phoebe2/blob/master/phoebe/frontend/bundle.py" hideExternal={true}>phoebe.frontend.bundle source</Link>) consists solely of the Bundle class, which is a subclass of a ParameterSet (see below).
            All methods that are applicable to filtered ParameterSets should be defined at the ParameterSet level instead of the Bundle.  For example, if you want to be able to do <code>b.filter().my_method()</code>, then the method <b>must</b> be defined in the ParameterSet, even if they require access to the entire Bundle (hierarchy, etc).
            This leaves most of the context-dependent methods in the Bundle, including:
          </p>
          <ul>
            <li>add_*</li>
            <li>rename_*</li>
            <li>remove_*</li>
            <li>run_*</li>
          </ul>

          <p>
            Additionally, the Bundle class includes classmethods for creating default systems or loading/importing, as well as saving the entire Bundle object to a file.
            These have the <code>@classmethod</code> decorator and are used as <code>b=Bundle.open()</code>.
          </p>

          <Separator large={false} flip={true}/>
        </Content>
        <Content>
          <h2>The ParameterSet</h2>

          <ul>
            <li><Link to="https://github.com/phoebe-project/phoebe2/blob/master/phoebe/parameters/parameters.py" hideExternal={true}>phoebe.parameters source on GitHub</Link></li>
            <li><Link to="/docs/latest/api/phoebe.parameters.ParameterSet">phoebe.parameters.ParameterSet API Docs</Link></li>
          </ul>

          <p>NOTE: because of the import statements in <Link to="https://github.com/phoebe-project/phoebe2/blob/master/phoebe/parameters/__init__.py" hideExternal={true}>phoebe.parameters.__init__.py</Link>, everything in phoebe/parameters/parameters.py is available from python directly from phoebe.parameters.</p>

          <p>
            The ParameterSet class contains all logic for filtering the list of Parameters and acting on those Parameters.  Whenever these "filtering" methods return another ParameterSet instance, those become chainable: allowing <code>b.filter(context='component').filter(component='primary')</code>.
            Some of these methods are in the ParameterSet instead of the Bundle because of this desire to be chainable, but still require the presence of a "parent" Bundle instance.  In these cases, you can access <code>self._bundle</code>, but make sure to account for the case where this may not exist (and which case <code>self._bundle = None</code>.
          </p>

          <Separator large={false} flip={false}/>
        </Content>
        <Content dark={true}>
          <h2>Parameters</h2>

          <ul>
            <li><Link to="https://github.com/phoebe-project/phoebe2/blob/master/phoebe/parameters/parameters.py" hideExternal={true}>phoebe.parameters source on GitHub</Link></li>
            <li><Link to="/docs/latest/api/phoebe.parameters.Parameter">phoebe.parameters.Parameter API Docs</Link></li>
            <li><Link to="/docs/latest/api/phoebe.parameters">phoebe.parameters API Docs</Link> (contains links to all Parameter subclasses)</li>
          </ul>

          <p>
            The Parameter class contains all logic that is shared among all (or at least most) of the different types of Parameters supported by PHOEBE, but is not meant to be used on its own.
            The individual types (FloatParameter, for example) all subclass the Parameter class and override whatever methods are necessary to add the functionality needed by that type.
          </p>

          <Separator large={false} flip={true}/>
        </Content>
        <Content>
          <h2>Creation-Functions</h2>

          <ul>
            <li><Link to="https://github.com/phoebe-project/phoebe2/blob/master/phoebe/parameters/" hideExternal={true}>phoebe.parameters source on GitHub</Link> (contains links to all creation-function subpackages)</li>
            <li><Link to="/docs/latest/api/phoebe.parameters">phoebe.parameters API Docs</Link> (contains links to all creation-function subpackages)</li>
          </ul>

          <p>
            Also within the phoebe/parameters directory are a number of subpackages to create default ParameterSets.
            These are generally named after the appropriate context (<Link to="https://github.com/phoebe-project/phoebe2/blob/master/phoebe/parameters/component.py" hideExternal={true}>component.py</Link>, <Link to="https://github.com/phoebe-project/phoebe2/blob/master/phoebe/parameters/dataset.py" hideExternal={true}>dataset.py</Link>, <Link to="https://github.com/phoebe-project/phoebe2/blob/master/phoebe/parameters/compute.py" hideExternal={true}>compute.py</Link>, etc).
            The functions within these subpackages are queried whenever the corresponding Bundle.add_ method is called.  For example, <code>b.add_dataset('lc')</code> looks in <Link to="https://github.com/phoebe-project/phoebe2/blob/master/phoebe/parameters/dataset.py" hideExternal={true}>dataset.py</Link> for a function called "lc".
            Since that does exist, it calls that function to get the default ParameterSet to attach to the Bundle for a new light curve.
            If it did not exist, <code>b.add_dataset</code> would raise an error.
          </p>
        </Content>
      </div>
    )
  }
}

export class TourBackend extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>PHOEBE | Python-Backend Code Tour</title>
          <meta name="description" content="Tour of the Python-Backend source-code"/>
        </Helmet>
        <Header>
          <h1>Python-Backend Code Tour</h1>
        </Header>
        <Content>
          <p>COMING SOON...</p>
        </Content>
      </div>
    )
  }
}

export class TourLibphoebe extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>PHOEBE | C-Backend (libphoebe) Code Tour</title>
          <meta name="description" content="Tour of the C-Backend (libphoebe) source-code"/>
        </Helmet>
        <Header>
          <h1>C-Backend (libphoebe) Code Tour</h1>
        </Header>
        <Content>
          <p>COMING SOON...</p>
        </Content>
      </div>
    )
  }
}
