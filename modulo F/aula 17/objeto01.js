 let amigo ={
     nome:'josé',
     sexo:'masculino',
     peso:85,
     engordar(p=0){
         console.log('engordou')
         this.peso +=p

     }
 }
 //console.log(typeof amigo)
 amigo.engordar(14)
 console.log(`${amigo.nome} pesa ${amigo.peso} kg`)