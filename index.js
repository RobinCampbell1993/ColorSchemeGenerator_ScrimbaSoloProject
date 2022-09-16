let colorSelected = ""
let modeSelected = ""

document.getElementById("color-form").addEventListener('submit', handleColorSubmitButton)

function handleColorSubmitButton(event) {
    event.preventDefault()
    colorSelected = document.getElementById("color-picker").value.substring(1)
    modeSelected = document.getElementById("color-mode-selector").value

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorSelected}&mode=${modeSelected}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            getColorsHtml(data)
        })

    console.log(colorSelected)
    console.log(modeSelected)
}

function getColorsHtml(data) {
    let colorHtml = ""
    for (let i = 0; i < data.count; i++) {
        colorHtml += `
        <div class="img-container" id="color-img-container">
            <img src="${data.colors[i].image.bare}" id="color-img" alt="color-img">
            <p>${data.colors[i].hex.value}</p>
        </div>
        `
    }
        document.getElementById("main").innerHTML = colorHtml
}