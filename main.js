const URL = "https://api.thecatapi.com/v1/images/search"; /* URL de la API */
let btnRequest = document.getElementById("btnUpdate");

btnRequest.addEventListener("click", (event) => {
  requestAPI(URL);
});

function requestAPI(url) {
  fetch(url)
    .then((res) => res.json()) /* Conversión de la respuesta a un objeto JSON */
    .then((data) => {
      /* Manipulación del DOM */
      const imagen = document.querySelector("img");
      imagen.src = data[0].url;
    });
}
