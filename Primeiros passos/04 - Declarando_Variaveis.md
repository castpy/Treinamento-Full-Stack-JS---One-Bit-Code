# Declarando variáveis

Variáveis são usadas para armazenar determinado valor que será usado mais na frente.

- ******let******
    
    Esse é o primeiro meio de declarar uma variável. Para declarar uma variável, é necessário informar o tipo declaração, nesse caso o ******let******, em seguida indicar o nome e indicar o sinal de igualdade (atribuição), junto com seu valor.
    
    ```jsx
    let nome = "Marcus Castilho"
    ```
    
    Esse tipo de declaração de variável permite a alteração do dado.
    
    ```jsx
    let nome = "Marcus Castilho"
    nome = "Castpy"
    ```
    
- **********const**********
    
    Esse é mais um tipo de declaração de variável no JS. A diferença desse meio de declaração é que ele não pode ser alterado, o tipo **********const********** é um valor ******************CONSTANTE,****************** ou seja, ele permanecerá o mesmo.
    
- ******var******
    
    O tipo de declaração ******var****** é exatamente igual ao ******let****** porém ele veio de heranças anteriores do JS. Mais na frente veremos os perigos de usar o ******var****** em determinados escopos.
    

> Também podemos criar uma variável sem valor nenhum e seu retorno será ******************undefined****************** pois nada foi definido, mas pode ser alterado.
>