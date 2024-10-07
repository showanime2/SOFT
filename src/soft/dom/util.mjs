export function htmlStringToElement(htmlString) {
    const container = document.createElement('div');
    container.innerHTML = htmlString.trim();

    return container.firstElementChild;
}