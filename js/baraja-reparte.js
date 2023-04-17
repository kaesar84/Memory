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