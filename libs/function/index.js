const JSON5 = require('json5');

Component({
    properties: {
        name: {
            type: String,
            value: ''
        },
        arg: {
            type: String,
            value: null
        },
        auto: {
            type: Boolean,
            value: false
        }
    },
    options: { virtualHost: true },
    externalClasses: ['directive-class'],
    data: {},
    methods: {
        onTap(e) {
            const globalHandle = 'onHandleFunctionEvent';
            const name = this.data.name;
            const arg = JSON5.parse(this.data.arg);
            const owner = this.selectOwnerComponent();
            if (owner[name]) {
                owner[name](arg);
            } else {
                const WX_PREFIX = 'wx.';
                if (name.startsWith(WX_PREFIX)) {
                    wx[name.substring(WX_PREFIX.length)](arg);
                } else if (owner[globalHandle]) {
                    owner[globalHandle](name, arg);
                }
            }
            this.triggerEvent('invoke', { name: this.data.name, arg: arg });
        }
    }
});
