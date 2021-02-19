let num = document.getElementById("txtn")
let lista = document.getElementById("seln")
let res = document.querySelector("div#res")
let valores = []

function isnum(n){ // verifica se o num digitado é maior q 0 e menor que 100
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}

function inselect(n, l){ // verificar se o num ja foi digitado
    if(l.indexOf(Number(n)) != -1){ // -1 indica que o valor n foi encontrado na lista
        return true
    }
    else{
        return false
    } 
}

function adicionar(){
    if(isnum(num.value) && !inselect(num.value, valores)) // o simbolo ! = não, negacão
    {
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = "" // limpa quando for adicionar mais numero, pois obtera novas info
    }
    else
    {
        alert("valor invalido ou ja encontrado na lista!")
    }

    num.value = ''
    num.focus() // foca (volta o cursor) para digitar um numero
}

function fim(){
    if(valores.length == 0){
        alert(`Adicione valores para finalizar!`)
    }
    else{
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if(maior < valores[pos]){
                maior = valores[pos]
            }
            if(menor > valores[pos]){
                menor = valores[pos]
            }
        }
        media = soma / valores.length
        res.innerHTML = ''// limpa quando for adicionar mais numero, pois obtera novas info
        res.innerHTML += `<p>Quantidade de numeros adicionados: ${valores.length}</p>` // (+=): concatenacao
        res.innerHTML += `<p>O maior valor informado: ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado: ${menor}</p>`
        res.innerHTML += `<p>Soma dos valores informados: ${soma}</p>`
        res.innerHTML += `<p>Média dos valores informados: ${media.toFixed(2)}</p>`
    }

}


