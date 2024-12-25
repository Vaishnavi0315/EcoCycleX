import React from 'react';
import './inventory.css';

const Inventory = () => {
  return (
    <div className="inventory-management">
      <div className="he">
        <h1>Inventory Management</h1>
        <p>Efficiently manage your food inventory to reduce waste and improve customer satisfaction</p>
      </div>
      <div className="question">
        <h2>What is Inventory Management?</h2>
        <p>
          Food industry inventory management involves overseeing the supply, storage, and accessibility of ingredients and products within the food sector. This process ensures optimal stock levels, reduces waste, and improves efficiency, critical for meeting consumer demand and maintaining freshness.
        </p>
      </div>
      <div className="answer">
        <h2>Key Components of Inventory Management</h2>
        <ul>
          <li>Ordering produce, ingredients, and products</li>
          <li>Receiving those items</li>
          <li>Storing the goods according to industry regulations</li>
          <li>Distributing food to retailers and customers</li>
        </ul>
      </div>
      <div className="question">
        <h2>Why is it Important to Stay Organized?</h2>
        <p>
          One of the most important aspects of food inventory management is staying organized. This means having a system in place to track what foods are being stocked, how much of each item is available, and when items need to be restocked.
        </p>
      </div>
      <div className="answer">
        <ul>
          <li>Ensures all food items are accounted for and reduces waste</li>
          <li>Allows managers to better forecast future needs</li>
        </ul>
      </div>
    </div>
  );
};

export default Inventory;