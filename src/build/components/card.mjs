export const COMPONENT_ID = "sa-DFw8Ta9";
import { createComponent } from "../../soft/components/create.mjs"

export function element({ props }) {
    return `
        <a class="card sa-DFw8Ta9" href="/${props?.id}">
            <div class="top sa-DFw8Ta9">
                <img class="profile-photo sa-DFw8Ta9" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNupCwfSPATZwd25fjrcT3hjsB24vwpVSS2g&amp;s" alt="pfp">
            </div>
            <div class="description sa-DFw8Ta9">${props?.title}</div>
        </a>
    `
}

export function style() {
    return `        
        .card.sa-DFw8Ta9 {
            display: flex;
            flex-direction: column;
            height: 25vw;
            width: 25vw;
            padding: 1vw;
            margin: 0.5vw;
            background: white;
            border-radius: 1vw;
        }
        
        .top.sa-DFw8Ta9 {
            display: flex;
            height: 5vw;
            width: 5vw;
        }
        
        .profile-photo.sa-DFw8Ta9 {
            height: 5vw;
            width: 5vw;
            border-radius: 1vw;
        }
        
        .description.sa-DFw8Ta9 {
            display: flex;
            height: fit-content;
            width: fit-content;
            margin: 1vw 0 0 0;
            color: black;
            font-size: 2vw;
        }
    `
}

export function Card(props) {
    return createComponent(element, style, undefined, props)
}


export function SSRElement({ props }) {
    return `
        <a class="card sa-DFw8Ta9" href="/${props?.id}">
            <div class="top sa-DFw8Ta9">
                <img class="profile-photo sa-DFw8Ta9" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNupCwfSPATZwd25fjrcT3hjsB24vwpVSS2g&amp;s" alt="pfp">
            </div>
            <div class="description sa-DFw8Ta9">${props?.title}</div>
        </a>
    `
}

export const COMPONENT_USES = {}

export async function importComponent(path) {
        return await import(path)
    }

