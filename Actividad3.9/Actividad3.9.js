function añadirImagen() {
    let url = document.getElementById("urlImagen").value;
    if (url) {
        let imagenDiv = document.createElement("div");
        imagenDiv.classList.add("imagen");

        let img = document.createElement("img");
        img.src = url;

        let eliminarBtn = document.createElement("button");
        eliminarBtn.textContent = "Eliminar imagen";
        eliminarBtn.addEventListener("click", function () {
            contenedor.remove();
        });
        
        let modificarBtn = document.createElement("button");
        modificarBtn.textContent = "Cambiar color";
        modificarBtn.classList.add("modificar");
        modificarBtn.addEventListener("click", function () {
            let colores = ["red", "green", "blue", "yellow", "purple"];
            let colorActual = imagenDiv.style.borderColor;
            let nuevoColor = colores[(colores.indexOf(colorActual) + 1) % colores.length];
            imagenDiv.style.borderColor = nuevoColor;
        });

        let botonesDiv = document.createElement("div");
        botonesDiv.classList.add("botones");
        botonesDiv.appendChild(eliminarBtn);
        botonesDiv.appendChild(modificarBtn);

        let contenedor = document.createElement("div");
        contenedor.classList.add("contenedor-imagen");
        contenedor.appendChild(imagenDiv);
        contenedor.appendChild(botonesDiv);

        imagenDiv.appendChild(img);

        document.getElementById("galeria").appendChild(contenedor);
    }
}

function eliminarTodasImagenes() {
    document.getElementById("galeria").innerHTML = "";
}

document.getElementById("eliminarTodas").addEventListener("click", eliminarTodasImagenes);