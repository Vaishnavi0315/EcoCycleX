import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import DataLayers from './DataLayers';
import MapSearch from './MapSearch';
import FilterOptions from './FilterOptions';
import UserContributions from './UserContributions';
import SustainableCompaniesTable from './SustainableCompaniesTable'; // Import the new component

import './FoodEcosystemMapping.css';

const FoodEcosystemMapping = () => {
  const [mapData, setMapData] = useState([
    // Your initial map data with address field added
    {
      id: 1,
      name: 'Urban Farm 1',
      position: [51.505, -0.09],
      address: '123 Farm Lane',
      description: 'Description of Urban Farm 1',
      sustainabilityPractices: 'Organic, Low Water Usage',
      category: 'urban-farms',
    },
    // ... more data
  ]);

  const [filteredData, setFilteredData] = useState(mapData);
  const [mapCenter, setMapCenter] = useState([51.505, -0.09]); // Default center

  useEffect(() => {
    const calculateMapCenter = () => {
      if (filteredData.length === 0) return [51.505, -0.09]; // Default center if no data

      // Calculate the average center point from filtered data
      const latitudes = filteredData.map(item => item.position[0]);
      const longitudes = filteredData.map(item => item.position[1]);
      const avgLatitude = latitudes.reduce((a, b) => a + b) / latitudes.length;
      const avgLongitude = longitudes.reduce((a, b) => a + b) / longitudes.length;

      return [avgLatitude, avgLongitude];
    };

    setMapCenter(calculateMapCenter());
  }, [filteredData]); // Update center whenever filteredData changes

  const applyFilters = (category, SustainabilityMetric) => {
    const filtered = mapData.filter(item => {
      const matchesCategory = category === '' || item.category === category;
      const matchesMetric = SustainabilityMetric === '' || 
        (item.SustainabilityPractices && 
         item.SustainabilityPractices.toLowerCase().includes(SustainabilityMetric.toLowerCase()));
      return matchesCategory && matchesMetric;
    });
    setFilteredData(filtered);
  };

  return (
    <div className="food-ecosystem-mapping">
      <h2>Food Ecosystem Mapping</h2>
      <FilterOptions applyFilters={applyFilters} />
      <MapContainer center={mapCenter} zoom={13} scrollWheelZoom={true} style={{ height: "600px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <DataLayers mapData={filteredData} />
        <MapSearch />
      </MapContainer>
      <SustainableCompaniesTable data={filteredData} /> {/* Add the table component */}
      <UserContributions />
    </div>
  );
};

export default FoodEcosystemMapping;
