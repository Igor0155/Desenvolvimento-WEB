let compras = new Array()

        function Itens() {

            document.getElementById('title').innerHTML = `<h3>Itens Adicionados:</h3>`

            let saida = document.getElementById('Saida')

            let string = document.getElementById('text').value

            document.getElementById('text').value = ``

            
            if (string == "") {

                alert(`Os campos estao vazios`)

            }

            else {

                let aux = compras.indexOf(string)

                if (aux === -1) {

                    compras.unshift(string)

                    saida.innerHTML += ` ${string} |`

                    console.log(compras)

                }

                else {

                    alert(`O item ja existe na lista de compras`)
                }

            }
        }

        function Ordenar() {

            let saida2 = document.getElementById('Saida_Ordenada')

            // string
            let ordem = compras.sort()
            saida2.innerHTML = `<br><h3>Lista de compras ordenada:</h3><br>${ordem}`
       

        }

        function Limpar() {

            document.getElementById('text').value = ``

            document.getElementById('title').innerHTML = ``

            document.getElementById('Saida').innerHTML = ``

            document.getElementById('Saida_Ordenada').innerHTML = ``


        }

        function Limpar_lista() {

            compras = new Array()

            document.getElementById('Saida').innerHTML = ``

            document.getElementById('title').innerHTML = ``
            
            document.getElementById('Saida_Ordenada').innerHTML = ``

            alert(`A lista de Compras foi resetada `)

            console.log(compras)
        }
