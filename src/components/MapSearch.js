import React, { useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import './MapSearch.css'; // Import the CSS file

const MapSearch = () => {
  const map = useMap();

  const handleSearch = (query) => {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const firstResult = data[0];
          const latLng = [firstResult.lat, firstResult.lon];
          map.setView(latLng, 13);

          L.marker(latLng, {
            icon: L.icon({
              iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
              shadowSize: [41, 41]
            })
          }).addTo(map)
          .bindPopup(`<b>${firstResult.display_name}</b>`)
          .openPopup();
        } else {
          alert('No results found');
        }
      })
      .catch(error => {
        console.error('Error during search:', error);
        alert('An error occurred while searching');
      });
  };

  return (
    <div>
      <div className="map-container">
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
        </MapContainer>
        <MapSearchControls onSearch={handleSearch} />
      </div>
    </div>
  );
};

const MapSearchControls = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  return (
    <div className="map-search">
      <input 
        type="text" 
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Enter address, location, or landmark"
      />
      <button onClick={() => onSearch(query)}>Search</button>
    </div>
  );
};

export default MapSearch;
