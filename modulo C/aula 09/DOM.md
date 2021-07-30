**DOM**

- Document Object Model

- modelo de objetos para documentos ,ou seja é um conjunto de objetos do navegador que vai dar acesso aos componetes internos do website.



**<u>Árvore DOM</u>** 

- É a estrutura DOM do site.
- Exemplo de uma árvore DOM:

1. window

   1. location

   2. history

   3. document

      3.1 html

      ​     3.1.1 head

      ​          3.1.1.1 meta

      ​          3.1.1.2 title

      ​     3.1.2 body

      ​         3.1.2.1 h1

      ​         3.1.2.2  p

      ​         3.1.2.2  p

      ​            3.1.2.2.1  strong

      ​          3.1.2.3.  div

      

- **Elemento Child**  =>  um elemento filho (children) é um elemento  que se posiciona  abaixo de um elemento que se relaciona (Parents) em uma arvore DOM.

- <u>**Elemento Parents** =</u>> é um elemnto que se posiciona acima de um elementp que está relacionado em uma árvore DOM.



<u>Os elementos do DOM pode ser seleciodado:</u>

- por Marca
  - get ElementsByTagName()
  - se tiver mais de um elemento com mesmo nome utilize [n]; n=nº de ordem da posição do elemento. Ex:(0,1,2,3...)
- por ID
  -  getElementByID()
- por Classe
  - getElementsByClassName()
- por Nome
  -  getElementsByName()
- por Seletor
  - querySelector()
  - querySelectorAll()

