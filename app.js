// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

button.addEventListener('click', function () {
    obtenerChiste();
    console.log("#2: El usuario puede seguir trabajando mientras espera la respuesta de la API");
});

async function obtenerChiste() {
    // 1. Realizar una llamada a la API de chuck norris
    let url = "https://api.chucknorris.io/jokes/random";

    // Pedimos a la máquina contenida en la URL que nos de un chiste de chuck norris (petición GET)
    // 2. Esperar a la respuesta de la API para poder actualizar el DOM

    let response = fetch(url);

    // 3. Convertir la respuesta a un tipo de datos que podamos entender en JavaScript para manejarlo (por ejemplo, para poner el chiste en el DOM)
    let chiste = response.json();

    // 4. Poner el valor de la propiedad 'value' en el contenedor id="display-joke".
    // Actualizamos la propiedad .textContent del contenedor jokeDiv, con el valor la propiedad .value del objeto 'chiste'
    console.log("#1: Respuesta de la API obtenida.");
    jokeDIV.textContent = chiste.value;

}