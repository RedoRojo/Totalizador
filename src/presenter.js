import Totalizador from "./totalizador";

const cantItems = document.querySelector("#cant-items");
const precioItem = document.querySelector("#precio");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");
const estado = document.querySelector("#estado")
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cant = Number.parseInt(cantItems.value);
  const precio=Number.parseInt(precioItem.value);
  const estadoTexto = estado.value; 
  let tot = new Totalizador(estadoTexto, cant, precio); 
  div.innerHTML = " "
  div.innerHTML += "<p> Precio Neto ("+cant+"*$"+precio+"): $"+ tot.getPrecioNeto() + "</p>";
  console.log(tot.getDescuento())
  div.innerHTML += "<p> Descuento (" + tot.getDescuento() +"%): "+ tot.getPrecioDescuento() + "</p>";
  div.innerHTML += "<p> Impuesto para " +estadoTexto+"("+ tot.getImpuesto() +"%): "+ tot.getPrecioImpuesto() + "</p>";
  div.innerHTML += "<p> Precio Total (descuento e impuesto): " + tot.getPrecioTotalDescuento() + "</p>";
});
