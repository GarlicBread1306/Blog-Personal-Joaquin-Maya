

//esto lo hice con un video a parte para hacer el botón en un solo comando

const miBoton = document.getElementById("boton");
const miInformacion = document.getElementById("Contactos");

miBoton.addEventListener("click", function() {
  if (miInformacion.style.display === "none") {
    miInformacion.style.display = "block";
  } else {
    miInformacion.style.display = "none";
  }
});