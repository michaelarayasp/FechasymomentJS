function calcularHorasTrabajadas() {
    let totalHoras = 0;
    let totalMinutos = 0;
  
    for (let i = 1; i <= 8; i++) {
        let horasTrabajadas = parseInt(prompt(`Ingrese las horas de permanencia del trabajador ${i}:`));
  
        // Validar que las horas trabajadas estén entre 4 y 12
        while (isNaN(horasTrabajadas) || horasTrabajadas < 4  || horasTrabajadas > 12) {
          horasTrabajadas = parseInt(prompt("Lo siento, eso no es un número válido. Por favor ingresa un número de horas entre 4 y 12:"));
        }
  
        let minutosTrabajados = parseInt(prompt(`Ingrese los minutos de permanencia del trabajador ${i}:`));
  
        while (isNaN(minutosTrabajados) || minutosTrabajados < 0  || minutosTrabajados > 59 || (minutosTrabajados > 0 && horasTrabajadas == 12))  {
          minutosTrabajados = parseInt(prompt("Lo siento, eso no es un número válido. Por favor ingresa un número de minutos entre 0 y 59:"))
        }
      //   if (horasTrabajadas < 4 || horasTrabajadas > 12) {
      //       alert(`El trabajador ${i} ha ingresado un número de horas inválido. Por favor, inténtelo de nuevo.`);
      //       i--;
      //       continue;
      //   }
  
        // Validar que los minutos trabajados estén entre 0 y 59
      //   if (minutosTrabajados < 0 || minutosTrabajados > 59) {
      //       alert(`El trabajador ${i} ha ingresado un número de minutos inválido. Por favor, inténtelo de nuevo.`);
      //       i--;
      //       continue;
      //}
  
        totalHoras += horasTrabajadas;
        totalMinutos += minutosTrabajados;
    }
  
    // Si los minutos totales superan 59, convertirlos a horas
    if (totalMinutos > 59) {
        let horasAdicionales = Math.floor(totalMinutos / 60);
        totalHoras += horasAdicionales;
        totalMinutos = totalMinutos % 60;
    }
    
    let respuesta = document.getElementById("respuesta");
    respuesta.innerHTML = `Los 8 trabajadores han trabajado un total de ${totalHoras} horas y ${totalMinutos} minutos.`
  
    console.log(`Los 8 trabajadores han trabajado un total de ${totalHoras} horas y ${totalMinutos} minutos.`);
  }
  
//   let respuesta = document.getElementById("respuesta");
//     respuesta.innerHTML = `Los 8 trabajadores han trabajado un total de ${totalHoras} horas y ${totalMinutos} minutos.`