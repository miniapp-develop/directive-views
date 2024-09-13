import { Function } from '../behaviors';
import { MiniComponent } from '../internal';

const _Global_Handle_Name = 'onFunctionMissing';
const _WX_PREFIX = 'wx.';

MiniComponent({
    behaviors: [Function],
    properties: {
        auto: {
            type: Boolean,
            value: false
        }
    },
    methods: {
        __missing__(owner, name, arg) {
            if (owner[_Global_Handle_Name]) {
                owner[_Global_Handle_Name](name, arg);
            }
        },
        onTap(e) {
            const { name, args, expr } = this.getSignature();
            const owner = this.selectOwnerComponent();
            if (owner[name]) {
                owner[name](...args);
            } else {
                if (name.startsWith(_WX_PREFIX)) {
                    const wxName = name.substring(_WX_PREFIX.length);
                    if (wx[wxName]) {
                        const ret = wx[wxName](...args);
                        if (ret) {
                            if (ret.then) {
                                ret.then(res => {
                                    console.log(expr, res);
                                }).catch(err => {
                                    console.error(expr, err);
                                });
                            } else {
                                console.log(expr, ret);
                            }
                        }
                    } else {
                        this.__missing__(owner, name, args);
                    }
                } else {
                    this.__missing__(owner, name, args);
                }
            }
            this.triggerEvent('invoke', { name: name, args: args });
        }
    }
});
