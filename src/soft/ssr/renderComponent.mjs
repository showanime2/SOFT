import { JSDOM } from "jsdom";

export async function renderComponent(module, html) {
    const componentId = module.COMPONENT_ID
    const placeholder = module.PLACEHOLDER

    const data = module.loadData ? await module.loadData() : undefined

    const dom = new JSDOM(html);
    const document = dom.window.document;

    const element = module.element(data)
    const CSS = module.style ? `<style class="${componentId}">${module.style()}</style>` : ""

    addCSS(document, CSS)
    replaceElement(document, element, placeholder)
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