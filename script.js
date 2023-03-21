function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var hora = 
    msg.innerHTML = `<strong>Agora são ${hora}:${minuto}</strong>`
    if (hora >= 0 && hora < 12) {
        //Good Morning!
        img.src = "img/MorningImage.jpg"
        document.body.style.backgroundImage = 'linear-gradient(180deg, #fffdf9, #ad7c64)';
    } else if (hora >= 12 && hora < 18) {
        //Good Afternoon!
        img.src = "img/SumertimeImage.jpg"
        document.body.style.backgroundImage = 'linear-gradient(180deg, #f7e7cd, #9ccb0b)';
    } else if (hora > 18 && hora < 20){
        //Good Evening!
        img.src = "img/EveningImage.jpg"
        document.body.style.backgroundImage = 'linear-gradient(180deg, #f9e64e , #39393a)';
    } else {
        //Good Night!
        img.src = "img/NightImage.jpg"
        document.body.style.backgroundImage = 'linear-gradient(180deg, #85baac, #111619)';
    }
}