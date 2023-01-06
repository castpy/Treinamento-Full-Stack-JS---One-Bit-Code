# Comparações de dados

Comparações de dados irão retornar valores lógicos (verdadeiro ou falso).

- ****==****
    
    Esse é o sinal de igualdade em JS! Usamos dois sinais para comparar valores.
    
    ```jsx
    let naveEspacial = "Falcon 9"
    let velocidade = 80
    console.log(naveEspacial == "Falcon 9")
    console.log(velocidade == 90)
    
    //Console: true
    //Console: false
    ```
    
    > Esse método de comparação ignora o ********tipo******** de dado comparado e foca apenas no valor.
    > 
    
    Veja no exemplo a abaixo que ao comparar a velocidade do tipo ************number************ com a **string** “80”, o resultado retornado em console é ********true********.
    
    ```jsx
    console.log(velocidade == "80")
    ```
    
- ******===******
    
    Esse é o sinal de igualdade em JS! Usamos três sinais para comparar os tipos de dados e os seus valores.
    
    ```jsx
    let naveEspacial = "Falcon 9"
    let velocidade = 80
    console.log(velocidade === "80")
    console.log(velocidade === 80)
    
    //Console: false
    //Console: true
    ```
    
    > Veja que ao compara dados com três sinais de igual, o javascript leva em consideração o **********tipo********** de dado e seu **********valor**********.
    > 
    
- ! =
    
    Esse é o sinal de diferença! Com o sinal de diferença podemos verificar se o valor contido é diferente. Os valores retornados como resposta serão booleanos!
    
    ```jsx
    let naveEspacial = "Falcon 9"
    let velocidade = 80
    console.log(velocidade != 80)
    console.log(velocidade != 90)
    
    //Console: false
    //Console: true
    ```
    
    > Assim como na igualdade temos como verificar se o tipo de dado também é igual, apenas usando 3 sinais de igualdade, nós temos como fazer isso com o sinal de diferença. Para isso nós precisamos apenas adicionar mais um sinal de igualdade!
    > 
    
    ```jsx
    console.log(velocidade !== "80")
    console.log(velocidade !== 80)
    
    //Console: true
    //Console: false
    ```
    
- **>**
    
    Esse é o sinal “**********maior que**********”. Com ele podemos compara se um determinado valor é maior que outro!
    
    ```jsx
    let naveEspacial = "Falcon 9"
    let velocidade = 80
    console.log(velocidade > 80)
    console.log(velocidade > 70)
    
    //Console: false
    //Console: true
    ```
    
    > Essa mesma comparação pode ser feita com **string.** Porém o JS irá comparar se um valor vem antes de outro. Veja o exemplo a baixo!
    > 
    
    ```jsx
    console.log(naveEspacial > "Helmet")
    console.log(naveEspacial > "Elemental")
    
    //Console: false
    //Console: true
    ```
    
    Veja que o valor de naveEspacial é “Falcon 9” e na primeira comparação de dados é verificado se o primeiro índice da string vem depois da primeira letra da próxima string. Ou seja, a letra **F** não vem antes de **H**, porém, a letra **F** vem após a letra **E**.
    
- **> =**
    
    Esse é o sinal que compara se algum valor é “**********************************maior ou igual que**********************************”.
    
    ```jsx
    let naveEspacial = "Falcon 9"
    let velocidade = 80
    console.log(velocidade >= 80)
    console.log(velocidade >= 70)
    console.log(velocidade >= 90)
    
    //Console: true
    //Console: true
    //Console: false
    ```
    
    > A mesma lógica do ponto anterior, aplicado à string, também pode ser usado para esse tipo de comparação.
    > 
- **<**
    
    Esse é o sinal “**********menor que**********”. Com ele podemos comparar se um determinado valor é menor que outro!
    
    ```jsx
    let naveEspacial = "Falcon 9"
    let velocidade = 80
    console.log(velocidade < 80)
    console.log(velocidade < 70)
    
    //Console: false
    //Console: false
    ```
    
    > A mesma lógica do ponto anterior, aplicado à string, também pode ser usado para esse tipo de comparação.
    > 
- **< =**