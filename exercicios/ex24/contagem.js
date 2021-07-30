function contar(){
    let resultado = window.document.querySelector('section#res')
    let contador = 10
    resultado.innerHTML+= "<h2>Contagem Regressiva de 10 a 1</h2>"
    while(contador>=1){
        resultado.innerHTML +=`${contador}👉`
        contador--
    }
    resultado.innerHTML+=`🏁`
  
}