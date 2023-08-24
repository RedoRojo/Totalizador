import sumar from "./sumador";

const cantItems = document.querySelector("#cant-items");
// const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cant = Number.parseInt(cantItems.value);

  div.innerHTML = "<p>" + cant + "</p>";
});
