function verificar(){
    let nome = window.prompt('qual o nome do aluno')
    let nota1 = Number(window.prompt(`Primeira nota de ${nome}:`))
    let nota2 = Number(window.prompt(`Segunda nota de ${nome}`))
    let media = (nota1 + nota2)/2
    let resultado = document.getElementById('res')
    resultado.innerHTML =`<h2> Analisando a situação de <strong>${nome}</strong>:</h2>`
    resultado.innerHTML +=`<p> Com as notas de ${nota1} e ${nota2}, a <strong> média é ${media}</strong>`
    if(media<3){
        resultado.innerHTML=`Com a média abaixo de 3,0 ,  ${nome} está <strong style='color:RED;'>REPROVADO</strong>`

    }else if(media >3 && media<6){
              resultado.innerHTML +=`Com a média ente 3,0 e 6,0,  ${nome} está em <strong style='color:orange;'>RECUPERAÇÃO</strong>`  
    }else{

        resultado.innerHTML +=`Com a média acima de 6,0, ${nome} está <strong style='color:green;'>APROVADO</strong>`
    }




    } 