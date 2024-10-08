export function useMount(component) {
    const type = generateRandomString(10);
    const placeholderElement = `<Placeholder type="${type}"></Placeholder>`;

    observePlaceholder(type, component);

    return placeholderElement;
}

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    
    return result;
}

function replaceElement(placeholderElement, component) {
    if (component.styleElement) {
        document.head.appendChild(component.styleElement)
    }
    
    placeholderElement.replaceWith(component.element);
}

function observePlaceholder(type, component) {
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === 'childList') {
                const placeholderElement = document.querySelector(`Placeholder[type="${type}"]`);
                if (placeholderElement) {
                    replaceElement(placeholderElement, component);

                    observer.disconnect();
                    break;
                }
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}
