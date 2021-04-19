/*
//Aula 1 ________________________Indroducao ao Js________________________
let nome = "Igor Gabriel"
let idade = 29
let idade2 = 18
let frase = "O Brasil e uma merda"
console.log(nome)
console.log(idade)


console.log(idade + idade2)

//Troca uma palavra de uma string
//console.log(frase.replace("Brasil", "Mexico"));

//Transforma a string toda em MAIUSCULA
console.log(frase.toUpperCase());

//Transforma a string toda em minuscula
console.log(frase.toLocaleLowerCase());

*/

//Aula 2 ________________________Array e Dicionarios________________________

//array: item 0=Maca e 1=Pera 2=laranja
//let lista = ["Maca","Pera", "Laranja"];

//imprimindo item especifico da lista
//console.log(lista[1]);

//adicionando item a lista
//lista.push("uva");  

//tirando item da lista (quando nao tem valor dentro do pop eletira o ultimo item )
//lista.pop()

//length mostra o tamanho da lista
//console.log(lista.length);

//imprime a lista ao contrario
//console.log(lista.reverse())


//imprime a lista como string o [] imprime  a determinada letra 
//console.log(lista)
//console.log(lista.toString()[0])//[0] imprime a letra M
//console.log(lista.join("  |  "))//adiciona oq for do entre os elementos  da lista

//______________Diconario

//let fruta = {nome:"maca", cor:"vermelho"};

//ver a fruta e o nome especfico dela
//console.log(fruta.nome)

//_____________Lista de dicionario

//let frutas = [{nome:"uva", cor:"roxa"},{nome:"maca", cor:"vermelho"}];

//console.log(frutas);
//pega o nome da fruta 0 
//alert(frutas[0].nome)

//Aula 3 ________________________Condicionais, kaços derepetição e Date________________________

/*
let cont = 0

//while
while (cont < 5){
    console.log(cont)
    cont++
}

//for
for (cont = 0; cont <= 5; cont++){
    console.log(cont)
}

*/
/*
// date__________________________

//pegando a  data de hoje e imprimindo
let d = new Date();
//imprimindo a date completa
//alert(d);

//imprimindo so o mes +1 sempre
//alert(d.getMonth()+1)

//imprimindo so os minutos 
//alert(d.getMinutes())

//imprimindo so o dia 
alert(d.getUTCDay());

*/


//Aula 4 ________________________Desenvolva paginas web (Function)________________________
/*
function soma(n1,n2){
    return n1 + n2;

}
console.log(soma(5,10));


function setReplace(frase,nome,novo_nome){
   return frase.replace(nome,novo_nome)
}
//colocar o nome da function 
console.log(setReplace("Vai Japão","Japao","Brasil"));


function valida_Idade(idade) {
    let validar
    
    if (idade >= 18){
        validar = true
    }
    else{
        validar = false
    }

    return validar
}

let idade = prompt('qual sua Idade:')
console.log(valida_Idade(idade))

 */

//Aula 5 (Aula 4 Part2) ________________________Manipulandoelementos da pagina_____________________

/*
function clicou() {

    //nahora queclicar aparece uma mensagem diferente
    document.getElementById("agradecimento").innerHTML = "<strong>Obrigado iguuuu</strong>"
    
    //Na hora que clicar aparece a tag inteirano console
    //console.log( document.getElementById("agradecimento"))
    
    //nahoraque clicar aparece um alerta
    //alert('Obrigado por clicar')
}
 

//funcao  para ser redirecionado para uma pagina
function redirecionar(){

    //comando para redirecionar para a pagina
    window.open('https://github.com/Igor0155/Desenvolvimento_WEB')


    //nao e funcao so muda a referencia (Abre uma pagina por cima)
    window.location.href ="https://www.facebook.com/"
}

function trocar(elemento) {
    //inves de chamar o elementId chama o parametro da funcao e colocao inner
    elemento.innerHTML = "Obrigado por passar o mouse"

    //trocar o ttexto qunado passa o mouse em cima
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"

    //alert("Trocar texto")
}

function voltar(elemento) {

    elemento.innerHTML = "Passe o mouse aqui"

    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}

//quandocarrrega o body ele chama essa funcao
function load() {
    alert("Pagina carregada")
}

function funcaoChange(elemento){
    //.value pega o valor do elemento
    console.log(elemento.value)
}

*/
