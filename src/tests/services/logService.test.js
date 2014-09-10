'use strict';

describe('The log service', function () {
    var log,
        $logMock,
        $httpBackend,
        remoteLoggingUrl;

    beforeEach(module('remoteLogging'));

    beforeEach(function () {
        module(function ($provide) {
            $logMock = jasmine.createSpyObj('$log', ['log','info','warn','error','debug']);
            $provide.value('$log', $logMock);
            $provide.constant('remoteLoggingUrl', '/someUrlForLogging');
        });
    });

    beforeEach(inject(function (_log_, _$httpBackend_, _remoteLoggingUrl_) {
        log = _log_;
        $httpBackend = _$httpBackend_;
        remoteLoggingUrl = _remoteLoggingUrl_;
    }));

    describe('should have a log() method and that', function () {
        it('should exist', function () {
            expect(typeof log.log).toBe('function');
        });

        it('should call $log.log()', function () {
            log.log();
            expect($logMock.log).toHaveBeenCalled();
        });

        it('should call $log.log() with the message that is given as a argument', function () {
            var message = 'some message';
            log.log(message);
            expect($logMock.log).toHaveBeenCalledWith(message);
        });

        it('should join multiple arguments to one string', function () {
            var message1 = 'some message',
                message2 = 'some message 2';
            log.log(message1, message2);
            expect($logMock.log).toHaveBeenCalledWith(message1 + ' ' + message2);
        });

        it('should make a post call to the remoteLoggingUrl endpoint', function () {
            $httpBackend.expectPOST(remoteLoggingUrl).respond(200);
            log.log();
            $httpBackend.flush();
        });

        it('should post the log type and the message that is given as a argument', function () {
            var message = 'message',
                postData = {
                    type: 'log',
                    message: message
                };
            $httpBackend.expectPOST(remoteLoggingUrl, postData).respond(200);
            log.log(message);
            $httpBackend.flush();
        });

        it('should join multiple messages into one message in the call to the backend', function () {
            var message1 = 'message 1',
                message2 = 'message 2',
                postData = {
                    type: 'log',
                    message: message1 + ' ' + message2
                };
            $httpBackend.expectPOST(remoteLoggingUrl, postData).respond(200);
            log.log(message1, message2);
            $httpBackend.flush();
        });
    });

    describe('should have a info() method and that', function () {
        it('should exist', function () {
            expect(typeof log.info).toBe('function');
        });

        it('should call $log.info()', function () {
            log.info();
            expect($logMock.info).toHaveBeenCalled();
        });

        it('should call $log.info() with the message that is given as a argument', function () {
            var message = 'some message';
            log.info(message);
            expect($logMock.info).toHaveBeenCalledWith(message);
        });

        it('should join multiple arguments to one string', function () {
            var message1 = 'some message',
                message2 = 'some message 2';
            log.info(message1, message2);
            expect($logMock.info).toHaveBeenCalledWith(message1 + ' ' + message2);
        });

        it('should make a post call to the remoteLoggingUrl endpoint', function () {
            $httpBackend.expectPOST(remoteLoggingUrl).respond(200);
            log.info();
            $httpBackend.flush();
        });

        it('should post the log type and the message that is given as a argument', function () {
            var message = 'message',
                postData = {
                    type: 'info',
                    message: message
                };
            $httpBackend.expectPOST(remoteLoggingUrl, postData).respond(200);
            log.info(message);
            $httpBackend.flush();
        });

        it('should join multiple messages into one message in the call to the backend', function () {
            var message1 = 'message 1',
                message2 = 'message 2',
                postData = {
                    type: 'info',
                    message: message1 + ' ' + message2
                };
            $httpBackend.expectPOST(remoteLoggingUrl, postData).respond(200);
            log.info(message1, message2);
            $httpBackend.flush();
        });
    });

    describe('should have a warn() method and that', function () {
        it('should exist', function () {
            expect(typeof log.warn).toBe('function');
        });

        it('should call $log.warn()', function () {
            log.warn();
            expect($logMock.warn).toHaveBeenCalled();
        });

        it('should call $log.warn() with the message that is given as a argument', function () {
            var message = 'some message';
            log.warn(message);
            expect($logMock.warn).toHaveBeenCalledWith(message);
        });

        it('should join multiple arguments to one string', function () {
            var message1 = 'some message',
                message2 = 'some message 2';
            log.warn(message1, message2);
            expect($logMock.warn).toHaveBeenCalledWith(message1 + ' ' + message2);
        });

        it('should make a post call to the remoteLoggingUrl endpoint', function () {
            $httpBackend.expectPOST(remoteLoggingUrl).respond(200);
            log.warn();
            $httpBackend.flush();
        });

        it('should post the log type and the message that is given as a argument', function () {
            var message = 'message',
                postData = {
                    type: 'warn',
                    message: message
                };
            $httpBackend.expectPOST(remoteLoggingUrl, postData).respond(200);
            log.warn(message);
            $httpBackend.flush();
        });

        it('should join multiple messages into one message in the call to the backend', function () {
            var message1 = 'message 1',
                message2 = 'message 2',
                postData = {
                    type: 'warn',
                    message: message1 + ' ' + message2
                };
            $httpBackend.expectPOST(remoteLoggingUrl, postData).respond(200);
            log.warn(message1, message2);
            $httpBackend.flush();
        });
    });

    describe('should have a error() method and that', function () {
        it('should exist', function () {
            expect(typeof log.error).toBe('function');
        });

        it('should call $log.error()', function () {
            log.error();
            expect($logMock.error).toHaveBeenCalled();
        });

        it('should call $log.error() with the message that is given as a argument', function () {
            var message = 'some message';
            log.error(message);
            expect($logMock.error).toHaveBeenCalledWith(message);
        });

        it('should join multiple arguments to one string', function () {
            var message1 = 'some message',
                message2 = 'some message 2';
            log.error(message1, message2);
            expect($logMock.error).toHaveBeenCalledWith(message1 + ' ' + message2);
        });

        it('should make a post call to the remoteLoggingUrl endpoint', function () {
            $httpBackend.expectPOST(remoteLoggingUrl).respond(200);
            log.error();
            $httpBackend.flush();
        });

        it('should post the log type and the message that is given as a argument', function () {
            var message = 'message',
                postData = {
                    type: 'error',
                    message: message
                };
            $httpBackend.expectPOST(remoteLoggingUrl, postData).respond(200);
            log.error(message);
            $httpBackend.flush();
        });

        it('should join multiple messages into one message in the call to the backend', function () {
            var message1 = 'message 1',
                message2 = 'message 2',
                postData = {
                    type: 'error',
                    message: message1 + ' ' + message2
                };
            $httpBackend.expectPOST(remoteLoggingUrl, postData).respond(200);
            log.error(message1, message2);
            $httpBackend.flush();
        });
    });

    describe('should have a debug() method and that', function () {
        it('should exist', function () {
            expect(typeof log.debug).toBe('function');
        });

        it('should call $log.debug()', function () {
            log.debug();
            expect($logMock.debug).toHaveBeenCalled();
        });

        it('should call $log.debug() with the message that is given as a argument', function () {
            var message = 'some message';
            log.debug(message);
            expect($logMock.debug).toHaveBeenCalledWith(message);
        });

        it('should join multiple arguments to one string', function () {
            var message1 = 'some message',
                message2 = 'some message 2';
            log.debug(message1, message2);
            expect($logMock.debug).toHaveBeenCalledWith(message1 + ' ' + message2);
        });

        it('should make a post call to the remoteLoggingUrl endpoint', function () {
            $httpBackend.expectPOST(remoteLoggingUrl).respond(200);
            log.debug();
            $httpBackend.flush();
        });

        it('should post the log type and the message that is given as a argument', function () {
            var message = 'message',
                postData = {
                    type: 'debug',
                    message: message
                };
            $httpBackend.expectPOST(remoteLoggingUrl, postData).respond(200);
            log.debug(message);
            $httpBackend.flush();
        });

        it('should join multiple messages into one message in the call to the backend', function () {
            var message1 = 'message 1',
                message2 = 'message 2',
                postData = {
                    type: 'debug',
                    message: message1 + ' ' + message2
                };
            $httpBackend.expectPOST(remoteLoggingUrl, postData).respond(200);
            log.debug(message1, message2);
            $httpBackend.flush();
        });
    });

    describe('should have a exception() method and that', function () {
        it('should exist', function () {
            expect(typeof log.exception).toBe('function');
        });

        it('should call $log.error', function () {
            log.exception();
            expect($logMock.error).toHaveBeenCalled();
        });

        it('should call $log.error() with the error/exception that is given as a argument', function () {
            var ex = new Error('some message');
            log.exception(ex);
            expect($logMock.error).toHaveBeenCalledWith(ex);
        });

        it('should post the exception info and cause to the remoteLoggingUrl endpoint', function () {
            var exceptionMessage = 'I´m an exception',
                exception = new Error(exceptionMessage),
                cause = 'some cause',
                postData = {
                    type: 'exception',
                    cause: cause,
                    message: exceptionMessage,
                    stacktrace: exception.stack
                };
            $httpBackend.expectPOST(remoteLoggingUrl, postData).respond(200);
            log.exception(exception, cause);
            $httpBackend.flush();
        });
    });
});
