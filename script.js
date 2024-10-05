// Initialize the map
const map = L.map('map').setView([20, 0], 2); // Center of the world view

// Add a tile layer (map style)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

locations.forEach(location => {
    L.marker(location.coords)
        .addTo(map)
        .bindPopup(location.name)
        .openPopup();
});
