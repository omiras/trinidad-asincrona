// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

button.addEventListener('click', function () {
    getRandomJoke();
})

function getRandomJoke() {
    const url = 'https://api.chucknorris.io/jokes/random'

    fetch(url).
        then(response => response.json()).
        then(data => data)

    // Actualizar el DOM con el chiste obtenido
    updateDOM(data)
}

function updateDOM(data) {
    console.log("Chiste obtenido: ", data.value)
    jokeDIV.innerHTML = data.value
}