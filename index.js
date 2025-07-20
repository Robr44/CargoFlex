
const btnTema = document.getElementById("BtnCambiarTema");
const saludo = document.getElementById("saludar");
const btnSaludar = document.getElementById("btnSaludar");
const resaltarLetra = document.getElementById("servicios");

/* 
    addEventListener al botón con id 'BtnCambiarTema'. Este botón permite cambiar entre modo claro y modo oscuro.
   Cuando se hace clic, cambia la clase del body y guarda el estado actual en localStorage bajo la clave 'modo'.
   También actualiza el texto del botón para reflejar el modo actual.
*/

// Al recargar la página, aplicara el modo guardado
window.addEventListener("DOMContentLoaded", () => {
  const modoTemaGuardado = localStorage.getItem("modo");
  if (modoTemaGuardado === "oscuro") {
    document.body.classList.add("dark-mode");
    btnTema.textContent = "🌞 Modo Claro";
  }
});

// Evento para cambiar de modo claro/oscuro
btnTema.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Guardar modo color actual
  const modoActual = document.body.classList.contains("dark-mode") ? "oscuro" : "claro";
  localStorage.setItem("modo", modoActual);

  // Cambiar el texto del botón
  btnTema.textContent = modoActual === "oscuro" ? "🌞 Modo Claro" : " 🌙 Modo Oscuro";
});

/* 
    addEventListener al botón con id 'btnSaludar'. Este botón muestra una ventana emergente utilizando prompt
   donde el usuario puede ingresar su nombre, al hacerlo, el nombre se guarda en localStorage con
   la clave 'nombreUsuario' y se actualiza el contenido del encabezado con id 'saludar' para
   mostrar un mensaje personalizado y al recargar la página el nombre ingresado se toma de localStorage y
   lo muestra nuevamente sin necesidad de solicitarlo otra vez.
*/

// Si se encuetra un Nombre guardado puede saludarlo
window.addEventListener("DOMContentLoaded", () => {
  const nombreGuardado = localStorage.getItem("nombreUsuario");
  if (nombreGuardado) {
    saludo.textContent = `¡Hola, ${nombreGuardado}! Bienvenido de nuevo a CargoFlex`;
  }
});

// Evento para al hacer clic en el botón 'Saludar' solicita el ingreso del Nombre
btnSaludar.addEventListener("click", () => {
  const nombre = prompt("¿Cuál es tu nombre?");
  if (nombre && nombre.trim() !== "") {
    localStorage.setItem("nombreUsuario", nombre.trim());
    saludo.textContent = `¡Hola, ${nombre.trim()}! Gracias por visitar CargoFlex`;
  } else {
    saludo.textContent = "¡Bienvenido a CargoFlex!";
  }
});

/*
    Evento mouseover y mouseout sobre titulo con id 'servicios' pasando el mouse
    por encima se cambia el color del texto y se vuelve a su color original al quitar el cursor.
*/
resaltarLetra.addEventListener("mouseover", () => {
  resaltarLetra.style.color = "#748CAB";
});

resaltarLetra.addEventListener("mouseout", () => {
  resaltarLetra.style.color = "";
});