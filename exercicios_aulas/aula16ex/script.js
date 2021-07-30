function contar(){
let inicio = document.getElementById('txti')
let fim = document.getElementById('txtf') 
let passo =document.getElementById('txtp')
let resultado = document.getElementById('res')

if(inicio.value.length == 0 || fim.value.length== 0 || passo.value.length== 0){
    resultado.innerHTML =`Impossível contar!`
    window.alert('[ERRO] Faltam dados!')
    
}else{
    resultado.innerHTML ='Contando:<br> '
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if(p<=0){
        window.alert('Passo inválido! Considerando Passo 1')
        p=1
    }
    if ( i<f){
        //contagem crescente
        for(let contador =i; contador <=f;contador +=p){
            resultado.innerHTML += `${contador} 👉`
        }
        resultado.innerHTML += `🏁`
    }else if(i>f) {
        //contage regressiva
        for(let contador =i; contador >=f;contador -=p){
            resultado.innerHTML += `${contador} 👉`
        }
        resultado.innerHTML += `🏁`

    }else{
        resultado.innerHTML =`Valores iguais`
    }

 
}
}