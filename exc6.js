function conversorTemperatura(celcius) {
    celcius = parseInt(prompt("esriba cantidad de grados celcius a converir: "));
    let farenheit = celcius * 1.8 + 32;

    alert("al convertir " + celcius + " grados celcius a farenheit, da como resultado: " + farenheit + " grados farenheit");
}

conversorTemperatura()