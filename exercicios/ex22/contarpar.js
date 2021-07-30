function contar(){
    let resultado = window.document.querySelector('section#res')
    resultado.innerHTML += `<h2> Contando de 1 até 10, mas marcando pares`
    let contador = 1
    while (contador<=10){
        if (contador%2==0) {
            resultado.innerHTML +=`<strong><mark>${contador}</mark></strong>👉`
        }
        else{
           resultado.innerHTML += `${contador}👉`
        }
        contador++
    }
    resultado.innerHTML+= `🏁`
}