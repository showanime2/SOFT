export function mountComponentOnSSR(component) {
    return component.element + component.css
}