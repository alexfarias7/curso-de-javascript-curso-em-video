function calcular(){
    let num1 = Number(window.prompt('Digite um número: '))
    let num2 = Number(window.prompt('Digite outro número:'))
    let resultado = window.document.querySelector('section#res')
 
    if (num1 == num2) {
        resultado.innerHTML =`Analisando os valores de ${num1} e ${num2} são <strong>IGUAIS.</strong>`
    }else if (num1>num2) {
        resultado.innerHTML =`Analisando os valores de ${num1} e ${num2}, o maior valor é <strong>${num1}</strong>.`
    }else{
        resultado.innerHTML = `Analisando os valores de ${num1} e ${num2}, o maior valor é <strong>${num2}</strong>.`
    }
}