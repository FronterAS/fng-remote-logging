# [ALPHA] VERSION *

# Fronter Angular.js remote logging

Fronter Angular.js module to easily enable logging to a back end service from the front end.

## Usage:

To start using this Angular.js module you need to add this to your index.html:

    <script src="/bower_components/remoteLogging/bin/remoteLoggingModule.min.js"></script>

And to log you need to use the rlog service instead of the Angular.js $log service:
  
    var module = angular.module('myApp', ['remoteLogging']);
    
    module.constant('remoteLoggingUrl', '/logging'); //This is a requirement for the remoteLogging module
    
    module.controller('main', function ($scope, rlog) {
        rlog.info('logging some stuff to the console and to the backend');
    });
    
When you have imported the remoteLogging module as stated above you only need to add the exceptionHandlerOverride
to your index.html to automatically start logging exceptions:

    <script src="/bower_components/remoteLogging/bin/exceptionHandlerOverride.min.js"></script>

## Development:

Before anything you need to run `npm install` as with any node.js application!

* To run tests: `npm test`
    * location of coverage report when/after running tests: `./coverage/PhantomJS 1.9.7 (Mac OS X)/index.html`
* To start the server for the example: `npm start`
* To lint the code: `npm run lint`
* To get constant feedback when developing: `npm run watch`


### Versioning
The versioning works like this:

    <major>.<minor>.<patch>

Meaning:

* major: You break the api
* minor: You add to the api
* patch: Everything else


### Important notes:

When releasing this module it is important to update all of the versions:

1. Update the version in package.json
2. Update the version in bower.json
3. Tag the current commit in Git

### Todo:

1. Make this project browserify compatible.

\* http://en.wikipedia.org/wiki/Software_release_life_cycle#Alpha
