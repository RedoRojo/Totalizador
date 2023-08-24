import sumar from "./sumador";

const cantItems = document.querySelector("#cant-items");
 const precioItem = document.querySelector("#precio");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cant = Number.parseInt(cantItems.value);
  const precio=Number.parseInt(precioItem.value);
  div.innerHTML = "<p>" + cant + "</p>";
  div.innerHTML += "<p>" + precio + "</p>";
});
