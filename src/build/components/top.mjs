export const COMPONENT_ID = "sa-IfXFB5X";
import { createComponent } from "../../soft/components/create.mjs"

export function element() {
    return `
        <div class="top sa-IfXFB5X">
            <div class="logo sa-IfXFB5X">
                <div class="s sa-IfXFB5X">S</div>
                <div class="o sa-IfXFB5X">O</div>
                <div class="f sa-IfXFB5X">F</div>
                <div class="t sa-IfXFB5X">T</div>
            </div>
            <div class="description sa-IfXFB5X">A New Way Of Web Apps.</div>
        </div>
    `
}

export function style() {
    return `
        .top.sa-IfXFB5X {
            display: flex;
            flex-direction: column;
            height: fit-content;
            width: 100vw;
            margin: 10vw 0;
        }
        
        .logo.sa-IfXFB5X {
            display: flex;
            height: fit-content;
            width: fit-content;
            margin: auto;
            font-size: 5vw;
            font-weight: 700;
            letter-spacing: 0.5vw;
        }
        
        .s.sa-IfXFB5X {color: red;}
        
        .o.sa-IfXFB5X {
            color: pink;
        }
        
        .f.sa-IfXFB5X {
            color: lime;
        }
        
        .t.sa-IfXFB5X {
            color: deepskyblue;
        }
        
        .description.sa-IfXFB5X {
            display: flex;
            height: fit-content;
            width: fit-content;
            margin: 1vw auto;
            color: white;
        }
    `
}

export function Top() {
    return createComponent(element, style)
}


export function SSRElement() {
    return `
        <div class="top sa-IfXFB5X">
            <div class="logo sa-IfXFB5X">
                <div class="s sa-IfXFB5X">S</div>
                <div class="o sa-IfXFB5X">O</div>
                <div class="f sa-IfXFB5X">F</div>
                <div class="t sa-IfXFB5X">T</div>
            </div>
            <div class="description sa-IfXFB5X">A New Way Of Web Apps.</div>
        </div>
    `
}

export const COMPONENT_USES = {}

export async function importComponent(path) {
        return await import(path)
    }

