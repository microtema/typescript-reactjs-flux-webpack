typescript-reactjs-flux-webpack
===============================

A sample project that demonstrates the use of
 
  - Webpack as the building tool
  - Typescript as the main programming language
  - ReactJS in Typescript
  - Embedding JSX inside Typescript with the help of the webpack tx-jsx-loader
  - The basic use of Flux
  - Using LESS with webpack
  
  
Tutorial
--------
  
  The project should be checked out by version
  
  - v1.0 demonstrates a simple Hello World in ReactJS and the use of webpack ( No React Components, no Flux classes)  
  - v2.0 demonstrates a simple React Component in Typescript an the use of Props and State
  
Installing
----------

Clone this repo locally using `git clone`
Checkout the version 1.0 using `git checkout -b version1 v1.0`
Then run `npm install` in the root directory of the project

When you are done playing with v1.0, move to v2.0 using `git checkout -b version2 v2.0`.
Run `npm install` again in case anything changed in the `package.json` file

etc...
  
  
Building and running
--------------------

**Simple**
To build simply run `./node_modules/.bin/webpack`. A `public/js/generated/bundle.js` file will be generated
Open `public/index.html` in a browser.

**Hot Reload**
Alternatively, and very useful when developing, 
run `node_modules/.bin/webpack-dev-server -d --colors --content-base public/ --hot --inlin`

Then open your browser at `http://localhost:8080/webpack-dev-server/`

Any change made to a LESS file will be "hot reloaded" on the page. A change to a Typescript file will trigger
 a new transpilation and a full reloading of the page (hot reload is not yet available for Typescript)
  
License
-------

MIT