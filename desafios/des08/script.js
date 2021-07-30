function calcular(){
    let produto = window.prompt('Qual o produto você vai comprar?')
    let preço = Number(window.prompt(`Qual o preço de ${produto}`))
    let desconto = preço*0.1
    let valorfinal= preço - desconto
    
    let resultado = document.getElementById('res')
    resultado.innerHTML= ` <h2>Calculando o desconto de 10% para ${produto}</h2>`
    resultado.innerHTML =` <p>O preço original era de R$ ${preço}.<p>`
    resultado.innerHTML += `<p> Você acaba de ganhar R$ ${desconto} de desconto (-10%).`
    resultado.innerHTML += `<p> No fim , você vai pagar o valor de ${valorfinal} no produto ${produto}.`

}