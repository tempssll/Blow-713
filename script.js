// Función para ocultar el splash y mostrar el contenido principal después de cargar todo
window.addEventListener("load", function () {
  const splashScreen = document.getElementById("splash-screen");
  const mainContent = document.getElementById("main-content");

  // Espera 1.5 segundos antes de ocultar el splash y mostrar el contenido principal
  setTimeout(
    function () {
      splashScreen.style.display = "none";
      mainContent.style.display = "block";
    },
    0,
    1
  ); // Cambia este valor para ajustar el tiempo de espera

  // Agregar evento de clic al contenido principal para cerrar la barra lateral
  mainContent.addEventListener("click", function (event) {
    const sidebar = document.getElementById("sidebar");
    const toggleButton = document.getElementById("toggleButton");

    // Verificar si el clic proviene del botón VER o la barra lateral
    if (event.target !== toggleButton && event.target !== sidebar) {
      sidebar.style.left = "-390px";
    }
  });
});

// Función para mostrar/ocultar el menú al hacer clic en el botón VER
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.left = sidebar.style.left === "10px" ? "-200px" : "0px";
}

// Función para mostrar el contenido del menú seleccionado

/* ACTUALIZAR LA FECHA CADA AÑO */
function actualizarFecha() {
  // Obtenemos la fecha actual
  var fechaActual = new Date();

  // Obtenemos el año actual
  var añoActual = fechaActual.getFullYear();

  // Actualizamos el contenido del elemento HTML con el año actual
  document.getElementById("fecha").textContent = "Año actual: " + añoActual;
}

// Llamamos a la función para actualizar la fecha cuando se carga la página
actualizarFecha();

// Programamos la actualización anual usando setInterval
setInterval(actualizarFecha, 1000 * 60 * 60 * 24 * 365); // Actualizar cada 365 días

/* Funcion de  Buscador de texto */
var fuse;
document.addEventListener("DOMContentLoaded", function () {
  var options = {
    keys: ["textContent"],
    includeScore: true,
  };
  var ul = document.querySelector("ul");
  var li = ul.getElementsByTagName("li");
  var links = Array.from(li).map((item) => item.querySelector("a"));
  fuse = new Fuse(links, options);
});

function search() {
  var input, filter, result;
  input = document.getElementById("searchInput");
  filter = removeAccents(input.value); // Convertir a mayúsculas y quitar tildes

  // Realizar la búsqueda con fuse.js
  result = fuse.search(filter);

  var ul = document.querySelector("ul");
  var li = ul.getElementsByTagName("li");

  for (var i = 0; i < li.length; i++) {
    if (result.some((item) => item.item === li[i].querySelector("a"))) {
      li[i].style.color = "red"; // Resaltar en rojo
      li[i].style.display = "";
    } else {
      li[i].style.color = ""; // Restaurar el color predeterminado
      li[i].style.display = "none";
    }
  }

  // Enfocar automáticamente el primer resultado si hay resultados
  if (result.length > 0) {
    result[0].item.focus();
  }
}
result[0].item.focus();

// Función para quitar tildes
function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function clearSearch() {
  var input = document.getElementById("searchInput");
  input.value = ""; // Limpiar el contenido del campo de búsqueda
  search(); // Realizar una búsqueda vacía para mostrar todos los elementos nuevamente
}

//MODO OSCURO MODO NORMAL
document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("toggleSwitch");

  toggleSwitch.addEventListener("change", function () {
    if (toggleSwitch.checked) {
      document.body.classList.add("dark-mode");
      document.getElementById("modeText").innerText = "Modo Oscuro";
    } else {
      document.body.classList.remove("dark-mode");
      document.getElementById("modeText").innerText = "Modo Blanco";
    }
  });
});

/* DESPLIEGUE DEL MENU JUEGOS O CATEGORIAS */
document.addEventListener("DOMContentLoaded", function () {
  const juegosDropdown = document.getElementById("juegosDropdown");
  const juegosContent = juegosDropdown.querySelector(".dropdown-content");

  juegosDropdown.addEventListener("mouseenter", function () {
    juegosContent.style.display = "block";
  });

  juegosDropdown.addEventListener("mouseleave", function () {
    juegosContent.style.display = "none";
  });
});

// *************************************++ Función para obtener y mostrar la fecha actual
// Función para obtener y mostrar el día y el mes actual
// Función para mostrar la fecha completa en formato DD/MM/YYYY
function mostrarFecha() {
  var fechaElemento = document.getElementById("fecha");
  var fechaActual = new Date();
  var dia = fechaActual.getDate();
  var mes = fechaActual.getMonth() + 1; // Los meses van de 0 a 11
  var año = fechaActual.getFullYear();

  // Formatear el día y el mes para que tengan 2 dígitos si es necesario
  var diaFormateado = ("0" + dia).slice(-2);
  var mesFormateado = ("0" + mes).slice(-2);

  // Construir la cadena de la fecha en formato DD/MM/YYYY
  var fechaFormateada = diaFormateado + "/" + mesFormateado + "/" + año;

  // Actualizar el contenido del elemento con el id "fecha"
  fechaElemento.textContent = fechaFormateada;
}

// Llamar a la función mostrarFecha para mostrar la fecha actual
mostrarFecha();
