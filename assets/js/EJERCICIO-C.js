const form = document.getElementById('my-formC');

form.addEventListener("submit", function(evento) {
  evento.preventDefault();

  const fechaHoraIngreso = new Date(document.getElementById("fechaIngreso").value);
  const fechaHoraSalida = new Date(document.getElementById("fechaSalida").value);
  
  let tiempoTrabajado = fechaHoraSalida - fechaHoraIngreso;
  let horasTrabajadasTotal = Math.floor(tiempoTrabajado / (1000 * 60 * 60));
  let minutosTrabajados = Math.floor((tiempoTrabajado % (1000 * 60 * 60)) / (1000 * 60));
  let segundosTrabajados = Math.floor((tiempoTrabajado % (1000 * 60)) / 1000);
//DOM
  let mensaje = document.getElementById("mensaje");
  let horasTrabajadas = horasTrabajadasTotal.toString().padStart(2, '0')
  console.log(horasTrabajadas);
  
  if(fechaHoraSalida <= fechaHoraIngreso) {
    
    mensaje.innerHTML = `La fecha y hora de salida no pueden ser anteriores o iguales a la fecha y hora de ingreso`;
      
  }

  else if(fechaHoraIngreso<fechaHoraSalida && horasTrabajadas < 24){
      
   mensaje.innerHTML = `Horas trabajadas: ${horasTrabajadasTotal.toString().padStart(2, '0')}:${minutosTrabajados.toString().padStart(2, '0')}:${segundosTrabajados.toString().padStart(2, '0')}`;
  
  }
  
  else if (horasTrabajadas > 24){
    mensaje.innerHTML = `no puedes trabajar mas de 24 horas`;
  }
  
}

);
