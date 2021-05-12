 function foco() {
            // alterando o fundo no foco 
            document.getElementById("text").style.backgroundColor = 'rgb(19, 212, 19)'//green

        }
        function saida() {

            let area = document.getElementById("text").value

            //pegando o tamanho da string
            let cont = area.length

            if (cont < 3) {
                // alterando o fundo para yellow
                document.getElementById("text").style.backgroundColor = 'yellow'
            }
            else {
                // alterando o fundo para blue
                document.getElementById("text").style.backgroundColor = 'rgb(52, 52, 247)' //blue
            }

        }
