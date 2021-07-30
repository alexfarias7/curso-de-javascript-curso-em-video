function iniciar(){
    let idade = Number(window.prompt('Em que ano você nasceu?'))
    let agora = new Date
    let ano = agora.getFullYear()
    let anonascimento = ano - idade
    let resultado = window.document.getElementById('res')
    resultado.innerHTML = `<p>Você nasceu em ${idade} e vai completar ${anonascimento} anos em ${ano}</p>`
}