import React, { useState } from 'react';
import styles from './sampleregis.module.css'; // Import the CSS module

import { useNavigate } from 'react-router-dom'; 

const App = () => {
  const navigate = useNavigate(); 
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    address: '',
    profilePicture: null,
    farmName: '',
    farmLocation: '',
    typeOfFarming: '',
    farmSize: '',
    products: '',
    location: '',
    interestedIn: [],
    institutionName: '',
    fieldOfExpertise: '',
    researchInterests: '',
    publications: '',
    adminCode: '',
    termsAccepted: false,
    privacyAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setFormData({ ...formData, [e.target.name]: '' }); // Clear role-specific data when changing role
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submission logic here
    console.log('Form data submitted:', formData);
    
    // Navigate to dashboard after successful submission
    navigate('/Dashboard.js');
  };

  return (
    <div className={styles.container}> {/* Use CSS Module here */}
      <div className={styles.imageContainer}> {/* Use CSS Module here */}
        <img src={require('./rebg.png')} alt="Coffee and book" />
      </div>
      <div className={styles.formContainer}>{/* Use CSS Module here */}
        <h2 className={styles.heading}>Sign Up!!</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}> {/* Updated to use CSS Module */}
            <label>Email Address:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input} // Updated to use CSS Module
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Profile Picture:</label>
            <input
              type="file"
              name="profilePicture"
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label>User Role:</label>
            <select name="role" value={role} onChange={handleRoleChange} className={styles.input} required>
              <option value="">Select Role</option>
              <option value="Farmer">Farmer</option>
              <option value="Consumer">Consumer</option>
              <option value="Educator/Researcher">Educator/Researcher</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          {role === 'Farmer' && (
            <>
              <div className={styles.formGroup}>
                <label>Farm Name:</label>
                <input
                  type="text"
                  name="farmName"
                  value={formData.farmName}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Farm Location:</label>
                <input
                  type="text"
                  name="farmLocation"
                  value={formData.farmLocation}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Type of Farming:</label>
                <select
                  name="typeOfFarming"
                  value={formData.typeOfFarming}
                  onChange={handleChange}
                  className={styles.input}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="Urban Farming">Urban Farming</option>
                  <option value="Organic Farming">Organic Farming</option>
                  <option value="Hydroponics">Hydroponics</option>
                  <option value="Aquaponics">Aquaponics</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Farm Size (in acres):</label>
                <input
                  type="number"
                  name="farmSize"
                  value={formData.farmSize}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Products Grown/Produced:</label>
                <input
                  type="text"
                  name="products"
                  value={formData.products}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
            </>
          )}
          {role === 'Consumer' && (
            <>
              <div className={styles.formGroup}>
                <label>Location:</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Interested In:</label>
                <select
                  name="interestedIn"
                  multiple
                  value={formData.interestedIn}
                  onChange={(e) => setFormData({
                    ...formData,
                    interestedIn: Array.from(e.target.selectedOptions, option => option.value)
                  })}
                  className={styles.input}
                >
                  <option value="Buying Sustainable Produce">Buying Sustainable Produce</option>
                  <option value="Learning about Sustainable Practices">Learning about Sustainable Practices</option>
                  <option value="Volunteering">Volunteering</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </>
          )}
          {role === 'Educator/Researcher' && (
            <>
              <div className={styles.formGroup}>
                <label>Institution/Organization Name:</label>
                <input
                  type="text"
                  name="institutionName"
                  value={formData.institutionName}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Field of Expertise:</label>
                <input
                  type="text"
                  name="fieldOfExpertise"
                  value={formData.fieldOfExpertise}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Research Interests:</label>
                <input
                  type="text"
                  name="researchInterests"
                  value={formData.researchInterests}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Publications/Projects:</label>
                <input
                  type="text"
                  name="publications"
                  value={formData.publications}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
            </>
          )}
          {role === 'Admin' && (
            <div className={styles.formGroup}>
              <label>Admin Code:</label>
              <input
                type="text"
                name="adminCode"
                value={formData.adminCode}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
          )}
          <div className={styles.formGroup}>
            <label>
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className={styles.checkbox}
                required
              />
              I agree to the Terms and Conditions
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              <input
                type="checkbox"
                name="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleChange}
                className={styles.checkbox}
                required
              />
              I agree to the Privacy Policy
            </label>
          </div>
          <button type="submit" className={styles.loginButton}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default App;
