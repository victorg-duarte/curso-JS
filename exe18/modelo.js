let num = document.getElementById("txtn")
let sel = document.getElementById("seln")
let val = []

function adicionar(){
    if(num.value.length == 0)
    {
        alert(`Digite um Numero!!`)
    }
    else
    {
        if(num.value < 0 || num.value > 100)
        {
            alert("apenas numeros entre 1 à 100 e não digitados!!!")
        }
        else
        { 
            if(val.indexOf(Number(num.value)) != -1){
                alert("Esse valor ja foi digitado. Digite outro!")
            }
            else{
                val.push(Number(num.value))
                var item = document.createElement("option")
                item.text = `numero digitado: ${num.value}`
                sel.appendChild(item)
                res.innerHTML =""
            }
        }    
    }
    num.value = ""
    num.focus() 
}

function fim(){
    if(val.length == 0){
        alert("Adicione pelo menos um valor para finalizar!")
    }
    else{
        let soma = 0
        let maior = val[0]
        let menor = val[0]

        for (let pos in val){
            soma += val[pos]
            if(val[pos] > maior)
            {
                maior = val[pos]
            }
            if(val[pos] < menor)
            {
                menor = val[pos]
            }
        }
        res.innerHTML = ""
        res.innerHTML += `<p>Quantidade de numeros informados: ${val.length}</p>`
        res.innerHTML += `<p><strong>(FOR)</strong>MAIOR numero informado: ${maior}</p>`
        res.innerHTML += `<p><strong>(FOR)</strong>MENOR numero informado: ${menor}</p>`
        res.innerHTML += `<p>O MAIOR valor é: ${Math.max.apply(Math, val)}</p>` // OUTRA MANEIRA DE PEGAR O MAIOR VALOR sem for
        res.innerHTML += `<p>O MENOR valor é: ${Math.min.apply(Math, val)}</p>` // OUTRA MANEIRA DE PEGAR O MENOR VALOR sem for
        res.innerHTML += `<p>Soma dos valores informados: ${soma}</p>`
        res.innerHTML += `<p>Média dos valores informados: ${(soma/val.length).toFixed(2)}</p>`
    }
}