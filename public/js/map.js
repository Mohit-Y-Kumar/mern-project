
maptoken = process.env.MAP_API_KEY;

var map = L.map('map').setView([28.6139, 77.2090], 13);

L.tileLayer('https://maps.geoapify.com/v1/tile/osm-carto/{z}/{x}/{y}.png?apiKey=MAP_API_KEY', {
    attribution: '© OpenStreetMap contributors, © Geoapify',
    maxZoom: 20
}).addTo(map);

var marker = L.marker([28.6139, 77.2090]).addTo(map);

marker.bindPopup("<b>Delhi</b><br />India's capital city.").openPopup();
