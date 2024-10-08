export function extractStyleElementsFromElement(document, element) {
    const div = document.createElement("div");
    div.innerHTML = element;

    const styleElements = div.querySelectorAll("style");
    let combinedStyles = '';

    for (let i = 0; i < styleElements.length; i++) {
        combinedStyles += styleElements[i].outerHTML;
    }

    for (let i = 0; i < styleElements.length; i++) {
        const styleElement = styleElements[i];
        styleElement.remove()
    }

    return {
        element: div.innerHTML,
        styleElements: combinedStyles
    };
}