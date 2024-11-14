
const map = L.map('map').setView([28.6139, 77.2090], 13);

L.tileLayer(`https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=5111d3e9ee1245d2b1a54075375147cd`, {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
}).addTo(map);
const marker = L.marker([28.6139, 77.2090]).addTo(map);
marker.bindPopup('<b>Delhi</b><br>This is the capital of India.').openPopup();
const circle = L.circle([28.6139, 77.2090], {
    color: 'blue',
    fillColor: '#30f',
    fillOpacity: 0.5,
    radius: 200,
}).addTo(map);
circle.bindPopup(' radius around Delhi.');

