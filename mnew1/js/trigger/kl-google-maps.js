;(function($){
	"use strict";

	$(document).ready(function() {

		/*
		Find the Latitude and Longitude of your address:
			- http://itouchmap.com/latlong.html
			- http://universimmedia.pagesperso-orange.fr/geo/loc.htm
			- http://www.findlatitudeandlongitude.com/find-address-from-latitude-and-longitude/

		Find settings explained:
			- https://github.com/marioestrada/jQuery-gMap

		*/

		// Map Markers
		var mapMarkers = [{
			address: "3 Tompkins Ave, Brooklyn, NY 11206",
			latitude: 40.699707,
			longitude: -73.947043,
			icon: {
				image: "images/map-marker.png",
				iconsize: [32, 39], // w, h
				iconanchor: [13,39] // x, y
			},
			html: '<div style="width: 300px;"><h4 style="margin-bottom: 8px;">Hogash Studio</span></h4><p class="nobottommargin"><span style="line-height:1.4;">KALLYAS TEMPLATE, THE <span class="fw-semibold">SWISS ARMY SECRET</span> FOR BUILDING THE MODERN WEBSITE</span></p></div>',
		},{
			address: "18-77 Madison St, Flushing, NY 11385",
			latitude: 40.703871,
			longitude: -73.904729,
			icon: {
				image: "images/map-marker.png",
				iconsize: [32, 39], // w, h
				iconanchor: [13, 39] // x, y
			},
			html: '<div style="width: 300px;"><h4 style="margin-bottom: 8px;">Hogash Studio</span></h4><p class="nobottommargin"><span style="line-height:1.4;">KALLYAS TEMPLATE, THE <span class="fw-semibold">SWISS ARMY SECRET</span> FOR BUILDING THE MODERN WEBSITE</span></p></div>',
		}];

		// Map Color Scheme - more styles here http://snazzymaps.com/
		var mapStyles = [
			{
				"featureType": "water",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"color": "#acbcc9"
					}
				]
			},
			{
				"featureType": "landscape",
				"stylers": [
					{
						"color": "#f2e5d4"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#c5c6c6"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#e4d7c6"
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#fbfaf7"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#c5dac6"
					}
				]
			},
			{
				"featureType": "administrative",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"lightness": 33
					}
				]
			},
			{
				"featureType": "road"
			},
			{
				"featureType": "poi.park",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"lightness": 20
					}
				]
			},
			{},
			{
				"featureType": "road",
				"stylers": [
					{
						"lightness": 20
					}
				]
			}
		];

		// Map Initial Location
		var initLatitude = 40.699707;
		var initLongitude = -73.947043;

		// Map Extended Settings
		var map = jQuery(".th-google_map").gMap({
			controls: {
				panControl: true,
				zoomControl: true,
				mapTypeControl: true,
				scaleControl: true,
				streetViewControl: true,
				overviewMapControl: true
			},
			scrollwheel: false,
			markers: mapMarkers,
			latitude: initLatitude,
			longitude: initLongitude,
			zoom: 14,
			style: mapStyles,
			draggable: Modernizr.touch ? false : true

		});

		// Add Markers
		$.each(mapMarkers, function(index, value) {
			$(".th-google_map").gMap("addMarker", value);
		});

	});// end of document ready

})(jQuery);


