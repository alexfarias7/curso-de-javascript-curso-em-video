###### REPETIÇÕES EM JS

`Sequências` - são tarefas programadas do início até o fim, onde são executadas sequencialmente até chegar ao objetivo.

`Laços de repetições -`  Inicialmente testa uma expressão,  enquanto a condição for verdadeira, faz-se um loop ou um laço repetidas vezes, mas a partir que a condição for falsa,o laço é quebrado e segue até o objetivo.

**Condição While** 

- essa condição executa as instruções, desde que essas condições sejam verdadeiras.

   - A partir do momento que a condição deixa de verdadeira e passa a ser falsa o fluxo é desviado para o lado de fora.

   - A condição ocorre antes que o laço seja executado, ou seja é uma estrutura de repetição com teste lógico do início.

     Ex:

     ```
     while (condicao){
       declaracao
       }
     ```

     

     ```
     Function comerPizza(){
     while(temFatia()){
     	comerFatia()
        }
     }
     ```

     

**Condição do While**

- É uma estrutura de condição onde primeiro se executa o bloco de códigos e depois se faz o teste lógico.
- A partir que o teste lógico deixa de ser verdadeiro o fluxo sai do diagrama de repetição,  execução do laço é terminada e o controle é passado para a instrução seguinte.
-  Ao final de cada execução, a condição é verificada. ou seja ,é uma estrutura com repetição com teste no final.

Ex:

```
do{
  declaracao
} while (condicao)
```

