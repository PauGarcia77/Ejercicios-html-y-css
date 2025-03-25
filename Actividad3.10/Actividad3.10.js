let numeroAleatori, intentos, limite;

document.getElementById("joc").style.display = "none";

function començarJoc() {
    const nivellSeleccionat = document.getElementById("nivell").value;
    if (!nivellSeleccionat) {
        alert("Tienes que seleccionar un nivel!!!");
        return;
    }
    limite = parseInt(nivellSeleccionat);
    numeroAleatori = Math.floor(Math.random() * limite) + 1;
    intentos = 0;

    document.getElementById("inici").style.display = "none";
    document.getElementById("joc").style.display = "block";


}

function comprovarNumero() {
    const entrada = document.getElementById("entradaUsuari");
    const valor = parseInt(entrada.value);

    if (isNaN(valor)) {
        alert("Introdueix un número vàlid.");
        return;
    }
    if (valor < 1 || valor > limite) {
        document.getElementById("missatge").innerText = "El número ha d'estar entre 1 i " + limite + " .";
        return;
    }

    intentos++;
    if (valor < numeroAleatori) {
        document.getElementById("missatge").innerText = "El número és més alt, llevas "+intentos+" intentos.";
    }
    else if (valor > numeroAleatori) {
        document.getElementById("missatge").innerText = "El número és més baix, llevas "+intentos+"intentos.";
    }
    else {
        document.getElementById("missatge").innerText = "Felicitats! Has encertat en " + intentos + " intents.";
    }
}

function reiniciarJoc() {
    document.getElementById("inici").style.display = "block";
    document.getElementById("joc").style.display = "none";
}