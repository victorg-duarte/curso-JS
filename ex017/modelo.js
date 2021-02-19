function Contar(){
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var res = document.getElementById("res")

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)
    {
        alert("[ERRO] Preencha todos dados!!")
    }
    else
    {
        res.innerHTML="Contando: "
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(i < f)
        {
            for(let c = i; c <= f; c+=p)
            {
                res.innerHTML += `${c} \u{1F449}` // \u{1F449} = id do emoji
            }
        }
        else
        {
            for(let c = i; c >= f; c-=p)
            {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`

        
    }
}