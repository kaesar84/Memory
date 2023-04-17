function iniciar() {
  movimientos = 0;
  segundos=0;
  minutos=0;
  segundosTexto=0;
  minutosTexto=0;
 
  reparteTarjetas();
  document.querySelector("#mov").innerText = "00";
  document.querySelector("#feedback").classList.remove("visible");
  
  iniciaCronometro();
  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.addEventListener("click", descubrir);
  });

 
}

iniciar();

document.querySelector(".reiniciar").addEventListener("click", iniciar);
