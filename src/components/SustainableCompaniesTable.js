import React from 'react';
import './SustainableCompaniesTable.css'; // Optional for styling

const SustainableCompaniesTable = ({ data }) => {
  return (
    <div className="sustainable-companies-table">
      <h3>Company Details</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Category</th>
            <th>Sustainability Practices</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.address || 'N/A'}</td> {/* Ensure 'address' is available in your data */}
              <td>{item.category}</td>
              <td>{item.sustainabilityPractices}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SustainableCompaniesTable;
