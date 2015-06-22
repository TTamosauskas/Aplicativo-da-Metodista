document.addEventListener('deviceready', onDeviceReady, false);

//$(document).ready(function(){
function onDeviceReady() {

    function disp(pos) {
	var startingLocation = pos.coords.latitude + "," + pos.coords.longitude;
	 
	 $(".getIt").each(function(){

		var endingLocation = $(this).attr('value');
		var URLMAP = "https://maps.google.co.uk/maps?saddr=" + startingLocation + "&daddr=" + endingLocation;
		$(this).attr('href',URLMAP);
		
	});	
		
    }

    navigator.geolocation.getCurrentPosition(disp);
  
}  
//});	
