function converter(){
    let celsius = Number(window.prompt(`Digite uma temperatura em celsis (C°)`))
    let kelvin = celsius +  273.15
    let fahrenheit = (1.8*celsius)+32

    let resultado = window.document.querySelector('section#res')
    resultado.innerHTML = (`<h2>A temperatura de ${celsius}°C corresponde a:<h2>`)
    resultado.innerHTML += (`<p>${kelvin} K° (Kelvin)<p>`)
    resultado.innerHTML += (`<p>${fahrenheit} F° (Farenheit)</p>`)

}