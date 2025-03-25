// Agrega un evento "click" al documento entero
document.addEventListener("click", function() {
    
    // Cuando se hace clic en cualquier parte del documento, se agrega un evento "click" al elemento con id "menu"
    document.getElementById("menu").addEventListener("click", function() {
        
        // Al hacer clic en "menu", se alterna la clase "active" en el elemento con id "lista"
        // Si la clase está presente, se elimina; si no está, se agrega
        document.getElementById("lista").classList.toggle("active");
    });
});

// Selecciona el campo de entrada (input) dentro del elemento con id "buscador"
const inputBuscador = document.querySelector("#buscador input");

// Agrega un evento "input" al campo de búsqueda, que se activará cada vez que el usuario escriba algo
inputBuscador.addEventListener("input", function() {
    
    // Obtiene el valor actual del campo de búsqueda y lo convierte a minúsculas
    // Esto permite comparar sin distinguir entre mayúsculas y minúsculas
    const textoBusqueda = this.value.toLowerCase();
    
    // Selecciona todos los elementos <div> dentro del contenedor con id "divcontenedor"
    const camisetas = document.querySelectorAll("#divcontenedor > div");
    
    // Itera sobre cada div encontrado (que representa una camiseta)
    camisetas.forEach(function(camiseta) {
        
        // Obtiene el texto del elemento <p> dentro del div (donde se encuentra el nombre de la camiseta) y lo convierte a minúsculas
        const textoCamiseta = camiseta.querySelector("p").innerText.toLowerCase();
        
        // Si el texto de la camiseta incluye el texto de búsqueda ingresado por el usuario...
        if (textoCamiseta.includes(textoBusqueda)) {
            // Se muestra la camiseta (asegurando que el display sea "block")
            camiseta.style.display = "block";
        } else {
            // Si no coincide, se oculta el div de la camiseta
            camiseta.style.display = "none";
        }
    });
});
