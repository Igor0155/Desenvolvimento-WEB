let nome = prompt('Insira o seu nome:')
let altura = prompt('Insira a sua altura(cm):')
let peso = prompt('Insira o seu peso:')

altura = altura / 100

let m = peso / (altura * altura)


if (m < 16 )
    document.write(`${nome} possui índice de massa corporal igual a ${m},
    sendo classificado como: Baixo peso muito grave`)

if (m >= 16 && m < 16.99 )
    document.write(`${nome} possui índice de massa corporal igual a ${m},
    sendo classificado como: Baixo peso grave`)

if (m >= 17 && m <= 18.49 )
    document.write(`${nome} possui índice de massa corporal igual a ${m},
    sendo classificado como: Baixo peso`)

if (m >= 18.50 && m <= 24.99)
    document.write(`${nome} possui índice de massa corporal igual a ${m},
    sendo classificado como: Normal`)

if (m >= 25 && m <= 29.99)
    document.write(`${nome} possui índice de massa corporal igual a ${m},
    sendo classificado como: Sobrepeso`)

if (m >= 30 && m <= 34.99)
    document.write(`${nome} possui índice de massa corporal igual a ${m},
    sendo classificado como: Obesidade grau I`)

if (m >= 35 && m <= 39.99)
    document.write(`${nome} possui índice de massa corporal igual a ${m},
    sendo classificado como: Obesidade grau II`)

if (m > 40)
    document.write(`${nome} possui índice de massa corporal igual a ${m},
    sendo classificado como: Obesidade grau III`)

