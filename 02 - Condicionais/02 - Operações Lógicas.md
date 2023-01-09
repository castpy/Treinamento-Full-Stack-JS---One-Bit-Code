# Operações lógicas

Esse tipo de operação contém expressões construídas a partir de valores booleanos, retornam um valor booleano e segue os resultados lógicos da tabela verdade.

- E (and)
    
    ```jsx
    // Tabela verdade E(AND)
    let nome = "Castpy";
    let idade = 18;
    
    console.log(nome.length > 4 && idade > 17); // (true  && true  = true)
    console.log(nome.length > 3 && idade > 19); // (true  && false = false)
    console.log(nome.length < 5 && idade > 15); // (false && true  = false)
    console.log(nome.length > 2 && idade < 10); // (false && false = false)
    ```
    
    ![image](https://user-images.githubusercontent.com/61066188/211378197-d15dcc88-9068-4923-bf99-3d60f152e1f0.png)

    
- OU( || )
    
    ```jsx
    // Tabela verdade OU( || )
    console.log(nome.length > 4 || idade > 17); // (true  || true  = true)
    console.log(nome.length > 3 || idade > 19); // (true  || false = true)
    console.log(nome.length < 5 || idade > 15); // (false || true  = true)
    console.log(nome.length < 2 || idade < 10); // (false || false = false)
    ```

    ![image](https://user-images.githubusercontent.com/61066188/211378239-0ec10ee0-9ac4-42b9-8ff1-d2d9073a868d.png)

    
- NÃO( ! )
    
    ```jsx
    // Tabela verdade NÃO(!)
    console.log(!(nome.length > 3)) 
    //O tamanho do nome maior que 3 caracteres = true. \      VERDADEIRO  \
    //                                                  >        +         >  = FALSO
    //Essa informação NÃO é verdadeira? = Falso        /        FALSO     /

    console.log(!(nome.length < 3)) 
    //O tamanho do nome menor que 3 caracteres = false. \        FALSO     \
    //                                                   >        +         >  = VERDADEIRO
    //Essa informação NÃO é falsa? = true               /        TRUE      /

    // TUDO OQUE ERA VERDADEIRO, VIROU FALSO.
    ```

    ![image](https://user-images.githubusercontent.com/61066188/211378533-7d6ad01c-1021-4b5c-8b82-9e2f3c0e81e7.png)
