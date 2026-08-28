function tablaMultiplicar() {
    let numero = parseInt(prompt("escriba un número por favor: "));

    if(numero == 0 | numero < 0) {
        alert("escriba un número mayor a cero(0) por favor");
    }

    if (numero > 0) {
        let tablaMultiplicar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        for(let i = 0; i < 10; i = i+1) {
            console.log(`${numero} x ${tablaMultiplicar[i]}`);
        }
    }
}

tablaMultiplicar()