function saludador() {
    let nombre = prompt("escriba su nombre: ");
    let hora = parseInt(prompt("escriba la hora en formato 24h, pero sin los minutos por favor: "));

    if(hora > 0 && hora < 12) {
        alert(`buenos dias ${nombre}, son las ${hora} de la manaña`);
    }

    else if(hora > 12 && hora < 18) {
        alert(`buenas tardes ${nombre}, son las ${hora} de la tarde`);
    }

    else if(hora > 18 && hora < 21) {
        alert(`buenas noches ${nombre}, son las ${hora} de la noche`);
    }

    else if(hora > 21 && hora < 24) {
        alert("no atendemos a esta hora, por favor larguese o llamo a la policía");
    }
}

saludador()