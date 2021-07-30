let num = [ 5,8,2,9,3]
num.push(1)
num.sort()

console.log(`Nosso veto é o ${num}`)
console.log (`O vetor tem ${num.length} posiçoes`)
console.log(`o primeiro valor é do vetor é ${num[0]}`)

let pos = num.indexOf(85)
if(pos ==-1){
    console.log('o valor não foi encontrado!')
} else{
console.log(`O valor 8 está na posição ${pos}`)
}