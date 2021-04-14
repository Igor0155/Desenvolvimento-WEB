
let a = 20
let b = 20

//saida
document.write('valor de A: ', a)
document.write(`<br>`)
document.write(`Valor de B: `, b)
document.write(`<br><hr>`)
//_______________________________________________________________________

document.write(`Igual<br>`)

//condicional
if (a == b) {
    document.write(`${a} é igual a: ${b}`)
}
else {
    document.write(`${a} nao e igual a: ${b}`)
}
//_______________________________________________________________________

document.write(`<br><hr>Identico<br>`)

//condicional ele ve se um a e int ou string
if (a === b) {
    document.write(`${a} é identico a: ${b}`)
}

else {
    document.write(`${a} nao e identico a: ${b}`)
}

//_______________________________________________________________________

document.write(`<br><hr>Diferente<br>`)

//condicional
if (a != b) {
    document.write(`${a} é diferente a: ${b}`)
}
else {
    document.write(`${a} nao e diferente a: ${b}`)
}

//_______________________________________________________________________

document.write(`<br><hr>Nao identico<br>`)
//condicional
if (a !== b) {
    document.write(`${a} nao e identico a: ${b}`)
}
else {
    document.write(`${a} e identico a: ${b}`)
}
//_______________________________________________________________________


document.write(`<br><hr>Menor<br>`)
//condicional
if (a < b) {
    document.write(`${a} e menor ou igaul a: ${b}`)
}
else {
    document.write(`${a} nao e menor ou igual que: ${b}`)
}

//_______________________________________________________________________

document.write(`<br><hr>Maior<br>`)
//condicional
if (a > b) {
    document.write(`${a} e maior a: ${b}`)
}
else {
    document.write(`${a} nao e maior que: ${b}`)
}

//_______________________________________________________________________

document.write(`<br><hr>Menor ou igual<br>`)
//condicional
if (a <= b) {
    document.write(`${a} e menor ou igaul a: ${b}`)
}
else {
    document.write(`${a} nao e menor ou igual que: ${b}`)
}

//_______________________________________________________________________

document.write(`<br><hr>Maior ou igual<br>`)
//condicional
if (a >= b) {
    document.write(`${a} e maior ou igual a: ${b}`)
}
else {
    document.write(`${a} nao e maior ou igual que: ${b}`)
}


//_______________________________________________________________________

document.write(`<br><hr><h1>If else Operadores Logicos</h1>`)


document.write(`<hr> &&  <br>`)

//True && true = true
if (2 == 2 && 3 >= 1) {
    document.write(`Verdadeiro`)
}

//_______________________________________________________________________

document.write(`<hr>  || <br>`)

//True || true || false = true
if (2 == 2 || 3 >= 1 || 'a' == 'b') {
    document.write(`Verdadeiro`)
}

//_______________________________________________________________________

document.write(`<hr>  ! <br>`)

//True = false
if (!(4 == 2)) {
    document.write(`Verdadeiro`)
}
else {
    document.write(`Falso`)
}


//_______________________________________________________________________

document.write(`<br><hr><h1>Notas aluno</h1>`)

let nota = prompt('Insira a nota dos alunos da escola:')
let faltas = prompt('Insira as faltas')

let media = 7
let max_faltas = 151


/*Opção 1 com if else  

if (nota >= media && faltas <= max_faltas){
    document.write('Aprovado')
}
else{
    document.write('Reprovado')
}
*/

/*Opcao 2*/

// parenteses sao opcionais
let resultado = (nota >= media && faltas <= max_faltas) ? 'Aprovado' : 'Reprovado'

document.write(resultado)