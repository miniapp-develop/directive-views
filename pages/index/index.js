Page({
    data: {
        text: 'just do IT'
    },
    onLoad(query) {},
    function1(arg) {
        console.log('function1', arg);
    },
    function2(arg) {
        console.log('function2', arg);
    },
    log(e) {
        console.log('page.log', e);
    }
});
