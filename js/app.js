// A module pattern should be used here
$( document ).ready(function() {
  console.log( "Jquery Cargado" );
});

console.log("app.js fue cargado con exito!");
var ubicacion;
var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=400x200&location=' + ubicacion;


$("form").on("submit", function(e){
	e.preventDefault();
	// console.log( e );
	var calle = $( ".calle" ).val();
	var ciudad = $( ".ciudad" ).val();
	var ubicacion = calle + ","+ ciudad;
	console.log(calle + ","+ ciudad);
	console.log( ubicacion );
	var streetviewUrl = "http://maps.googleapis.com/maps/api/streetview?size=600x400&location=" + ubicacion;
	$('.tucasa').html('<h2>Esta es tu dirección!</h2><img class="home" src="'+streetviewUrl+'" height="200" width="300" >').fadeIn( "slow", function() {
    // Animation complete
  });;
});




// //El status debe ser 200 (ok)
// $.ajax({
// method: "GET", //Generalmente las apis nos dejas extraer, no modificar.
// url: "some.php",//Ponemos la url
// data: { name: "John", location: "Boston" }
// })
// .done(function( msg ) {
// alert( "Data Saved: " + msg );
// });