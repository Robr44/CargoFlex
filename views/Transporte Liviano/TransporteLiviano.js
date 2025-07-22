//Array con los transportes
let transportes = [
  {nombre: "Isomax CargaLite 2000", tipo: "camion", precio:"17200.00", imagen: "https://inchcapelatam.sirv.com/JAC/X200SCPCE/X200-1000x493-pick-up.png", descripcion: "Velocidad Maxima:110km/h<br>Capacidad maxima:2500kg<br>Camion de Carga Diesel"},
  {nombre: "Abound Ebike", tipo: "bicicleta", precio: "499.99", imagen: "https://www.rei.com/media/0cc59b6c-e46b-4ef0-b8a5-f39c7f897dc9?size=2000", descripcion: "Velocidad Maxima: 32km/h<br>Capacidad Maxima:200kg<br>Top performance Cargo Bike" },
  {nombre: "Three Wheel Motorized Cargo Tricycle 175CC Air", tipo: "motocicleta", precio:"1100.00", imagen: "https://www.cargo-motorcycle.com/photo/pl34469764-three_wheel_motorized_cargo_tricycle_175cc_air_cooling_cdi_ignition.jpg", descripcion: "Velocidad Maxima:60km/h<br>Capacidad maxima:560kg<br>Motocicleta Electrica de Carga" },
  {nombre: "XPedition 2.0 Stratus White eBike", tipo: "bicicleta", precio: "850.90", imagen: "https://lectricebikes.com/cdn/shop/files/XPedSingleWhitePads.webp?v=1739982860&width=1920", descripcion: "Velocidad Maxima: 45km/h<br>Capacidad Maxima:204kg<br>Bicicleta Electrica de Carga" },
  {nombre: "Voltrux EcoHauler V1 Electric Vehicle", tipo: "camion", precio:"15200.00", imagen: "https://img.freepik.com/fotos-premium/camion-carga-pequeno-aislado-sobre-fondo-blanco-trazado-recorte_416458-487.jpg", descripcion: "Velocidad Maxima:100km/h<br>Capacidad maxima:2000kg<br>Camion Electrico de Carga"},
  {nombre: "Automatic Lifting 250CC Cargo Tricycle 3 Wheel", tipo: "motocicleta", precio:"2100.00", imagen:"https://www.cargo-motorcycle.com/photo/pl20854813-automatic_lifting_250cc_cargo_tricycle_chinese_3_wheel_motorcycle_double_rear_wheels.jpg", descripcion: "Velocidad Maxima:65km/h<br>Capacidad maxima:200kg<br>Motocicleta Industrial de Carga" },
  {nombre: "MADSEN DK2 Bucket Bike", tipo: "bicicleta", precio: "800.00", imagen: "https://www.madsencycles.com/cdn/shop/files/DKNavyelectricluxnocrate.jpg", descripcion: "Velocidad Maxima: 30km/h<br>Capacidad Maxima:204kg<br>Bicicleta Electrica de Carga" },
  {nombre: "Air Cooled Three Wheel Cargo Motorcycle 200cc", tipo: "motocicleta", precio:"3200.00", imagen: "https://www.cargo-motorcycle.com/photo/pl33114369-air_cooled_three_wheel_cargo_motorcycle_200cc_shaft_transmission.jpg", descripcion: "Velocidad Maxima:60km/h<br>Capacidad maxima:1500kg<br>Motocicleta Electrica de Carga" },
  {nombre: "Cargomax UrbanFlex 3.5", tipo: "camion", precio:"13200.00", imagen: "https://redson.pe/wp-content/uploads/2020/10/carroceria-para-camion-2.png", descripcion: "Velocidad Maxima:120km/h<br>Capacidad maxima:3500kg<br>Camion de Carga Diesel" }
];

// Estado actual
let transportesFiltrados = [...transportes];//Array donde se aplicaran los filtros
let filtroActual = null; //Guarda el tipo de filtrado seleccionado por el usuario
let ordenActual = null; //Guarda el tipo de orden a mostras, menor precio a mayor o mayor precio a menor

// Elementos del DOM
const contenedorCatalogo = document.getElementById("catalogo-prod");//contenedor del catalogo
const filtroItems = document.querySelectorAll(".filtro-opcion");//Almacena los button de la lista de opciones
const ordenAsc = document.getElementById("orden-asc");//almacena el button orden-asc
const ordenDesc = document.getElementById("orden-desc");//almacena el button orden-desc
const modoOscuro= document.getElementById("flexSwitchCheckDefault"); //almacena el boton switch para el modo oscuro

// Función para mostrar el catálogo
function MostrarCatalogo(lista) {
  contenedorCatalogo.innerHTML = "";//Limpia el contenedor

  if (lista.length === 0) {//si el array no tiene elementos muestra un mensaje en la pagina
    contenedorCatalogo.innerHTML = "<p>No hay transportes disponibles.</p>";
    return;
  }

  lista.forEach((item) => {
    // Crear contenedor de columna para cada tarjeta
    const columna = document.createElement("div");
    columna.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-3"; // responsive: full ancho en móvil, luego 2 por fila, luego 3, luego 4

    // Crear la tarjeta
    const tarjeta = document.createElement("div");
    tarjeta.className = "card h-100 d-flex flex-column"; // h-100 para que todas las tarjetas tengan la misma altura
    //elementos de la tarjeta
    tarjeta.innerHTML = `
    <img src="${item.imagen}" class="card-img-top" style="height: 200px; object-fit: contain; background-color: #ffffffff; width: 100%;" alt="${item.nombre}" />
    <div class="card-body d-flex flex-column ">
    <h5 class="card-title" style="text-align:center;">${item.nombre}</h5>
    <p class="card-text" style="padding:1rem; text-align:center">${item.descripcion}</p>
    <p class="mt-auto fw-bold" style="text-align: right;">Precio: $${item.precio}</p>
    </div>
    `;

    // Poner la tarjeta dentro de la columna
    columna.appendChild(tarjeta);

    // Agregar la columna al catálogo
    contenedorCatalogo.appendChild(columna);
  });
}

// Función para ordenar
function ordenar(lista, orden) {
  ordenActual = orden;//obtenemos el orden actual
  lista.sort((a, b) => orden === "asc" ? a.precio - b.precio : b.precio - a.precio); //se resta el valor para evaluar cual de los dos es menor
}


// Eventos de filtro
filtroItems.forEach(item => {
  item.addEventListener("click", e => {  //evento click
    const tipo = item.dataset.tipo; //obtenemos el dato del boton que selecciono el usuario

    if (tipo === "todos") {
      filtroActual = null; //reseteamos el filtro
      transportesFiltrados = [...transportes]; //almacenamos del array original en el array de filtrado
    } else {
      filtroActual = tipo;
      transportesFiltrados = transportes.filter(transporte => transporte.tipo === tipo);//filtramos segun la propiedad tipo
    }

    if (ordenActual !== null) { //si el usuario ha seleccionado un orden manda a llamar la funcion ordenar, para que ordene el array
      ordenar(transportesFiltrados, ordenActual);
    }

    MostrarCatalogo(transportesFiltrados); //llama a la funcion Mostrar catalogo para mostrar los productos en la pagina html
  });
});

// Eventos de orden
ordenAsc.addEventListener("click", () => {  //liga un evento click al boton orden-asc
  ordenar(transportesFiltrados, "asc");//llama la funcion ordenar con el parametro asc, para que se ordene de menor a mayor precio
  MostrarCatalogo(transportesFiltrados);//Muestra el catalogo
});

ordenDesc.addEventListener("click", () => {// Evento al hacer clic en el botón de orden descendente
  ordenar(transportesFiltrados, "desc");  // Se ordena el array de forma descendente
  MostrarCatalogo(transportesFiltrados);//Muestra el catalogo
});

//evento de modo Oscuro
modoOscuro.addEventListener("click", () => {//liga un evento al boton switch para el modo oscuro
  document.body.classList.toggle("oscuro");//si no existe la clase oscuro en el body la agrega y si ya existe la clase la elimina
});

// Cargar catálogo completo al cargar la pagina
document.addEventListener("DOMContentLoaded", () => { //Evento al cargar la pagina
  transportesFiltrados = [...transportes];//el array empieza sin filtrados
  if (ordenActual !== null) {//si hay un orden establecido lo ordena
    ordenar(transportesFiltrados, ordenActual);
  }
  MostrarCatalogo(transportesFiltrados);//Muestra el catalogo
});