// Conseguir elementos del DOM
const addButton = document.getElementById('add-button');
const titleInput = document.getElementById('title-input');
const imageInput = document.querySelector('#image-input');
const descriptionInput = document.getElementById('description-input');
const cardsBox = document.querySelector('.cards-box');
const colorButton = document.getElementById('color-button')
const hideButton = document.getElementById('hide-button')
const backgroundButton = document.getElementById('background-button')


// Primero, vamos a añadir el comportamiento para cambiar el color
// de fondo
backgroundButton.addEventListener('click', (e) => {
    console.log(e);
    function randomChoice(arr) {
        return arr[Math.floor(arr.length * Math.random())];
    }

    const colors = ['red' , 'blue', 'pink', 'yellow', 'green'];

    // TODO: obtener el body del DOM y cambiar su background color.
    const body = document.querySelector('body');
    body.style.backgroundColor = randomChoice(colors);

    // TODO: agregar a localStorage el último color seleccionado
    localStorage.setItem('color', body.style.backgroundColor);
})











function verifyCard(title, image, description) {
    if ( title.length === 0 || image === './imgs/undefined' || description.length === 0 ) {
        return false
    } else {
        return true
    }
}

// Save card and add it to the cards section
addButton.addEventListener('click', () => {
    const title = titleInput.value;
    const imageFile = imageInput.files[imageInput.files.length - 1] || {};
    const image = `./imgs/${imageFile.name}`;
    const description = descriptionInput.value;

    // Verify that inputs are good
    if (!verifyCard(title, image, description)) {
        window.alert("Los inputs deben estar completos");
        return false;
    }

    // Creamos la carta, notar que más abajo debemos completar la función
    // createCardElement
    const card = createCardElement(title, image, description);

    // TODO: agregar la carta a la sección de cartas (HINT: appendChild)
    cardsBox.appendChild(card);

    // TODO: guardar la tarjeta nueva en localStorage
    saveCardToLocalStorage(title, image, description);

    return true;
});

// Create a card element
function createCardElement(title, image, description) {
    const card = document.createElement('div');
    card.classList.add('card');

    // TODO: Modificar el innerHTML de la carta
    // para mostrar la imagen, título y descripción
    // aquí pueden usar las clases card-title y card-description del CSS.
    card.innerHTML = `
        <img src="${image}" alt="${title}">
        <div class="card-title">${title}</div>
        <div class="card-description">${description}</div>
    `;

    return card;
}

// TODO: completar esta función que GUARDA las tarjetas en localStorage
function saveCardToLocalStorage(title, image, description) {
    const card = { title, image, description };
    
    let cards = JSON.parse(localStorage.getItem('cards')) || [];
    cards.push(card);
    localStorage.setItem('cards', JSON.stringify(cards));
}

// TODO: completar esta función que CARGA las tarjetas de localStorage
function loadCardsFromLocalStorage() {
    const cards = JSON.parse(localStorage.getItem('cards')) || [];

    cards.forEach(card => {
        const cardElement = createCardElement(card.title, card.image, card.description);
        cardsBox.appendChild(cardElement);
    });
}




// TODO: añadir event listener para esconder las tarjetas
// Hint: Recuerden las opciones de display de CSS
hideButton.addEventListener('click', () => {

    cardsBox.style.display !== 'none' ? cardsBox.style.display = 'none' : cardsBox.style.display = 'flex';
})


// TODO: añadir event listener para que se mantenga el cambio de color
// Hint: Investiguen sobre el evento load de window y usen localStorage
window.addEventListener('load', () => {
    const body = document.querySelector('body');
    const color = localStorage.getItem('color');
    body.style.backgroundColor = color;
});


// TODO: añadir event listener para que aparezcan las tarjetas al cargar la página
// Hint: Investiguen sobre el evento DOMContentLoaded de document
document.addEventListener('DOMContentLoaded', () => {
    loadCardsFromLocalStorage();
});

// TODO: añadir event listener para cambiar de color las tarjetas
// Hint: Pueden basarse en el código para cambiar el color del background.

colorButton.addEventListener('click', () => {
    function randomChoice(arr) {
        return arr[Math.floor(arr.length * Math.random())];
    }


    const cards = document.querySelectorAll('.card');
    const colors = ['red' , 'blue', 'pink', 'green', 'brown']
    cards.forEach(card => {
        card.style.backgroundColor = randomChoice(colors);
    }
    )
})