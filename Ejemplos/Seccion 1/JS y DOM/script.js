const botonRojo = document.getElementById('pintar-rojo');
const botonAzul = document.getElementById('pintar-azul');
const botonVerde = document.getElementById('pintar-verde');
const botonParche = document.getElementById('parche-bug');

// Recordar que gracias a hoisting podemos definir cosas después de usarlas (a nivel de código)
botonRojo.addEventListener('click', pintarRojo);
botonAzul.addEventListener('click', pintarAzul);
// El botón verde tiene un bug...
botonVerde.addEventListener('click', funcionConBug);
// Así que lo parchamos con un botón
botonParche.addEventListener('click', parcheParaBug);

function pintarRojo(event) {
  /*
        Podemos acceder al elemento botón desde JS de 4 maneras:
        * Usando la variable `botonRojo` ya definida
        * Usando `document.getElementById` para buscar el botón
        * Usando la keyword `this` (en este contexto es quien llama a la función)
        * Usando `event.currentTarget` (incluso `event.target`)
    */
  this.classList.add('pintado-rojo');
  /*
        Definí una clase CSS en style.css para este propósito
        (ver archivo style.css)
    */
}

function pintarAzul(event) {
  /*
        También podemos cambiar el estilo directamente,
        lo que tendrá prioridad por sobre lo que definan
        las clases CSS del elemento
    */
  this.style.backgroundColor = 'blue';
  this.style.color = 'white';
}

function funcionConBug(event) {
  // El bug es que cada click agrega un nuevo tag P
  const mensajesElement = document.getElementById('mensajes');
  let mensajesHTML = mensajesElement.innerHTML;
  mensajesHTML += '<p>Bug</p>';
  mensajesElement.innerHTML = mensajesHTML;
  // Este bug es bien molesto... se acuerda cuántas veces se ha ejecutado
  let numeroActivaciones = localStorage.numeroActivaciones ?? 0;
  numeroActivaciones = Number(numeroActivaciones); // Recordar que se almacena como string
  localStorage.numeroActivaciones = numeroActivaciones + 1;
}

// Esta función se ejecuta cuando se carga la página...
// ... todo para recordarnos del bug
window.addEventListener('load', () => {
  const mensajesElement = document.getElementById('mensajes');
  let mensajesHTML = mensajesElement.innerHTML;
  const numeroActivaciones = Number(localStorage.numeroActivaciones) || 0;
  for (let i = 0; i < numeroActivaciones; i++) {
    mensajesHTML += '<p>Bug</p>';
  }
  mensajesElement.innerHTML = mensajesHTML;
});

function parcheParaBug(event) {
  const mensajesElement = document.getElementById('mensajes');
  const ultimoMensaje = mensajesElement.lastElementChild;
  if (ultimoMensaje == mensajesElement.firstElementChild) {
    return;
  }
  mensajesElement.removeChild(ultimoMensaje);
  const numeroActivaciones = Number(localStorage.numeroActivaciones) || 0;
  localStorage.numeroActivaciones = numeroActivaciones - 1;
}
