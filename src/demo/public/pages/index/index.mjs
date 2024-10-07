import { createComponent } from "../../../../soft/components/create.mjs"
import { mountComponent } from "../../../../soft/components/mount/mountComponent.mjs"

function element() {
    return `
        <div class="app">
            <div class="top">
                <div class="logo">
                    <div class="s">S</div>
                    <div class="o">O</div>
                    <div class="f">F</div>
                    <div class="t">T</div>
                </div>
                <div class="description">A New Way Of Web Apps.</div>
            </div>
        </div>
    `
}

function style() {
    return /*css*/`
        .app {
            display: flex;
            height: fit-content;
            width: 100vw;
        }
        
        .top {
            display: flex;
            flex-direction: column;
            height: fit-content;
            width: 100vw;
            margin: 10vw 0;
        }
        
        .logo {
            display: flex;
            height: fit-content;
            width: fit-content;
            margin: auto;
            font-size: 5vw;
            font-weight: 700;
            letter-spacing: 0.5vw;
        }
        
        .s {color: red;}
        
        .o {
            color: pink;
        }
        
        .f {
            color: lime;
        }
        
        .t {
            color: deepskyblue;
        }
        
        .description {
            display: flex;
            height: fit-content;
            width: fit-content;
            margin: 1vw auto;
            color: white;
        }
    `
}

function script(element) {
    
}

export const Index = createComponent(element, style)
mountComponent(Index, ".app")