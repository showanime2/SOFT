export function createStyleElement(css) {
    const style = document.createElement("style")
    style.textContent = css
    return style
}