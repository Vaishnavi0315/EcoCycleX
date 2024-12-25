import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Use Routes and Route from 'react-router-dom'

import Header from './Header.js';
import Login from './Login.js';
import Register from './sampleregister.js'; // Import the Register component
import Home from './HomePage.js';
import OpenSourceResearchAndMethodology from './OSS';
import EcosystemOfSolutions from './Eos.js';
import Forums from './Forums.js';
import MessagingSystem from './Ms.js';
import CollaborationTools from './Ct.js';
import Dashboard from './Dashboard.js';
import FoodEcosystemMapping from './components/FoodEcosystemMapping.js';
import SustainabilityAndBiodiversity from './components/SustainabilityAndBiodiversity';
import EducationalResources from './EducationalResources.js';
import DataLayers from './components/DataLayers.js';
import MapSearch from './components/MapSearch.js';
import FilterOptions from './components/FilterOptions.js';
import UserContributions from './components/UserContributions.js';
import SustainableCompaniesTable from './components/SustainableCompaniesTable.js';
import AgriculturalWaterInfo from './agriculture.js';
import FinancialManagement from './financial.js';
// import Frr from './frr.js';
import FoodStorageInfo from './fsp.js';
// import Inventory from './inventory.js';

const App = () => (
  <>
    <Header /> {/* Include the Header component */}
    <main>
      <Routes>
        {/* Default route to display HomePage */}
        <Route path="/" element={<Home />} />

        <Route path="/Login.js" element={<Login />} />
        <Route path="/sampleregister.js" element={<Register />} /> {/* Define route for Register */}
        <Route path='/HomePage.js' element={<Home />}/>{}
        <Route path='/OSS.js' element={<OpenSourceResearchAndMethodology />}/>{}
        <Route path='/Eos.js' element={<EcosystemOfSolutions />}/>{}
        <Route path='/Forums.js' element={<Forums />}/>{}
        <Route path='/Ms.js' element={<MessagingSystem />}/>{}
        <Route path='/Ct.js' element={<CollaborationTools />}/>{}
        <Route path='/Dashboard.js' element={<Dashboard />}/>{}
        <Route path='/components/FoodEcosystemMapping.js' element={<FoodEcosystemMapping />}/>{}
        <Route path='/components/DataLayers.js' element={<DataLayers />}/>{}
        <Route path='/components/MapSearch.js' element={<MapSearch />}/>{}
        <Route path='/components/FilterOptions.js' element={<FilterOptions />}/>{}
        <Route path='/components/UserContributions.js' element={<UserContributions />}/>{}
        <Route path='/components/SustainableCompaniesTable.js' element={<SustainableCompaniesTable />}/>{}
        <Route path='/components/SustainabilityAndBiodiversity.js' element={<SustainabilityAndBiodiversity />} />{}
        <Route path='/EducationalResources.js' element={<EducationalResources />} />{} 
        <Route path='/agriculture.js' element={<AgriculturalWaterInfo />} />{}
        <Route path='/financial.js' element={<FinancialManagement />} />{}
        {/* <Route path='/frr.js' element={<Frr />} />{} */}
        <Route path='/fsp.js' element={<FoodStorageInfo />} />{}
        {/* <Route path='/inventory.js' element={<Inventory />} />{} */}

      </Routes>
    </main>
  </>
);

export default App;
