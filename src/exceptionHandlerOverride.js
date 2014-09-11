'use strict';
(function (angular) {
    angular.module('remoteLogging')
        .factory('$exceptionHandler', function ($injector) {
            return function (exception, cause) {
                var rlog = $injector.get('rlog');
                rlog.exception(exception, cause);
            };
        });
}(angular));
