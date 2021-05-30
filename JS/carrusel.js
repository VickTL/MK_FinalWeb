
document.addEventListener("DOMContentLoaded",init );

function init() {

  var butAnterior = document.getElementByClassName('botonA');
  var butSiguiente = document.getElementByClassName('botonAt');

  butSiguiente.addEventListener("onclick", adelante)
  butAnterior.addEventListener("onclick",atras)
}

function adelante(ev){
  ev.preventDefault();
  if ( avances < maxAvances ){

      avances++;
      var carrusel = document.querySelector('.carrusel');
      carrusel.style.marginLeft = '(salto*avances)*-1+'px'';

  }

}

fuction atras(evt){

    evt.preventDefault();


if (avances > 0){
  avances--;
  var carrusel = document.querySelector('.carrusel');
  carrusel.style.marginLeft = '(salto*avances)*-1+'px'';

}







/*document.addEventListener("DOMContentLoaded", init );

function init() {



  maxAvances = item.length - itemsVisibles;

  var atrasCarrusel = documnet.getElementById('atrasCarrusel');
  var adelanteCarrusel = documnet.getElementById('adelanteCarrusel');


 adelanteCarrusel.addEventListener("click", adelante );
 atrasCarrusel.addEventListener("click", atras );

}


var salto = 600;
var avances = 0;
var items=2;
var maxAvances;
var itemsVisibles = 3;



function adelante(evt){

  evt.preventDefault();

  if ( avances < maxAvances ){

      avances++;
      var carrusel = document.querySelector('.carrusel');
      carrusel.style.marginLeft = '(salto*avances)*-1+'px'';

  }



}

fuction atras(evt){

    evt.preventDefault();


if (avances > 0){
  avances--;
  var carrusel = document.querySelector('.carrusel');
  carrusel.style.marginLeft = '(salto*avances)*-1+'px'';

}

}*/
