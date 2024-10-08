export const COMPONENT_ID = "sa-eK1PyLT";
export const PLACEHOLDER = ".app";

import { createComponent } from "../../../soft/components/create.mjs"
import { mountComponent } from "../../../soft/components/mount/mountComponent.mjs"
import { useMount } from "../../../soft/components/mount/useMount.mjs"
const Top = await import("../../components/top.mjs")

export async function element() {
    return `
        <div class="app sa-eK1PyLT">
            ${await useMount(Top, Top.Top)}
        </div>
    `
}

export function style() {
    return `
        .app.sa-eK1PyLT {
            display: flex;
            height: fit-content;
            width: 100vw;
        }
    `
}

export function script(element = document.querySelector(".sa-eK1PyLT")) {    
}

export const Index = await createComponent(element, style)
mountComponent(Index, ".app")
