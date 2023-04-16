var grupoTarjetas1 = ["🐶", "🐺", "🐗", "🦓", "🦌", "🦁", "🐷", "🐵"];
var grupoTarjetas2 = ["🐊", "🐄", "🐍", "🐲", "🐀", "🐝", "🐔", "🦧"];
var grupoTarjetas3 = ["🦏", "🦔", "🦑", "🦣", "🐏", "🐖", "🦇", "🦆"];
var grupoTarjetas4 = ["🐉", "🦞", "🦕", "🦖", "🦨", "🦄", "🐙", "🦎",];

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

function reparteTarjetas() {
  var mesa = document.querySelector("#mesa");
  // vacíamo de contenido el div mesa en el HTML
  mesa.innerHTML = "";

  totalTarjetas.forEach(function (elemento) {
    // elemento que contiene el array
    
    var tarjeta = document.createElement("div");

    // creamos contenido HTML
    tarjeta.innerHTML =
      '<div class="tarjeta">' +
      '<div class="tarjeta__contenido">' +
      elemento +
      "</div>" +
      "</div>";

    mesa.appendChild(tarjeta);
  });
}

function descubrir() {
    this.classList.add("descubierta");
  }
  
  reparteTarjetas();
  
  document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.addEventListener("click", descubrir);
  });



