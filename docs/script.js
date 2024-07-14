//https://leafletjs.com/examples/quick-start/

window.onload = ()=>{   
    var map = L.map('map').setView([0, 0], 11);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([1, 1]).addTo(map);
    marker.bindPopup("Marker")
}