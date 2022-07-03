const URL = "https://api.thecatapi.com/v1/images/search"; /* URL de la API */
fetch(URL)
  .then((res) => res.json()) /* Conversión de la respuesta a un objeto JSON */
  .then((data) => {
    /* Manipulación del DOM */
    const imagen = document.querySelector("img");
    imagen.src = data[0].url;
  });
