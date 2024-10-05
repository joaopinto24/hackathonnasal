// Initialize the map
const map = L.map('map').setView([20, 0], 2); // Centered globally

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Function to fetch data from NASA's API
async function fetchNASAData() {
    const response = await fetch('https://api.nasa.gov/planetary/earth/assets?api_key=YOUR_API_KEY&date=2023-10-01');
    const data = await response.json();
    
    // Example to plot the data points
    if (data && data.results) {
        data.results.forEach(event => {
            const marker = L.marker([event.latitude, event.longitude]).addTo(map);
            marker.bindPopup(`<b>${event.name}</b><br>${event.date}`);
        });
    }
}

// Call the function to fetch and display data
fetchNASAData();

