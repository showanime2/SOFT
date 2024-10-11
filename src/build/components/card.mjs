export const COMPONENT_ID = "sa-dI0TVgp";
import { createComponent } from "../../soft/components/create.mjs"

export function element({ props }) {
    return `
        <a class="card sa-dI0TVgp" href="/${props?.id}">
            <div class="top sa-dI0TVgp">
                <img class="profile-photo sa-dI0TVgp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNupCwfSPATZwd25fjrcT3hjsB24vwpVSS2g&amp;s" alt="pfp">
            </div>
            <div class="description sa-dI0TVgp">${props?.title}</div>
        </a>
    `
}

export function style() {
    return `        
        .card.sa-dI0TVgp {
            display: flex;
            flex-direction: column;
            height: 25vw;
            width: 25vw;
            padding: 1vw;
            margin: 0.5vw;
            background: white;
            border-radius: 1vw;
        }
        
        .top.sa-dI0TVgp {
            display: flex;
            height: 5vw;
            width: 5vw;
        }
        
        .profile-photo.sa-dI0TVgp {
            height: 5vw;
            width: 5vw;
            border-radius: 1vw;
        }
        
        .description.sa-dI0TVgp {
            display: flex;
            height: fit-content;
            width: fit-content;
            margin: 1vw 0 0 0;
            color: black;
            font-size: 2vw;
        }
    `
}

export function script({ props, data, element }) {
    element.addEventListener("mouseenter", () => {
        element.style.backgroundColor = "red"
    })

    element.addEventListener("mouseleave", () => {
        element.style.backgroundColor = "white"
    })
}

export function Card(props) {
    return createComponent({
        elementFn: element,
        styleFn: style,
        scriptFn: script,
        props,
        componentId: COMPONENT_ID
    })
}


export function SSRElement({ props }) {
    return `
        <a class="card sa-dI0TVgp" href="/${props?.id}">
            <div class="top sa-dI0TVgp">
                <img class="profile-photo sa-dI0TVgp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNupCwfSPATZwd25fjrcT3hjsB24vwpVSS2g&amp;s" alt="pfp">
            </div>
            <div class="description sa-dI0TVgp">${props?.title}</div>
        </a>
    `
}

export const COMPONENT_USES = {}

export async function importComponent(path) {
        return await import(path)
    }

