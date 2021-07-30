function calcular(){
    let valorA = Number(window.prompt('Qual é o valor de A?'))
    let valorB =  Number(window.prompt('Qual é o valor de B?'))
    let valorC =  Number(window.prompt('Qual é o valor de C?'))
    let valor = (valorB**2)- (4*(valorA*valorC))

    let resultado = window.document.getElementById('res')
    resultado.innerHTML =`<h2>Resolvendo Bhaskara</h2>`
    resultado.innerHTML +=`<p>A equação atual é  <strong>${valorA}x<sup>2</sup> + ${valorB}x + ${valorC} =0</strong></p>`
    resultado.innerHTML +=`<p>O cáluculo será <strong> Δ = ${valorB}<sup>2</sup> -4. ${valorA} . ${valorC}</p>`
    resultado.innerHTML +=`<p>O valor calculado foi ${valor}</p>`
}