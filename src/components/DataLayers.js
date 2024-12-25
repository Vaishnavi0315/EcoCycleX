import React from 'react';
import { LayersControl, LayerGroup, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  shadowSize: [41, 41]
});

const DataLayers = ({ mapData }) => {
  // Group data by category
  const categories = [...new Set(mapData.map(item => item.category))];

  return (
    <LayersControl position="topright">
      {categories.map(category => (
        <LayersControl.Overlay key={category} name={category.charAt(0).toUpperCase() + category.slice(1)}>
          <LayerGroup>
            {mapData.filter(item => item.category === category).map(item => (
              <Marker key={item.id} position={item.position} icon={markerIcon}>
                <Popup>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p><strong>Sustainability Practices:</strong> {item.sustainabilityPractices}</p>
                </Popup>
              </Marker>
            ))}
          </LayerGroup>
        </LayersControl.Overlay>
      ))}
    </LayersControl>
  );
};

export default DataLayers;
