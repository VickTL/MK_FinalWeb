
var boton = document.getElementById('send');
boton.addEventListener('click', enviar(event));

function enviar(ev) {
  ev.preventDefault();

  var errores = [];
  var clasesError = document.querySelectorAll('.error');

  for ( var n = 0; n < clasesError.length; n++ ) {
    clasesError[n].classList.remove('error');
  }

  var nombre = document.getElementById('inputName').value;
  var email = document.getElementById('inputEmail').value;
  var mensaje = document.getElementById('inputMessage').value;


  if ( nombre === '' ) {
    document.getElementById('inputName').classList.add('error');
    errores.push('El campo nombre no puede estar vacío');
  }

  if ( email === '' ) {
    document.getElementById('inputEmail').classList.add('error');
    console.log("ERRORRR")
    errores.push('El campo email no puede estar vacío');
  }

  if ( mensaje === '') {
    document.getElementById('inputMessage').classList.add('error');
    errores.push('El campo mensaje no puede estar vacío');
  }

  var arroba = email.split('@');

  if ( arroba.length > 2) {
    document.getElementById('inputEmail').classList.add('error');
    errores.push('El campo email no puede contener más de una "arroba"');
  }

  if ( !(email.includes('.') || email.includes('@')) ) {
    document.getElementById('inputEmail').classList.add('error');
    errores.push('Por favor, introduce un e-mail válido.');
  }

  if ( errores.length > 0 ) {
    var textoError = '';
    for ( var n = 0; n < errores.length; n++ ) {
        textoError += '<p>' + errores[n] + '</p>';
    }
    document.getElementById('wrapperError').innerHTML = textoError
  }

  else {
    document.querySelector('form').submit();
  }
}
