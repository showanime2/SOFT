export const COMPONENT_ID = "sa-eHs1VR0";
import { createComponent } from "../../soft/components/create.mjs"

export function element() {
    return `
        <div class="top sa-eHs1VR0">
            <div class="logo sa-eHs1VR0">
                <div class="s sa-eHs1VR0">S</div>
                <div class="o sa-eHs1VR0">O</div>
                <div class="f sa-eHs1VR0">F</div>
                <div class="t sa-eHs1VR0">T</div>
            </div>
            <div class="description sa-eHs1VR0">A New Way Of Web Apps.</div>
        </div>
    `
}

export function style() {
    return `
        .top.sa-eHs1VR0 {
            display: flex;
            flex-direction: column;
            height: fit-content;
            width: 100vw;
            margin: 10vw 0;
        }
        
        .logo.sa-eHs1VR0 {
            display: flex;
            height: fit-content;
            width: fit-content;
            margin: auto;
            font-size: 5vw;
            font-weight: 700;
            letter-spacing: 0.5vw;
        }
        
        .s.sa-eHs1VR0 {color: red;}
        
        .o.sa-eHs1VR0 {
            color: pink;
        }
        
        .f.sa-eHs1VR0 {
            color: lime;
        }
        
        .t.sa-eHs1VR0 {
            color: deepskyblue;
        }
        
        .description.sa-eHs1VR0 {
            display: flex;
            height: fit-content;
            width: fit-content;
            margin: 1vw auto;
            color: white;
        }
    `
}

export function Top(props) {
    return createComponent({
        elementFn: element,
        styleFn: style,
        props,
        componentId: COMPONENT_ID
    })
}


export function SSRElement() {
    return `
        <div class="top sa-eHs1VR0">
            <div class="logo sa-eHs1VR0">
                <div class="s sa-eHs1VR0">S</div>
                <div class="o sa-eHs1VR0">O</div>
                <div class="f sa-eHs1VR0">F</div>
                <div class="t sa-eHs1VR0">T</div>
            </div>
            <div class="description sa-eHs1VR0">A New Way Of Web Apps.</div>
        </div>
    `
}

export const COMPONENT_USES = {}

export async function importComponent(path) {
        return await import(path)
    }

