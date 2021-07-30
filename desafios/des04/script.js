function calcular(){
let produto = window.prompt('Qual o produto que vc está comprando')   
let preco = Number(window.prompt(`quanto custa o ${produto}?`))
let dinheiro = Number(window.prompt(`Qual foi o valor que você ofereceu para compra o ${produto}`))
let troco = dinheiro-preco
window.alert(`Você compro um ${produto} que custa R$ ${preco}.
Deu R$ ${dinheiro} em dinheiro e vai receber de troco R$ ${troco}.
Volte sempre!
`)
}

