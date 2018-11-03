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

## Updating Documentation

The PHOEBE 2 documentation displayed on the website are dynamically fetched from the [phoebe2-docs repository](http://github.com/phoebe-project/phoebe2-docs) and rendered from either the jupyter notebook or markdown file found in the branch corresponding to the requested version.  Updates to documentation should therefore be made to the [phoebe2-docs repository](http://github.com/phoebe-project/phoebe2-docs) and pushed (or open a Pull Request) to the correct branch.  API documentation is also pulled from the same repository, but must be manually updated from the corresponding release of PHOEBE.

Versions displayed in the version switcher are defined in [docs.jsx](./src/docs.jsx) under the `docs_versions` variable.  The list should be sorted from newest to oldest versions available, with the first entry (newest) being automatically redirected from all site-wide navigation links (i.e. /docs or /docs/latest).

## Updating News Entries

## React

See the [React README](README_REACT.md) for more information.
