const mapapi = process.env.MAP_API_KEY;
console.log(mapapi);

// Initialize the map and set the view to a desired location (Delhi in this example)
var map = L.map('map').setView([28.6139, 77.2090], 13);

// Add Geoapify tile layer to the map
L.tileLayer('https://maps.geoapify.com/v1/tile/osm-carto/{z}/{x}/{y}.png?apiKey=mapapi', {
    attribution: '© OpenStreetMap contributors, © Geoapify',
    maxZoom: 20
}).addTo(map);

// Add a marker at the center location (Delhi in this case)
var marker = L.marker([28.6139, 77.2090]).addTo(map);

// Optional: Add a popup to the marker
marker.bindPopup("<b>Delhi</b><br>India's capital city.").openPopup();
