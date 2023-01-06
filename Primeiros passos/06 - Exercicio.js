let nameGuy01 = prompt("Digite o nome de uma pessoa.")
let ageGuy01 = prompt("Quantos anos essa pessoa tem?")
let nameGuy02 = prompt("Digite o nome de outra pessoa.")
let ageGuy02 = prompt("Quantos anos essa outra pessoa tem?")

if(ageGuy01 > ageGuy02){
    let diferentAge = ageGuy01 - ageGuy02
    alert(`A pessoa mais velha se chama ${nameGuy01}.`)
    alert(`A diferença de idade é ${diferentAge} anos.`)
}else{
    let diferentAge = ageGuy02 - ageGuy01
    alert(`A pessoa mais velha se chama ${nameGuy02}`)
    alert(`A diferença de idade é ${diferentAge} anos.`)
}