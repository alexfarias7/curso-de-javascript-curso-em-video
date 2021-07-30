let res = document.querySelector('section#res')
let computador = 0
let jogador = 0

function sortear() {
    let min = 1 
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    computador = min + Math.trunc(dif * aleatorio)
}

function tentar(){
    jogador = Number(window.prompt('Qual é o seu palpite?'))
    if (jogador < computador) {
        res.innerHTML += `<p>Você digitou ${jogador}. O número sorteador  é ${computador} e é <strong>MAIOR</strong>!</p>`
    } else if (jogador > computador) {
        res.innerHTML += `<p>Você digitou ${jogador}. O número é ${computador} e é <strong>MENOR</strong>!</p>`
    } else if (jogador == computador) {
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! O número sorteado tem o valor de ${computador}!</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }

}