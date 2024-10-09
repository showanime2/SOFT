export const COMPONENT_ID = "sa-PMXJ1cW";
import { createComponent } from "../../soft/components/create.mjs"

export function element() {
    return `
        <div class="top sa-PMXJ1cW">
            <div class="logo sa-PMXJ1cW">
                <div class="s sa-PMXJ1cW">S</div>
                <div class="o sa-PMXJ1cW">O</div>
                <div class="f sa-PMXJ1cW">F</div>
                <div class="t sa-PMXJ1cW">T</div>
            </div>
            <div class="description sa-PMXJ1cW">A New Way Of Web Apps.</div>
        </div>
    `
}

export function style() {
    return `
        .top.sa-PMXJ1cW {
            display: flex;
            flex-direction: column;
            height: fit-content;
            width: 100vw;
            margin: 10vw 0;
        }
        
        .logo.sa-PMXJ1cW {
            display: flex;
            height: fit-content;
            width: fit-content;
            margin: auto;
            font-size: 5vw;
            font-weight: 700;
            letter-spacing: 0.5vw;
        }
        
        .s.sa-PMXJ1cW {color: red;}
        
        .o.sa-PMXJ1cW {
            color: pink;
        }
        
        .f.sa-PMXJ1cW {
            color: lime;
        }
        
        .t.sa-PMXJ1cW {
            color: deepskyblue;
        }
        
        .description.sa-PMXJ1cW {
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
        <div class="top sa-PMXJ1cW">
            <div class="logo sa-PMXJ1cW">
                <div class="s sa-PMXJ1cW">S</div>
                <div class="o sa-PMXJ1cW">O</div>
                <div class="f sa-PMXJ1cW">F</div>
                <div class="t sa-PMXJ1cW">T</div>
            </div>
            <div class="description sa-PMXJ1cW">A New Way Of Web Apps.</div>
        </div>
    `
}

export const COMPONENT_USES = {}

export async function importComponent(path) {
        return await import(path)
    }

