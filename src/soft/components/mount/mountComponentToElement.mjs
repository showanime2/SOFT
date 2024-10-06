export function mountComponentToElement(component, element) {
    if (typeof window === 'undefined' || window.SOFT?.SSR) return

    const elementRef = element instanceof HTMLElement || document.querySelector(element)

    document.head.appendChild(component.css)
    elementRef.replaceWith(component.element)
}