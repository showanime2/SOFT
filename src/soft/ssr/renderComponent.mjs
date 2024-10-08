import { JSDOM } from "jsdom";
import { extractStyleElementsFromElement } from "./extractStyleElementsFromElement.mjs";

export async function renderComponent(module, html) {
    const componentId = module.COMPONENT_ID
    const placeholder = module.PLACEHOLDER

    const data = module.loadData ? await module.loadData() : undefined

    const dom = new JSDOM(html);
    const document = dom.window.document;

    let element = await module.element(data)
    let CSS = module.style ? `<style class="${componentId}">${await module.style()}</style>` : ""

    const extracted = extractStyleElementsFromElement(document, element)
    element = extracted.element
    CSS = CSS + extracted.styleElements

    replaceElement(document, element, placeholder)
    addCSS(document, CSS)
    addScript(document)

    return dom.serialize()
}

function addCSS(document, css) {
    document.head.innerHTML += css
}

function replaceElement(document, element, selector) {
    const placeholder = document.querySelector(selector)
    placeholder.outerHTML = element
}

function addScript(document) {
    let script = document.createElement('script');
    script.textContent = `
        window.SOFT = window.SOFT || {};
        window.SOFT.SSR = {};
        window.SOFT.SSR = true;
    `;
    document.head.appendChild(script);
}