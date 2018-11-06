# phoebe-project.org

phoebe-project.org is a single-page ReactJS website, with documentation dynamically pulled and rendered from the [phoebe2-docs repository](http://github.com/phoebe-project/phoebe2-docs).

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


## Deploying

### GitHub pages

In the root directory, issue:

```
npm run deploy
```

will need to provide github username and password (api token) 2-3 times.  This
will build the website and commit and push to the `gh-pages` branch.  It may take
a few minutes before those changes then go live.


To serve to a separate URL, edit the entry in [CNAME](./public/CNAME), the value of homepage in [package.json](./package.json), and follow the [github instructions](https://help.github.com/articles/using-a-custom-domain-with-github-pages/) to use a custom domain for pointing the DNS to github pages.

## General Notes on Layout/Conventions

* Please use the internal `Link` component from [common.jsx](./src/common.jsx) instead of adding html `<a>` tags manually.  This way internal vs external links are handled correctly by the component.

## Releasing a New Version of PHOEBE

Once a new MINOR/MAJOR version of PHOEBE (i.e. 2.1 or 3.0) is released on GitHub and pip, several steps need to be made to update the website.  PATCH versions (i.e. 2.1.1) do not need any action as everything is loaded dynamically from the sources on GitHub.

1. Update `docs_versions` in [docs.jsx](./src/docs.jsx) if the new version should show in the docs switcher.  The first version listed in the list will be considered the "latest" release, and all internal links will now point to that version.  Make sure the correct branch exists in the [phoebe2-docs repository](http://github.com/phoebe-project/phoebe2-docs) and that the API docs are updated and pushed. See below for more details below about updating documentation on the website.

2. Create the content for the release page in [releases.jxs](./src/releases.jsx) inside the if-else logic in the `ReleaseContent` Component by updating the `content` and `logo` (if anything other than the default logo) variables (see existing releases for examples).

3. Create the entry for the corresponding release paper (if applicable, see below for more information).

4. Create a news entry item and pin to the homepage, if necessary (see below for more information).

## Updating Documentation

The PHOEBE 2 documentation displayed on the website are dynamically fetched from the [phoebe2-docs repository](http://github.com/phoebe-project/phoebe2-docs) and rendered from either the jupyter notebook or markdown file found in the branch corresponding to the requested version.  Updates to documentation should therefore be made to the [phoebe2-docs repository](http://github.com/phoebe-project/phoebe2-docs) and pushed (or open a Pull Request) to the correct branch.  API documentation is also pulled from the same repository, but must be manually updated from the corresponding release of PHOEBE.

Versions displayed in the version switcher are defined in [docs.jsx](./src/docs.jsx) under the `docs_versions` variable.  The list should be sorted from newest to oldest versions available, with the first entry (newest) being automatically redirected from all site-wide navigation links (i.e. /docs or /docs/latest).

## Updating News Entries

## Updating Publications

The list of publications is currently created manually in the `Publications` component in [publications.jsx](./src/publications.jsx).

## React

See the [React README](README_REACT.md) for more information.
