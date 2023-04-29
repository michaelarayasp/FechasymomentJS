const form = document.getElementById('my-formA');

form.addEventListener("submit", function(evento) {
  evento.preventDefault();
  const fechaForm = document.getElementById("fechaNacimiento").value;
  
  let diaquenacio = document.getElementById("diaquenacio");
  let diferenciaanios = document.getElementById("diferenciaanios");
  let cantidadmeses = document.getElementById("cantidadmeses");
  let cantidaddias = document.getElementById("cantidaddias");
  let tiempoCumpleAnios = document.getElementById("tiempoCumpleAnios");
  let horaConsulta = document.getElementById("horaConsulta");

  const fechaCumpleAnios = moment(fechaForm);
  console.log(fechaCumpleAnios);

  const fechaHoy = moment();
  console.log(fechaHoy);

  //moment().format('dddd');  Thursday

  const elDiaQueNacio = fechaCumpleAnios.format('dddd');
  diaquenacio.innerHTML = `El día que nació fue: ${elDiaQueNacio}`;

  const diferenciaEnDias = fechaHoy.diff(fechaCumpleAnios, 'days');
  console.log(diferenciaEnDias);
  const duracion = moment.duration(diferenciaEnDias, 'days');

  console.log("----->"+duracion);
  diferenciaanios.innerHTML = `La diferencia es de ${duracion.years()} años, ${duracion.months()} meses y ${duracion.days()} días.`;

  const diferenciaEnMeses = fechaHoy.diff(fechaCumpleAnios, 'months');
  cantidadmeses.innerHTML = `La cantidad de meses que tiene son: ${diferenciaEnMeses} meses`;
  cantidaddias.innerHTML = `La cantidad de días que tiene son: ${diferenciaEnDias} días`;

  
  let cumpleAnios = moment({year:fechaHoy.year() , month:fechaCumpleAnios.month(), day: fechaCumpleAnios.date()});
    //30/04/2023
      
      //DIAS QUE FALTAN PARA SU PROXIMO CUMPLEAÑOS
      if (cumpleAnios < fechaHoy){
        cumpleAnios.add(1, 'year')
        const restacumpleAnios = cumpleAnios.diff(fechaHoy,'days');
        tiempoCumpleAnios.innerHTML = `Para su próximo cumplea años faltan: ${restacumpleAnios} días`;
      }
      else if (cumpleAnios == fechaHoy){
        tiempoCumpleAnios.innerHTML = `Felicidades desgraciado, hoy estas mas viejo`;

      }

      //La hora en que ha realizado su consulta es: hh:mm:ss AM/PM (puede ser en formato 24 horas)
      var horaActual = moment().format('HH:mm:ss');
      horaConsulta.innerHTML =`La hora en que ha realizado su consulta es: ${horaActual}`;
      ;});


