alert("Bem-vindo! A seguir pediremos que informe alguns dados.")
let nome = prompt('Informe seu nome:')
let idade = prompt('Informe sua idade.')
let conf = confirm(`Você tem ${idade} anos?`)

if (conf == true){
    alert(`Seu nome é ${nome} e você tem ${idade} anos.`)
}else{
    alert('Sua idade está errada! Vamos reiniciar')
    location.reload()
}