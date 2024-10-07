function element() {
    return `
        <div class="wrapper">
            <div class="logo">
                <div class="s">S</div>
                <div class="o">O</div>
                <div class="f">F</div>
                <div class="t">T</div>
            </div>
        </div>
    `
}

export function Top() {
    return CreateComponent(element)
}