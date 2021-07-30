###### VARIÁVEIS COMPOSTAS

**Variáveis simples** 

só conseguem armazenar um valor por vez

**Variáveis composta**s 

 são capazes de armazenar vários valores em uma mesma  estrutura.

Pode ser chamadas de arrays ou vetores.

Um vetor é composto de elementos. 

Um elemento de um vetor é um par que agrupa um espaço da memória,o valor colocado dentro dele e o índice.

Ex.:

```
//var simples
var vaga1 = "carro1"
var vaga2 = "carro2"
var vaga3 = "carro3"
var vaga4 = "carro4"
var vaga5 = "carro5"

//var composta =
var vaga = [ "carro1","carro2","carro3","carro4","carro5"]
```

```
let num =[ 5,8,4]
```

Para adicionar mais um espaço do vetor:

```
num [3]=6 // utiliza o índice da podição como critério de maneira automatizada
num.push(7) //uiliza um método interno para adicionar um item no final do vetor.

```

Para saber o tamanho do vetor:

```
num.length //atributo usado para sabero comprimento do veto
```

Para reordenar os elementos em ordem crescentes:

```
num.sort()// método utilizado para orgarnizar os elementos em ordem crecentes
```

Para mostrar um vetor de forma otimizada, usando método FOR:

```
for (let pos=0; pos.num.lenght; pos++){
console.log(num[pos])
}
```

Para mostrar um vetor de forma otimizada, utilizando método FOR IN:

```
for (let pos in num ){
console.log(num[pos])
} 
```

Só funciona em Arrays e objetos.

Para buscar valores dentro de um vetor:

```
num.indexOf(7)
```

quando não encontrar o valor especificado, retorna o valor -1