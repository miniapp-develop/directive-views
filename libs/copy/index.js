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
    externalClasses: ['directive-class'],
    data: {},
    methods: {
        onTap(e) {
            let value = null;
            if (this.data.value) {
                value = this.data.value;
            } else if (this.data.var) {
                const pages = getCurrentPages();
                const page = pages[pages.length - 1];
                value = page.data[this.data.var];
            }
            wx.setClipboardData({
                data: value
            });
        }
    }
});
