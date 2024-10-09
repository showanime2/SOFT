export const COMPONENT_ID = "sa-6NdtLiO";
import { createComponent } from "../../soft/components/create.mjs"
import { useMount } from "../../soft/components/mount/useMount.mjs"
import { Card } from "./card.mjs"

export function element() {
    return `
        <div class="card-wrapper sa-6NdtLiO">
            ${useMount(Card)}
        </div>
    `
}

export function style() {
    return `.sa-6NdtLiO.sa-6NdtLiO
.sa-6NdtLiO .sa-6NdtLiO .sa-6NdtLiO .sa-6NdtLiO .sa-6NdtLiO .sa-6NdtLiO .sa-6NdtLiO .sa-6NdtLiO .sa-6NdtLiO.sa-6NdtLiO
.sa-6NdtLiO .sa-6NdtLiO .sa-6NdtLiO .sa-6NdtLiO `
}

export function Reviews() {
    return createComponent(element, style)
}


export function SSRElement() {
    return `
        <div class="card-wrapper sa-6NdtLiO">
            <component-use id="Card"></component-use>
        </div>
    `
}

export const COMPONENT_USES = {
    "Card": {
        "component": "Card",
        "fullMatch": "${useMount(Card)}",
        "importPath": "./card.mjs",
        "importLine": 4,
        "useLine": 28
    }
}

export async function importComponent(path) {
        return await import(path)
    }

