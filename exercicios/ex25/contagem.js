function contar(){
    let resultado = window.document.getElementById('res')
    let numero = Number(document.getElementById('fnum').value)
    resultado.innerHTML +=`<p>Contando de 0 atΓ© ${numero}:</p>`
    let contador = 0
    while(contador <=numero){
        resultado.innerHTML += `${contador}π`
        contador++
    }
    resultado.innerHTML += `π`
}