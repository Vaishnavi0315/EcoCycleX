import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './frr.css';


function Frr() {
  const [activePoint, setActivePoint] = useState(null);
  const [info, setInfo] = useState({  
    introduction: `In many countries, donation of excess food to charitable organizations by FBOs is limited because of legal and
  other hurdles. The following barriers, which are common to many countries, may limit (but do not preclude)
  food recovery and redistribution:
  • Tax barriers and the application of VAT (value added tax) on donated food. Donations of food to charitable
  organizations may be taxable to VAT and the taxable amount can correspond to the market price of the
  product in question.
  • If tax exemptions exist, they may not be encouraging enough for food donations. For example, the
  legislation of a country stipulates that the market value of donated products can be deducted from total
  revenue (= total of sales), up to a limit of 10% of the net income of the previous year. 10% of last year’s net
  profits is a very low threshold and might discourage food donations. Examples from other EU countries are
  based on a percentage of sales, not on net income, which makes a major difference.
  • Liability: Businesses are concerned about liability issues if someone gets sick from eating donated foods.
  Many companies fail to donate food because they are unaware of the liability protections afforded to food
  donors. Businesses also fear a reduction in the quality of products that could affect their brand image.
  • A significant part of FLW is related to date marking issues. Interviews of FBOs in six countries in the region
  revealed a common practice. Two weeks to one month before the best before date (BB), the retailers
  remove the products from the shelves of the store and discard them or send them back to their suppliers
  in order to avoid any risk to the consumer and possible claims (degradation of quality or contamination).
  There is confusion among agri-food chain actors as to the meaning of the use-by (UB) and BB dates and
  whether foods can be consumed after their BB date. The difference between the two is not clear.`,
    scope: 'The scope of food recovery and redistribution includes recovering surplus food from various sources and redistributing it to those in need.',
    safety: 'Food safety and hygiene are crucial aspects of food recovery and redistribution to ensure that the food is safe for consumption.',
  });

  const handlePointClick = (point, event) => {
    event.preventDefault();
    setActivePoint(point);
  };

  const handleClosePopup = () => {
    setActivePoint(null);
  };

  return (
    <div className="container">
      <div className="title-section">
        <h1 className="title">Food Recovery and Redistribution Management</h1>
      </div>
      <div className="image"></div>
      <div className="points-section">
        <ul className="points">
        <li className="point" onClick={(event) => handlePointClick('introduction', event)}>
  <Link to="/frr/introduction">1. INTRODUCTION</Link>
  
</li>
          <li className="point" onClick={(event) => handlePointClick('scope', event)}>
            <Link to="/frr/scope">2. SCOPE OF FOOD RECOVERY AND REDISTRIBUTION</Link>
          </li>
          <li className="point" onClick={(event) => handlePointClick('safety', event)}>
            <Link to="/frr/safety">3. FOOD SAFETY AND HYGIENE</Link>
          </li>
        </ul>
      </div>
      {activePoint && (
        <Popup point={activePoint} info={info} onClose={handleClosePopup} />
      )}
    </div>
  );
}

const Popup = ({ point, info, onClose }) => {
  return (
    <div className="popup">
      <h2>{point.toUpperCase()}</h2>
      <p>{info[point]}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};


export default Frr;