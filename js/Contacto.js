    // Coordenadas del Museo del Prado (Madrid)
    const prado = [40.41378, -3.69213];

    // Inicializamos el mapa
    const map = L.map('map').setView(prado, 14);

    // Añadir capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Obtener ubicación del cliente
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const userLocation = [pos.coords.latitude, pos.coords.longitude];

          // Dibujar ruta con OSRM (Leaflet Routing Machine)
          L.Routing.control({
            waypoints: [
              L.latLng(userLocation),
              L.latLng(prado)
            ],
            routeWhileDragging: true,
            show: false,
            lineOptions: {
              styles: [{color: 'blue', opacity: 0.7, weight: 5}]
            }
          }).addTo(map);

          // Marcador en la ubicación del usuario
          L.marker(userLocation).addTo(map).bindPopup("Tu ubicación").openPopup();
        },
        () => {
          alert("No se pudo obtener la ubicación del usuario.");
        }
      );
    } else {
      alert("Tu navegador no soporta geolocalización.");
    }

    // Marcador en el Museo del Prado
    L.marker(prado).addTo(map).bindPopup("Museo del Prado");