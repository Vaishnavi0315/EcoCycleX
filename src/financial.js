// import React from "react";
// import "./financialManagement.css";

// const FinancialManagement = () => {
//   return (
//     <div className="financial-management-container">
//       <div className="financial-management-content">
//         <div className="financial-header">
//           <h1>Financial Management in Food Service</h1>
//         </div>
//         <div className="financial-tip-container">
//           <div className="financial-tip">
//             <h2>Tip 1: Create a system that works for your needs</h2>
//             <ul>
//               <li>Develop a financial management system that is tailored to your food service business</li>
//               <li>Track income and expenses to make informed decisions</li>
//               <li>Use financial reports to identify areas for improvement</li>
//             </ul>
//           </div>
//           <div className="financial-tip">
//             <h2>Tip 2: Be aware of your costs and expenses</h2>
//             <ul>
//               <li>Track labor costs, food costs, and overhead expenses</li>
//               <li>Monitor inventory levels to minimize waste and overstocking</li>
//               <li>Negotiate with suppliers to get the best prices</li>
//             </ul>
//           </div>
//           <div className="financial-tip">
//             <h2>Tip 3: Pay attention to employee turnover and satisfaction</h2>
//             <ul>
//               <li>High employee turnover can lead to increased recruitment and training costs</li>
//               <li>Satisfied employees are more productive and provide better customer service</li>
//               <li>Offer competitive wages and benefits to attract and retain top talent</li>
//             </ul>
//           </div>
//           <div className="financial-tip">
//             <h2>Tip 4: Use technology to achieve better productivity and maximize profits</h2>
//             <ul>
//               <li>Implement a point-of-sale system to streamline transactions and track sales</li>
//               <li>Use inventory management software to optimize stock levels and reduce waste</li>
//               <li>Take advantage of online ordering and delivery platforms to increase revenue</li>
//             </ul>
//           </div>
//           <div className="financial-tip">
//             <h2>Tip 5: Track inventory using technology as well as using it for ordering supplies ahead of time</h2>
//             <ul>
//               <li>Use inventory management software to track stock levels and optimize ordering</li>
//               <li>Implement a just-in-time ordering system to minimize waste and overstocking</li>
//               <li>Take advantage of supplier discounts and promotions to reduce costs</li>
//             </ul>
//           </div>
//           <div className="financial-tip">
//             <h2>Tip 6: Take advantage of any tax incentives that may be available to make more money on what you're doing now</h2>
//             <ul>
//               <li>Research and claim tax credits and deductions available to food service businesses</li>
//               <li>Consult with a tax professional to ensure compliance and maximize savings</li>
//               <li>Reinvest tax savings into the business to drive growth and profitability</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FinancialManagement;




import React from 'react';
import './financialManagement.css';
import l1 from './fi1.png';
import l2 from './fi2.png';
import l3 from './fi3.png';
const FinancialTips = () => {
  return (
    <div className="financial-tips">
      
      <div className="cardleft">
      <header className="financial-tips-header">
        <h1 class="fin">Financial Tips</h1>
        <p class="sim">Simple and practical advice for better money management.</p>
        <img src={l1} className="rotImg" alt="Article 1" />
        <img src={l2} className="rotImg1" alt="Article 2" />
        <img src={l3} className="rotImg2" alt="Article 3" />
      </header>

      </div>
      <div className="cards-container">
     
        <div className="cardd">
          <div className="iconz">&#128176;</div>
          <h3 class="hht">Tip 1: Create a system that works for your needs</h3>
          <ul class="custom-list">
              <li>Develop a financial management system that is tailored to your food service business</li>
              <li>Track income and expenses to make informed decisions</li>
              <li>Use financial reports to identify areas for improvement</li>
          </ul>
            </div>
        <div className="cardd">
          <div className="iconz">&#128200;</div>
          <h3 class="hht">Tip 2: Be aware of your costs and expenses</h3>
            <ul class="custom-list">
              <li>Track labor costs, food costs, and overhead expenses</li>
              <li>Monitor inventory levels to minimize waste and overstocking</li>
              <li>Negotiate with suppliers to get the best prices</li>
            </ul>
        </div>
        <div className="cardd">
          <div className="iconz">&#128181;</div>
          <h3 class="hht">Tip 3: Pay attention to employee turnover and satisfaction</h3>
          <ul class="custom-list">
               <li>High employee turnover can lead to increased recruitment and training costs</li>
              <li>Satisfied employees are more productive and provide better customer service</li>
              <li>Offer competitive wages and benefits to attract and retain top talent</li>
           </ul>
           </div>
        <div className="cardd">
          <div className="iconz">&#128178;</div>
          <h3 class="hht">Tip 4: Use technology to achieve better productivity and maximize profits</h3>
          <ul class="custom-list">
               <li>Implement a point-of-sale system to streamline transactions and track sales</li>
               <li>Use inventory management software to optimize stock levels and reduce waste</li>
               <li>Take advantage of online ordering and delivery platforms to increase revenue</li>
             </ul>
          </div>
        <div className="cardd">
          <div className="iconz">&#128178;</div>
          <h3 class="hht">Tip 5: Track inventory using technology as well as using it for ordering supplies ahead of time</h3>
          <ul class="custom-list">
               <li>Use inventory management software to track stock levels and optimize ordering</li>
               <li>Implement a just-in-time ordering system to minimize waste and overstocking</li>
               <li>Take advantage of supplier discounts and promotions to reduce costs</li>
             </ul>
        </div>
        <div className="cardd">
          <div className="iconz">&#128178;</div>
          <h3 class="hht">Tip 6: Take advantage of any tax incentives that may be available to make more money on what you're doing now</h3>
          <ul class="custom-list">
               <li>Research and claim tax credits and deductions available to food service businesses</li>
               <li>Consult with a tax professional to ensure compliance and maximize savings</li>
               <li>Reinvest tax savings into the business to drive growth and profitability</li>
             </ul>
        </div>
      </div>

      
    </div>
    
  );
};

export default FinancialTips;
