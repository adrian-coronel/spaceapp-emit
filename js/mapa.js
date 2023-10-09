function calcularDistancia(lat1, lon1, lat2, lon2) {
    // Radio de la Tierra en kilómetros (aproximado)
    var radioTierra = 6371;

    // Convertir las coordenadas de grados a radianes
    var latitud1Rad = toRadians(lat1);
    var longitud1Rad = toRadians(lon1);
    var latitud2Rad = toRadians(lat2);
    var longitud2Rad = toRadians(lon2);

    // Diferencia entre las longitudes de los dos puntos
    var diferenciaLongitud = longitud2Rad - longitud1Rad;

    // Fórmula del semiverseno
    var a = Math.sin((latitud2Rad - latitud1Rad) / 2) ** 2 +
            Math.cos(latitud1Rad) * Math.cos(latitud2Rad) *
            Math.sin(diferenciaLongitud / 2) ** 2;

    // Calcular la distancia
    var distancia = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * radioTierra;

    return distancia;
}

// Función para convertir grados a radianes
function toRadians(grados) {
    return grados * (Math.PI / 180);
}



function obtenerUbicacion() {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        // El navegador admite la geolocalización
        navigator.geolocation.getCurrentPosition(function(position) {
          // Se obtuvo la ubicación del usuario con éxito
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log("Ubicación actual del usuario: Latitud " + latitude + ", Longitud " + longitude);
          
          // Resuelve la promesa con la ubicación
          resolve({ latitude, longitude });
        }, function(error) {
          // Ocurrió un error al obtener la ubicación
          switch(error.code) {
            case error.PERMISSION_DENIED:
              console.error("El usuario denegó la solicitud de geolocalización.");
              break;
            case error.POSITION_UNAVAILABLE:
              console.error("La información de ubicación no está disponible.");
              break;
            case error.TIMEOUT:
              console.error("Se agotó el tiempo para obtener la ubicación.");
              break;
            case error.UNKNOWN_ERROR:
              console.error("Se produjo un error desconocido al obtener la ubicación.");
              break;
          }
          // Rechaza la promesa con el error
          reject(error);
        });
      } else {
        // El navegador no admite la geolocalización
        const error = new Error("La geolocalización no es compatible en este navegador.");
        console.error(error.message);
        // Rechaza la promesa con el error
        reject(error);
      }
    });
  }

// Para usar la función y obtener la ubicación:
obtenerUbicacion()
.then((ubicacion) => {
    // Puedes usar 'ubicacion.latitude' y 'ubicacion.longitude' aquí
    //Se crea un objeto mapa utilizando Leaflet
    // Vista inicial en el centro del mundo(lat, long) y un nivel de zoom de 2
    var map = L.map('map').setView([ubicacion.latitude, ubicacion.longitude], 10); 

    // Se agrega una capa de azulejos de OpenStreetMap al mapa para mostrar los datos del mapa. 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var redIcon = L.icon({
        iconUrl: 'img/icon-ubi-red.png', // Ruta a la imagen del icono rojo
        iconSize: [41, 41], // Tamaño del icono
        iconAnchor: [12, 41], // Punto de anclaje del icono
        popupAnchor: [1, -34] // Punto de anclaje del popup
    });    
    L.marker([ubicacion.latitude, ubicacion.longitude],{icon: redIcon}).addTo(map);


    // Almacenará datos de puntos aleatorios
    var points = [
        {    
        "id": "G2759307565-LPCLOUD",
        "latitud": "-11.80879246400066",
        "longitud": "-77.06371756265632",
        "title": "EMIT_L2B_CH4PLM_001_20230127T162104_000592",
        "timeStart": "2023-01-27T16:21:04.000Z",
        "timeEnd": "2023-01-27T16:21:04.000Z",
        "width": 72,
        "height": 41
        },
        {    
        "id": "G2759311215-LPCLOUD",
        "latitud": "-11.921576828213984",
        "longitud": "-77.11902527972246",
        "title": "EMIT_L2B_CH4PLM_001_20230127T162104_000591",
        "timeStart": "2023-01-27T16:21:04.000Z",
        "timeEnd": "2023-01-27T16:21:04.000Z",
        "width": 72,
        "height": 41
        }
    ];


    points.forEach(function(point) {

        // creamos un icono
        var icon = L.icon({
            iconUrl: `img/${point.id}.png`, // Ruta a la imagen del icono rojo
            iconSize: [point.width, point.height], // Tamaño del icono
            iconAnchor: [12, 41], // Punto de anclaje del icono
            popupAnchor: [1, -34] // Punto de anclaje del popup
        });  

        // Calculamos la distancia de la ubi del usuario entre los puntos de polvo
        var distancia = calcularDistancia(ubicacion.latitude, ubicacion.longitude, point.latitud, point.longitud);

        // Se agrega un marcador
        L.marker([point.latitud, point.longitud], {icon: icon}).addTo(map)
            .bindPopup(`
                Latitude: ${point.latitud} <br>
                Longitude: ${point.longitud} <br>
                Distancia de tí(Km): ${distancia.toFixed(2)}
            `); 
    });
})
.catch((error) => {
    // Maneja los errores aquí, por ejemplo, mostrando un mensaje al usuario
    console.error("Error al obtener la ubicación:", error);
});
  




  
