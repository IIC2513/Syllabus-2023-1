// Conseguir elementos del DOM
const addButton = document.getElementById('add-button');
const titleInput = document.getElementById('title-input');
const cardsSection = document.getElementById('cards-section');
const backgroundButton = document.getElementById('background-button')
// TODO: añadir los demás elementos necesarios del DOM




// Evento para cambiar el color de fondo.
backgroundButton.addEventListener('click', (e) => {
    function randomChoice(arr) {
        return arr[Math.floor(arr.length * Math.random())];
    }

    const colors = ['red' , 'blue', 'pink', 'yellow', 'green'];

    // TODO: obtener el body del DOM y cambiar su background color.

    // TODO: agregar a localStorage el último color seleccionado
})




// Esta función sirve para verificar los inputs de una tarjeta nueva, NO MODIFICAR
function verifyCard(title, image, description) {
    if ( title.length === 0 || image === './imgs/undefined' || description.length === 0 ) {
        return false
    } else {
        return true
    }
}

// TODO: completar el evento para añadir una tarjeta nueva.
addButton.addEventListener('click', () => {
    // En esta parte de la función recuperamos los inputs del usuario 
    // y los guardamos en constantes
    const title = titleInput.value; // obtenemos el título

    // TODO: añadir los otros inputs


    // Ahora, usando la función anterior, verificamos
    // que los inputs son válidos
    if (!verifyCard(title, image, description)) {
        window.alert("Los inputs deben estar completos");
        return false;
    }

    // Creamos la carta, notar que más abajo debemos completar la función
    // createCardElement
    const card = createCardElement(title, image, description);

    // TODO: agregar la carta a la sección de cartas (HINT: appendChild)
    

    // TODO: guardar la tarjeta nueva en localStorage
    

    return true;
});



// La siguiente función debe crear un elemento card
// a partir de su titulo, imagen y descripcion
function createCardElement(title, image, description) {
    const card = document.createElement('div');  // creamos el div para la carta
    card.classList.add('card'); // le añadimos la clase carta al div

    // TODO: Modificar el innerHTML de la carta
    // para mostrar la imagen, título y descripción
    // aquí pueden usar las clases card-title y card-description del CSS.


    return card;
}



// TODO: completar esta función que GUARDA las tarjetas en localStorage
function saveCardToLocalStorage(title, image, description) {
    const card = { title, image, description };
    
    //TODO: completar
}



// TODO: completar esta función que CARGA las tarjetas de localStorage
function loadCardsFromLocalStorage() {
    // TODO: completar
}




// TODO: añadir event listener para que aparezcan las tarjetas al cargar la página
// Hint: Investiguen sobre el evento DOMContentLoaded de document




// TODO: añadir event listener para que se mantenga el cambio de color
// Hint: Investiguen sobre el evento load de window y usen localStorage




// TODO: añadir event listener para esconder las tarjetas
// Hint: Recuerden las opciones de display de CSS




// TODO: añadir event listener para cambiar de color las tarjetas
// Hint: Pueden basarse en el código para cambiar el color del background.