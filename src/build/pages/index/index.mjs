const COMPONENT_ID = "sa-BR5uRXA";

import { createComponent } from "../../../soft/components/create.mjs"
import { mountComponent } from "../../../soft/components/mount/mountComponent.mjs"

export function element() {
    return `
        <div class="app sa-BR5uRXA">
            <div class="top sa-BR5uRXA">
                <div class="logo sa-BR5uRXA">
                    <div class="s sa-BR5uRXA">S</div>
                    <div class="o sa-BR5uRXA">O</div>
                    <div class="f sa-BR5uRXA">F</div>
                    <div class="t sa-BR5uRXA">T</div>
                </div>
                <div class="description sa-BR5uRXA">A New Way Of Web Apps.</div>
            </div>
        </div>
    `
}

export function style() {
    return `
        .app.sa-BR5uRXA {
            display: flex;
            height: fit-content;
            width: 100vw;
        }
        
        .top.sa-BR5uRXA {
            display: flex;
            flex-direction: column;
            height: fit-content;
            width: 100vw;
            margin: 10vw 0;
        }
        
        .logo.sa-BR5uRXA {
            display: flex;
            height: fit-content;
            width: fit-content;
            margin: auto;
            font-size: 5vw;
            font-weight: 700;
            letter-spacing: 0.5vw;
        }
        
        .s.sa-BR5uRXA {color: red;}
        
        .o.sa-BR5uRXA {
            color: pink;
        }
        
        .f.sa-BR5uRXA {
            color: lime;
        }
        
        .t.sa-BR5uRXA {
            color: deepskyblue;
        }
        
        .description.sa-BR5uRXA {
            display: flex;
            height: fit-content;
            width: fit-content;
            margin: 1vw auto;
            color: white;
        }
    `
}

export function script(element = document.querySelector(".sa-BR5uRXA")) {
    
}

export const Index = createComponent(element, style)
mountComponent(Index, ".app")
