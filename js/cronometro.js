
function iniciaCronometro() {
  // clearInterval(cronometro);
 

    function actualizarContadorCrono() {
     

        segundos = segundos +1;
        if (segundos > 59){
          segundos = 00;
          minutos = minutos +1;
        }
        segundosTexto = segundos;
        minutosTexto = minutos;
        
      if(segundos< 10){
          segundosTexto ="0"+segundos;
      }
      if(minutos<10){
          minutosTexto="0"+minutos;
      }
      
      document.querySelector("#segundos").innerHTML= segundosTexto;
      document.querySelector("#minutos").innerHTML=minutosTexto;
      
      }

      var cronometro =setInterval(actualizarContadorCrono, 1000);
}





