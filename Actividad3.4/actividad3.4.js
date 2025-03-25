let tamañoLetra = 16; // Se declara una variable global para almacenar el tamaño de la letra.

function letraMasPequeña(){
    tamañoLetra -= 2; // Disminuye el tamaño de la letra en 2 píxeles.
    document.getElementById("miparrafo").style.fontSize = tamañoLetra + "px"; // Aplica el nuevo tamaño al párrafo con id "miparrafo".
}

function letraMasGrande(){
    tamañoLetra += 2; // Aumenta el tamaño de la letra en 2 píxeles.
    document.getElementById("miparrafo").style.fontSize = tamañoLetra + "px"; // Aplica el nuevo tamaño al párrafo con id "miparrafo".
}

function aplicarColorCSS(){
    document.getElementById("miparrafo").classList.toggle("colores"); // Alterna la clase "colores" en el párrafo con id "miparrafo".
}

let parrafo = document.getElementById("miparrafo"); // Obtiene la referencia al párrafo con id "miparrafo".
let colorActual = window.getComputedStyle(miparrafo).color; // Obtiene el color actual del párrafo.

function añadirTexto(){
    let text = prompt("Introduce el texto que quieres"); // Solicita al usuario un texto mediante un cuadro de diálogo.
    if(text){ // Si el usuario introduce un texto válido...
        let parrafo = document.createElement("p"); // Crea un nuevo elemento de párrafo.
        parrafo.textContent = text; // Asigna el texto ingresado al nuevo párrafo.
        document.getElementById("Parrafo").appendChild(parrafo); // Agrega el nuevo párrafo al elemento con id "Parrafo".
    }
}

function eliminarTexto(){
    let parrafoNuevo = document.getElementById("Parrafo"); // Obtiene la referencia al elemento con id "Parrafo".
    if (parrafoNuevo.lastChild) { // Si "Parrafo" tiene un último hijo...
        parrafoNuevo.removeChild(parrafoNuevo.lastChild); // Elimina el último hijo del elemento "Parrafo".
    }
}

function añadirClase(){
    let miparrafo = document.getElementById("titulo"); // Obtiene el elemento con id "titulo".
    miparrafo.classList.add("claseCss"); // Agrega la clase "claseCss" al elemento.
}

function eliminarClase(){
    let miparrafo = document.getElementById("titulo"); // Obtiene el elemento con id "titulo".
    miparrafo.classList.remove("claseCss"); // Elimina la clase "claseCss" del elemento.
}

function cambiarIdioma(){
    let texto = document.getElementById("miparrafo").textContent; // Obtiene el contenido de texto del párrafo con id "miparrafo".
    if(texto == "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."){
        document.getElementById("miparrafo").textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."; // Cambia el texto al inglés.
    } else {
        document.getElementById("miparrafo").textContent = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."; // Cambia el texto al español.
    }
}

document.getElementById("Cambiar Color").addEventListener("mouseover", function(){
    document.getElementById("Cambiar Color").style.backgroundColor = "red"; // Cambia el color de fondo del botón a rojo cuando el cursor está encima.
});

document.getElementById("Cambiar Color").addEventListener("mouseout", function(){
    document.getElementById("Cambiar Color").style.backgroundColor = ""; // Restaura el color original cuando el cursor sale del botón.
});

let textES = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."; // Texto en español.
let textCA = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."; // Texto en inglés.

document.getElementById("btn-traducir").addEventListener("click", function(){
    let parrafo = document.getElementById("miparrafo"); // Obtiene el párrafo con id "miparrafo".
    if(parrafo.textContent === textCA){
        parrafo.textContent = textES; // Si el texto está en inglés, lo cambia a español.
    }
    else{
        parrafo.textContent = textCA; // Si el texto está en español, lo cambia a inglés.
    }
});