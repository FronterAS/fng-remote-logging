'use strict';

describe('The exceptionHandlerOverride', function () {
    var exceptionHandlerOverride,
        logMock;

    beforeEach(module('remoteLogging'));

    beforeEach(function () {
        logMock = jasmine.createSpyObj('log', ['exception']);
        module(function ($provide) {
            $provide.value('log', logMock);
        });
    });

    beforeEach(inject(function (_$exceptionHandler_) {
        exceptionHandlerOverride = _$exceptionHandler_;
    }));

    it('should call log.exception with the exception and cause arguments', function () {
        var ex = new Error('an error'),
            cause = 'a cause';
        exceptionHandlerOverride(ex, cause);
        expect(logMock.exception).toHaveBeenCalledWith(ex, cause);
    });
});
