import { JSDOM } from "jsdom";
import { resolveNestedComponents } from "./resolveNestedComponents.mjs";

export async function renderComponent(module, html) {
    const componentId = module.COMPONENT_ID
    const placeholder = module.PLACEHOLDER

    const data = module.loadData ? await module.loadData() : undefined

    const dom = new JSDOM(html);
    const document = dom.window.document;

    let element = await module.SSRElement({ data })

    const props = []

    props.push({ componentId, props: null, data })
    const resolved = await resolveNestedComponents(module, document, element, props)

    element = replaceElement(document, resolved.html, placeholder)

    let CSS = module.style ? `<style class="${componentId}">${await module.style()}</style>` : ""
    CSS = CSS + resolved.css
    addCSS(document, CSS)
    addScript(document, props)

    return dom.serialize()
}

function addCSS(document, css) {
    document.head.innerHTML += css
}

function replaceElement(document, element, selector) {
    const placeholder = document.querySelector(selector)
    placeholder.outerHTML = element

    return placeholder
}

function addScript(document, props) {
    let script = document.createElement('script');
    script.textContent = `
        window.SOFT = window.SOFT || {};
        window.SOFT.SSR = {};
        window.SOFT.SSR = true;
        window.SOFT.props = ${JSON.stringify(props)}
    `;
    document.head.appendChild(script);
}