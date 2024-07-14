//https://leafletjs.com/examples/quick-start/

window.onload = ()=>{   
    var map = L.map('map').setView([55.612, 13.00000], 11);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([55.61180, 12.99937]).addTo(map);//55.61180/12.99937
    marker.bindPopup("Renbil")
}