import React from 'react';
import FoodEcosystemMapping from './FoodEcosystemMapping';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const App = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">EcoCycleX</Typography>
        </Toolbar>
      </AppBar>
      <FoodEcosystemMapping />
    </div>
  );
};

export default App;
