import { compileStyle } from "../../../compiler/compileStyle.mjs";
import { createStyleElement } from "../css/createStyleElement.mjs";

/**
 * Manages client-side rendering, including styling, scripting, and optional data reloading.
 * @param {Function} element - Function to return HTML structure as a string.
 * @param {Function} css - Function to return CSS string for the component.
 * @param {Function} script - Function that applies event listeners or additional behavior to the rendered HTML element.
 * @param {Function} [loadData] - Optional function to fetch dynamic data and trigger re-rendering.
 * @returns {{element: HTMLElement, css: HTMLStyleElement}} - The rendered HTML element and corresponding style element.
 */
export function onClientSide(element, css, script, loadData) {
    const componentId = generateComponentId(7);

    const htmlElement = addComponentIdToElements(htmlStringToElements(element()), componentId);

    const compiledStyle = compileStyle(css(), componentId);
    const style = createStyleElement(compiledStyle);

    script(htmlElement);

    if (loadData) rerenderOnFetch(element, script, htmlElement, componentId, loadData);

    return {
        element: htmlElement,
        css: style
    };
}

/**
 * Generates a unique component ID with a "sa-" prefix.
 * @param {number} length - The length of the ID to be generated.
 * @returns {string} - The generated component ID.
 */
function generateComponentId(length) {
    const alphanumericSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let componentId = 'sa-';

    for (let i = 0; i < length; i++) {
        componentId += alphanumericSet.charAt(Math.floor(Math.random() * alphanumericSet.length));
    }

    return componentId;
}

/**
 * Converts an HTML string to a DOM element.
 * @param {string} htmlString - The HTML string to convert.
 * @returns {HTMLElement} - The resulting DOM element.
 */
function htmlStringToElements(htmlString) {
    const container = document.createElement('div');
    container.innerHTML = htmlString.trim();  // Trim to remove unwanted whitespace

    return container.firstElementChild;  // Returns the first child (root element)
}

/**
 * Adds a component-specific ID to all elements of a component.
 * @param {HTMLElement} element - The root element of the component.
 * @param {string} componentId - The unique component ID to be added.
 * @returns {HTMLElement} - The modified root element.
 */
function addComponentIdToElements(element, componentId) {
    const allElements = [element, ...element.querySelectorAll("*")];

    allElements.forEach(el => el.classList.add(componentId));

    return element;  // Return the modified root element
}

/**
 * Re-renders the component by fetching data and applying updates to the DOM.
 * @param {Function} element - Function that returns the component structure as an HTML string.
 * @param {Function} script - Function that applies event listeners or behavior to the updated element.
 * @param {HTMLElement} htmlElement - The current DOM element to be replaced.
 * @param {string} componentId - The unique component ID to be added to new elements.
 * @param {Function} loadData - Function that fetches dynamic data.
 */
async function rerenderOnFetch(element, script, htmlElement, componentId, loadData) {
    const data = await loadData();

    const newElement = addComponentIdToElements(htmlStringToElements(element(data)), componentId);

    htmlElement.outerHTML = newElement.outerHTML

    script(htmlElement);
}
