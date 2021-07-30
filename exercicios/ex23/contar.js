function contar(){
    let resultado = window.document.getElementById('res')
    resultado.innerHTML+="<h2>Números pares de 1 até 10</h2>"
    let contador =1
    while(contador <=10){
        if (contador%2==0) {
            resultado.innerHTML+= `${contador}👉`
        }else{

        }
        contador++
    }
    resultado.innerHTML+=`🏁`
}