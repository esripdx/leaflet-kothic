// Map
var map = L.map('map', {
    center: [45.52, -122.67],
    zoom: 13,
    scrollWheelZoom: false,
    attributionControl: false
});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  maxZoom: 18
}).addTo(map);