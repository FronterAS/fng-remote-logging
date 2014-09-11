'use strict';

describe('The log service', function () {
    var rlog,
        $logMock,
        $httpBackend,
        REMOTE_LOGGING_URL;

    beforeEach(module('fng.remote.logging'));

    beforeEach(function () {
        module(function ($provide) {
            $logMock = jasmine.createSpyObj('$log', ['log','info','warn','error','debug']);
            $provide.value('$log', $logMock);
            $provide.constant('REMOTE_LOGGING_URL', '/someUrlForLogging');
        });
    });

    beforeEach(inject(function (_rlog_, _$httpBackend_, _REMOTE_LOGGING_URL_) {
        rlog = _rlog_;
        $httpBackend = _$httpBackend_;
        REMOTE_LOGGING_URL = _REMOTE_LOGGING_URL_;
    }));

    describe('should have a log() method and that', function () {
        it('should exist', function () {
            expect(typeof rlog.log).toBe('function');
        });

        it('should call $log.log()', function () {
            rlog.log();
            expect($logMock.log).toHaveBeenCalled();
        });

        it('should call $log.log() with the message that is given as a argument', function () {
            var message = 'some message';
            rlog.log(message);
            expect($logMock.log).toHaveBeenCalledWith(message);
        });

        it('should join multiple arguments to one string', function () {
            var message1 = 'some message',
                message2 = 'some message 2';
            rlog.log(message1, message2);
            expect($logMock.log).toHaveBeenCalledWith(message1 + ' ' + message2);
        });

        it('should make a post call to the REMOTE_LOGGING_URL endpoint', function () {
            $httpBackend.expectPOST(REMOTE_LOGGING_URL).respond(200);
            rlog.log();
            $httpBackend.flush();
        });

        it('should post the log type and the message that is given as a argument', function () {
            var message = 'message',
                postData = {
                    type: 'log',
                    message: message
                };
            $httpBackend.expectPOST(REMOTE_LOGGING_URL, postData).respond(200);
            rlog.log(message);
            $httpBackend.flush();
        });

        it('should join multiple messages into one message in the call to the backend', function () {
            var message1 = 'message 1',
                message2 = 'message 2',
                postData = {
                    type: 'log',
                    message: message1 + ' ' + message2
                };
            $httpBackend.expectPOST(REMOTE_LOGGING_URL, postData).respond(200);
            rlog.log(message1, message2);
            $httpBackend.flush();
        });
    });

    describe('should have a info() method and that', function () {
        it('should exist', function () {
            expect(typeof rlog.info).toBe('function');
        });

        it('should call $log.info()', function () {
            rlog.info();
            expect($logMock.info).toHaveBeenCalled();
        });

        it('should call $log.info() with the message that is given as a argument', function () {
            var message = 'some message';
            rlog.info(message);
            expect($logMock.info).toHaveBeenCalledWith(message);
        });

        it('should join multiple arguments to one string', function () {
            var message1 = 'some message',
                message2 = 'some message 2';
            rlog.info(message1, message2);
            expect($logMock.info).toHaveBeenCalledWith(message1 + ' ' + message2);
        });

        it('should make a post call to the REMOTE_LOGGING_URL endpoint', function () {
            $httpBackend.expectPOST(REMOTE_LOGGING_URL).respond(200);
            rlog.info();
            $httpBackend.flush();
        });

        it('should post the log type and the message that is given as a argument', function () {
            var message = 'message',
                postData = {
                    type: 'info',
                    message: message
                };
            $httpBackend.expectPOST(REMOTE_LOGGING_URL, postData).respond(200);
            rlog.info(message);
            $httpBackend.flush();
        });

        it('should join multiple messages into one message in the call to the backend', function () {
            var message1 = 'message 1',
                message2 = 'message 2',
                postData = {
                    type: 'info',
                    message: message1 + ' ' + message2
                };
            $httpBackend.expectPOST(REMOTE_LOGGING_URL, postData).respond(200);
            rlog.info(message1, message2);
            $httpBackend.flush();
        });
    });

    describe('should have a warn() method and that', function () {
        it('should exist', function () {
            expect(typeof rlog.warn).toBe('function');
        });

        it('should call $log.warn()', function () {
            rlog.warn();
            expect($logMock.warn).toHaveBeenCalled();
        });

        it('should call $log.warn() with the message that is given as a argument', function () {
            var message = 'some message';
            rlog.warn(message);
            expect($logMock.warn).toHaveBeenCalledWith(message);
        });

        it('should join multiple arguments to one string', function () {
            var message1 = 'some message',
                message2 = 'some message 2';
            rlog.warn(message1, message2);
            expect($logMock.warn).toHaveBeenCalledWith(message1 + ' ' + message2);
        });

        it('should make a post call to the REMOTE_LOGGING_URL endpoint', function () {
            $httpBackend.expectPOST(REMOTE_LOGGING_URL).respond(200);
            rlog.warn();
            $httpBackend.flush();
        });

        it('should post the log type and the message that is given as a argument', function () {
            var message = 'message',
                postData = {
                    type: 'warn',
                    message: message
                };
            $httpBackend.expectPOST(REMOTE_LOGGING_URL, postData).respond(200);
            rlog.warn(message);
            $httpBackend.flush();
        });

        it('should join multiple messages into one message in the call to the backend', function () {
            var message1 = 'message 1',
                message2 = 'message 2',
                postData = {
                    type: 'warn',
                    message: message1 + ' ' + message2
                };
            $httpBackend.expectPOST(REMOTE_LOGGING_URL, postData).respond(200);
            rlog.warn(message1, message2);
            $httpBackend.flush();
        });
    });

    describe('should have a error() method and that', function () {
        it('should exist', function () {
            expect(typeof rlog.error).toBe('function');
        });

        it('should call $log.error()', function () {
            rlog.error();
            expect($logMock.error).toHaveBeenCalled();
        });

        it('should call $log.error() with the message that is given as a argument', function () {
            var message = 'some message';
            rlog.error(message);
            expect($logMock.error).toHaveBeenCalledWith(message);
        });

        it('should join multiple arguments to one string', function () {
            var message1 = 'some message',
                message2 = 'some message 2';
            rlog.error(message1, message2);
            expect($logMock.error).toHaveBeenCalledWith(message1 + ' ' + message2);
        });

        it('should make a post call to the REMOTE_LOGGING_URL endpoint', function () {
            $httpBackend.expectPOST(REMOTE_LOGGING_URL).respond(200);
            rlog.error();
            $httpBackend.flush();
        });

        it('should post the log type and the message that is given as a argument', function () {
            var message = 'message',
                postData = {
                    type: 'error',
                    message: message
                };
            $httpBackend.expectPOST(REMOTE_LOGGING_URL, postData).respond(200);
            rlog.error(message);
            $httpBackend.flush();
        });

        it('should join multiple messages into one message in the call to the backend', function () {
            var message1 = 'message 1',
                message2 = 'message 2',
                postData = {
                    type: 'error',
                    message: message1 + ' ' + message2
                };
            $httpBackend.expectPOST(REMOTE_LOGGING_URL, postData).respond(200);
            rlog.error(message1, message2);
            $httpBackend.flush();
        });
    });

    describe('should have a debug() method and that', function () {
        it('should exist', function () {
            expect(typeof rlog.debug).toBe('function');
        });

        it('should call $log.debug()', function () {
            rlog.debug();
            expect($logMock.debug).toHaveBeenCalled();
        });

        it('should call $log.debug() with the message that is given as a argument', function () {
            var message = 'some message';
            rlog.debug(message);
            expect($logMock.debug).toHaveBeenCalledWith(message);
        });

        it('should join multiple arguments to one string', function () {
            var message1 = 'some message',
                message2 = 'some message 2';
            rlog.debug(message1, message2);
            expect($logMock.debug).toHaveBeenCalledWith(message1 + ' ' + message2);
        });

        it('should make a post call to the REMOTE_LOGGING_URL endpoint', function () {
            $httpBackend.expectPOST(REMOTE_LOGGING_URL).respond(200);
            rlog.debug();
            $httpBackend.flush();
        });

        it('should post the log type and the message that is given as a argument', function () {
            var message = 'message',
                postData = {
                    type: 'debug',
                    message: message
                };
            $httpBackend.expectPOST(REMOTE_LOGGING_URL, postData).respond(200);
            rlog.debug(message);
            $httpBackend.flush();
        });

        it('should join multiple messages into one message in the call to the backend', function () {
            var message1 = 'message 1',
                message2 = 'message 2',
                postData = {
                    type: 'debug',
                    message: message1 + ' ' + message2
                };
            $httpBackend.expectPOST(REMOTE_LOGGING_URL, postData).respond(200);
            rlog.debug(message1, message2);
            $httpBackend.flush();
        });
    });

    describe('should have a exception() method and that', function () {
        it('should exist', function () {
            expect(typeof rlog.exception).toBe('function');
        });

        it('should call $log.error', function () {
            rlog.exception();
            expect($logMock.error).toHaveBeenCalled();
        });

        it('should call $log.error() with the error/exception that is given as a argument', function () {
            var ex = new Error('some message');
            rlog.exception(ex);
            expect($logMock.error).toHaveBeenCalledWith(ex);
        });

        it('should post the exception info and cause to the REMOTE_LOGGING_URL endpoint', function () {
            var exceptionMessage = 'I´m an exception',
                exception = new Error(exceptionMessage),
                cause = 'some cause',
                postData = {
                    type: 'exception',
                    cause: cause,
                    message: exceptionMessage,
                    stacktrace: exception.stack
                };
            $httpBackend.expectPOST(REMOTE_LOGGING_URL, postData).respond(200);
            rlog.exception(exception, cause);
            $httpBackend.flush();
        });
    });
});
