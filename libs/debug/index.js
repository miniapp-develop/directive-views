Component({
    properties: {
        open: {
            type: String,
            value: null
        },
        close: {
            type: String,
            value: null
        }
    },
    options: {
        multipleSlots: true,
        virtualHost: true
    },
    externalClasses: ['directive-class'],
    data: {},
    methods: {
        onTapOpen(e) {
            console.log('debug', true);
            wx.setEnableDebug({
                enableDebug: true
            })
        },
        onTapClose(e) {
            console.log('debug', false);
            wx.setEnableDebug({
                enableDebug: false
            })
        }
    }
});
