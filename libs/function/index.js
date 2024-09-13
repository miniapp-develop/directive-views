const JSON5 = require('json5');
import { MiniComponent } from '../internal';

const _Global_Handle_Name = 'onFunctionMissing';
const _WX_PREFIX = 'wx.';

MiniComponent({
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
    data: {
        autoExpr: ''
    },

    lifetimes: {
        attached() {
            const name = this.data.name;
            const arg = JSON5.parse(this.data.arg);
            this.setData({
                autoExpr: `${name}(${arg ? this.data.arg : ''})`
            });
        }
    },
    methods: {
        __missing__(owner, name, arg) {
            if (owner[_Global_Handle_Name]) {
                owner[_Global_Handle_Name](name, arg);
            }
        },
        onTap(e) {
            const name = this.data.name;
            const arg = JSON5.parse(this.data.arg);
            const isArrayArg = Array.isArray(arg);
            const owner = this.selectOwnerComponent();
            if (owner[name]) {
                owner[name](arg);
            } else {
                if (name.startsWith(_WX_PREFIX)) {
                    const wxName = name.substring(_WX_PREFIX.length);
                    if (wx[wxName]) {
                        if (isArrayArg) {
                            wx[wxName](...arg);
                        } else {
                            if (arg) {
                                wx[wxName](arg);
                            } else {
                                wx[wxName]();
                            }
                        }
                    } else {
                        this.__missing__(owner, name, arg);
                    }
                } else {
                    this.__missing__(owner, name, arg);
                }
            }
            this.triggerEvent('invoke', { name: name, arg: arg });
        }
    }
});
