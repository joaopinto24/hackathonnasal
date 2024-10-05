// Initialize the map
const map = L.map('map').setView([20, 0], 2); // Center of the world view

// Add a tile layer (map style)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Add markers with popups
const locations = [
    { coords: [51.505, -0.09], name: "London" },
    { coords: [40.7128, -74.0060], name: "New York" },
    { coords: [35.6762, 139.6503], name: "Tokyo" },
    { coords: [48.8566, 2.3522], name: "Paris" },
    { coords: [-33.4489, -70.6693], name: "Santiago" },
];

locations.forEach(location => {
    L.marker(location.coords)
        .addTo(map)
        .bindPopup(location.name)
        .openPopup();
});
