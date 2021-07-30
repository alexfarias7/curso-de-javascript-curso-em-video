function verificar(){
    let ano = Number(window.prompt('Qual é o ano que você quer verificar?'))
    let resultado = document.getElementById('res')
    if((ano%4==0 && ano%100!=0)||(ano%400==0)){
        resultado.innerHTML = `O ano é <strong style='color:blue;'>BISSEXTO</strong>`
    }else{
        resultado.innerHTML = ` O ano <strong style='color:red;'>NÃO É BISSEXTO</strong>.`
    }
}