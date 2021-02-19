function tabuada(){
    var num = document.getElementById('txtn')
    var res = document.getElementById('res')
    if (num.value.length == 0)
    {
        alert('[ERRO] Preencha o campo número!')
    } 
    else
    {
        res.innerHTML = ' '
        var n = Number(num.value)
        res.innerHTML = `Tabuada do ${n}<br>`
        for (var i = 1; i <= 10; i++)
        {
            res.innerHTML += `${n} x ${i} = ${n*i}<br>`
        }
    }
}