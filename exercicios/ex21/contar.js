function contar(){
    let resultado = window.document.querySelector('section#res')
    resultado.innerHTML += `<h2> Contando de 1 atΓ© 10 `
    let contador = 1
    while(contador<=10){
        resultado.innerHTML+=`${contador}π`
        contador++
    }
    resultado.innerHTML +=`π`
}