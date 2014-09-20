(function (angular) {
    'use strict';
    angular.module('fng.remote.logging', [])
        .service('rlog', function ($log, REMOTE_LOGGING_URL) {
            this.log = $log.log;
            this.info = $log.info;
            this.warn = $log.warn;
            this.error = $log.error;
            this.debug = $log.debug;
            this.exception = $log.error;

            if (!REMOTE_LOGGING_URL) {
                throw new Error('You need to set the REMOTE_LOGGING_URL constant or this module won\'t work!');
            }
        });
}(angular));
