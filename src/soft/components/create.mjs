import { compileStyle } from "../compiler/css/addComponentIdToStyle.mjs";
import { htmlStringToElement } from "../dom/util.mjs";
import { addComponentIdToElements } from "./id/addIdToElements.mjs";
import { generateComponentId } from "./id/generateId.mjs";
import { handleSSRHydration } from "./hydration/hydrate.mjs";

export function createComponent({
    elementFn,
    styleFn,
    scriptFn,
    loadDataFn,
    props,
    componentId
}) {
    if (typeof window === "undefined") return;

    if (window.SOFT?.SSR) {
        handleSSRHydration(componentId, scriptFn, elementFn);
        return;
    }

    const id = generateComponentId(7);
    const { element, HTMLElement } = renderComponent(id, elementFn, props, scriptFn);

    if (loadDataFn) {
        rerenderOnData(id, loadDataFn, elementFn, scriptFn, HTMLElement, props?.props);
    }

    const styleElement = handleStyle(id, styleFn);
    return { element: HTMLElement, styleElement };
}

function renderComponent(id, elementFn, props, scriptFn) {
    const element = elementFn({ props: props?.props });
    const HTMLElement = htmlStringToElement(element);
    addComponentIdToElements(id, HTMLElement);

    if (scriptFn) {
        scriptFn({ props: props?.props, element: HTMLElement });
    }

    return { element, HTMLElement };
}

// Handle component styles
function handleStyle(id, styleFn) {
    if (!styleFn) return null;

    const styleElement = document.createElement("style");
    styleElement.id = id;

    const css = styleFn();
    const compiledCSS = compileStyle(css, id);
    styleElement.textContent = compiledCSS;

    return styleElement;
}

async function rerenderOnData(id, loadDataFn, elementFn, scriptFn, HTMLElement, props) {
    const data = await loadDataFn();
    const element = elementFn({ data });
    const newElement = htmlStringToElement(element);
    props = props || {};

    addComponentIdToElements(id, newElement);
    HTMLElement.replaceWith(newElement);

    if (scriptFn) {
        scriptFn({ element: newElement, props, data });
    }
}
