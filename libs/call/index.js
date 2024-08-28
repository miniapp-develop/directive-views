import { MiniComponent } from '../internal';
import { Value } from '../behaviors';

MiniComponent({
    behaviors: [Value],
    methods: {
        onTap(e) {
            wx.makePhoneCall({
                phoneNumber: this.getValue(),
                success: () => {
                    this.triggerEvent('success', {});
                },
                fail: () => {
                    this.triggerEvent('fail', {});
                },
                complete: () => {
                    this.triggerEvent('complete', {});
                }
            });
        }
    }
});
