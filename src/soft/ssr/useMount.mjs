export async function useMountOnSSR(component, params) {
    let combined = await component.element(params)
    if (component.style) {
        combined = combined + `<style class="${component.COMPONENT_ID}">${await component.style()}</style>`
    }

    return combined
}