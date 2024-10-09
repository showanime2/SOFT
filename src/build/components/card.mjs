export const COMPONENT_ID = "sa-B9oYCvx";
import { createComponent } from "../../soft/components/create.mjs"

export function element(params) {
    return `
        <div class="card sa-B9oYCvx">
            <div class="top sa-B9oYCvx">
                <img class="profile-photo sa-B9oYCvx" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNupCwfSPATZwd25fjrcT3hjsB24vwpVSS2g&amp;s" alt="pfp">
            </div>
            <div class="description sa-B9oYCvx"></div>
        </div>
    `
}

export function style() {
    return `.sa-B9oYCvx.sa-B9oYCvx
.sa-B9oYCvx .sa-B9oYCvx .sa-B9oYCvx .sa-B9oYCvx .sa-B9oYCvx .sa-B9oYCvx .sa-B9oYCvx .sa-B9oYCvx .sa-B9oYCvx.sa-B9oYCvx
.sa-B9oYCvx .sa-B9oYCvx .sa-B9oYCvx .sa-B9oYCvx `
}

export function Card(params) {
    return createComponent(element, style, params)
}


export function SSRElement(params) {
    return `
        <div class="card sa-B9oYCvx">
            <div class="top sa-B9oYCvx">
                <img class="profile-photo sa-B9oYCvx" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNupCwfSPATZwd25fjrcT3hjsB24vwpVSS2g&amp;s" alt="pfp">
            </div>
            <div class="description sa-B9oYCvx"></div>
        </div>
    `
}

export const COMPONENT_USES = {}

export async function importComponent(path) {
        return await import(path)
    }

