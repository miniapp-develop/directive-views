Component({
    properties: {
        disabled: {
            type: String,
            value: null
        },
        enabled: {
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
            wx.setEnableDebug({
                enableDebug: true
            })
        },
        onTapClose(e) {
            wx.setEnableDebug({
                enableDebug: false
            })
        }
    }
});
