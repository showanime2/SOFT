import { mountComponentOnSSR } from "./mountComponentOnSSR.mjs";

function generateRandomString(length) {
    const alphanumericSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < length; i++) {
        randomString += alphanumericSet.charAt(Math.floor(Math.random() * alphanumericSet.length));
    }

    return randomString;
}

/**
 * Replaces a placeholder element with the specified component's element.
 *
 * @param {HTMLElement} placeholderElement - The placeholder element to be replaced.
 * @param {Object} component - The component object containing the element and styles.
 * @param {Function} component.applyStyles - Function to apply styles to the component.
 * @param {HTMLElement} component.element - The component's DOM element.
 */
function replaceElement(placeholderElement, component) {
    document.head.appendChild(component.css)
    placeholderElement.replaceWith(component.element);
}

/**
 * Observes the DOM for the addition of a placeholder tag and replaces it with the component.
 *
 * @param {string} tagName - The tag name of the placeholder element to watch for.
 * @param {Object} component - The component object containing the element and styles.
 * @param {Function} component.applyStyles - Function to apply styles to the component.
 * @param {HTMLElement} component.element - The component's DOM element.
 */
function observePlaceholder(type, component) {
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === 'childList') {
                const placeholderElement = document.querySelector(`Placeholder[type="${type}"]`);
                if (placeholderElement) {
                    replaceElement(placeholderElement, component);
                    observer.disconnect();
                    break
                }
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

/**
 * Initializes the component, generates a placeholder, and observes the DOM for the placeholder.
 *
 * @param {Function} initializeComponent - Function that returns the initialized component object.
 * @returns {string} - The placeholder tag as a string.
 */
export function mountComponent(initializeComponent, params) {
    const component = initializeComponent()
    if (typeof window === "undefined") return mountComponentOnSSR(component)

    const type = generateRandomString(10);
    const placeholderElement = `<Placeholder type="${type}"></Placeholder>`;

    observePlaceholder(type, component);

    return placeholderElement;
}