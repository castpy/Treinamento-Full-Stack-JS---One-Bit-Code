// Tabela verdade E(AND)
let nome = "Castpy";
let idade = 18;
console.info("===================TABELA E(and)======================")
console.log(nome.length > 4 && idade > 17); // (true  && true  = true)
console.log(nome.length > 3 && idade > 19); // (true  && false = false)
console.log(nome.length < 5 && idade > 15); // (false && true  = false)
console.log(nome.length > 2 && idade < 10); // (false && false = false)
console.info("======================================================")

console.info("=================TABELA OU( || )======================")
// Tabela verdade OU( || )
console.log(nome.length > 4 || idade > 17); // (true  || true  = true)
console.log(nome.length > 3 || idade > 19); // (true  || false = true)
console.log(nome.length < 5 || idade > 15); // (false || true  = true)
console.log(nome.length < 2 || idade < 10); // (false || false = false)
console.info("======================================================")

console.info("=================TABELA OU( || )======================")
// Tabela verdade NÃO(!)
console.log(!(nome.length > 3)) 
//O tamanho do nome maior que 3 caracteres = true. \      VERDADEIRO  \
//                                                  >        +         >  = FALSO
//Essa informação NÃO é verdadeira? = Falso        /        FALSO     /

console.log(!(nome.length < 3)) 
//O tamanho do nome menor que 3 caracteres = false. \        FALSO     \
//                                                   >        +         >  = VERDADEIRO
//Essa informação NÃO é falsa? = true               /        TRUE      /