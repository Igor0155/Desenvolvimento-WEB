let saida = document.getElementById('Saida')

for (let j = 1; j <= 10; j++) {

    saida.innerHTML += `<br><h3 class="border-top border-left border-right mt-2 pt-3">Tabuada J do ${j}</h3><br>`

    for (let i = 1; i <= 10; i++) {

        let soma = j * i

        saida.innerHTML += `<h4 class="border-left border-right ">${j} X ${i} = ${soma} </h4>`

    }
}

