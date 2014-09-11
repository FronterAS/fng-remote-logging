'use strict';

describe('The exceptionHandlerOverride', function () {
    var exceptionHandlerOverride,
        rlogStub;

    beforeEach(module('fng.remote.logging'));

    beforeEach(function () {
        rlogStub = jasmine.createSpyObj('rlog', ['exception']);
        module(function ($provide) {
            $provide.value('rlog', rlogStub);
        });
    });

    beforeEach(inject(function (_$exceptionHandler_) {
        exceptionHandlerOverride = _$exceptionHandler_;
    }));

    it('should call log.exception with the exception and cause arguments', function () {
        var ex = new Error('an error'),
            cause = 'a cause';
        exceptionHandlerOverride(ex, cause);
        expect(rlogStub.exception).toHaveBeenCalledWith(ex, cause);
    });
});
