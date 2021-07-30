function fatorial(){
    let numero = Number(window.document.getElementById('fnum').value)
    let resultado = window.document.getElementById("res")
    resultado.innerHTML+=`<h2>Calculando ${numero}!</h2>`
    let contador =numero
    let fatorial = 1
    while(contador>1){
        resultado.innerHTML +=`${contador} x `
        fatorial *=contador
        contador--
    }
    resultado.innerHTML +=`1= <strong>${fatorial.toLocaleString('pt-BR')}</strong>`
}