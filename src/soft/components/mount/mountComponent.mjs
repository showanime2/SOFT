export function mountComponent(component, selector) {
    if (typeof window === "undefined") return
    if (window.SOFT?.SSR) return

    const element = document.querySelector(selector)
    if (!selector) {
        throw Error("Element with selector not found")
    }

    document.head.appendChild(component.styleElement)
    element.replaceWith(component.element)
}