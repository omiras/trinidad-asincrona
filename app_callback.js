// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

button.addEventListener('click', function gestionarClick() {
    obtenerChiste(updateDOM);
    sigueTrabajando();
});

function sigueTrabajando() {
    console.log("El usuario sigue interactuando con la app Web");
}

async function obtenerChiste(cb) {
    // 1. Realizar una llamada a la API de chuck norris
    let url = "https://api.chucknorris.io/jokes/random";

    // Pedimos a la máquina contenida en la URL que nos de un chiste de chuck norris (petición GET)
    // 2. Esperar a la respuesta de la API para poder actualizar el DOM

    let response = await fetch(url);

    // 3. Convertir la respuesta a un tipo de datos que podamos entender en JavaScript para manejarlo (por ejemplo, para poner el chiste en el DOM)
    let chiste = await response.json();

    // 4. Invocamos la función de callback para devolver los datos del chiste obtenido
    cb();
}

function updateDOM(chiste) {
    // 4. Poner el valor de la propiedad 'value' en el contenedor id="display-joke".
    // Actualizamos la propiedad .textContent del contenedor jokeDiv, con el valor la propiedad .value del objeto 'chiste'
    console.log("#1: Respuesta de la API obtenida.");
    jokeDIV.textContent = chiste.value;
}