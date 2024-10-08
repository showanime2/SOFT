export const COMPONENT_ID = "sa-JZl48U0";
export const PLACEHOLDER = ".app";

import { createComponent } from "../../../soft/components/create.mjs"
import { mountComponent } from "../../../soft/components/mount/mountComponent.mjs"
import { useMount } from "../../../soft/components/mount/useComponent.mjs"
import { Top } from "../../components/top.mjs"

export function element() {
    return `
        <div class="app sa-JZl48U0">
            ${useMount(Top)}
        </div>
    `
}

export function style() {
    return `
        .app.sa-JZl48U0 {
            display: flex;
            height: fit-content;
            width: 100vw;
        }
    `
}

export function script(element = document.querySelector(".sa-JZl48U0")) {    
}

export const Index = createComponent(element, style)
mountComponent(Index, ".app")
