let valordolar = Number(window.prompt(`Qual o valor da cotação do dolar em Real atual?`))
function valor(){
}
function converter(){
    let dinheiro = Number(window.prompt('Quanto R$, você tem na carteira'))
    let dinconvertido = dinheiro * valordolar
    let resultado = window.document.getElementById('res')
    resultado.innerHTML = " <p>O resultado convertido é:</p>"
    resultado.innerHTML += `<p>${dinconvertido}$ dolares`
}