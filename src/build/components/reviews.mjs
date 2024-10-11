export const COMPONENT_ID = "sa-MF1wskB";
import { createComponent } from "../../soft/components/create.mjs"
import { useMount } from "../../soft/components/mount/useMount.mjs"
import { Card } from "./card.mjs"

export function element({ props, data }) {
    return `
        <div class="card-wrapper sa-MF1wskB">
            ${useMount(Card, { props, data })}
            ${useMount(Card, { props: {...props, title: "something"}, data })}
        </div>
    `
}

export function style() {
    return `
        .card-wrapper.sa-MF1wskB {
            display: flex;
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
    return `
        <div class="card-wrapper sa-MF1wskB">
            <component-use id="Card">${JSON.stringify({ props, data })}</component-use>
            <component-use id="Card">${JSON.stringify({ props: {...props, title: "something"}, data })}</component-use>
        </div>
    `
}

export const COMPONENT_USES = {
    "Card": {
        "component": "Card",
        "fullMatch": "${useMount(Card, { props: {...props, title: \"something\"}, data })}",
        "importPath": "./card.mjs",
        "importLine": 4,
        "useLine": 39
    }
}

export async function importComponent(path) {
        return await import(path)
    }

