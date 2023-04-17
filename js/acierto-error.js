
function acierto(lasTarjetas) {
  console.log("ACERTADO");
  lasTarjetas.forEach(function(elemento){
    elemento.classList.add("acertada");
  })
}

function error(lasTarjetas) {
  console.log("ERROR");
  lasTarjetas.forEach(function(elemento){
    elemento.classList.add("error");
  })

  setTimeout(
    function(){
      lasTarjetas.forEach(function(elemento){
        elemento.classList.remove("descubierta");
        elemento.classList.remove("error");
      })
    },1000)
  
  

  
}


