export function addComponentIdToElements(componentId, element) {
    const all = [element, ...(element.querySelectorAll("*"))]

    for (let i = 0; i < all.length; i++) {
        all[i].classList.add(componentId)
    }
}