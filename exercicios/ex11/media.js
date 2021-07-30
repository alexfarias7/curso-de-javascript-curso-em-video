function calcular(){
    let nome = window.prompt('Qual é o nome do aluno')
    let nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}`))
    let nota2 = Number(window.prompt(`Qual foi a segunda nota de ${nome}`)) 
    let media = (nota1+nota2)/2
    let resultado= window.document.querySelector("section#res")
    let mensagem 
    if (media>=7){
        mensagem= `Meus parabéns, você passou!`
    } else{
        mensagem= "Você foi reprovado estude mais!"
    }


    resultado.innerHTML= `<p>Calculando a média de <strong>${nome}<strong>.</p>`
    resultado.innerHTML += `<p> As notas obtidas foram de <mark>${nota1}</mark> e <mark>${nota2}</mark> . </p>`
    resultado.innerHTML += `<p> A média final será de <mark>${media}</mark>.`
    resultado.innerHTML += `A mensagem que temos é: <strong style='color:black';>${mensagem} </strong>. </p>`
    
}