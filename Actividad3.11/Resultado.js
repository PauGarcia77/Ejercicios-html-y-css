const origen = localStorage.getItem("origen");
const destino = localStorage.getItem("destino");
const fecha_Inicio = localStorage.getItem("fecha_inicio");
const fecha_Fin = localStorage.getItem("fecha_fin");

var infoResultados = "";

infoResultados += "<span>Los datos son:</span>";
infoResultados += "<br>Origen: " + origen;
infoResultados += "<br>Destino: " + destino;
infoResultados += "<br>Fecha de inicio: " + fecha_Inicio;
infoResultados += "<br>Fecha de fin: " + fecha_Fin;

document.getElementById("resultado").innerHTML = infoResultados;
