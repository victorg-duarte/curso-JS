function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById("seltab")
    if (num.value.length == 0)
    {
        alert('[ERRO] Preencha o campo número!')
    } 
    else
    {
        tab.innerHTML = ''
        var n = Number(num.value)
        
        for (var i = 1; i <= 10; i++)
        {
            var item = document.createElement("option")
            item.text = `${n} x ${i} = ${n*i}`
            tab.appendChild(item)
        }
    }
}