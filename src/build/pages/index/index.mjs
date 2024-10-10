export const COMPONENT_ID = "sa-ccOaxoF";
export const PLACEHOLDER = ".app";

import { createComponent } from "../../../soft/components/create.mjs"
import { mountComponent } from "../../../soft/components/mount/mountComponent.mjs"
import { useMount } from "../../../soft/components/mount/useMount.mjs"
import { Reviews } from "../../components/reviews.mjs"
import { Top } from "../../components/top.mjs"

export async function loadData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json()
    return data
}

export function element({ data, props }) {
    return `
        <div class="app sa-ccOaxoF">
            ${useMount(Top)}
            ${useMount(Reviews, { props: data })}
        </div>
    `
}

export function style() {
    return `
        .app.sa-ccOaxoF {
            display: flex;
            flex-direction: column;
            height: fit-content;
            width: 100vw;
        }
    `
}

export function script(element = document.querySelector(".sa-ccOaxoF")) {
}

export const Index = createComponent(element, style, loadData)
mountComponent(Index, ".app")


export function SSRElement({ data, props }) {
    return `
        <div class="app sa-ccOaxoF">
            <component-use id="Top"></component-use>
            <component-use id="Reviews">${JSON.stringify({ props: data })}</component-use>
        </div>
    `
}

export const COMPONENT_USES = {
    "Top": {
        "component": "Top",
        "fullMatch": "${useMount(Top)}",
        "importPath": "../../components/top.mjs",
        "importLine": 8,
        "useLine": 46
    },
    "Reviews": {
        "component": "Reviews",
        "fullMatch": "${useMount(Reviews, { props: data })}",
        "importPath": "../../components/reviews.mjs",
        "importLine": 7,
        "useLine": 47
    }
}

export async function importComponent(path) {
        return await import(path)
    }

