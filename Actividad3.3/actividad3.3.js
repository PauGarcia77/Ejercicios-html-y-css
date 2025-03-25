let tamañoLetra = 10;

function letraMasPequeña(){
    tamañoLetra--;
    document.getElementById("miparrafo").style.fontSize = tamañoLetra + "px"; 
}
function letraMasGrande(){
    tamañoLetra++;
    document.getElementById("miparrafo").style.fontSize = tamañoLetra + "px";
}
function aplicarColorCSS(){
    document.getElementById("miparrafo").classList.toggle("colores");
}

function añadirTexto(){
    let text=prompt("Introduce el texto que quieres");
    if(text){
        let parrafo=document.createElement("p");
        parrafo.textContent=text;
        document.getElementById("Parrafo").appendChild(parrafo);
    }
}
function eliminarTexto(){
    let parrafoNuevo = document.getElementById("Parrafo");
    if (parrafoNuevo.lastChild) {
        parrafoNuevo.removeChild(parrafoNuevo.lastChild);
    }
}

function añadirClase(){
    let miparrafo = document.getElementById("miparrafo");
    miparrafo.classList.add("claseCss");
}

function eliminarClase(){
    let miparrafo = document.getElementById("miparrafo");
    miparrafo.classList.remove("claseCss");
}