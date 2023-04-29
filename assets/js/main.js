const form = document.getElementById('my-formB');

document.getElementById('my-formB').addEventListener("submit", function(evento) {
  evento.preventDefault();

  //OBTENER VALORES DE FORMULARIO
  const fechaIncorporacion = moment(document.getElementById("fechaIncorporacion").value)
  const fechaReciente = moment(document.getElementById("fechaReciente").value)

  // VERIFICAR QUE FECHA DE INGRESO ES ANTERIOR A FECHA RECIENTE PARA EJECUTAR LA FUNCION
  if(fechaIncorporacion < fechaReciente){
    
    //DOM
    let permanenciaDias = document.getElementById("permanenciaDias");
    let permanenciaMeses = document.getElementById("permanenciaMeses");
    let permanenciaTotal = document.getElementById("permanenciaTotal");
    let aniversarioDias = document.getElementById("aniversarioDias");
    
    //NUEVAS VARIABLES
    const diasAbs = fechaReciente.diff(fechaIncorporacion, 'days'); 
    const mesesAbs = fechaReciente.diff(fechaIncorporacion, 'months');
    const anios = fechaReciente.diff(fechaIncorporacion, 'years');

    //Setear fecha de aniversario
    let fechaAniversario = fechaIncorporacion; 
    fechaAniversario.year(fechaReciente.year());
    //30/01/2023

    //Setear cuando se cumplió el ultimo mes para calcular cuántos días lleva
    // fecha incorporación = 30/01/2020
    // fecha reciente = 28/04/2023

    let cumpleMes = moment({year:fechaReciente.year() , month:fechaReciente.month(), day: fechaIncorporacion.date()})
    //30/04/2023
    if (cumpleMes.date() > fechaReciente.date()) // 30>28
      cumpleMes.month(fechaReciente.month() -1) // cumpleMes 01/04/2023 ----> 30/03/2023

    let meses = mesesAbs - (12*anios)
    let dias = fechaReciente.diff(cumpleMes, "days")

    //Si fecha de aniversario ya pasó este año, se debe calcular con el siguiente año
    if (fechaAniversario < fechaReciente)
    //30/01/2023
      fechaAniversario.add(1, 'year')
    //30/01/2024
    const restaAniversario =  fechaAniversario.diff(fechaReciente, 'days');
    
    //ESCRIBIR EN EL DOM
    permanenciaDias.innerHTML = `Su permanencia en la organización es de: <b> ${diasAbs} días absolutos. </b>`
    permanenciaMeses.innerHTML = `Su permanencia en la organización es de: <b> ${mesesAbs} meses absolutos. </b>`
    permanenciaTotal.innerHTML = `Su permanencia en la organización es de: <b> ${anios} años, ${meses} meses</b> y <b>${dias} días. </b>`
    aniversarioDias.innerHTML = `Para completar el año de permanencia faltan: <b> ${restaAniversario} días. </b>`

  }
  else alert("La fecha de incorporación no puede ser superior a la fecha reciente ................. Tonto")
}
);

