function verificar(){
    let nome = window.prompt('Qual é o nome do produto')
    let preçoantes= Number(window.prompt(`Qual era o preço antes do ${nome}`))
    let preçoatual = Number(window.prompt(`Qual é preço atual do ${nome}`))

    let resultado = window.document.getElementById('res')
    resultado.innerHTML = `<h2>Analisando os valores informados</h2>`
    if(preçoantes>preçoatual){

    
    let diferença = preçoantes-preçoatual
    let variação = (100*diferença)/(preçoantes)
   
    resultado.innerHTML +=`<p>O ${nome} custava R$${preçoantes} e agora custa R$${preçoatual}</p>`
    resultado.innerHTML += `<p>Hoje o produto está mais barato</h2>`
    resultado.innerHTML += `<p> O preço caiu R$ ${diferença}, em relação ao preço atual.`
    resultado.innerHTML += `Uma variação de ${variação} % para baixo`
    

    }else if (preçoantes<preçoatual) {

    let diferença2=preçoatual-preçoantes
    let variação2= (100*diferença2)/(preçoantes)
    resultado.innerHTML +=`<p>O ${nome} custava R$${preçoantes} e agora custa R$${preçoatual}</p>`
    resultado.innerHTML += `<p>Hoje o produto está mais caro</h2>`
    resultado.innerHTML += `<p> O preço subiu R$ ${diferença2}, em relação ao preço atual.`
    resultado.innerHTML+=`Uma variação de ${variação2}% para  cima`

    }else{
        resultado.innerHTML = `O ${nome} continua com o mesmo preço.!`
    }

}