import { JSDOM } from "jsdom";

export function addComponentIdToElementsOnSSR(element, componentId) {
    const jsdom = new JSDOM(element);
    const allElements = jsdom.window.document.body.querySelectorAll("*");

    for (let i = 0; i < allElements.length; i++) {
        allElements[i].classList.add(componentId);
    }

    return jsdom.window.document.body.innerHTML;
}