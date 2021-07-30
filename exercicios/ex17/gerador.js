function clicar(){
    let min =1
    let max = 100
    let diferenca = max-min
    let aleatório = Math.random()
    let num = min + Math.trunc(diferenca*aleatório)
    let resultado= window.document.querySelector('section#res')
    resultado.innerHTML += `<p> O número sorteado foi <mark>${num}</mark>! `
}
function limpar(){
    let resultado = window.document.getElementById('res')
    resultado.innerHTML =  null
}