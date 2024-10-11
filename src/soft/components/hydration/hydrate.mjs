export function handleSSRHydration(componentId, scriptFn, elementFn) {
    const prop = window.SOFT.props.find(prop => {
        return prop.componentId === componentId && !prop.hydrated;
    }) || {};

    prop.hydrated = true;
    hydrateComponent(componentId, scriptFn, elementFn, prop);
}

function hydrateComponent(componentId, scriptFn, elementFn, prop = {}) {
    let elements = Array.from(document.querySelectorAll(`.${componentId}`));
    let element = elements.find(el => !el.hydrated && el.tagName !== "STYLE" && !el.parentElement.classList.contains(componentId));

    if (element) {
        element.hydrated = true;

        if (scriptFn) {
            scriptFn({ ...prop, element });
        }

        elementFn(prop);
    }
}
