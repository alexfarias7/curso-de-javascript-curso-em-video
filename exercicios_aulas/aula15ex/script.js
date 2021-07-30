function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resultado = document.getElementById('res')
  
    if(fano.value.length == 0 || Number(fano.value)>ano){
        window.alert("[ERRO] Verfique os dados e tente novamente !")
    }else{
        var fsex =document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
       

        if (fsex[0].checked) {
                genero = 'Homem'
                if(idade>=0 && idade <3){
                    //bebe
                    img.setAttribute('src', 'bebe-homem.png')
                }else if(idade>=3 && idade<12){
                    img.setAttribute('src', 'menino.png')
                    //criança
                }else if (idade>=12 && idade <18){
                    img.setAttribute('src','adolescente-homem.png' )
                    //adolescente
                }else if (idade>=18 && idade <60){
                    //adulto
                    img.setAttribute('src' , 'adulto-homem.png')

                }else{
                    //idoso
                    img.setAttribute('src', 'idoso-homem.png')
                }
           
        }else if  (fsex[1].checked){
            genero ='Mulher'
            if(idade>=0 && idade <3){
                //bebe
                img.setAttribute('src', 'bebe-mulher.png')
            }else if(idade>=3 && idade<12){
                //criança
                img.setAttribute('src', 'menina.png')
            }else if (idade>=12 && idade <18){
                //adolescente
                img.setAttribute('src', 'adolescente-mulher.png')
            }else if (idade>=18 && idade <60){
                //adulta
                img.setAttribute('src', 'adulto-mulher.png')
            }else{
                //idosa
                img.setAttribute('src', 'idosa-mulher.png')
            }
        }
        resultado.style.textAlign ='center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`   
        resultado.appendChild(img)
    }
}