import React from 'react';
//import './agriculture.css';

// Define agricultural water information data
const agriculturalWaterInfo = {
  waterUsage: 0.5,
  waterSource: 'Well',
  soilMoisture: 0.3,
  weatherForecast: 'Partly Cloudy'
};

// Create a React component to display agricultural water information
function AgriculturalWaterInfo() {
  return (
    <div className="agricultural-water-info">
      <h2 className="section-header">Agricultural Water Information</h2>
      <p className="water-usage">Water Usage: {agriculturalWaterInfo.waterUsage} gallons/acre</p>
      <p className="water-source">Water Source: {agriculturalWaterInfo.waterSource}</p>
      <p className="soil-moisture">Soil Moisture: {agriculturalWaterInfo.soilMoisture}%</p>
      <p className="weather-forecast">Weather Forecast: {agriculturalWaterInfo.weatherForecast}</p>
    </div>
  );
}

export default AgriculturalWaterInfo;