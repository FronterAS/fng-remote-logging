'use strict';
(function (angular) {
    angular.module('remoteLogging')
        .factory('$exceptionHandler', function ($injector) {
            return function (exception, cause) {
                var log = $injector.get('log');
                log.exception(exception, cause);
            };
        });
}(angular));
