import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import MapSearch from './MapSearch';

import UserContributions from './UserContributions';
import './FoodEcosystemMapping.css';

const FoodEcosystemMapping = () => {
  const [mapData, setMapData] = useState([
    {
      id: 1,
      name: 'Urban Farm 1',
      position: [51.505, -0.09],
      description: 'Description of Urban Farm 1',
      sustainabilityPractices: 'Organic, Low Water Usage',
    },
    // Add more data as needed
  ]);

  const applyFilters = (filters) => {
    // Implement filtering logic here
  };

  return (
    <div className="food-ecosystem-mapping">
      <h2>Food Ecosystem Mapping</h2>
     
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: "450px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <MapSearch /> {/* Ensure this is inside MapContainer */}
      </MapContainer>
      <UserContributions />
    </div>
  );
};

export default FoodEcosystemMapping;