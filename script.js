var mymap = L.map('mapid').setView([37.7739, -122.4194], 12);

var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

$.getJSON("https://raw.githubusercontent.com/gbrunner/adv-programming-for-gis-and-rs/master/Web%20Development%20Module/Unit%201%20-%20GitHub%20and%20Leaflet/sf_crime.geojson",function(data){
    var Icon = L.icon({
    iconUrl: 'https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-22/256/The-Godfather-1-icon.png',
    iconSize: [50,50]
  }); 
 var crime = L.geoJson(data,{
      pointToLayer: function(feature,latlng){
        var marker = L.marker(latlng,{icon: Icon});
        return marker;
      }
    });
    var clusters = L.markerClusterGroup();
    clusters.addLayer(crime);
    mymap.addLayer(clusters);
});
