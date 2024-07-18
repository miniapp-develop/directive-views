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
            const arg = JSON5.parse(this.data.arg);
            const owner = this.selectOwnerComponent();
            if (owner[this.data.name]) {
                owner[this.data.name](arg);
            } else {
                this.triggerEvent('invoke', { name: this.data.name, arg: arg });
            }
        }
    }
});
