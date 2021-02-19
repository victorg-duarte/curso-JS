function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if(formano.value.length <= 3 || formano.value > ano)// length verifica se o comprimento da val é = 0
    {
        window.alert("[ERRO] Try again!")
        res.style.background = "tomato"
        res.innerHTML = "Digite o ano corretamente!"
    }
    else
    {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(formano.value)
        var genero = ""
        var img = document.createElement("img") // criando uma tag img pelo JS
        img.setAttribute("id", "foto") //criando um id para a tag by JS
        if(fsex[0].checked)
        {
            genero = "Homem"
            if (idade > 0 && idade <= 10) {
                img.setAttribute("src", "https://i.imgur.com/WQqoYlv.png")
            }
            else
            if (idade <= 21) {
                img.setAttribute("src", "https://i.imgur.com/Gq4aS5q.png")
            }
            else
            if (idade <= 50) {
                img.setAttribute("src", "https://i.imgur.com/Yp0zBgW.png")
            }
            else{
                img.setAttribute("src", "https://i.imgur.com/I2RqUhX.png")
            }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos`
            res.appendChild(img)
        }
        else
        {
            genero = "Mulher"
            if (idade > 0 && idade <= 10) {
                img.setAttribute("src", "https://i.imgur.com/fUhAn11.png")
            }
            else
            if (idade <= 21) {
                img.setAttribute("src", "https://i.imgur.com/Xrs3xH9.png")
            }
            else
            if (idade <= 50) {
                img.setAttribute("src", "https://i.imgur.com/YbnwZF6.png")
            }
            else{
                img.setAttribute("src", "https://i.imgur.com/rqoQw7G.png")
            }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos`
            res.appendChild(img)
        }
    }
    // res.style.textAlign = "center" MEXENDO NO STYLE DO id DA TAG PELO js
   
}
