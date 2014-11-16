// JavaScript Document

/* CRIA O GOOGLE MAPS
------------------------------------------------------------------------------*/
var MyGoogleMapsBox = 'google_maps_box';
var MyGoogleMapsID = 'mapa';

function cria_mapa_colorido(mapa_x,mapa_y) {
	
	/*
	// Create an array of styles.
	var styles = [
		{
		  stylers: [
			{ hue: "#FFFFFF" },
			{ saturation: -100 }
		  ]
		},{
		  featureType: "road",
		  elementType: "geometry",
		  stylers: [
			{ lightness: 50 }
		  ]
		},{
		  featureType: "road",
		  elementType: "labels",
		  stylers: [
			{ visibility: "on" }
		  ]
		}
	];
	
	// Create a new StyledMapType object, passing it the array of styles,
	// as well as the name to be displayed on the map type control.
	var styledMap = new google.maps.StyledMapType(styles,{name: "Normal"});
	*/
	// Create a map object, and include the MapTypeId to add
	// to the map type control.
	var mapOptions = {
		zoom: 13,
		scrollwheel: false,
		center: new google.maps.LatLng(mapa_x, mapa_y),
		disableDefaultUI : true,
		mapTypeControlOptions: {
		  mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
		}
	};
	var map = new google.maps.Map(document.getElementById(MyGoogleMapsID),mapOptions);
	
	//Associate the styled map with the MapTypeId and set it to display.
	//map.mapTypes.set('map_style', styledMap);
	//map.setMapTypeId('map_style');
	
	var image = 'inc/publico/layout/ico-mapa.png';
	var myLatLng = new google.maps.LatLng(mapa_x, mapa_y);
	var beachMarker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		//icon: image
	});
	
}


/* Inicia o google maps
------------------------------------------------------------------------------*/
function inicia_google_maps(){
	cria_mapa_colorido(PHP.localizacao_geografica[0], PHP.localizacao_geografica[1]);
}

/* CARREGA OS SCRIPTS DAS REDES SOCIAIS
------------------------------------------------------------------------------*/
function carrega_redes_sociais(){
	
	// google+
	$.getScript('https://apis.google.com/js/plusone.js');
	// twitter
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
	// facebook
	$('<div/>').attr('id','fb-root').prependTo('body');
	(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/pt_BR/all.js#xfbml=1&appId=314851758593877";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
		
}