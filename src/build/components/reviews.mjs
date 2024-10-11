export const COMPONENT_ID = "sa-4z1NxGr";
import { createComponent } from "../../soft/components/create.mjs"
import { useMount } from "../../soft/components/mount/useMount.mjs"
import { Card } from "./card.mjs"

export function element({ props, data }) {
    let cards = ""
    for (let i = 0; i < 10; i++) {
        cards += `${useMount(Card, { props, data })}`
    }

    return `
        <div class="card-wrapper sa-4z1NxGr">
            ${useMount(Card, { props, data })}
            ${useMount(Card, { props: {...props, title: "something"}, data })}
            ${cards}
        </div>
    `
}

export function style() {
    return `
        .card-wrapper.sa-4z1NxGr {
            display: flex;
            flex-wrap: wrap;
            height: fit-content;
            width: 100vw;
        }
    `
}

export function Reviews(props) {
    return createComponent({
        elementFn: element,
        styleFn: style,
        props,
        componentId: COMPONENT_ID
    })
}


export function SSRElement({ props, data }) {
    let cards = ""
    for (let i = 0; i < 10; i++) {
        cards += `<component-use id="Card">${JSON.stringify({ props, data })}</component-use>`
    }

    return `
        <div class="card-wrapper sa-4z1NxGr">
            <component-use id="Card">${JSON.stringify({ props, data })}</component-use>
            <component-use id="Card">${JSON.stringify({ props: {...props, title: "something"}, data })}</component-use>
            ${cards}
        </div>
    `
}

export const COMPONENT_USES = {
    "Card": {
        "component": "Card",
        "fullMatch": "${useMount(Card, { props: {...props, title: \"something\"}, data })}",
        "importPath": "./card.mjs",
        "importLine": 4,
        "useLine": 51
    }
}

export async function importComponent(path) {
        return await import(path)
    }

