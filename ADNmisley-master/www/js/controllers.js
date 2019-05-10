angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('AdnCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller("juegoCtrl",function($scope) {
  
    $(document).ready(function(){
  
var checkArray = []; // para verificar si las dos cartas con click son el mismo personaje
var idArray = []; //array para guardar los ids de las cartas que tienen click 
var contador = 0;
var fin = 0; 
var fields = document.querySelectorAll(".atras");


var images = [
"https://www.abc.es/media/sociedad/2017/03/29/piramide-kWtH-U203218072045BEI-620x600@abc.jpg",
"https://previews.123rf.com/images/designua/designua1502/designua150200013/36912939-bot%C3%B3n-con-vitaminas-set-el-%C3%A1cido-asc%C3%B3rbico-vitamina-c-retinol-vitamina-a-colecalciferol-vitamina-d3-tocofero.jpg",
"https://vitaminas.mundoasistencial.com/mundoasistencial/wp-content/uploads/sites/2/2016/03/rol-vitaminas-cuerpo-humano.jpg",
"https://www.salud.mapfre.es/wp-content/uploads/2016/07/nutricion-vitaminas-minerales-1-1100x408.jpg",
"https://www.infobae.com/new-resizer/LUQNBw4jeaRyaNn33HFfZZKDBDs=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/03/16161446/mix-5411-6-vitaminas-que-mejorarn-tu-cerebro-1920.jpg",
"https://st3.depositphotos.com/2800301/18599/v/1600/depositphotos_185994172-stock-illustration-kindergarten-nursery-preschool-school-kids.jpg",
"https://previews.123rf.com/images/prostoira777/prostoira7771701/prostoira777170100006/69260588-vector-de-pi%C3%B1a-aislado-en-blanco-refresque-la-fruta-ex%C3%B3tica-linda-del-icono-s%C3%ADmbolo-del-verano-vitamina-comi.jpg",
"https://estaticos.miarevista.es/uploads/images/article/58932beb5bafe8c1c5192f3e/alimentos-vitaminas.jpg",
"https://static.vix.com/es/sites/default/files/imj/otramedicina/V/Vitaminas-que-el-cuerpo-necesita-diariamente-1.jpg",
"https://www.abc.es/media/sociedad/2017/03/29/piramide-kWtH-U203218072045BEI-620x600@abc.jpg",
"https://previews.123rf.com/images/designua/designua1502/designua150200013/36912939-bot%C3%B3n-con-vitaminas-set-el-%C3%A1cido-asc%C3%B3rbico-vitamina-c-retinol-vitamina-a-colecalciferol-vitamina-d3-tocofero.jpg",
"https://vitaminas.mundoasistencial.com/mundoasistencial/wp-content/uploads/sites/2/2016/03/rol-vitaminas-cuerpo-humano.jpg",
"https://www.salud.mapfre.es/wp-content/uploads/2016/07/nutricion-vitaminas-minerales-1-1100x408.jpg",
"https://www.infobae.com/new-resizer/LUQNBw4jeaRyaNn33HFfZZKDBDs=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/03/16161446/mix-5411-6-vitaminas-que-mejorarn-tu-cerebro-1920.jpg",
"https://st3.depositphotos.com/2800301/18599/v/1600/depositphotos_185994172-stock-illustration-kindergarten-nursery-preschool-school-kids.jpg",
"https://previews.123rf.com/images/prostoira777/prostoira7771701/prostoira777170100006/69260588-vector-de-pi%C3%B1a-aislado-en-blanco-refresque-la-fruta-ex%C3%B3tica-linda-del-icono-s%C3%ADmbolo-del-verano-vitamina-comi.jpg",
"https://estaticos.miarevista.es/uploads/images/article/58932beb5bafe8c1c5192f3e/alimentos-vitaminas.jpg",
"https://static.vix.com/es/sites/default/files/imj/otramedicina/V/Vitaminas-que-el-cuerpo-necesita-diariamente-1.jpg"
];
// verificacion de los clicks
function clicked() { 
  if ($(this).find(".inner-wrap").hasClass("flipped")) {
    return;
  }
  $(this).find(".inner-wrap").toggleClass("flipped");
  checkArray.push($(this).find("img").attr("src"));
  idArray.push($(this).attr("id"));
  check();
}

$(".carta").on("click", clicked);
  
//reiniciar el juego
function reiniciar() {
  $(".atras").find("img").remove(); //quitar todas las imagenes actuales
  $(".carta .inner-wrap").removeClass("flipped"); // quitar la classe flipped para volver a su estado inicial
  checkArray = []; 
  idArray = [];
  contador = 0; 
  fin = 0;
  iniciarJuego();
}
//para verificar el fin del juego
function verificarFin() {
  if (fin === 18) { //si todas las cartas estan volteadas
    alert("Juego finalizado, lo has logrado en " + contador + " intentos");
    reiniciar();
  }
}
//para random de las imagenes 
function shuffleArray(array) { 
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function iniciarJuego() {

  

  var arr = shuffleArray(images); //array con las imagenes de forma aleatoria
 // append de las imagenes a la clase para la parte de atras de las cartas
  for (var i = 0; i < fields.length; i++) {
    var img = document.createElement("img");
    img.src = arr[i];
    fields[i].appendChild(img);
  }


}

function check() {
  //si los fields se  han hecho dos clicks 
  if (checkArray.length === 2) {
    $(".carta").off("click", clicked); 
    setTimeout(function(){
      //si no hay match
      if (checkArray[0] !== checkArray[1]) { 
        //voltear las dos cartas seleccionadas
        $("#" + idArray[0]).find(".inner-wrap").removeClass("flipped"); 
        $("#" + idArray[1]).find(".inner-wrap").removeClass("flipped"); 
        contador++;
        //vaciar los arrays para la siguiente eleccion
        checkArray = []; 
        idArray = []; 
        //habilitar el click de nuevo
        $(".carta").on("click", clicked);
      } else {

        contador++;
        
        fin += 2; // contador para el final del juego, se agregan dos para el contador de fin
        //vaciar los dos arrays
        checkArray = []; 
        idArray = []; 
        verificarFin(); 
        $(".carta").on("click", clicked); 
      }
      document.querySelector(".counter").innerHTML = contador;
    }, 800);  
  }
}



iniciarJuego();

});


})
