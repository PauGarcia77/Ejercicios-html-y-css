function añadirTarea() {
    let text = document.getElementById("assumpte").value; // Obtiene el valor del input con id "assumpte"
    if (text) { // Si hay texto en el input
        let tareaDiv = document.createElement("div"); // Crea un nuevo div para la tarea
        tareaDiv.classList.add("tarea"); // Agrega la clase "tarea" al div para filtrado
        
        let parrafo = document.createElement("p"); // Crea un nuevo elemento de párrafo
        parrafo.textContent = text; // Asigna el texto del input al párrafo

        let checkbox = document.createElement("input"); // Crea un nuevo elemento de checkbox
        checkbox.type = "checkbox"; // Establece el tipo del input como checkbox

        checkbox.addEventListener("change", function () { // Agrega un evento al checkbox para cambiar el color de la tarea
            tareaDiv.style.color = checkbox.checked ? "red" : ""; // Cambia el color a rojo si el checkbox está marcado
            actualizarFiltro(); // Asegura que se actualiza el filtro al marcar/desmarcar
        });

        let eliminarBtn = document.createElement("button"); // Crea un nuevo botón para eliminar la tarea
        eliminarBtn.textContent = "Eliminar"; // Asigna el texto "Eliminar" al botón
        eliminarBtn.addEventListener("click", function () { // Agrega un evento al botón para eliminar la tarea
            tareaDiv.remove(); // Elimina el div de la tarea
        });

        tareaDiv.appendChild(parrafo); // Agrega el párrafo al div de la tarea
        tareaDiv.appendChild(checkbox); // Agrega el checkbox al div de la tarea
        tareaDiv.appendChild(eliminarBtn); // Agrega el botón de eliminar al div de la tarea

        document.getElementById("ejemplo").appendChild(tareaDiv); // Agrega el div de la tarea al div con id "ejemplo"
        document.getElementById("assumpte").value = ""; // Limpia el input
    }
}

// Función para eliminar tareas marcadas como completadas
function eliminarTareasMarcadas() {
    document.querySelectorAll("#ejemplo .tarea input[type='checkbox']:checked").forEach(checkbox => { // Selecciona todos los checkboxes marcados dentro de tareas
        checkbox.parentElement.remove(); // Elimina el div padre del checkbox (la tarea)
    });
}

document.getElementById("eliminar").addEventListener("click", eliminarTareasMarcadas); // Agrega un evento al botón de eliminar para ejecutar la función eliminarTareasMarcadas

let filtroActual = "todas"; // Variable para almacenar el filtro actual

// Función para actualizar la vista según el filtro seleccionado
function actualizarFiltro() {
    let tareas = document.querySelectorAll("#ejemplo .tarea"); // Selecciona todas las tareas
    tareas.forEach(tarea => { // Recorre todas las tareas
        let checkbox = tarea.querySelector("input[type='checkbox']"); // Selecciona el checkbox de la tarea
        if (filtroActual === "activas" && checkbox.checked) { // Si el filtro es "activas" y el checkbox está marcado
            tarea.style.display = "none"; // Oculta la tarea
        } else if (filtroActual === "completadas" && !checkbox.checked) { // Si el filtro es "completadas" y el checkbox no está marcado
            tarea.style.display = "none"; // Oculta la tarea
        } else { // Si el filtro es "todas" o no se cumple ninguna de las condiciones anteriores
            tarea.style.display = "flex"; // Muestra la tarea
        }
    });
}

// Botones de filtro
document.getElementById("todas").addEventListener("click", function () { // Agrega un evento al botón de "todas"
    filtroActual = "todas"; // Establece el filtro actual a "todas"
    actualizarFiltro(); // Actualiza el filtro
});

document.getElementById("noCompletadas").addEventListener("click", function () { // Agrega un evento al botón de "no completadas"
    filtroActual = "activas"; // Establece el filtro actual a "activas"
    actualizarFiltro(); // Actualiza el filtro
});

document.getElementById("Completadas").addEventListener("click", function () { // Agrega un evento al botón de "completadas"
    filtroActual = "completadas"; // Establece el filtro actual a "completadas"
    actualizarFiltro(); // Actualiza el filtro
});