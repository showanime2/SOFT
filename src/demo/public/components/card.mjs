import { createComponent } from "../../../soft/components/create.mjs"

function element(params) {
    return `
        <div class="card">
            <div class="top">
                <img class="profile-photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNupCwfSPATZwd25fjrcT3hjsB24vwpVSS2g&s" alt="pfp"/>
            </div>
            <div class="description"></div>
        </div>
    `
}

function style() {
    return /*css*/`
        
    `
}

export function Card(params) {
    return createComponent(element, style, params)
}