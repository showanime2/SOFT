export const COMPONENT_ID = "sa-COZA3hE";
export const PLACEHOLDER = ".app";

import { createComponent } from "../../../soft/components/create.mjs"
import { mountComponent } from "../../../soft/components/mount/mountComponent.mjs"
import { useMount } from "../../../soft/components/mount/useMount.mjs"
import { Reviews } from "../../components/reviews.mjs"
import { Top } from "../../components/top.mjs"

export async function element({ data, props }) {
    return `
        <div class="app sa-COZA3hE">
            ${useMount(Top)}
            ${useMount(Reviews)}
        </div>
    `
}

export function style() {
    return `
        .app.sa-COZA3hE {
            display: flex;
            height: fit-content;
            width: 100vw;
        }
    `
}

export function script(element = document.querySelector(".sa-COZA3hE")) {
}

export const Index = await createComponent(element, style)
mountComponent(Index, ".app")


export async function SSRElement({ data, props }) {
    return `
        <div class="app sa-COZA3hE">
            <component-use id="Top"></component-use>
            <component-use id="Reviews"></component-use>
        </div>
    `
}

export const COMPONENT_USES = {
    "Top": {
        "component": "Top",
        "fullMatch": "${useMount(Top)}",
        "importPath": "../../components/top.mjs",
        "importLine": 8,
        "useLine": 39
    },
    "Reviews": {
        "component": "Reviews",
        "fullMatch": "${useMount(Reviews)}",
        "importPath": "../../components/reviews.mjs",
        "importLine": 7,
        "useLine": 40
    }
}

export async function importComponent(path) {
        return await import(path)
    }

