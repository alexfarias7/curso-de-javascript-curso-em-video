function iniciar(){
    let agora = new Date
    let resultado = window.document.querySelector('section#res')
    let meses = ['janeiro' , 'fevereiro', 'março', 'abril', 'maio','junho','julho', 'agosto','seembro','outubro','novembro','dezembro']
    let semana = [ 'domingo','segunda','terça','quarta','quinta','sexta','sabádo']
    let dia = agora.getDate()
    let mes = agora.getMonth()
    let anos = agora.getFullYear()
    let diasemana = agora.getDay()
    let hora = agora.getHours()
    let minutos = agora.getMinutes()
    let segundos = agora.getSeconds()

    resultado.innerHTML =`<p> Dia: <mark> ${dia}</mark></p>`
    resultado.innerHTML +=`<p> Mês: <mark>${mes}</mark></p>`
    resultado.innerHTML += `<p> Ano: <mark>${anos}</mark></p>`
    resultado.innerHTML += `<p> Dia da Semana:<mark>${semana[diasemana]}</mark>.`
    resultado.innerHTML += `<p> Hora: <mark>${hora}</mark>. `
    resultado.innerHTML += `<p> Minutos: <mark> ${minutos}</mark>.`
    resultado.innerHTML += `<p> Segundos:<mark> ${segundos}</mark>`
}