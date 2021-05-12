 function limpar() {

            document.getElementById("num1").value = ""
            
            document.getElementById("num2").value = ""

            document.getElementById("num3").value = ""

            document.getElementById("Result").innerHTML = ``

        }

        function calcular() {

            let a = Number(document.getElementById("num1").value)

            let b = Number(document.getElementById("num2").value)

            let c = Number(document.getElementById("num3").value)

            let saida = document.getElementById("Result")

            let obs

            if (a == "") {

                obs = `O valor do primeiro numero nao pode ser nulo`

            }
            else {

                let quadrado_b = b * b

                let delta = (quadrado_b) - 4 * (a * c)

                if (delta < 0) {
                    obs = `Não foi possivel calcular pois o delta e menor que 0`
                }
                else if (delta == 0) {
                    obs = `Delta é zero, portano os valores de x1 e x2 serao iguais `
                } else {


                    let nega_b = b * (-1)

                    let raiz_delta = Math.sqrt(delta)

                    let div = 2 * a

                    let X1 = (nega_b + raiz_delta) / div

                    let X2 = (nega_b - raiz_delta) / div

                    obs = `Valor de X1 = ${X1} <br> Valor de X2 = ${X2}`
                }
            }



            saida.innerHTML = obs

        }
