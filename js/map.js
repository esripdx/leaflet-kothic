var baseUrl = 'http://www.free-map.org.uk/0.6/ws/tsvr.php';
var tileUrl = baseUrl + '?x={x}&y={y}&z={z}&way=all&poi=all&kothic=1&contour=1&coastline=1';

var lat = 51.05;
var lon = -0.72;
var zoom = 14;

var kothic = new L.TileLayer.Kothic(tileUrl, {minZoom:1,
    attribution: 'Map data &copy; 2004-' + new Date().getFullYear() +
          ' OpenStreetMap contributors,'+
      'Open Database Licence,'+
      'contours &copy; Crown Copyright and database right '+
      'Ordnance Survey 2011, Rendering by '+
      '<a href="http://github.com/kothic/kothic-js">Kothic JS</a>'} );





var map = new L.Map ('map', {layers: [kothic]});
map.setView(new L.LatLng(lat,lon),zoom);