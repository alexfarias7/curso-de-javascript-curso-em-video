function contar(){
    let resultado = window.document.getElementById('res')
    let num1 = Number(window.document.getElementById('txtn1').value)
    let num2 = Number(window.document.getElementById('txtn2').value)
    resultado.innerHTML += `<h2>Contando de ${num1} até ${num2}.</h2>`
    let contador
    if (num1>num2) {
        contador =num1
        while(contador>=num2){
            resultado.innerHTML+= `${contador}👉`
            contador--
        }
       resultado.innerHTML+=`🏁`
    }else if (num1<num2) {
        contador=num1
        while(contador<=num2){
            resultado.innerHTML+= `${contador}👉`
            contador++
        }
        
       resultado.innerHTML+=`🏁`
    }else{
        resultado.innerHTML='Não é possível contar , os dois números são iguais.'
    }
}