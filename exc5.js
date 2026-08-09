function parImpar() {

    let numero = parseInt(prompt("escriba numero a dividir: "));

    if(numero % 2 == 0) {
        alert("el numero: " + numero + " es PAR");
    }
    else {
        alert("el numero: " + numero + " es IMPAR");
    }
}

parImpar()