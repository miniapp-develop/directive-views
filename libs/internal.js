function _Component(ComponentOption = {}) {
    if (!ComponentOption.externalClasses) {
        ComponentOption.externalClasses = [];
    }
    ComponentOption.externalClasses.unshift('ext-class', 'directive-class');
    if (!ComponentOption.behaviors) {
        ComponentOption.behaviors = [];
    }
    ComponentOption.options = {
        virtualHost: true,
        styleIsolation: 'isolated',
        multipleSlots: true,
        pureDataPattern: /^_/,
        ...ComponentOption.options
    };
    Component(ComponentOption);
}

export const MiniComponent = _Component;