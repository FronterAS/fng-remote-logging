'use strict';
angular.module('myApp', ['remoteLogging'])
    .constant('remoteLoggingUrl', '/logging') // Local endpoint, see node log for output
    .controller('main', function ($scope, log) {

        $scope.showInfo = false;

        $scope.logInfo = function () {
            $scope.showInfo = true;
            log.info('An info log');
        };

        $scope.logWarn = function () {
            $scope.showInfo = true;
            log.warn('A warn log');
        };

        $scope.logError = function () {
            $scope.showInfo = true;
            log.info('An error log');
        };

        $scope.logDebug = function () {
            $scope.showInfo = true;
            log.debug('A debug log');
        };

        $scope.makeException = function () {
            $scope.showInfo = true;
            throw new Error('This is a exception!\n' +
                    'Remote logging this exception is made possible by the exceptionHandlerOverride.js file');
        };
    });
