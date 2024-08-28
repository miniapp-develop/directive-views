import { MiniComponent } from '../internal';

MiniComponent({
    properties: {
        type: {
            type: String,
            value: 'navigateTo'
        },
        url: {
            type: String,
            value: null
        },
        auto: {
            type: Boolean,
            value: false
        }
    },
    data: {},
    methods: {
        onTap(e) {
            if (this.data.url) {
                wx[this.data.type]({
                    url: this.data.url
                });
            }
        }
    }
});
