function carregar(){
    var msg = document.getElementById("msg")
    var foto = document.getElementById("ibagem")
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
    if(hora >= 0 && hora < 12) //BOM DIA
    {
        foto.src ="foto_manha.jpg"
        document.body.style.background ="rgb(223, 169, 71)"
        
    }
    else
    if(hora >= 12 && hora < 18) // BOA TARDE
    {
        foto.src = "foto_tarde.jpg"
        document.body.style.background ="rgb(224, 101, 52)"

    }
    else    //BOA NOITE
    {
        foto.src = "foto_noite.jpg"
        document.body.style.background = "rgb(2, 30, 54)"
    }
}