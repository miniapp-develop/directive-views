const {Timer} = require("@xesam/timer");

function _Component(options = {}) {
    if (!options.externalClasses) {
        options.externalClasses = []
    }
    options.externalClasses.unshift('ui-class');
    if (!options.behaviors) {
        options.behaviors = [];
    }
    options.options = {
        styleIsolation: 'isolated',
        multipleSlots: true,
        pureDataPattern: /^\$_/,
        ...options.options
    }
    Component(options);
}

_Component({
    $timer: null,
    lifetimes: {
        created() {
            console.log('comp created')
            this.$timer = new Timer(1000, event => {
                console.log(event)
                // console.log(this);
                this.onTick();
            });
        },
        attached: function () {
            this.$timer.start();
            console.log('comp attached')
        },
        ready: function () {
            console.log('comp ready')
        },
        moved: function () {
            console.log('comp moved')
        },
        detached: function () {
            this.$timer.stop();
            console.log('comp detached')
        },
    },
    pageLifetimes: {
        show() {
            // this.$timer.start();
            console.log('page show')
        },
        hide() {
            // this.$timer.stop();
            console.log('page hide')
        },
        resize() {
        },
    },
    methods: {
        onTick() {
            this.triggerEvent("tick", {}, {});
        }
    }
});
