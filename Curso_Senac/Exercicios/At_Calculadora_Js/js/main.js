 function somar() {

            let num1 = Number(document.getElementById("num1").value)

            let num2 = Number(document.getElementById("num2").value)

            let saida = document.getElementById("Result")

            let soma = num1 + num2

            saida.innerText = (`O resultado e: ${soma}`)

        }
        function subtrair() {

            let num1 = Number(document.getElementById("num1").value)

            let num2 = Number(document.getElementById("num2").value)

            let saida = document.getElementById("Result")

            let soma = num1 - num2

            saida.innerText = (`O resultado e: ${soma}`)

        }

        function multiplicar() {

            let num1 = Number(document.getElementById("num1").value)

            let num2 = Number(document.getElementById("num2").value)

            let saida = document.getElementById("Result")

            let soma = num1 * num2

            saida.innerText = (`O resultado e: ${soma}`)

        }

        function dividir() {

            let num1 = Number(document.getElementById("num1").value)

            let num2 = Number(document.getElementById("num2").value)

            let saida = document.getElementById("Result")

            let soma = num1 / num2

            saida.innerText = (`O resultado e: ${soma}`)

        }

        function limpar() {

            document.getElementById("num1").value = ""

            document.getElementById("num2").value = ""

            document.getElementById("Result").innerHTML = ``
        }
