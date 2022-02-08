async function getCityWeather() 
{
    const url = 'http://localhost:3000/api/cities';

    const respuesta = await fetch(url);

    const data = await respuesta.json();

    return data;
}


async function showData() {
    const $app = document.querySelector("#app");
    const city = await getCityWeather();

    $app.textContent = city.name + ' ' + city.main.temp;
}

async function handleClick()
{
    this.textContent = "cargando";
    this.classList.toggle("cargando");
    await showData();
    this.textContent = "Actualizar";
    this.classList.toggle("cargando");
}


window.onload = function(){
    const $refreshBtn = document.querySelector("#actualizar");
    $refreshBtn.addEventListener('click', handleClick)

    showData();

}

