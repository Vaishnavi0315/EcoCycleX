import React from 'react';
import './dashboard.css';

const Dashboard = () => {
  // Static user data
  const user = {
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    phoneNumber: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    role: 'Farmer', // Change role to test different roles (e.g., 'Consumer', 'Educator/Researcher', 'Admin')
    farmName: 'Doe Family Farm',
    farmLocation: 'Anytown, USA',
    typeOfFarming: 'Organic Farming',
    farmSize: '50',
    products: 'Vegetables, Fruits',
    location: 'Anytown, USA',
    interestedIn: ['Sustainable Practices', 'New Technologies'],
    institutionName: 'Anytown University',
    fieldOfExpertise: 'Agricultural Science',
    researchInterests: 'Sustainable Farming',
    publications: '10+ Publications',
    adminCode: 'ADMIN123'
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="user-info-card">
        <h2>Welcome, {user.fullName}!</h2>
        <p>Here are your details:</p>
        <ul>
          <li>Email: {user.email}</li>
          <li>Phone: {user.phoneNumber}</li>
          <li>Address: {user.address}</li>
          <li>Role: {user.role}</li>
          {user.role === 'Farmer' && (
            <>
              <li>Farm Name: {user.farmName}</li>
              <li>Farm Location: {user.farmLocation}</li>
              <li>Type of Farming: {user.typeOfFarming}</li>
              <li>Farm Size: {user.farmSize} acres</li>
              <li>Products: {user.products}</li>
            </>
          )}
          {user.role === 'Consumer' && (
            <>
              <li>Location: {user.location}</li>
              <li>Interested In: {user.interestedIn.join(', ')}</li>
            </>
          )}
          {user.role === 'Educator/Researcher' && (
            <>
              <li>Institution/Organization Name: {user.institutionName}</li>
              <li>Field of Expertise: {user.fieldOfExpertise}</li>
              <li>Research Interests: {user.researchInterests}</li>
              <li>Publications/Projects: {user.publications}</li>
            </>
          )}
          {user.role === 'Admin' && (
            <li>Admin Code: {user.adminCode}</li>
          )}
        </ul>
        <button className="edit-profile-button">Edit Profile</button>
      </div>
    </div>
  );
};

export default Dashboard;

