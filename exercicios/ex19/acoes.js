function iniciar(){
    let num1 = Number(window.prompt('Digite um número:'))
    let num2 = Number(window.prompt('Digite outro número:'))
    let calculo = Number(window.prompt(`Valores informados são ${num1} e ${num2}\nO que fazer? \n[1] SOMAR\n[2] SUBTRAIR\n[3] MULTIPLICAR\n[4] DIVIDIR`))
    
    let resultado = window.document.getElementById('res')
    resultado.innerHTML='<h2>Calculando...</h2>'

    switch(calculo){
        case 1:
            resultado.innerHTML +=`${num1} + ${num2} = <strong> ${num1+num2}</strong>`
            break
        case 2:
            resultado.innerHTML+= `${num1} - ${num2} = <strong>${num1-num2}</strong>`
            break
        case 3:
            resultado.innerHTML += `${num1} x ${num2} = <strong>${num1*num2}</strong>`
            break
        case 4:
            resultado.innerHTML += `${num1} / ${num2} = <strong>${num1/num2}</strong>`
            break
        default:
            resultado.innerHTML += `OPÇÃO INVÁLIDA! Voçê digitou ${num1} e ${num2}, sem opções de operações.`
        }
}