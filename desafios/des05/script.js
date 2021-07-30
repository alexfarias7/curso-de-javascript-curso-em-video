function converter(){
let distm = Number(window.prompt('Digite uma distancia em metros(m)?'))
let resultado = window.document.getElementById('res')
let distkm = distm*0.001
let disthm = distm*0.01
let distdam = distm*0.1
let distdm = distm*10
let distcm = distm*100
let distmm = distm*1000

resultado.innerHTML = `<p>A distância de ${distm}m, corresponde a:</p>`
resultado.innerHTML += `<p>${distkm} quilômetros(Km)</>`
resultado.innerHTML+=`<p>${disthm} hectômetros(Hm)</p>`
resultado.innerHTML+=`<p>${distdam} Decâmetros(Dam)</p>`
resultado.innerHTML += `<p>${distdm} Decimetros(dm)</p>`
resultado.innerHTML += `<p>${distcm} Cecimetros(dm)</p>`
resultado.innerHTML += `<p>${distmm} Milimetros(mm)</p>`
}
