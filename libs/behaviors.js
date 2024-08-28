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