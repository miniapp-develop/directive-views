Page({
    function1(arg) {
        console.log('function1', arg);
    },
    function2(arg) {
        console.log('function2', arg);
    },
    onFunctionMissing(fnName, fnArg) {
        console.log('onFunctionMissing', fnName, fnArg);
    },
    log(e) {
        console.log('page.log', e);
    }
});