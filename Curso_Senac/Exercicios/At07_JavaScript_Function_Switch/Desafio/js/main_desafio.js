// criando a função
function verificar() {

    // pegando o input no html
    let letra = document.getElementById("letra").value;
    let result;

    // pegando a saida da função no html
    let inserir = document.getElementById("result");

    // verificando se o usuário digitou alguma coisa 
    if (letra == "") {
        aux = 1
    }


    // verificando se a string so tem 1 carácter ".length" retorno o tamanho da string 
    else if (letra.length != 1) {
        aux = 6
    }

    // se o a string for mesmo uma string vai cair aqui
    else if (isNaN(letra) == true) {

        // transformando a letra em minúscula para nao ter erro na comparação
        letra = letra.toLowerCase();

        if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {

            aux = 2

        }

        // verificando a  letra e uma consoante 
        else if (letra == 'b' || letra == 'c' || letra == 'd' || letra == 'f' || letra == 'g' || letra == 'h' || letra == 'j' || letra == 'k'
            || letra == 'l' || letra == 'm' || letra == 'n' || letra == 'p' || letra == 'q' || letra == 'r' || letra == 's' || letra == 't'
            || letra == 'v' || letra == 'w' || letra == 'x' || letra == 'y' || letra == 'z') {

            aux = 3
        }

        // se nao for consoante e um carácter special 
        else {
            aux = 4
        }
    }
    // se der false a string e um numero 
    else if (isNaN(letra) == false) {
        aux = 5
    }

    // switch contendo o retorno para o  usuário 
    switch (aux) {

        case 1:

            result = `<h4 class="alert alert-danger"> Valor undefined  </h4>`;

            break;

        case 2:

            // transformando a letra em maiúscula para ficar mais bonita a saida 
            letra = letra.toUpperCase();

            // atribuindo a saida na variável 
            result = `<h4 class="alert alert-success"> \" ${letra} \" e uma Vogal </h4>`;

            break;

        case 3:

            letra = letra.toUpperCase();

            result = `<h4 class="alert alert-warning"> \" ${letra} \" e uma Consoante </h4>`;
            break;

        case 4:

            letra = letra.toLowerCase();
            result = `<h4 class="alert alert-warning"> \" ${letra} \" e um Carácter Special </h4>`;

            break;

        case 5:
            result = `<h4 class="alert alert-danger"> [  ${letra} ] e um Numero </h4>`;

            break;

        case 6:
            result = `<h4 class="alert alert-danger">A string so pode ter 1 Carácter </h4>`;

            break;

        default:
            break;
    }


    // saida da function
    inserir.innerHTML = String(result);


}