function contar(){
    let resultado = window.document.querySelector('section#res')
    resultado.innerHTML += `<h2> Contando de 1 até 10 `
    let contador = 1
    while(contador<=10){
        resultado.innerHTML+=`${contador}👉`
        contador++
    }
    resultado.innerHTML +=`🏁`
}