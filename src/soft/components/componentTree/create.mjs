function initialize() {
    if (typeof window === 'undefined' || window.componentTree) return;

    window.componentTree = window.componentTree = {};
}

initialize();

export function findComponentDataInComponentTree(componentTree, targetId) {
    if (componentTree.hasOwnProperty(targetId)) {
        return componentTree[targetId];
    }

    for (const key in componentTree) {
        if (typeof componentTree[key] === 'object' && componentTree[key] !== null) {
            const result = findComponentDataInComponentTree(componentTree[key].childrens, targetId);
            if (result) {
                return result;
            }
        }
    }

    return null;
}

export function getDirectParentComponent(element) {
    if (element.parentElement && element.parentElement.tagName !== "BODY") {
        if (element.parentElement.componentId) {
            return element.parentElement;
        }

        return getDirectParentComponent(element.parentElement);
    }

    return null;
}


export function removeComponentDataFromComponentTree(componentTree, targetId) {
    if (componentTree.hasOwnProperty(targetId)) {
        delete componentTree[targetId];
        return true;
    }

    for (const key in componentTree) {
        if (typeof componentTree[key] === 'object' && componentTree[key] !== null) {
            const result = removeComponentDataFromComponentTree(componentTree[key].childrens, targetId);
            if (result) {
                return true;
            }
        }
    }

    return false;
}

export function registerComponent(componentId, element, styleElement) {
    const parentComponentId = getDirectParentComponent(element)

    if (parentComponentId) {
        registerComponentChild(componentId, element)
    } else {

        window.componentTree[componentId] = {
            id: componentId,
            element: element,
            styleElement: styleElement,
            childrens: {},
            states: []
        };
    }
}

export function registerComponentChild(parentComponentId, childComponent) {
    const { id, styleElement } = childComponent;

    const parentComponentDataInComponentTree = findComponentDataInComponentTree(window.componentTree, parentComponentId);

    parentComponentDataInComponentTree.childrens[id] = {
        id,
        element: childComponent,
        styleElement: styleElement,
        childrens: {},
        states: []
    };
}