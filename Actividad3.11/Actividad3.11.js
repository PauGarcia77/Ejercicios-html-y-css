function lugares() {
    let origen = document.getElementById("origen").value;
    let destino = document.getElementById("destino").value;

    if (origen === destino) {
        alert("El origen y el destino no pueden ser iguales!!");
        return false;
    }
    return true;
}

function fechas() {
    const fechaInicio = new Date(document.getElementById("date").value);
    let fechaFin = new Date(document.getElementById("date1").value);
    let fechaActual = new Date();

    if (fechaInicio <= fechaActual) {
        alert("La fecha de inicio no puede ser anterior o igual a la fecha actual.");
        return false;
    }

    if (fechaFin <= fechaInicio) {
        alert("La fecha de fin no puede ser anterior o igual a la fecha de inicio.");
        return false;
    }

    return true;
}

function descuento() {
    const origen = document.getElementById("origen").value;
    const destino = document.getElementById("destino").value;
    let descuento = document.getElementById("opciones").value;

    if (descuento === "residente") {
        if (!((origen === "PMI" && (destino === "MAD" || destino === "BCN")) ||
            ((origen === "MAD" || origen === "BCN") && destino === "PMI"))) {
            alert("No se puede aplicar el descuento de residente. Seleccione una combinación válida o elimine el descuento.");
            return false;
        }
    }
    return true;
}

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    if (!lugares() || !fechas() || !descuento()) {
        return;
    }
    const origen = document.getElementById("origen").value;
    const destino = document.getElementById("destino").value;
    const fecha_Inicio =document.getElementById("date").value;
    const fecha_Fin = document.getElementById("date1").value;


    localStorage.setItem("origen", origen);
    localStorage.setItem("destino", destino);
    localStorage.setItem("fecha_inicio", fecha_Inicio);
    localStorage.setItem("fecha_fin", fecha_Fin);

    //const formData = new FormData(event.target);
    //const queryParams = new URLSearchParams(formData).toString();
    window.location.href = "Resultado.html";
});

