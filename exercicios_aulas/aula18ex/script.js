let numero = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector( 'div#res')
let valores =[]

function isnumero(numero){
    if(Number(numero)>=1 && Number(numero) <=100){
        return true
    }else{
        return false
    }
}

function inlista(numero, lis){
if(lis.indexOf(Number(numero)) !=-1){
    return true
} else {
    return false
}

}


 function adicionar(){
   if(isnumero(numero.value) && !inlista(numero.value, valores)){
        valores.push(Number(numero.value))
        let item = document.createElement ('option')
        item.text = `Valor ${numero.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML =''
   }else{
    window.alert('Valor inválido ou já encontrado na lista.')
   }  
   numero.value = ''
   numero.focus()
 } 


 function finalizar(){
     if(valores.length == 0){
         window.alert('Adicione valores antes de finalizar!')
     }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos]>maior)
            maior=valores[pos]
            if(valores[pos]<menor)
            menor = valores[pos]

        }
        media = soma/total
        res.innerHTML =''
        res.innerHTML += `<p>Ao todo,temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores é ${media}`
     }
 }