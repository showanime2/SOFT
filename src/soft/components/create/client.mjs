import { createStyleElement } from "../css/createStyleElement.mjs"

/**
 * 
 * @param {Function} element 
 * @param {Function} css 
 * @param {Function} script 
 */
export function onClientSide(element, css, script, loadData) {
    const htmlElement = htmlStringToElements(element())
    const style = createStyleElement(css())
    
    script(htmlElement)
    if (loadData) rerenderOnFetch(element, script, htmlElement, loadData)

    return {
        element: htmlElement,
        css: style
    }
}

function htmlStringToElements(htmlString) {
    const container = document.createElement('div');
    container.innerHTML = htmlString;

    return container.children[0]
}

async function rerenderOnFetch(element, script, htmlElement, loadData) {
    const data = await loadData()

    const newElement = htmlStringToElements(element(data))
    script(newElement)
    htmlElement.replaceWith(newElement)
}