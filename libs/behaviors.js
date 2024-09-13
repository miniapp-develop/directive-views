import JSON5 from 'json5';

export const Value = Behavior({
    properties: {
        value: {
            type: String,
            value: null
        },
        variable: {
            type: String,
            value: null
        }
    },
    methods: {
        getValue() {
            if (this.data.value) {
                return this.data.value;
            } else if (this.data.variable) {
                const owner = this.selectOwnerComponent();
                return owner.data[this.data.variable];
            }
        }
    }
});

export const Function = Behavior({
    properties: {
        name: {
            type: String,
            value: ''
        },
        arg: {
            type: String,
            value: null
        }
    },
    data: {
        autoExpr: ''
    },
    attached() {
        const { expr } = this.getSignature();
        this.setData({
            autoExpr: expr
        });
    },
    methods: {
        getStandardFunctionName(name) {
            return name;
        },
        getStandardFunctionArgs(args) {
            return args;
        },
        getSignature() {
            const name = this.getStandardFunctionName(this.data.name);
            const arg = JSON5.parse(this.data.arg);
            let attr_args;
            if (!arg) {
                attr_args = [];
            } else if (Array.isArray(arg)) {
                attr_args = arg;
            } else {
                attr_args = [arg];
            }
            const args = this.getStandardFunctionArgs(attr_args);
            return {
                name,
                args,
                expr: `${name}(${args.map(JSON.stringify).join(',')})`
            };
        }
    }
});