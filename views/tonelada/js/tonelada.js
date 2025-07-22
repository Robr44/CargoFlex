const btnCambiarFondo = document.getElementById("btnCambiaFondo");
const colorselect = document.getElementById("colorselect");
const botones = document.querySelectorAll(".btnDetalles");
const cards = document.querySelectorAll(".card");

/* 
    addEventListener al botón con id 'btnCambiaFondo' 
    este botón permite cambiar el color de fondo de la página al hacer clic.
    El color seleccionado por el usuario en el elemento 'colorselect' se aplica como 
    el nuevo color de fondo.
*/
btnCambiarFondo.addEventListener("click", () => {
    const colorSeleccionado = colorselect.value;
    document.body.style.backgroundColor = colorSeleccionado;
});

/* 
    addEventListener a los botones con clase 'btnDetalles'. 
    Cada botón permite mostrar u ocultar la descripción del camión correspondiente al hacer clic. 
    Cambia el texto del botón para indicar si se puede ver más detalles o esconderlos.
*/
botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        const contenedor = boton.closest(".card-body");
        const detalle = contenedor.querySelector(".detalle");

        if (detalle.style.display === "block") {
            detalle.style.display = "none";
            boton.textContent = "Más Detalles";
        } else {
            detalle.style.display = "block";
            boton.textContent = "Ocultar Detalles";
        }
    });
});

/* 
    addEventListener a cada tarjeta con clase 'card' para aplicar un efecto visual al pasar el mouse.
    Cuando el cursor entra (mouseenter), se aplica una sombra más intensa para resaltar la tarjeta.
    Cuando el cursor sale (mouseleave), se elimina la sombra y vuelve a su estado normal.
*/
cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 0 10px rgba(0, 0, 0, 1)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "none";
    });
});