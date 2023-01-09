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
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fc597456-8d98-4390-833b-8fd807fe2a0a/Untitled.png)
    
- OU( || )
    
    ```jsx
    // Tabela verdade OU( || )
    console.log(nome.length > 4 || idade > 17); // (true  || true  = true)
    console.log(nome.length > 3 || idade > 19); // (true  || false = true)
    console.log(nome.length < 5 || idade > 15); // (false || true  = true)
    console.log(nome.length < 2 || idade < 10); // (false || false = false)
    ```
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e3291c0e-ab48-4306-a302-786ef98d344e/Untitled.png)
    
- NÃO( ! )