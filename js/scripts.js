var grupoTarjetas1 = ["🐶", "🐺", "🐗", "🦓", "🦌", "🦁", "🐷", "🐵"];
var grupoTarjetas2 = ["🐊", "🐄", "🐍", "🐲", "🐀", "🐝", "🐔", "🦧"];
var grupoTarjetas3 = ["🦏", "🦔", "🦑", "🦣", "🐏", "🐖", "🦇", "🦆"];
var grupoTarjetas4 = ["🐉", "🦞", "🦕", "🦖", "🦨", "🦄", "🐙", "🦎"];

var totalTarjetas = grupoTarjetas4.concat(grupoTarjetas4);

// var totalTarjetas = grupoTarjetas1.concat(
//   grupoTarjetas2,
//   grupoTarjetas3,
//   grupoTarjetas4
// );

// var arrayAnidado = [
//   ["🐶", "🐺", "🐗", "🦓", "🦌", "🦁", "🐷", "🐵"],
//   ["🐊", "🐄", "🐍", "🦞", "🦄", "🐝", "🐔", "🦧"],
//   ["🦏", "🐙", "🦑", "🦣", "🐏", "🐖", "🦇", "🦆"],
//   ["🐉", "🐲", "🦕", "🦖", "🦨", "🐀", "🦔", "🦎"],
// ];

// añadir valor
// var nuevoTotalTarjetas = totalTarjetas.push("nuevo");

function barajarTarjetas() {
  var resultado;
  resultado = totalTarjetas.sort(function () {
    return 0.5 - Math.random();
  });
  return resultado;
}

function reparteTarjetas() {
  var mesa = document.querySelector("#mesa");
  var tarjetasBarajadas = barajarTarjetas();
  // vacíamo de contenido el div mesa en el HTML
  mesa.innerHTML = "";

  tarjetasBarajadas.forEach(function (elemento) {
    // elemento que contiene el array

    var tarjeta = document.createElement("div");

    // creamos contenido HTML
    tarjeta.innerHTML =
      '<div class="tarjeta" data-valor="' +
      elemento +
      '">' +
      '<div class="tarjeta__contenido">' +
      elemento +
      "</div>" +
      "</div>";

    mesa.appendChild(tarjeta);
  });
}

function descubrir() {
  var descubiertas;
  var totalDescubierta = document.querySelectorAll(".descubierta:not(.acertada)");

  if (totalDescubierta.length > 1) {
    return;
  }

  this.classList.add("descubierta");

  descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
  if (descubiertas.length < 2) {
    return;
  }

  comparar(descubiertas);
}

function comparar(tarjetasAComparar) {
  if (
    tarjetasAComparar[0].dataset.valor === tarjetasAComparar[1].dataset.valor
  ) {
    acierto(tarjetasAComparar);
  } else {
    error(tarjetasAComparar);
  }
}

function acierto(lasTarjetas) {
  console.log("ACERTADO");
  lasTarjetas.forEach(function(elemento){
    elemento.classList.add("acertada");
  })

}

function error(lasTarjetas) {
  console.log("ERROR");
  lasTarjetas.forEach(function(elemento){
    elemento.classList.remove("descubierta");
  })
  
}

reparteTarjetas();

document.querySelectorAll(".tarjeta").forEach(function (elemento) {
  elemento.addEventListener("click", descubrir);
});
