(function (angular) {
    'use strict';
    angular.module('fng.remote.logging', [])
        .service('rlog', function ($log, $http, REMOTE_LOGGING_URL) {
            this.log = function () {
                var message = spaceJoin(arguments);
                $log.log.apply($log, arguments);
                logging('log', message);
            };

            this.info = function () {
                var message = spaceJoin(arguments);
                $log.info.apply($log, arguments);
                logging('info', message);
            };

            this.warn = function () {
                var message = spaceJoin(arguments);
                $log.warn.apply($log, arguments);
                logging('warn', message);
            };

            this.error = function () {
                var message = spaceJoin(arguments);
                $log.error.apply($log, arguments);
                logging('error', message);
            };

            this.debug = function () {
                var message = spaceJoin(arguments);
                $log.debug.apply($log, arguments);
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
                post({
                    type: type,
                    message: message
                });
            }

            function arrayJoin (arrayLikeObject, delimiter) {
                return Array.prototype.join.call(arrayLikeObject, delimiter);
            }

            function post (data) {
                $http.post(REMOTE_LOGGING_URL, data);
            }
        });
}(angular));
