# [ALPHA] VERSION *

# Fronter Angular.js remote logging

Fronter Angular.js module to easily enable logging to a back end service from the front end.

## Usage:

To start using this Angular.js module you first need to add this project as a bower dependency in
your bower.json file:

```json
    ...
    "dependencies": {
        "fng-remote-logging": "https://gitlab.fronter.net/frontend-modules/fng-remote-logging.git#0.0.2"
    }
    ...
```

You also need to add this to your index.html:

```html
    <script src="/bower_components/fng-remote-logging/bin/remoteLoggingModule.min.js"></script>
```

And do the actual logging you need to use the rlog service instead of the Angular.js $log service:

```js
    var module = angular.module('myApp', ['fng.remote.logging']);

    module.constant('REMOTE_LOGGING_URL', '/logging'); //This is a requirement for the remote logging module

    module.controller('main', function ($scope, rlog) {
        rlog.info('logging some stuff to the console and to the backend');
    });
```

When you have imported the remote logging module as stated above you only need to add the exceptionHandlerOverride
to your index.html to automatically start logging exceptions:

```html
    <script src="/bower_components/fng-remote-logging/bin/exceptionHandlerOverride.min.js"></script>
```

## Development:

Before anything you need to run `npm install` as with any node.js application!

* To run tests: `npm test`
    * location of coverage report when/after running tests: `./coverage/PhantomJS 1.9.7 (Mac OS X)/index.html`
* To start the server for the example: `npm start`
* To lint the code: `npm run lint`
* To get constant feedback when developing: `npm run watch`
* To generate new minified versions of the module: `npm run build`


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

1. Make this project browserify compatible. (Karl Gustav)
2. Create a standalone branch, with injected ajax. (Gavin)
3. Extract the http posting out into a transport service,
   so that people can choose to send logs over sockets for instance (Petter)

\* http://en.wikipedia.org/wiki/Software_release_life_cycle#Alpha
