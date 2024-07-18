Component({
    properties: {
        value: {
            type: String,
            value: null
        },
        var: {
            type: String,
            value: null
        }
    },
    options: { virtualHost: true },
    externalClasses: ['directive-class'],
    data: {},
    methods: {
        onTap(e) {
            let value = null;
            if (this.data.value) {
                value = this.data.value;
            } else if (this.data.var) {
                const owner = this.selectOwnerComponent();
                value = owner.data[this.data.var];
            }
            wx.setClipboardData({
                data: value
            });
        }
    }
});
