var horas = 12

//var agora=new Date()
//var horas= agora.getHours()
console.log(`Agora são exatamente ${horas} horas`)
if (horas>=0 && horas <6) {
    console.log('Boa Madrugada!')
} else if(horas >=6 && horas <12){
    console.log('Bom Dia!')
}else if (horas>=12 && horas<18) {
    console.log('Boa tarde!')
}else if(horas>=18 && horas <24){
    console.log('Boa Noite!')
}else{
    console.log('Hora incorreta, digite novamente')
}
