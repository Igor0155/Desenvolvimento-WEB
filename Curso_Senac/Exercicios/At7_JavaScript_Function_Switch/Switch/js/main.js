
// criando a função para validar o código do usuário 
function codigo() {

    // atribuindo a  saida  em uma variável 
    let saida = document.getElementById("result")

    // pegando o input e atribuindo a uma variável
    let code = document.getElementById("code").value;

    let aux

    let obs

    // verificando se o usuário digitou alguma coisa 
    if (code == "") {
        obs = `<h4 class="alert alert-danger">Valor undefined </h4>`;
    }

    // se o código for um num vai para o  switch 
    else if (isNaN(code) == false) {

        switch (parseInt(code)) {

            // atividade A do calculo da area do circulo 
            case 1:

                let num = prompt(`Insira o numero: `);

                // validando 
                if (num < 0 || num == "") {

                    obs = `A area não pode ser negativo `
                }
                else {
                    // chamando a função e colocando na variável auxiliar 
                    aux = areaCirculo(num)

                    // atribuindo a resposta na variável obs 
                    obs = `A area do circulo e: ${aux}m²`
                }
                break;

            case 2:

                // pegando o peso 
                let peso1 = prompt(`Insira o seu peso: `);

                // pegando o input da altura 
                let altura1 = prompt(`Insira a sua altura (Ex 1.80): `);

                // validando 
                if (peso1 <= 0 || peso1 == "" || altura1 <= 0 || altura1 == "") {

                    obs = `Os campos nao podem estar faltando e não pode ser negativo `
                }
                else {
                    // chamando a função 
                    aux = pesoPessoa(peso1, altura1)

                    // como na função ja tem explicação da saida so atribui na obs 
                    obs = `${aux}`
                }
                break

            case 3:

                // pegando o numero da  raiz  
                let numRaiz = prompt(`Insira o Número: `);

                if (numRaiz < 0 || numRaiz == "") {

                    obs = `A Raiz não pode ser negativo `
                }
                else {

                    // chamando a função 
                    aux = raizQuadrada(numRaiz);

                    obs = `A raiz quadrada de ${numRaiz} e de: ${aux}`
                }
                break


            case 4:

                // pegando a base 
                let base = prompt(`Insira a base: `);

                // pegando a potencia 
                let potencia = prompt(`Insira a potencia: `);

                // validando 
                if (base == "" || potencia == "") {

                    obs = `A Base ou potencia estão faltando `
                }
                else {
                    // chamando a função 
                    aux = calculoPotencia(base, potencia);

                    obs = `O Calculo e de: ${aux}`
                }
                break


            case 5:
                // pegando o input 
                let num1 = prompt(`Insira o 1° numero: `)
                let num2 = prompt(`Insira o 2° numero: `)
                let num3 = prompt(`Insira o 3° numero: `)
                let num4 = prompt(`Insira o 4° numero: `)
                let num5 = prompt(`Insira o 5° numero: `)

                // validando 
                if (num1 == "" || num2 == "" || num3 == "" || num4 == "" || num5 == "" ||
                    num1 < 0 || num2 < 0 || num3 < 0 || num4 < 0 || num5 < 0) {

                    obs = `Números podem estar faltando ou serem negativos`
                }

                else {
                    // pegando a função 
                    aux = mediaPonderada(num1, num2, num3, num4, num5)

                    obs = `O calculo da media Ponderada e de: ${aux}`
                }
                break


            case 6:

                // pegando a temperatura em fahrenheit 
                let calor = prompt(`Insira a temperatura em Fahrenheit: `)

                // validando 
                if (calor == undefined) {
                    obs = `Campos  nao poder ser vazios`
                }
                else {

                    // pegando a função 
                    aux = temperatura(calor)

                    obs = `A temperatura em Celsius: ${aux} `
                }
                break

            case 7:
                let salario = prompt(`Insira quanto ganha por hora`)

                let mes = prompt(`Insira  horas trabalhadas no mes: `)

                // validando 
                if (salario < 0 || salario == undefined || mes < 0 || mes == undefined) {
                    obs = `Campos nao poder ser nulos e nao podem estar faltando `
                }

                else {
                    aux = calculoSalario(salario, mes)

                    obs = `Salário liquido com desconto de:<br>
                        Imposto de Renda  = 11% <br>
                        INSS = 8% <br>
                        Sindicato = 5% <br>
                        Salário liquido total e de: R$${aux.toFixed(2)}`
                }
                break


            case 8:

                let lado = prompt(`Insira o lado do triângulo: `)
                // validando 
                if (lado < 0 || lado == "") {

                    obs = `Invalido`
                }
                else {
                    aux = areaTriangulo(lado)

                    obs = `A area do triângulo e de ${aux}`
                }

                break


            case 9:

                let cateto = prompt(`Insira o Cateto Oposto: `)

                let seno = prompt(`Insira o Seno: `)

                if (cateto <= 0 || cateto == "" || seno <= 0 || seno == "") {
                    obs = `Valores com campo  faltando ou com valores negativos`
                }

                else {

                    aux = hipotenusa(cateto, seno)

                    obs = `O valor da hipotenusa e de: ${aux}`
                }
                break
        }

    }

    else {

        obs = `<h4 class="alert alert-danger">O código ${code} nao e valido Insira um numero de 1 a 10</h4>`;

    }

    // saida com a observação de determinado erro e respostas das atividades
    saida.innerHTML = `${obs}`

}

// função do calculo da area do circulo _______________1° At
function areaCirculo(num) {

    // criando uma variável local que vai receber o calculo da area do circulo 
    let result_Circulo = 3.14 * (num * num)

    // retornando a soma do calculo 
    return result_Circulo

}

// função de sobrepeso
function pesoPessoa(peso, altura) {

    // calculo do peso ideal 
    let imc = peso / (altura * altura)

    // declarando a variável de retorno 
    let retorno

    // Obesidade Grau 0 Magreza
    if (imc < 18.5) {

        // retorno recebe a mensagem 
        retorno = `IMC = ${imc.toFixed(2)} classificação: Magreza; Obesidade Grau 0`
    }

    // Obesidade Grau 0 Normal
    else if (imc >= 18.5 && imc <= 24.9) {

        retorno = `IMC = ${imc.toFixed(2)} classificação: Normal; Obesidade Grau 0`
    }

    // Obesidade Grau 1 sobrepeso
    else if (imc >= 25 && imc <= 29.9) {

        retorno = `IMC = ${imc.toFixed(2)} classificação: Sobrepeso; Obesidade Grau I`
    }

    // obesidade Grau 2  Obesidade 
    else if (imc >= 30 && imc <= 39.9) {

        retorno = `IMC = ${imc.toFixed(2)} classificação: Obesidade; Obesidade Grau II`
    }

    // obesidade Grau 3  Obesidade Grave 
    else if (imc >= 40) {

        retorno = `IMC = ${imc.toFixed(2)} classificação: OBESIDADE GRAVE; Obesidade Grau III`
    }

    // retornando a mensagem atribuída na variável "retorno " 
    return retorno
}

// função da raiz quadrada 
function raizQuadrada(num) {

    let divisor = 1
    let div = 0

    for (let i = 0; i < num; i++) {

        div = num / div;

        divisor = (div + divisor) / 2
    }
}

// função da potencia 
function calculoPotencia(base, potencia) {

    let i = 0
    let result = 1
    // enquanto a potencia for menor que i base e somada ao quadrado 
    while (i < potencia) {

        result *= base
        i++
    }
    // retornando a base 
    return result;
}

// função da media ponderada 
function mediaPonderada(n1, n2, n3, n4, n5) {

    let media = (n1 * 1 + n2 * 2 + n3 * 3 + n4 * 4 + n5 * 5) / 15

    return media
}

// função da temperatura em fahrenheit para celsius 
function temperatura(temp) {

    let calculo = (temp - 32) * 5 / 9

    return calculo

}
// calculo de salário liquido com descontos 
function calculoSalario(salario, mes) {

    let salario_bruto = salario * mes

    let imposto_renda = salario_bruto * 0.11

    let inss = salario_bruto * 0.08

    let sindicato = salario_bruto * 0.05

    let salario_liquido = salario_bruto - imposto_renda - inss - sindicato

    return salario_liquido

}
// função de calculo de area de triângulo 

function areaTriangulo(lado) {

    let area = ((lado * lado) / 4) * 1.7;

    return area;
}

// função de calculo de hipotenusa

function hipotenusa(catetoOposto, seno) {

    let hipotenusa = catetoOposto / seno;
    return hipotenusa;
}