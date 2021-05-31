
var salto = 600;
var avances = 0;
var items;
var maxAvances;
var itemsVisibles = 2;

document.addEventListener("DOMContentLoaded", init);

function init() {
    items = document.getElementsByClassName('vagon');
    maxAvances = items.length - itemsVisibles;

    var butAnterior = document.getElementById('atrasCarrusel');
    var butSiguiente = document.getElementById('adelanteCarrusel');

    butSiguiente.addEventListener("click", adelante);
    butAnterior.addEventListener("click", atras);
}

function adelante(ev) {
  ev.preventDefault();

  if ( avances < maxAvances ){
      avances++;
      var carrusel = document.querySelector('.vagonesCarrusel');
      carrusel.style.marginLeft = (salto*avances)*-1+'px';
  }
}

function atras(ev) {

    ev.preventDefault();

    if (avances > 0){
      avances--;
      var carrusel = document.querySelector('.vagonesCarrusel');
      carrusel.style.marginLeft = (salto*avances)*-1+'px';
    }
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

function atras(evt){

    evt.preventDefault();


if (avances > 0){
  avances--;
  var carrusel = document.querySelector('.carrusel');
  carrusel.style.marginLeft = '(salto*avances)*-1+'px'';

}

}*/
