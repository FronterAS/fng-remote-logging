'use strict';
(function (angular) {
    angular.module('remoteLogging', [])
        .service('rlog', function ($log, $http, remoteLoggingUrl) {
            this.log = function () {
                var message = spaceJoin(arguments);
                logging('log', message);
            };

            this.info = function () {
                var message = spaceJoin(arguments);
                logging('info', message);
            };

            this.warn = function () {
                var message = spaceJoin(arguments);
                logging('warn', message);
            };

            this.error = function () {
                var message = spaceJoin(arguments);
                logging('error', message);
            };

            this.debug = function () {
                var message = spaceJoin(arguments);
                logging('debug', message);
            };

            this.exception = function (exception, cause) {
                var ex = exception || {};
                $log.error(ex);
                post({
                    type: 'exception',
                    cause: cause,
                    message: ex.message,
                    stacktrace: ex.stack
                });
            };

            function spaceJoin (arrayLikeObject) {
                return arrayJoin(arrayLikeObject, ' ');
            }

            function logging (type, message) {
                $log[type](message);
                post({
                    type: type,
                    message: message
                });
            }

            function arrayJoin (arrayLikeObject, delimiter) {
                return Array.prototype.join.call(arrayLikeObject, delimiter);
            }

            function post (data) {
                $http.post(remoteLoggingUrl, data);
            }
        });
}(angular));
