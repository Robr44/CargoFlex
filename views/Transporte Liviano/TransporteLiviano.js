console.log("holi");
//Array con los transportes 
let transportes = [
  { nombre: "Bicicleta", tipo: "bicicleta", precio: 200, imagen: "https://siman.vtexassets.com/arquivos/ids/5168470-800-800?v=638430294179430000&width=800&height=800&aspect=true", descripcion: "..." },
  { nombre: "Scooter", tipo: "scooter", precio: 400, imagen: "https://siman.vtexassets.com/arquivos/ids/5854082-800-800?v=638538070360230000&width=800&height=800&aspect=true", descripcion: "..." },
  { nombre: "Moto", tipo: "motocicleta", precio: 800, imagen: "https://images.ctfassets.net/8zlbnewncp6f/7k25XyUrNT5rfRzn58lwan/ecb5ef0e29ba099698afa339c431a898/victory-mrx-125-primer-plano.png?w=600&fm=webp&q=90", descripcion: "..." }
];

// Estado actual
let transportesFiltrados = [...transportes];//Array donde se aplicaran los filtros
let filtroActual = null; //Guarda el tipo de filtrado seleccionado por el usuario
let ordenActual = null; //Guarda el tipo de orden a mostras, menor precio a mayor o mayor precio a menor

// Elementos del DOM
const contenedorCatalogo = document.getElementById("catalogo");//seccion del catalogo
const filtroItems = document.querySelectorAll(".filtro-opcion");//Almacena los button de la lista de opciones
const ordenAsc = document.getElementById("orden-asc");
const ordenDesc = document.getElementById("orden-desc");

// Función para renderizar el catálogo
function MostrarCatalogo(lista) {
  contenedorCatalogo.innerHTML = "";

  if (lista.length === 0) {
    contenedorCatalogo.innerHTML = "<p>No hay transportes disponibles.</p>";
    return;
  }

  lista.forEach((item) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "card m-2";
    tarjeta.style.width = "200px";
    tarjeta.innerHTML = `
      <div class="card-body">
        <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}" />
        <h5 class="card-title">${item.nombre}</h5>
        <p class="card-text">Tipo: ${item.tipo}</p>
        <p class="card-text">Precio: $${item.precio}</p>
      </div>
    `;
    contenedorCatalogo.appendChild(tarjeta);
  });
}

// Función para ordenar
function ordenar(lista, orden) {
  ordenActual = orden;
  lista.sort((a, b) => orden === "asc" ? a.precio - b.precio : b.precio - a.precio);
}

// Eventos de filtro
filtroItems.forEach(item => {
  item.addEventListener("click", e => {
    const tipo = item.dataset.tipo;

    if (tipo === "todos") {
      filtroActual = null;
      transportesFiltrados = [...transportes];
    } else {
      filtroActual = tipo;
      transportesFiltrados = transportes.filter(t => t.tipo === tipo);
    }

    if (ordenActual !== null) {
      ordenar(transportesFiltrados, ordenActual);
    }

    MostrarCatalogo(transportesFiltrados);
  });
});

// Eventos de orden
ordenAsc.addEventListener("click", () => {
  ordenar(transportesFiltrados, "asc");
  MostrarCatalogo(transportesFiltrados);
});

ordenDesc.addEventListener("click", () => {
  ordenar(transportesFiltrados, "desc");
  MostrarCatalogo(transportesFiltrados);
});

// Cargar catálogo completo al cargar la pagina
document.addEventListener("DOMContentLoaded", () => {
  transportesFiltrados = [...transportes];
  if (ordenActual !== null) {
    ordenar(transportesFiltrados, ordenActual);
  }
  MostrarCatalogo(transportesFiltrados);
});