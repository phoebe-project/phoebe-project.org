# phoebe-project.org

phoebe-project.org is a single-page ReactJS website, with content dynamically pulled and rendered from the various [phoebe repositories](http://github.com/phoebe-project):

* changelog and patch-release information (including knowing the latest patch-version for each release to render install instructions) is pulled from the README on the master branch of the [phoebe2 repository](http://github.com/phoebe-project/phoebe2).
* documentation is pulled from the [phoebe2-docs repository](http://github.com/phoebe-project/phoebe2-docs) where each branch in the repository corresponds to a minor release of PHOEBE available on the documentation page.
* workshop information is pulled from the corresponding branches in the [phoebe2-workshop](http://github.com/phoebe-project/phoebe2-workshop).

## Dependencies

see [installing node and npm on Ubuntu](https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/)

  * node
  * npm


## Serving locally

In the root directory, issue:

```
npm install
```

to install local dependencies, and then:

```
npm start
```

to create a local webserver running the site.

NOTE on `/static/` files: all files referenced as /static/ are NOT included in the git repository, but rather served separately by apache on clusty.  These include large downloads such as atmosphere tables and PHOEBE legacy builds and documentation.  These links WILL NOT WORK when running a local server, as they will not be able to find the correct directory.  See below in "General Notes on Layout/Conventions" for more details on what to put in `static` vs `public`.


## Deploying

In the root directory, issue:

```
npm run deploy
```

This assumes that you have `clusty` as a servername on your machine and permissions to write to the correct directory.  If not, you can manually build and scp the files:

```
npm run build
scp -r build/* clusty:/srv/www/phoebe-project/
```


## General Notes on Layout/Conventions

* The website is written using ReactJS using ES6 syntax. It is a single-page app, meaning that no matter what URL is visited, the entire site (as a minimized javascript file) is downloaded and run by the user's browser.  Clicking internal links simply changes the `state` and the rendering in the browser adjusts according to the `Router` defined in [App.js](./src/App.js).  This allows for really simplified and re-usable code, but requires a few considerations to keep the initial loadtime reasonable.  Partly for this reason, but also to allow for one single-source that is easy to update, many sources are fetched as requested from other phoebe repositories and rendered in real-time (e.g. the docs pages are pulled from the respective files in [phoebe2-docs](http://github.com/phoebe-project/phoebe2-docs) and rendered from the Jupyter notebook or markdown files into the browser).  Other sections of the website that are not in separate repositories are hard-coded directly into the source of the website, but as they're mostly minimal text, do not add significantly to the size of the bundled javascript file.  See below for notes on how to update content across different sections of the site.

* Styling: note that for all html elements, ReactJS requires using `className` instead of `class` and all css inline-styles should be translated to camelCase (`background-color` in css becomes `backgroundColor` in jsx).  Whenever possible, styling should be done inline within the component, but when needed for site-wide styling or cascading, can be handled by adding to [App.css](./src/App.css).

* Fonts: Merriweather and Ubuntu fonts are loaded by [index.html](./src/index.html) from google fonts and are set by [App.css](./src/App.css).

* Icons: [font-awesome (free, v5.5.0)](https://fontawesome.com/icons?d=gallery&m=free) are used throughout the site and should be used by adding the necessary classes (via `className`) to the `<span>` tags (or in some cases passing by passing the classes to the `icon` property of a built-in component).

* Bootstrap Components: [bootstrap (v3.3.5)](https://getbootstrap.com/docs/3.3/) is currently loaded by [index.html](./src/index.html) from [bootstrap.min.paper.css](./public/bootstrap.min.paper.css) and [bootstrap.min.js](./public/bootstrap.min.js) (which in turn requires [jquery](./public/jquery.min.js) to handle the collapsing navigation bar).  For alerts, use the built-in `Alert` class in [common.jsx](./src/common.jsx).  Any style changes should be overridden by [App.css](./src/App.css) (with `!important` if necessary) rather than editing the css of bootstrap directly.

* In general, each tab in the navigation bar has its own .jsx file in the [src](./src/) directory and exports the components required to [App.js](./src/App.js) which handles all routing.  

* The top navigation bar is not version-sticky (i.e. if you're on /docs/2.0 and click the install tab you will get the latest install instructions, not /install/2.0), but the buttons in the header and internal links on a given page are version-sticky (i.e. switching between tutorials and example scripts remembers your documentation version).

* Please use the internal `Link` (for internal links), `NavLink` (for the navigation bar) component from [common.jsx](./src/common.jsx), or `HeaderNavButton` (for within-tab navigation) component from [header.jsx](./src/header.jsx) instead of adding html `<a>` tags manually.  This way internal vs external links are handled correctly by the component (so that internal links just change the state/router and do not refresh the entire source).  To override the addition of the "external link" icon for `Link` components, pass `hideExternal={true}`.  The only exception to using these components is within external content that is dynamically loaded (e.g. markdown files in other repositories): for now these will render `<a>` tags and cause a page refresh.

* Please use the internal `Image` component from [common.jsx](./src/common.jsx) instead of adding html `<img>` tags manually.  This makes sure to reference internal image sources correctly.

* Static files (`static` vs `public`): large download files and legacy documentation/builds are stored EXTERNALLY on clusty and hosted by apache.  Any large downloads that do not need to be placed under version control should be manually placed here in reasonably-named subdirectories.  They can then be referenced via the `Link` component with `to='/static/whatever'`, which will handle writing the `<a>` tag correctly without using the Router.  Any smaller files (images, logos, etc) can be placed in the repository's [public](./public) directory and can be referenced via the `Link` component with `to='/whatever'`.  Be careful of name conflicts - any match within the public directory will be served first before falling back on the React-Router (for example: creating a `public/docs` directory could have unfortunate consequences).  Additionally, `static/css` and `static/js` are configured (via apache) to point to the react `build/static` - so creating `css` or `js` directories in the `static` directory will have no effect and will not be accessible.

## Releasing a New Version of PHOEBE

Once a new MINOR/MAJOR version of PHOEBE (i.e. 2.1 or 3.0) is released on GitHub and pip, several steps need to be made to update the website.  PATCH versions (i.e. 2.1.1) do not need any action as everything is loaded dynamically from the sources on GitHub.

1. Update `docs_versions` in [docs.jsx](./src/docs.jsx) if the new version should be shown in the docs switcher.  The first version listed in the list will be considered the "latest" release, and all internal links will now point to that version.  Make sure the correct branch exists in the [phoebe2-docs repository](http://github.com/phoebe-project/phoebe2-docs) and that the API docs are updated and pushed. See below for more details below about updating documentation on the website.

2. Create the content for the release page in [releases.jsx](./src/releases.jsx) inside the if-else logic in the `ReleaseContent` component by updating the `content` and `logo` (if anything other than the default logo) variables (see existing releases for examples).

3. Create the entry for the corresponding release paper in [publications.jsx](./src/publications.jsx) and tag with the release (if applicable, see "Updating Publications" below for more information).

4. Create a news entry item and pin to the homepage, if necessary (see below for more information).

## Updating Releases

The text description and logo for each MINOR/MAJOR release are defined in [releases.jsx](./src/releases.jsx).  The changelog entry for patch releases is dynamically pulled from the changelog in the README (master branch) of the main [phoebe2 repository](http://github.com/phoebe-project/phoebe2).

## Updating Installation Instructions

Installation instructions are defined in the `Install` component in [install.jsx](./src/install.jsx).  Pay specific attention to the logic of whether a version is specified or not (if `version` is `null` then default version-less instructions are shown).  If making changes to the installation instructions that are not backwards-compatible with previous releases (or vice-versa) make sure to include logic based on the value of the `version` variable.

## Updating Documentation

The PHOEBE 2 documentation sources displayed on the website are dynamically fetched from the [phoebe2-docs repository](http://github.com/phoebe-project/phoebe2-docs) and rendered from either the jupyter notebook or markdown file found in the branch corresponding to the requested version.  Updates to documentation should therefore be made to the [phoebe2-docs repository](http://github.com/phoebe-project/phoebe2-docs) and pushed (or open a Pull Request) to the correct branch.  API documentation is also pulled from the same repository, but must be manually updated from the corresponding release of PHOEBE.

Versions displayed in the version switcher are defined in [docs.jsx](./src/docs.jsx) under the `docs_versions` variable.  The list should be sorted from newest to oldest versions available, with the first entry (newest) being automatically redirected from all site-wide navigation links (i.e. /docs or /docs/latest).

## Updating News Entries

News entries are defined in `newsStoriesDicts` variable in [news.jsx](./src/news.jsx).  To add a new article, add a dictionary to the TOP of this list, copying the format of other existing entries.  Pay particular attention to making sure all commas exist correctly (and test locally before deploying).  The `pinnedDays` key in the dictionary will determine how long the given entry will also be shown on the top of the homepage.  If not provided, this will default to 30 days.  NOTE: the `content` must be wrapped in an outer `<div>` element.

## Workshops

Similar to the documentation, the workshop pages are dynamically fetched from the [phoebe2-workshop repository](http://github.com/phoebe-project/phoebe2-workshop) and rendered from the markdown files.  Updates to the workshop information or materials, should be made to the [phoebe2-workshop repository](http://github.com/phoebe-project/phoebe2-workshop) and pushed (or open a Pull Request) to the correct branch.  The name of the branch must match the name of the workshop URL (defined in the `workshops` variable in [workshops.jsx](./src/workshops.jsx)).

### Adding a New Workshop

Create a new branch (with the format "2018june") in the [phoebe2-workshop repository](http://github.com/phoebe-project/phoebe2-workshop) and update all necessary information (date, location, etc) for that workshop.  Once the information in the repository is up-to-date and ready to be made public, add an entry to the `active_workshops` variable in [workshops.jsx](./src/workshops.jsx) with the branch-name as the key and a brief description (with the format "June 2018, Villanova PA") as they value.  This will then add the workshop to the list of upcoming workshops and open the url with the same branch name.  Check to make sure all buttons in the header work, and push/deploy the changes.  Future changes to the branch will automatically update on the website.

### Archiving an Existing Workshop

Once a workshop is completed, the entry needs to be moved from the list of upcoming workshops to the list of archived workshops.  This will also change the buttons available in the header to show to workshop materials (with links to talks/videos/etc) instead of registration information.  To do this, make sure the branch in the [phoebe2-workshop repository](http://github.com/phoebe-project/phoebe2-workshop) is updated with all materials/talks/videos and move the relevant entry from the `active_workshops` variable to the `archived_workshops` variable in [workshops.jsx](./src/workshops.jsx).  Future changes to the branch will automatically update on the website (i.e. updating the materials/links/information).

### Changing the Buttons/Layout of Workshops

All workshops display the same buttons/format (with the exception of the change between an upcoming/active and an archived workshop).  If for some reason the needs for these buttons change, the source can be edited in the `WorkshopActive` and `WorkshopArchived` components in [workshops.jsx](./src/workshops.jsx).  Note that adding new buttons in the header may not work for previous archived versions if those markdown files do not exist - so make sure to either create the markdown files as necessary or to create necessary if-else logic to preserve the old archived versions.

## Updating Publications

The list of publications is currently created manually in the `Publications` component in [publications.jsx](./src/publications.jsx).  For each entry, use the `Publication` component (see existing entries) which takes the following arguments: adsLink, authors, title, and release (optional - if provided, must match a valid release branch/tag).  To link to a dedicated page with links to reproducible content, use entryLink instead of adsLink and fillout an entry in the `PublicationEntry` component.

## Updating/Adding Developer Bios

Developer bios can be added/updated in the `HelpDevel` component in [help.jsx](./src/help.jsx) and should make use of the `DeveloperInfo` component (see existing entries).

## Updating/Adding FAQ Entries

FAQ Entries can be added/updated in the `HelpFAQ` component in [help.jsx](./src/help.jsx).

## Adding New Pages

New pages should have their components defined in a reasonably names .jsx file in the [src](./src) directory, with their URLs defined in the `Router` in [App.js](./src/App.js).

## Adding a New Entry to the Navigation Bar

The navigation bar, persistent throughout the site, is defined in [navbar.jsx](./src/navbar.jsx).  If adding a new entry, look at the format of existing entries, and make sure to test the responsive behavior at different browser widths.  It may be necessary to change the visibility of some of the labels at the small and medium browser widths (see other entries for how to hide/shorten labels).



## React

See the [React README](README_REACT.md) for more information.
