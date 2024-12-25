import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup } from 'react-leaflet';
import { Checkbox, TextField, MenuItem, Select, InputLabel, FormControl, Button, Box } from '@material-ui/core';
import styles from './FEM.module.css';

const { BaseLayer, Overlay } = LayersControl;

const FoodEcosystemMapping = () => {
  const [soilQuality, setSoilQuality] = useState(false);
  const [waterSources, setWaterSources] = useState(false);
  const [climateData, setClimateData] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [sustainabilityMetric, setSustainabilityMetric] = useState('');

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleSustainabilityMetricChange = (e) => setSustainabilityMetric(e.target.value);

  const resources = [
    // Example resource data
    {
      name: 'Urban Farm 1',
      position: [51.505, -0.09],
      address: '123 Farm St.',
      contact: 'info@urbanfarm1.com',
      sustainability: 'Low water usage, Organic certification',
      products: 'Vegetables, Fruits',
      reviews: 'Great place for fresh produce!'
    }
  ];

  return (
    <Box className={styles.container}>
      <FormControl className={styles.formControl}>
        <TextField label="Search" value={searchQuery} onChange={handleSearchChange} />
      </FormControl>
      <FormControl className={styles.formControl}>
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={handleCategoryChange}>
          <MenuItem value="urban-farm">Urban Farm</MenuItem>
          <MenuItem value="community-garden">Community Garden</MenuItem>
          <MenuItem value="local-market">Local Market</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={styles.formControl}>
        <InputLabel>Sustainability Metric</InputLabel>
        <Select value={sustainabilityMetric} onChange={handleSustainabilityMetricChange}>
          <MenuItem value="low-water-usage">Low Water Usage</MenuItem>
          <MenuItem value="organic-certification">Organic Certification</MenuItem>
          <MenuItem value="renewable-energy">Renewable Energy Practices</MenuItem>
        </Select>
      </FormControl>

      <MapContainer className={styles.mapContainer} center={[51.505, -0.09]} zoom={13}>
        <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          <Overlay checked={soilQuality} name="Soil Quality">
            <LayerGroup>
              {/* Add soil quality markers */}
            </LayerGroup>
          </Overlay>
          <Overlay checked={waterSources} name="Water Sources">
            <LayerGroup>
              {/* Add water sources markers */}
            </LayerGroup>
          </Overlay>
          <Overlay checked={climateData} name="Climate Data">
            <LayerGroup>
              {/* Add climate data markers */}
            </LayerGroup>
          </Overlay>
        </LayersControl>
        {resources.map((resource, index) => (
          <Marker key={index} position={resource.position}>
            <Popup>
              <strong>{resource.name}</strong><br />
              {resource.address}<br />
              {resource.contact}<br />
              {resource.sustainability}<br />
              {resource.products}<br />
              {resource.reviews}<br />
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <Box className={styles.overlayControl}>
        <FormControl className={styles.overlayControlFormControl}>
          <InputLabel>Soil Quality</InputLabel>
          <Checkbox checked={soilQuality} onChange={() => setSoilQuality(!soilQuality)} />
        </FormControl>
        <FormControl className={styles.overlayControlFormControl}>
          <InputLabel>Water Sources</InputLabel>
          <Checkbox checked={waterSources} onChange={() => setWaterSources(!waterSources)} />
        </FormControl>
        <FormControl className={styles.overlayControlFormControl}>
          <InputLabel>Climate Data</InputLabel>
          <Checkbox checked={climateData} onChange={() => setClimateData(!climateData)} />
        </FormControl>
      </Box>

      <Box className={styles.buttonsContainer}>
        <Button variant="contained" color="primary" className={styles.buttonPrimary}>Add New Location</Button>
        <Button variant="contained" color="secondary" className={styles.buttonSecondary}>Update Information</Button>
        <Button variant="contained" className={styles.buttonDefault}>Provide Review/Feedback</Button>
      </Box>
    </Box>
  );
};

export default FoodEcosystemMapping;
