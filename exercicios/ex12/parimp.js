function calcular(){
    let numero = Number(window.prompt('Digite um número'))
    let resultado= window.document.getElementById("res")
    let parimp
    if (numero%2 == 0) {
        parimp =`<strong>PAR</strong>`
    }else{
        parimp="<strong>IMPAR</strong>"
    }
    resultado.innerHTML = `O número ${numero} que foi digitado é ${parimp}!`

}