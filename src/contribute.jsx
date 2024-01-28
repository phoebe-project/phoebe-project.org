import React, { Component } from 'react';

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import {Content, Link, Separator, TestsDiv, metaKeywords} from './common';
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
            We use a suite of tests, called pytest, which are run everytime we commit a change to the code and before every release by <Link to="https://travis-ci.org/phoebe-project/phoebe2">Travis CI</Link>.  You can start by running this suite of tests on your own machine/installation and making sure all tests pass.
          </p>
          <TestsDiv/>
          <p>
            If any of the tests fail, see below on how to <Link to="#issues">report an issue</Link>.
          </p>
          <p>
            Once all of the tests pass, you know that your installation is working as far as all the official tests.  Now continue to abuse PHOEBE, and report anytime that PHOEBE crashes, takes an exceedingly long amount of time, or returns wrong science.
          </p>
          <p>
            If you find a corner of PHOEBE that is not covered by the tests, <Link to="/contribute/development-guide#tests">feel free to write and submit your own</Link>.  You can always fork the <Link to="http://github.com/phoebe-project/phoebe2">GitHub repository</Link> and submit a Pull-Request, or see below for more information on how to <Link to="#develop">join the development team</Link>, if you so wish.
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
            If you found an issue with either the <Link to="/clients">desktop or web clients</Link>, file a bug in the <Link to="http://github.com/phoebe-project/phoebe2-ui/issues/new">phoebe2-ui issue tracker</Link>, including the versions of the client and <code>phoebe-server</code>.
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
            To submit a feature request, start a <Link to="https://github.com/phoebe-project/phoebe2/discussions/new?category=ideas">discussion topic</Link>.  Include as much information as possible, and we'll try to get back to you if its feasible.  For large features, you may also consider <Link to="#develop">contributing and writing it yourself</Link> (we're of course happy to help you get started).
          </p>
          <Separator large={false}/>
        </Content>
        <Content dark={true} preventScrollTop={this.props.location.hash}>
          <h2 ref={this.refdevelop}><span className="fas fa-fw fa-xs fa-user-plus"></span> Write Code &amp; Develop PHOEBE</h2>
          <p>
            Interested in getting your hands dirty and writing some code?  We'd be happy to help you get started.
          </p>
          <p>
            All development occurs in the various <Link to="/source">GitHub repositories</Link>.  Without being a member of the team, you will be unable to push changes to the repository.  For small changes, you're welcome to create a fork under your own username and open a pull-request back to the official repository.  If you're interested in leading the development of a new feature, for example, you may want to join the <Link to="/development-team">PHOEBE development team</Link> so that you have permissions to push directly to the official repositories.  The development team generally meets weekly by telecon and contributes to all feature <Link to="/releases">releases</Link> and <Link to="/publications">publications</Link>.  If this interests you, reach out to us on the <Link to="/help/contact/phoebe-devel">phoebe-devel mailing list</Link>.
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
      this.reftests = React.createRef();
      this.refdocs = React.createRef();
      this.refauthorship = React.createRef();
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
    } else if (hash==='#tests') {
      offsetTop = this.reftests.current.offsetTop;
    } else if (hash==='#docs') {
      offsetTop = this.refdocs.current.offsetTop;
    } else if (hash=='#authorship') {
      offsetTop = this.refauthorship.current.offsetTop;
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
               <HeaderNavButton title="Tests" description="Writing Tests" to={"#tests"} icon="fa fa-vial"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Documentation" description="Writing Documentation" to={"#docs"} icon="fa fa-book-open"/>
             </div>
             <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
               <HeaderNavButton title="Authorship" description="Authorship Policy" to={"#authorship"} icon="fa fa-users"/>
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
            If you're working on an unreleased branch of the source-code, see the <Link to="/docs/development">development branch documentation</Link> (corresponding to the latest <code>release-2.x</code> branch of the code).
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

          <h3>Where/how to contribute changes:</h3>
          <p>All contributions should be handled via pull requests (PR) from your own personal fork into the main repository with any merge conflicts addressed through <i>rebasing not merge commits</i>.  The <Link to="#branches">branch</Link> which you should start and request merging into depends on the changes being made.  The most convenient way to do this is to add both your own fork repo and the main <code>phoebe-project</code> repo as separate remotes to your local repository so that you can rebase your local changes on top of the latest official branch while pushing to your personal fork.</p>

          <h5>Documentation fixes/improvements:</h5>
          <p>Documentation is built per-minor release and can therefore be updated for past releases of phoebe.  Any improvements should be backported to applicable previous releases.</p>
          <ul>
            <li>Create a branch in your own personal fork off the latest commit in the <i>most recent applicable</i> branch in the <code>phoebe2-docs</code> repo</li>
            <li>Make changes, committing and pushing to the branch in your own forked repository</li>
            <li><Link to="https://github.com/phoebe-project/phoebe2-docs/compare">Open a PR</Link> from your branch (right dropdown) into the appropriate <code>2.x</code> branch (left dropdown).  Note that you may need to click "compare across forks" to see your own fork as an option.</li>
            <li>Include in the description which other older versions of the docs should recieve the same updates</li>
            <li>The PR will be reviewed, and once all comments are addressed will be squashed and merged.</li>
            <li>Repository admin will attempt to cherrypick the changes into all other applicable branches.  If merge conflicts aren't obvious to resolve, separate PRs may be necessary</li>
            <li>For simple and uncontroversial changes, commits directly to the repository branches are permitted (PRs and squashing are not required)</li>
          </ul>

          <h5>Bugfix releases:</h5>
          <p>Bugs should be fixed without breaking backwards compatibility or API in that minor release, if at all possible.  Any changes that break backwards compatibility or require a change to documentation, should note the version and explain the changes in the docs, wherever necessary.</p>
          <ul>
            <li>Create a branch in your personal fork off the latest commit in the <code>master</code> branch</li>
            <li>If breaking changes are included that require docs updates, create a branch in your own personal fork off the appropriate <code>2.x</code> branch in the <code>phoebe2-docs</code> repo and make any updates describing the changes and which version introduced them</li>
            <li>Preferably create a regression test which reproduces the bug and fails, but should pass.  This helps avoid the bug re-ocurring.  This isn't always feasible though as we also need to keep the tests somewhat efficient.</li>
            <li>Fix the bug, committing and pushing to the branch in your own forked repository</li>
            <li>Add a changelog entry to <code>README.md</code> and bump the version string in <code>pyproject.toml</code> and <code>__init__.py</code></li>
            <li>If other bugfixes are released at anytime before this bugfix is released, rebase on top of the latest <code>master</code>, address conflicts, and bump the version as necessary</li>
            <li><Link to="https://github.com/phoebe-project/phoebe2/compare">Open a PR</Link> from your branch (right dropdown) into the <code>master</code> branch (left dropdown).  Note that you may need to click "compare across forks" to see your own fork as an option.</li>
            <li>If docs changes are necessary, <Link to="https://github.com/phoebe-project/phoebe2-docs/compare">Open a PR</Link> from your branch (right dropdown) into the appropriate <code>2.x</code> branch (left dropdown).  Note that you may need to click "compare across forks" to see your own fork as an option.</li>
            <li>The PR(s) will be reviewed, and once all comments are addressed and tests pass, will be squashed and merged into <code>master</code></li>
            <li>Once merged, feel free to delete the branch in your own forked repo</li>
            <li>Repository admin will tag the release on GitHub, publish to pip, and rebase all other branches in the offical repository as necessary</li>
          </ul>

          <h5>Incremental updates to include in the next release:</h5>
          <p>Any development that should be included in the next minor release, regardless of which major effort becomes that release, should occur off of the <code>release-2.x</code> branch.  These efforts should be short-lived (any merge conflicts are the responsibility of the owner until they're merged) and somewhat self-contained (<code>release-2.x</code> should always remain release-ready and considered stable although backwards compatibility breaks and API changes are expected).</p>
          <ul>
            <li>Create a branch in your own personal fork off the latest commit in the <code>release-2.x</code> branch (where 2.x is the next minor release that will include any accepted changes)</li>
            <li>If docs changes are necessary, create a branch in your own personal fork off the <code>development</code> branch in the <code>phoebe2-docs</code> repository</li>
            <li>Commit and push to the branch in your own forked repository</li>
            <li>Create any necessary tests to cover new features, etc</li>
            <li>If other updates (or bugfixes) are added to <code>release-2.x</code> branch, feel free to rebase.  This will only be <i>necessary</i> if merge conflicts would occur otherwise</li>
            <li><Link to="https://github.com/phoebe-project/phoebe2/compare">Open a PR</Link> from your branch (right dropdown) into the <code>release-2.x</code> branch (left dropdown).  Note that you may need to click "compare across forks" to see your own fork as an option.</li>
            <li>If docs changes are necessary, <Link to="https://github.com/phoebe-project/phoebe2-docs/compare">Open a PR</Link> from your branch (right dropdown) into the <code>release-2.x</code> branch (left dropdown).  Note that you may need to click "compare across forks" to see your own fork as an option.</li>
            <li>The PR(s) will be reviewed, and once all comments are addressed and tests pass, will be squashed and merged into <code>release-2.x</code>.  These changes will then be released whenever the next feature release is ready.</li>
            <li>Once merged, feel free to delete the branch in your own forked repo</li>
            <li>Repository admin will rebase all <code>feature-*</code> branches in the official repository as necessary to keep them up to date</li>
          </ul>


          <h5>Feature releases:</h5>
          <p>Any long-lived efforts that are planned to be the "title" of a minor release, should live off their respective <code>feature-*</code> branches.  These branches are created in the main repository as branches off the latest <code>release-2.x</code> branches and are occasionally rebased to include changes merged there.  This allows for parallel work on multiple large efforts in parallel, without having to commit to the order in which they will eventually be released.</p>
          <ul>
            <li>Create a branch in your own personal fork off the latest commit in the appropriate <code>feature-*</code> branch.  Note that any changes here will not be released until this feature is fully ready to be released as the next minor version</li>
            <li>If docs changes are necessary, create a branch in your own personal fork off the <code>feature-*</code> branch in the <code>phoebe2-docs</code> repository</li>
            <li>Commit and push to the branch in your own forked repository</li>
            <li>Create any necessary tests to cover new features, etc</li>
            <li>If other updates (or bugfixes) are added to <code>feature-*</code> branch, feel free to rebase.  This will only be <i>necessary</i> if merge conflicts would occur otherwise</li>
            <li><Link to="https://github.com/phoebe-project/phoebe2/compare">Open a PR</Link> from your branch (right dropdown) into the <code>feature-*</code> branch (left dropdown).  Note that you may need to click "compare across forks" to see your own fork as an option.</li>
            <li>If docs changes are necessary, <Link to="https://github.com/phoebe-project/phoebe2-docs/compare">Open a PR</Link> from your branch (right dropdown) into the <code>feature-*</code> branch (left dropdown).  Note that you may need to click "compare across forks" to see your own fork as an option.</li>
            <li>The PR(s) will be reviewed, and once all comments are addressed and tests pass, will be squashed and merged into <code>feature-*</code>.  These changes will then be released whenever <i>this</i> feature release is ready and will also include all incremental changes in <code>release-2.x</code> made in the meantime</li>
            <li>Once merged, feel free to delete the branch in your own forked repo</li>
          </ul>

          <h5>Repository admin: bugfix release process</h5>
          <ul>
            <li>Review PR: check for presence of changelog and tests and that all CI tests pass</li>
            <li>Squash and merge into <code>master</code></li>
            <li>If applicable, squash and merge <code>phoebe2-docs</code> PR</li>
            <li>Publish to PIP (see below)</li>
            <li>Create GitHub release entry and tag</li>
            <li>Rebase existing <code>release-2.x</code> onto latest released version in <code>master</code></li>
            <li>Rebase all <code>feature-*</code> branches onto the updated <code>release-2.x</code> branch (in both <code>phoebe2</code> and <code>phoebe2-docs</code> repos)</li>
          </ul>

          <h5>Repository admin: minor release process</h5>
          <ul>
            <li>Open PRs from <code>feature-*</code> into <code>release-2.x</code> branch within both <code>phoebe2</code> and <code>phoebe2-docs</code> repos</li>
            <li>Merge (not squash & merge) PRs and delete the respective <code>feature-*</code> branches</li>
            <li>Rename <code>release-2.x</code> branch to <code>2.x</code> in the <code>phoebe2-docs</code> repo, check built version of docs</li>
            <li>Open PR from <code>release-2.x</code> into <code>master</code></li>
            <li>Update <code>phoebe-project.org</code> website for new release, docs, and news entries</li>
            <li>Merge PR and delete <code>release-2.x</code> branch</li>
            <li>Publish to PIP (see below)</li>
            <li>Create GitHub release entry and tag</li>
            <li>Publish changes to website</li>
            <li>Create new <code>release-2.x+1</code> branch off of <code>master</code></li>
            <li>Rebase all <code>feature-*</code> branches onto the <i>new</i> release branches in both <code>phoebe2</code> and <code>phoebe2-docs</code></li>
          </ul>

          <h5>Repository admin: Publishing to PIP (see <Link to="https://packaging.python.org/distributing/#semantic-versioning-preferred">pip documentation</Link>):</h5>
          <ul>
            <li>make sure you have a ~/.pypirc (<Link to="https://wiki.python.org/moin/TestPyPI">more info</Link>).</li>
            <li>make sure you have twine installed (<code>sudo pip install twine</code>).</li>
            <li>build distribution releases (<code>python -m build</code>).</li>
            <li>upload to pypi server (<code>twine upload -r pypi -u [username] -p [password] dist/phoebe-[VERSION].tar.gz</code>).</li>
            <li>OPTIONAL: test in a virtual environment:
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
            <li><code>master</code>: contains the latest release only.  Commits should not be made directly to the master branch, but rather are developed and merged as parts of releases. This way, the landing page of the repo always shows the latest stable released version.</li>
            <li><code>release-2.x</code>: contains a semi-stable and tested version of all incremental changes that will make their way into the next minor release.  Contributions to this branch are done via PR from personal forks and squashed and merged once reviewed</li>
            <li><code>feature-*</code>: the are often long-lived branches requiring collaboration among multiple developers.  These branches are rebased on top of the latest <code>release-2.x</code> and once ready, will become the next minor release</li>
          </ul>

          <h3>phoebe2-docs repo</h3>

          <p>
            The <Link to="http://github.com/phoebe-project/phoebe2-docs">phoebe2-docs repository</Link> contains all documentation (tutorials, example scripts, this document, etc).
            As this documentation is archived (but still editable) for all past feature/minor releases, the branch name corresponds directly the the PHOEBE 2 releases.
          </p>

          <ul>
            <li><code>master</code>: the master branch is intentionally left blank (except for built <code>*.py</code> and <code>*.ipynb</code> files hosted by GitHub pages) with a <code>README.md</code> explaining the branch structure.</li>
            <li><code>2.x</code>: a branch exists for each version of PHOEBE 2.  It is important when making changes to tutorials, etc, to commit and push to all applicable branches (can be done via cherrypicking).  This way we can keep the documentation for older releases current.</li>
            <li><code>release-2.x</code>: documentation changes corresponding to the same branch in the <code>phoebe2</code> repo.  Note that these are built and exposed on the website in the <code>development</code> directory (in the <code>master</code> branch).</li>
            <li><code>feature-*</code>: documentation changes corresponding to the same branch in the <code>phoebe2</code> repo.  Note that these are not available from the version switcher on the website, but are built and available to view from GitHub directly.</li>
          </ul>

          <h3>tables.phoebe-project.org repo</h3>

          <p>
            The <Link to="http://github.com/phoebe-project/tables.phoebe-project.org">tables.phoebe-project.org repository</Link> contains the source-code for the flask server that runs the tables server for all PHOEBE 2.2+ releases.
            <ul>
              <li>New passbands should be placed in the <code>/srv/www/tables-phoebe-project/data</code> directory in clusty</li>
              <li>The passband metadata is refreshed every hour automatically, but the server can be forced to restart by touching <code>/srv/www/tables-phoebe-project/tables-phoebe-project-venv.wsgi</code> file</li>
              <li>Updates to the flask server code should be pushed to the repo above, pulled on clusty, and the server restarted by touching <code>/srv/www/tables-phoebe-project/tables-phoebe-project-venv.wsgi</code></li>
              <li>Updates to PHOEBE needed for the server should be pulled and installed in the <code>phoebe_server_venv</code> virtual environment, and the server restarted.</li>
              <li>Any updates to PHOEBE that change the structure of passbands needs to be reflected in the flask server so that passband files generated for older releases continue to work.</li>

            </ul>
          </p>

          <h3>phoebe2-ui repo</h3>

          <p>
            The <Link to="http://github.com/phoebe-project/phoebe2-ui">phoebe2-ui repository</Link> contains the React application of the web and desktop clients.
          </p>

          <h3>phoebe2-tables repo</h3>

          <p>
            The <Link to="http://github.com/phoebe-project/phoebe2-tables">phoebe2-tables repository</Link> contains all passband/atmosphere tables available for download by any user's installation of PHOEBE (<b>for versions 2.0.x and 2.1.x only</b>).  Currently it only consists of a <code>master</code> branch.  Be careful when making updates - these updates must work for *all* versions of PHOEBE 2.0.x and 2.1.x that anyone may still have installed.
          </p>

          <h3>phoebe-project.org repo</h3>

          <p>
            The <Link to="http://github.com/phoebe-project/phoebe-project.org">phoebe-project.org repository</Link> contains the source-code for the phoebe-project.org website.  Changes can be made to the <code>master</code> branch as long as they are tested and ready to go-live.  Changes under development can be made in other branches and merged into <code>master</code> when ready.  See the <Link to="http://github.com/phoebe-project/phoebe-project.org/blob/master/README.md">phoebe-project.org README</Link> for more information.
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
          <h2 ref={this.reftests}><span className="fa fa-fw fa-xs fa-vial"></span> Writing Tests</h2>

          <p>
            Tests run (via GitHub actions) after every commit is pushed to ensure that that commit didn't break anything.
            If it does break a test, the author is notified so they can address the issue.
            Nevertheless, it's always a good idea to run the tests locally before pushing to GitHub.  If you're unfamiliar, see <Link to="/contribute#testing">how to run the tests</Link> on your own machine.
            However, the testing is only as good as the tests themselves, so as new features are developed it is important to cover them as thoroughly as possible through this suite of tests.
          </p>

          <p>
            The tests all live in the <Link to="https://github.com/phoebe-project/phoebe2/tree/master/tests/tests">tests</Link> directory in the phoebe2 source-code.
            If you browse this directory, you'll see a list of subdirectories (each starting with <code>test_</code>) and one or multiple python files in each subdirectory.
            If you look at the <Link to="https://github.com/phoebe-project/phoebe2/blob/master/tests/tests/test_blackbody/test_blackbody.py">tests/test_blackbody/test_blackbody.py</Link>, for example, you'll then see one (or more in some cases) functions (also named 'test_').
            These functions are each run by pytest and should consist of Assert statements.  If any of these Assert statements fail, the error will be printed in the GitHub Actions log, and the build will show as "broken".
            At the bottom of that file, you'll see: <code>if name=='__main__':</code>.  This section of the code is run only if calling the script directly, and just simply manually calls each of the <code>test_</code> functions.
          </p>
          <p>
            Some of the existing pytests test to make sure the physics remains unchanged.  These often compare the output model to that from PHOEBE 1 or a saved file.  Other tests make sure that errors are raised when necessary (if a forbidden value is provided, for example).
          </p>
          <p>
            If you think something needs to be added to the tests, browse around the existing tests and see if it can be added to one that already exists.  If not, go ahead and create a new subdirectory and/or file with a reasonable name.  Just make sure to follow these conventions:
          </p>
          <ul>
            <li>all subdirectories and files are named with the <code>test_</code> prefix</li>
            <li>all functions within the test file that do not start with an underscore will be run by pytest.  It doesn't hurt to prefix them with <code>test_</code> as well, just to be clear.</li>
            <li>include all test_ functions in the main block at the bottom of the code so that any errors from pytest can easily be reproduced simply by running the script from the command-line</li>
            <li>consider having a switch that defaults to <code>False</code> but is passed as <code>True</code> from the main-block for any debugging/verbose outputs</li>
            <li>never plot by default.  If plotting is helpful to debug, include in a switch which defaults to <code>False</code>.</li>
          </ul>

          <Separator large={false} flip={true}/>
        </Content>
        <Content preventScrollTop={this.props.location.hash}>
          <h2 ref={this.refdocs}><span className="fa fa-fw fa-xs fa-book-open"></span> Writing Documentation</h2>

          <p>
            The <Link to="/docs">documentation</Link> for PHOEBE is divided into several different styles or types:
          </p>
          <ul>
            <li><b>Tutorials</b>: tutorials aim to provide a narrated introduction to concepts without getting in-depth and generally build on each other.  These are all Jupyter notebooks and in the tutorials directory and are linked from tutorials.md file in phoebe2-docs.</li>
            <li><b>Datasets/Physics</b>: tutorials (although not as verbose as the ordered-tutorials above) that introduce the various datasets and types of physics implemented in PHOEBE.  These are all Jupyter notebooks in the tutorials directory and are linked from either datasets.md or physics.md in phoebe2-docs.</li>
            <li><b>Examples</b>: example scripts aim to provide a more focused... example, but with less narration than tutorials.  They assume a basic understanding of using PHOEBE and skip over the basics.  These are also all Jupyter notebooks and in the examples directory and are linked from examples.md in phoebe2-docs.</li>
            <li><b>API Docs</b>: API docs provide in-depth documentation for the arguments for each function/method.  These are in the docstrings of the PHOEBE code itself and are automatically generated into the api directory in phoebe2-docs.  Any changes to an archived version of PHOEBE can be made directly to the markdown files, but changes to the current or future releases should be done in the source-code itself.</li>
          </ul>

          <p>
            For all new Jupyter notebooks: please copy the <code>template_tutorial.ipynb</code> or <code>template_example.ipynb</code> file in the correct directory and rename it to something sensible.
          </p>

          <p>
            Note: make sure you're updating in the <Link to="#branches">correct branch</Link>.
          </p>


        </Content>
        <Content dark={true} preventScrollTop={this.props.location.hash}>
          <h2 ref={this.refauthorship}><span className="fa fa-fw fa-xs fa-users"></span> Authorship Policy</h2>

          <p>
          PHOEBE is a collaborative, open-source code released under the GNU General Public License v3. The philosophy behind PHOEBE is inclusive: everyone who contributes to its codebase, to its documentation, to building and testing, or to its scientific backend, merits recognition. The purpose of this document is to explain how the aforementioned contributions relate to code authorship and paper authorship rules.
          </p>

          <h3>Code Authorship</h3>
          <p>
            Code authorship is acknowledged in the top-level <code>pyproject.toml</code> build configuration file. The file has two relevant tables: "authors" and "maintainers". PHOEBE defines "authors" as persons who contributed one or more of the following:
            <ul>
              <li>approved and merged pull requests (PRs) that contain significant bugfixes and close (or help close) a corresponding issue;</li>
              <li>approved and merged code documentation PRs that correct factual errors or omissions, or contribute documentation that has not existed before;</li>
              <li>science- or operation-related discussion points that have been reviewed by all other authors and recognized as meritorious for the inclusion in the code;</li>
              <li>any other additions to the code or supporting materials that the team recognizes as meritorious.</li>
            </ul>
          </p>

          <p>
            Code authorship is assigned to the minor version release cycle (i.e., phoebe-2.x) and perseveres for the life of that cycle. The new cycle begins with the official release of the minor version (say, phoebe-2.4) and ends with the official release of the subsequent minor version (say, phoebe-2.5). New authors that provide mid-cycle contributions that meet the above criteria will be added to the respective micro version releases (i.e., phoebe-2.x.y).
          </p>

          <p>
            PHOEBE defines `maintainers` as persons who lead the project. The maintainers' responsibility is to oversee the development, distribution, and future vision of the project, to implement work flows and code contribution ethics, to ensure equal opportunities and fair/equitable treatment of all involved individuals, and to be held accountable for project deliverables. Maintainers have exclusive access to the github's `main` repository. Currently, two individuals serve as project maintaners, Andrej Prša (project PI) and Kyle Conroy (lead developer).
          </p>

          <h3>Paper Authorship</h3>
          <p>
            Thus far, PHOEBE publications were tied to the minor version releases. As a rule, minor versions provide fundamental new functionality to PHOEBE. Paper authorship reflects the degree of contributions to the codebase, to the documentation, and to other release-related efforts. First author position is reserved for the individual who leads the implementation effort and who has written the majority of the paper. The remaining authors are listed commensurate to their contributions to the published work. All authors listed in the `authors` section of the code authorship are eligible to co-authorship of the paper. The PI of the project, unless they lead the paper, will be listed as last author on the paper. In addition to the contributors from the `authors` section, the following contributions qualify for paper co-authorship:
            <ul>
              <li>organization of and significant participation in workshops, power meetings and conferences that focus on the PHOEBE codebase;</li>
              <li>acquired significant funding that is primarily designated for the development of PHOEBE in general, or any of the scientific aspects in PHOEBE in particular.</li>
            </ul>
          </p>

          <p>
            2 weeks prior to paper submission, the lead author is obliged to circulate the draft to all potential co-authors. The co-authors need to provide the written (emailed) statement to the lead author where (1) they list the contributions to the work published in the paper; (2) they agree with the contents of the paper, and (3) they accept co-authorship on the paper.        
          </p>

          <h3>Dispute Resolution</h3>
          <p>
            Determining code and paper authorship can be a non-trivial issue. In the case where the rules set by this document are not sufficiently clear, the maintainers of the project, at their sole discretion, can resolve the dispute over code and paper authorship. Their decision is considered final and cannot be further disputed.
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
