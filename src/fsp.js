import React from 'react';
import './fsp.css';
import l1 from './methods.png';

const foodStorageInfo = {
  storageMethods: [
    { method: 'Refrigeration', description: 'Store food at a temperature of 40°F (4°C) or below' },
    { method: 'Freezing', description: 'Store food at a temperature of 0°F (-18°C) or below' },
    { method: 'Canning', description: 'Heat food to a high temperature to kill bacteria and seal in airtight containers' }
  ],
  preservationMethods: [
    { method: 'Dehydration', description: 'Remove moisture from food to prevent bacterial growth' },
    { method: 'Fermentation', description: 'Allow food to break down naturally by microorganisms' },
    { method: 'Pickling', description: 'Soak food in a brine solution to create an environment inhospitable to bacteria' }
  ]
};

function FoodStorageInfo() {
  const renderMethods = (methods) => (
    <ul>
      {methods.map((method, index) => (
        <li key={index}>{method.method} - {method.description}</li>
      ))}
    </ul>
  );

  return (
    <div className="food-storage-info">
      <h2 className="section-header">Food Storage and Preservation</h2>
      <div class="image-container">
      <img src={l1} className="methodsImg" alt="Article 1" />

      </div>
      <div className='NewDiv'>
      <div className="storage-methods">
        <h3>Storage Methods:</h3>
        {renderMethods(foodStorageInfo.storageMethods)}
      </div>
      </div>
      
       
      <div className='NewDiv1'>
      <div className="preservation-methods">
      <h3>Preservation Methods:</h3>
        {renderMethods(foodStorageInfo.preservationMethods)}
      </div>

      

      </div>
      <div className='sideFood'>
      <div className="pre">
      <h3 className='hi1'>* How long do preserved foods last?</h3>
      <h2 className='hi2'>Stored in a cool, dark and dry place, the foods last for several years. The usual rule applies: get rid of any foods that smell or look dubious.</h2>
        {/* {renderMethods(foodStorageInfo.preservationMethods)} */}
        <h3 className='hi1'>* How long do pickled foods last?
        </h3>
      <h2 className='hi2'>Stored in a dark and cool place, they will last for several months. The basic rule is: pickled foods should be destroyed if they change colour or smell, if bubbles form, or if the seal breaks.

</h2>
      
      <h3 className='hi1'>* How long do fermented foods last?
      </h3>
      <h2 className='hi2'>Depending on the food and preferred level of fermentation, the process takes from a few days to several weeks. Firmly sealed and stored in a cool, dark place, fermented foods last 1-2 months.

</h2>
      
      </div>
      </div>
    </div>
  );
}
export default FoodStorageInfo;