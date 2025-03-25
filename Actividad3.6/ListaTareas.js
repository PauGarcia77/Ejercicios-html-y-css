function añadirTarea() {
    let text = document.getElementById("assumpte").value;
    if (text) {
        let tareaDiv = document.createElement("div");
        tareaDiv.classList.add("tarea"); // Agregar clase para filtrado
        
        let parrafo = document.createElement("p");
        parrafo.textContent = text;

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        checkbox.addEventListener("change", function () {
            tareaDiv.style.color = checkbox.checked ? "red" : "";
            actualizarFiltro(); // Asegurar que se actualiza el filtro al marcar/desmarcar
        });

        let eliminarBtn = document.createElement("button");
        eliminarBtn.textContent = "Eliminar";
        eliminarBtn.addEventListener("click", function () {
            tareaDiv.remove();
        });

        tareaDiv.appendChild(parrafo);
        tareaDiv.appendChild(checkbox);
        tareaDiv.appendChild(eliminarBtn);

        document.getElementById("ejemplo").appendChild(tareaDiv);
        document.getElementById("assumpte").value = ""; 
     
    }
}

// Función para eliminar tareas marcadas como completadas
function eliminarTareasMarcadas() {
    document.querySelectorAll("#ejemplo .tarea input[type='checkbox']:checked").forEach(checkbox => {
        checkbox.parentElement.remove();
    });
}

document.getElementById("eliminar").addEventListener("click", eliminarTareasMarcadas);

let filtroActual = "todas";

// Función para actualizar la vista según el filtro seleccionado
function actualizarFiltro() {
    let tareas = document.querySelectorAll("#ejemplo .tarea");
    tareas.forEach(tarea => {
        let checkbox = tarea.querySelector("input[type='checkbox']");
        if (filtroActual === "activas" && checkbox.checked) {
            tarea.style.display = "none";
        } else if (filtroActual === "completadas" && !checkbox.checked) {
            tarea.style.display = "none";
        } else {
            tarea.style.display = "flex";
        }
   });
}

// Botones de filtro
document.getElementById("todas").addEventListener("click", function () {
    filtroActual = "todas";
    actualizarFiltro();
});

document.getElementById("noCompletadas").addEventListener("click", function () {
    filtroActual = "activas";
    actualizarFiltro();
});

document.getElementById("Completadas").addEventListener("click", function () {
    filtroActual = "completadas";
    actualizarFiltro();
});
