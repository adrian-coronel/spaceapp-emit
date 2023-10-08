var map = L.map('map').setView([0, 0], 2); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var continents = ["África", "Norteamérica", "Sudamérica", "Europa", "Oceanía", "Asia"];
var gasTypes = ["Gas Metano", "Gas CO2", "Gas Oxígeno", "Gas Nitrógeno", "Gas Helio", "Gas Hidrógeno"];

var points = [];

for (var i = 0; i < 100; i++) {
    var randomContinent = continents[Math.floor(Math.random() * continents.length)];
    var randomGasType = gasTypes[Math.floor(Math.random() * gasTypes.length)];
    var randomLat = (Math.random() * 180) - 90; 
    var randomLon = (Math.random() * 360) - 180; 

    points.push({
        lat: randomLat,
        lon: randomLon,
        name: "Punto " + (i + 1),
        gasType: randomGasType,
        continent: randomContinent
    });
}


points.forEach(function(point) {
    
    L.marker([point.lat, point.lon]).addTo(map)
        .bindPopup('Nombre: ' + point.name + '<br>Tipo de Gas: ' + point.gasType + '<br>Continente: ' + point.continent); 
});
