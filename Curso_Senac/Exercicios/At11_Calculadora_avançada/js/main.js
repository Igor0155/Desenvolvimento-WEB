 // pegando os numeros, operadors e a saida 
        function saida(num1) {

            let num = document.getElementById('Result').innerHTML

            // a saida vai receber ela mesma mais o numero/operador digitado
            document.getElementById('Result').innerHTML = num + num1

        }

        // funcao do eval 
        function calcular() {

            let result = document.getElementById('Result').innerHTML;

            if (result) {

                document.getElementById('Result').innerHTML = eval(result);
            }

            else {

                document.getElementById('Result').innerHTML = "0"
            }
        }

        // funcao para limpar o display 
        function clean() {

            document.getElementById('Result').innerHTML = "";
        }
