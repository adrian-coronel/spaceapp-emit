var map = L.map('map').setView([8.93314799529361, 24.890625], 4);

        // Agrega un mapa base (por ejemplo, OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Datos de ejemplo de puntos con coordenadas y nombres
        var points = [
            { lat: 8.93314799529361, lon: 24.890625, name: "Gas Metano" },
            // Agrega más puntos aquí en el mismo formato
        ];

        // Agrega los puntos al mapa con iconos predeterminados de Leaflet
        points.forEach(function(point) {
            L.marker([point.lat, point.lon]).addTo(map)
                .bindPopup(point.name); // Agrega un popup con el nombre del punto
        });