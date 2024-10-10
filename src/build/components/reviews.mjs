export const COMPONENT_ID = "sa-GKKOLYU";
import { createComponent } from "../../soft/components/create.mjs"
import { useMount } from "../../soft/components/mount/useMount.mjs"
import { Card } from "./card.mjs"

export function element({ props, data }) {
    return `
        <div class="card-wrapper sa-GKKOLYU">
            ${useMount(Card, { props })}
        </div>
    `
}

export function style() {
    return `
        .card-wrapper.sa-GKKOLYU {
            display: flex;
            height: fit-content;
            width: 100vw;
        }
    `
}

export function Reviews(props) {
    return createComponent(element, style, undefined, props)
}


export function SSRElement({ props, data }) {
    return `
        <div class="card-wrapper sa-GKKOLYU">
            <component-use id="Card">${JSON.stringify({ props })}</component-use>
        </div>
    `
}

export const COMPONENT_USES = {
    "Card": {
        "component": "Card",
        "fullMatch": "${useMount(Card, { props })}",
        "importPath": "./card.mjs",
        "importLine": 4,
        "useLine": 32
    }
}

export async function importComponent(path) {
        return await import(path)
    }

