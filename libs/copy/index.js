import { MiniComponent } from '../internal';
import { Value } from '../behaviors';

MiniComponent({
    behaviors: [Value],
    methods: {
        onTap(e) {
            wx.setClipboardData({
                data: this.getValue()
            });
        }
    }
});
