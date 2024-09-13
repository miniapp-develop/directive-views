import { MiniComponent } from '../internal';
import { Function } from '../behaviors';

const _Route_Default = 'navigateTo';

const _Route_Aliases = {
    navigateTo: ['navigateTo', 'navigate', 'to'],
    redirectTo: ['redirectTo', 'redirect'],
    reLaunch: ['reLaunch', 'launch'],
    switchTab: ['switchTab', 'switch', 'tab'],
    navigateBack: ['navigateBack', 'back']
};

function getRouteType(type) {
    for (const key in _Route_Aliases) {
        if (_Route_Aliases[key].includes(type)) {
            return key;
        }
    }
    return _Route_Default;
}

MiniComponent({
    behaviors: [Function],
    properties: {
        name: {
            type: String,
            value: _Route_Default
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
    data: {
        autoExpr: ''
    },
    attached() {
        const { name, args, expr } = this.getSignature();
        this.setData({
            autoExpr: expr
        });
    },
    methods: {
        getStandardFunctionName(name) {
            return getRouteType(name);
        },
        getStandardFunctionArgs(args) {
            if (this.data.url) {
                return [{
                    url: this.data.url
                }];
            } else {
                return args;
            }
        },
        onTap(e) {
            const { name, args, expr } = this.getSignature();
            wx[name](...args);
        }
    }
});
