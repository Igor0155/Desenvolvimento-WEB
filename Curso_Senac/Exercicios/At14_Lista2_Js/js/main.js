
// função para pegar o input do usuário para seguir para as atividades
function code() {

    // atribuindo a saida a uma variável 
    let saida = document.getElementById('result')

    // pegando o codigo da atividade desejada e transformando o input para minúscula para nao da erro
    let code = document.getElementById('code').value.toLowerCase()

    switch (code) {

        case 'a':

            // inserindo um campo para o usuário poder inserir o que se pede  
            saida.innerHTML = `<h4 class="text-center text-white">Insira o numero aqui para o calculo de fatorial:</h4>
                                <input type="text" class="form-control bg-dark text-white w-75 input_usu"
                                name="letra" id="code2" placeholder="Insira o numero" value="" />`

            // colocando um botão para enviar os valores dos inputs para as  funções 
            saida.innerHTML += `<button type="button" class="btn btn-primary me-5 botao" 
                                onclick="fatorial();">enviar</button>`

            break;

        case 'b':

            // inserindo um campo para o usuário poder inserir o que se pede  
            saida.innerHTML = `<h4 class="text-center text-white">Insira o numero aqui ver se ele e primo:</h4>
                                <input type="text" class="form-control bg-dark text-white w-75 input_usu"
                                name="letra" id="code2" placeholder="Insira o numero" value="" />`

            // colocando um botão para enviar os valores dos inputs para as  funções 
            saida.innerHTML += `<button type="button" class="btn btn-primary me-5 botao" 
                                onclick="primo();">enviar</button>`

            break;

        case 'c':

            saida.innerHTML = `<h4 class="text-center text-white">Insira os números:</h4>`

            // usando um loop para inserir 3 ids diferentes nos inputs 
            for (let i = 0; i < 3; i++) {

                // inserindo um campo para o usuário poder inserir o que se pede  
                saida.innerHTML += `<input type="text" class="form-control bg-dark text-white w-75 input_usu" 
                                    name="letra" id="code${i + 1}" placeholder="Digite o ${i + 1} numero" value="" />`
            }

            // colocando um botão para enviar os valores dos inputs para as  funções 
            saida.innerHTML += `<button type="button" class="btn btn-primary me-5 botao" 
                                onclick="Ordem_crescente();">enviar</button>`


            break;

        case 'd':


            saida.innerHTML = `<h4 class="text-center text-white">Insira os Nomes</h4>`

            // usando um loop para inserir 3 ids diferentes nos inputs 
            for (let i = 0; i < 5; i++) {

                // inserindo um campo para o usuário poder inserir o que se pede  
                saida.innerHTML += `<input type="text" class="form-control bg-dark text-white w-75 input_usu" 
                                    name="letra" id="nome${i + 1}" placeholder="Digite o ${i + 1} Nome" value="" />`
            }

            // colocando um botão para enviar os valores dos inputs para as  funções 
            saida.innerHTML += `<button type="button" class="btn btn-primary me-5 botao" 
                                onclick="nome_ordem();">enviar</button>`

            break;

        case 'e':

            // inserindo um campo para o usuário poder inserir o que se pede  
            saida.innerHTML = `<h4 class="text-center text-white">Insira os valeres para colocar no array</h4>
                                <input type="text" class="form-control bg-dark text-white w-75 input_usu"
                                name="letra" id="code2" placeholder="Insira os itens" value="" />`

            // colocando um botao para enviar os valores dos inputs para as  funções 
            saida.innerHTML += `<button type="button" class="btn btn-primary me-5 botao" 
                                onclick="array();">enviar</button>`

            saida.innerHTML += `<button type="button" class="btn btn-primary me-5 botao2" 
                                onclick="array_imprimir();">Imprimir</button>`

            break;

        case 'f':

            saida.innerHTML = `<h4 class="text-center text-white">Insira as 4 notas</h4>`

            // usando um loop para inserir 3 ids diferentes nos inputs 
            for (let i = 0; i < 4; i++) {

                // inserindo um campo para o usuário poder inserir o que se pede  
                saida.innerHTML += `<input type="text" class="form-control bg-dark text-white w-75 input_usu" 
                                    name="letra" id="nota${i + 1}" placeholder="insira a ${i + 1} Nota" value="" />`
            }

            // colocando um botao para enviar os valores dos inputs para as  funções 
            saida.innerHTML += `<button type="button" class="btn btn-primary me-5 botao" 
                                onclick="notas();">enviar</button>`

            break;

        case 'g':

            // inserindo um campo para o usuário poder inserir o que se pede  
            saida.innerHTML = `<h4 class="text-center text-white">Array: Números = [0, 17, 2, 4, 6, 23, 50, 32, 80]</h4>`

            // colocando um botao para enviar os valores dos inputs para as  funções 
            saida.innerHTML += `<button type="button" class="btn btn-primary me-5 botao" 
                                onclick="Varrer_array();">verificar array</button>`

            break;

        case 'h':

            // inserindo um campo para o usuário poder inserir o que se pede  
            saida.innerHTML = `<h4 class="text-center text-white">Insira 10 anos para verificar quais sao bissextos</h4>
                                <input type="text" class="form-control bg-dark text-white w-75 input_usu"
                                name="letra" id="ano" placeholder="Insira o ano" value=""/>`

            // colocando um botao para enviar os valores dos inputs para as  funções 
            saida.innerHTML += `<button type="button" class="btn btn-primary me-5 botao" 
                                onclick="ano();">enviar</button>`
            saida.innerHTML += `<button type="button" class="btn btn-primary me-5 botao2" 
                                onclick="verificar();">verificar</button>`


            break;

        case 'i':

            // inserindo um campo para o usuário poder inserir que se pede  
            saida.innerHTML = `<h4 class="text-center text-white">Esta função acha os números primos de 0 a 100</h4>`

            // colocando um botao para enviar os valores dos inputs para as  funções 
            saida.innerHTML += `<button type="button" class="btn btn-primary me-5 botao" 
                                onclick="Primos_zero();">verificar</button>`


            break;

        case 'j':

            saida.innerHTML = `<h4 class="text-center text-white">Escolha 5 números de 0 - 50</h4>`

            // usando um loop para inserir 3 ids diferentes nos inputs 
            for (let i = 0; i < 5; i++) {

                // inserindo um campo para o usuário poder inserir o que se pede  
                saida.innerHTML += `<input type="text" class="form-control bg-dark text-white w-75 input_usu" 
                                    name="letra" id="num${i + 1}" placeholder="insira o ${i + 1} Número" value="" />`
            }

            // colocando um botao para enviar os valores dos inputs para as  funções 
            saida.innerHTML += `<button type="button" class="btn btn-primary me-5 botao" 
                                onclick="sorteio();">enviar</button>`

            // colocando um botao para limpar os valores dos inputs  
            saida.innerHTML += `<button type="button" class="btn btn-primary me-5 botao2" 
                                onclick="sorteio_clean();">Clean</button>`

            break;

        default:

            saida.innerHTML = `<h4 class="alert alert-danger" > Insira apenas letras de "A" a "J" </h4 > `

            break;
    }




}

// função para limpar o input e as saídas 
function limpar() {

    document.getElementById('result').innerHTML = ``

    document.getElementById('result2').innerHTML = ``

    document.getElementById('code').value = ``
}

// função do fatorial 
function fatorial(n) {

    // pegando numero no input 
    n = document.getElementById('code2').value

    // atribuindo a saida em uma variável
    let saida2 = document.getElementById('result2')

    let obs

    let aux = 1

    // se o input tiver vazio alertara ao usuário 
    if (n == "") {

        obs = `<h4 class="alert alert-danger" > Precisa digitar um número!</h4 > `
    }

    else {
        // formula do fatorial 
        for (let i = 1; i <= n; i++) {
            aux *= i;
        }

        obs = `<h4 class="alert alert-success" > O fatorial do numero: ${n} é: ${aux}</h4 > `
    }

    saida2.innerHTML = obs

}

// função da verificação do numero primo 
function primo(n) {

    // pegando numero no input
    n = document.getElementById('code2').value

    let aux2 = 0

    let aux = 0

    // atribuindo a saida em uma variável
    let saida2 = document.getElementById('result2')

    // se o input tiver vazio alertara ao usuário 
    if (n == "") {
        aux2 = `< h4 class="alert alert-danger" > Precisa digitar um número!</ h4> `
    }
    else {

        // formula para verificar se um numero e primo 
        for (let i = 1; i <= n; i++) {

            if (n % i == 0) {
                aux++
            }
        }

        if (aux == 2) {

            aux2 = `<h4 class="alert alert-success" > O numero ${n} é primo</h4 > `
        }
        else {
            aux2 = `<h4 class="alert alert-danger" > O numero ${n} não é primo</h4 > `
        }

        return saida2.innerHTML = aux2
    }

}

// função para ordem crescente dos  números 
function Ordem_crescente() {

    // atribuindo a saida em uma variável
    let saida2 = document.getElementById('result2')

    // criando a lista dos números 
    let lista = new Array()

    // populando o array com os inputs
    for (let i = 0; i < 3; i++) {

        // colocando os indices das id com o índice do for 
        lista[i] = document.getElementById(`code${i + 1}`).value

    }

    // usando a função sort e a função básica de ordenar números 
    let ordem = lista.sort(ordenar)

    function ordenar(a, b) {
        return a - b
    }

    saida2.innerHTML = `<h4  class="alert alert-success" > Ordem numérica: ${ordem}</h4 > `

}

function nome_ordem() {

    // atribuindo a saida em uma variável
    let saida2 = document.getElementById('result2')

    // criando a lista dos números 
    let nomes = new Array()

    // populando o array com os inputs
    for (let i = 0; i < 5; i++) {

        // colocando os indices das id com o índice do for 
        nomes[i] = document.getElementById(`nome${i + 1}`).value.toLowerCase()

    }

    let ordem = nomes.sort()

    saida2.innerHTML = `<h4 class="alert alert-success" > Os nomes em ordem alfabética é: ${ordem}</h4 > `

}

// declarando a variável fora da função para pegar nas duas funções da letra E 
let lista_array1 = new Array()

function array() {

    let input = document.getElementById('code2').value

    lista_array1.push(input)

    document.getElementById('code2').value = ``

    // ver os itens na lista 
    console.log(lista_array1)

}

// função para imprimir a lista no formato índice | valor
function array_imprimir() {

    // atribuindo a saida em uma variável
    let saida2 = document.getElementById('result2')

    let aux = ""

    // variável índice recebe a função para listar os itens 
    let indices = function (valor, indice) {

        aux += `<h4 class="alert alert-success" > Índice: ${indice} | Item: ${valor} </h4 > `

    }

    // chamando a função de listagem 
    lista_array1.forEach(indices)

    // saida recebe a variável aux com os itens no índice 
    saida2.innerHTML = aux
}

function notas() {

    // atribuindo a saida em uma variável
    let saida2 = document.getElementById('result2')

    // criando a lista dos números 
    let notas = new Array()

    let aux = 0

    let media = 0

    // populando o array com os inputs
    for (let i = 0; i < 4; i++) {

        // colocando os indices das id com o índice do for 
        notas[i] = document.getElementById(`nota${i + 1}`).value

        // media vai receber as notas de determinada posição 
        media += parseFloat(notas[i])
    }

    // fazendo a media das notas 
    aux = media / 4

    // visualizar o array no console 
    console.log(notas)
    console.log(media)
    console.log(aux)


    saida2.innerHTML = `<h4 class="alert alert-success" > A soma das notas [ ${notas[0]} : ${notas[1]} : ${notas[2]} : ${notas[3]} ] é: ${media}</h4 > `
    saida2.innerHTML += `<h4 class="alert alert-success" > A média das notas é: ${aux.toFixed(2)}</h4> `

    //limpando os inputs
    for (let i = 0; i < 4; i++) {

        // colocando os indices das id com o índice do for
        document.getElementById(`nota${i + 1} `).value = ``

    }
}

function Varrer_array() {

    // atribuindo a saida em uma variável
    let saida2 = document.getElementById('result2')

    let Maior_num = 0

    let aux

    let num_par = ``

    let num_impar = ``

    let maior_q_vinte = ""

    let ordem_numerica

    let menor_num = 0

    let numeros = [0, 17, 2, 4, 6, 23, 50, 32, 80]

    for (let index = 0; index < numeros.length; index++) {

        // pegando o maior numero desse array 
        if (numeros[index] > Maior_num) {

            Maior_num = numeros[index]
        }

        // pegando o menor numero 
        if (numeros[index] <= menor_num) {

            menor_num = numeros[index]
        }

        // pegando os numero maiores que 20
        if (numeros[index] > 20) {

            maior_q_vinte += `: ${numeros[index]} `
        }

        // pegando o resto da divisão por 2 
        aux = numeros[index] % 2

        // se o resto for  1 o numero e par 
        if (aux == 1) {

            num_impar += `: ${numeros[index]} `
        }

        // se o resto for 2 o numero e ímpar 
        else {

            num_par += `: ${numeros[index]} `
        }

    }

    //Ordenar em ordem crescente
    ordem_numerica = numeros.sort(ordenar)

    //Função importante!!!
    function ordenar(a, b) {
        return a - b
    }


    // mostrando todas as saídas 
    console.log(Maior_num)
    saida2.innerHTML = `<h4 class="alert alert-success" > O maior numero do array e ${Maior_num} e o menor e ${menor_num}</h4> `
    saida2.innerHTML += `<h4 class="alert alert-success" > A ordem crescente e: ${ordem_numerica}</h4> `
    saida2.innerHTML += `<h4 class="alert alert-success" >Os numeros maiores que 20 são ${maior_q_vinte}</h4> `
    saida2.innerHTML += `<h4 class="alert alert-success" >Os numeros pares são: ${num_par}</h4> `
    saida2.innerHTML += `<h4 class="alert alert-success" >Os numeros ímpares são: ${num_impar}</h4> `

}

let anos_bi = new Array()

function ano() {


    // atribuindo a saida em uma variável
    let saida2 = document.getElementById('result2')


    // zelando a variável 
    let input = ``

    // pegando os anos no input 
    input += document.getElementById('ano').value

    // limpando o input para o usuário nao precisar apagar 
    document.getElementById('ano').value = ``

    // adicionando o ano no array 
    anos_bi.push(input)

    // mostrando o array no console 
    console.log(anos_bi)

    // saida para o usuário ver os anos que  ele digitou 
    saida2.innerHTML += `<span class="alert alert-success h4">: ${input}</span>`

}

// função para verificar os anos bissextos 
function verificar() {

    // atribuindo a saida em uma variável
    let saida2 = document.getElementById('result2')

    let result

    let ano = ""

    // percorrendo o array dos anos 
    for (let i = 0; i < anos_bi.length; i++) {

        result = anos_bi[i] % 4

        if (result == 0) {

            ano += `: ${anos_bi[i]} `

        }
    }

    saida2.innerHTML = `<h4 class="alert alert-success" >Os anos Bissextos são${ano}</h4> `
}

// função para achar os  numeros primos de 0 a 100 
function Primos_zero() {

    // atribuindo a saida em uma variável
    let saida2 = document.getElementById('result2')

    let aux = 0

    let n

    // criando o array 
    let numeros = new Array()

    // criando o for  de 1 a 100 
    for (let i = 1; i <= 100; i++) {

        // n recebe o índice 
        n = i

        aux = 0

        // for para a verificação da variável pra ver se o numero e primo 
        for (let j = 1; j <= n; j++) {

            if (n % j == 0) {

                aux++
            }
        }

        if (aux == 2) {

            // array recebe os numeros que passarem na verificação 
            numeros += `: ${n} `
        }
    }

    saida2.innerHTML = `<h4 class="alert alert-success" > Números Primos ${numeros}</h4 > `
}

function sorteio() {

    let saida2 = document.getElementById('result2')

    let sorte = new Array()

    for (let i = 0; i < 5; i++) {

        // adicionando o input no array 
        sorte.push(document.getElementById(`num${i + 1}`).value)

    }

    if (sorte[0] > 50 || sorte[1] > 50 || sorte[2] > 50 || sorte[3] > 50 || sorte[4] > 50 ||
        sorte[0] == ``|| sorte[1] == ``|| sorte[2] == ``|| sorte[3] == ``|| sorte[4] == ``) {

        saida2.innerHTML = `<h4 class="alert alert-danger">Os inputs não podem ser vazios e os numeros tem que ser entre 0 - 50 !!!</h4>`

        console.log(sorte)
    }
    else {

        console.log(sorte)

        // função para retornar numeros aleatórios 
        function gerador(max) {

            // Math.floor retorna numeros nao flutuantes e random retorna os numeros aleatórios 
            return Math.floor(Math.random() * max + 1)
        }

        // variável para o parâmetro da função numero maximo para ser sorteado
        let n = 50

        // array para pegar os numeros sorteados
        let numeros = new Array()

        // atribuindo 5 numeros da sorte no array 
        for (let i = 0; i < 5; i++) {

            // se deseja fazer um teste comente a linha de baixo e descomente a outra
            numeros[i] = gerador(n)

            // teste para verificar o funcionamento 
            // numeros[i] = i+1

        }

        // zerando a variável aux 
        let aux = 0

        // ver os numeros sorteados 
        console.log(numeros)

        // verificando se os numeros escolhidos pelo usuário foram os mesmos dos numeros aleatórios
        for (let i = 0; i < numeros.length; i++) {

            if (sorte[0] == numeros[i] || sorte[1] == numeros[i] || sorte[2]
                == numeros[i] || sorte[3] == numeros[i] || sorte[4] == numeros[i]) {
                aux++

            }
        }

        // se a  variável aux for igual a 5 então o usuário ganhou 
        if (aux == 5) {

            saida2.innerHTML = `<h4 class="alert alert-success">Você Ganhou na loteria sortudo<br>
                            Os numeros da sorte Foi: <${numeros}></h4>`
        }

        else {

            saida2.innerHTML = `<h4 class="alert alert-danger">Você perdeu loser <br>
                                Os numeros da sorteados Foi: <${numeros}></h4>`
        }
    }
}

// função de limpar os inputs da atividade da mega sena 
function sorteio_clean() {

    for (let i = 0; i < 5; i++) {

        // limpando os inputs do array
        document.getElementById(`num${i + 1}`).value = ``

    }
}
