function tabuada(){
    let numero = Number(window.document.querySelector('input#fnum').value)
    let resultado = window.document.querySelector('section#res')
    resultado.innerHTML =`<h2>Tabuada de ${numero}</h2>`
    let contador = 1
    while(contador<=10){
        resultado.innerHTML+=`${numero}x${contador} = ${numero*contador}<br>`
        contador++
    }
}