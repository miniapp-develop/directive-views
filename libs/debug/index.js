import { MiniComponent } from '../internal';

MiniComponent({
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
