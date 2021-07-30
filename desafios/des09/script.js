function reajustar(){
    let nome = window.prompt('Qual é o nome do funcionário?')
    let salário = Number(window.prompt(`Qual é o salário de ${nome}?`))
    let reajuste =Number(window.prompt(`O salário de ${nome}o vai ser reajustado em qual porcetagem?`))
    let valorreajustado = salário*(reajuste/100)
    let salarioreajustado = salário + valorreajustado
    let resultado = document.getElementById('res')

    resultado.innerHTML = `<h2>${nome} recebeu um aumento salarial!</h2>`
    resultado.innerHTML += `<p>O salário atual era de R$ ${salário}`
    resultado.innerHTML +=`<p>Com um aumento de ${reajuste}%, o salário vai aumentar R$${valorreajustado} no próximo mês.</p>`
    resultado.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganha R$ ${salarioreajustado}</p>`


}

