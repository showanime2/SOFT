export const COMPONENT_ID = "sa-NAp6lC8";
import { createComponent } from "../../soft/components/create.mjs"

export async function element(params) {
    return `
        <div class="card sa-NAp6lC8">
            <div class="top sa-NAp6lC8">
                <img class="profile-photo sa-NAp6lC8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNupCwfSPATZwd25fjrcT3hjsB24vwpVSS2g&amp;s" alt="pfp">
            </div>
            <div class="description sa-NAp6lC8"></div>
        </div>
    `
}

export function style() {
    return `.sa-NAp6lC8.sa-NAp6lC8
.sa-NAp6lC8 .sa-NAp6lC8 .sa-NAp6lC8 .sa-NAp6lC8 .sa-NAp6lC8 .sa-NAp6lC8 .sa-NAp6lC8 .sa-NAp6lC8 .sa-NAp6lC8.sa-NAp6lC8
.sa-NAp6lC8 .sa-NAp6lC8 .sa-NAp6lC8 .sa-NAp6lC8 `
}

export async function Card(params) {
    return await createComponent(element, style, params)
}


export async function SSRElement(params) {
    return `
        <div class="card sa-NAp6lC8">
            <div class="top sa-NAp6lC8">
                <img class="profile-photo sa-NAp6lC8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNupCwfSPATZwd25fjrcT3hjsB24vwpVSS2g&amp;s" alt="pfp">
            </div>
            <div class="description sa-NAp6lC8"></div>
        </div>
    `
}

export const COMPONENT_USES = {}

export async function importComponent(path) {
        return await import(path)
    }

