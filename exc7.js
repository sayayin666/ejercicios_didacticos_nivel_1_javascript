function menorMayor() {
    let numeroA = parseInt(prompt("escriba el primer número a verificar: "));
    let numeroB = parseInt(prompt("escriba el segundo número a verificar: "));

    if(numeroA > numeroB) {
        alert("el número " + numeroA + ", es mayor al número " + numeroB);
    }
    else if(numeroA == numeroB) {
        alert("el número " + numeroA + ", es igual al número " + numeroB);
    }

    else {
        alert(`el numero ${numeroA}, es menor al número ${numeroB}`);
    }
}

menorMayor()