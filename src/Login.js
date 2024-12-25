import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './Login.css';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.password) errors.password = 'Password is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Add login logic here (e.g., API call)
      console.log('Login data submitted:', formData);
      // Example of redirect after successful login
      navigate('/dashboard'); // Redirect to dashboard or another page
    }
  };

  const handleRegister = () => {
    // Use navigate for registration redirection
    navigate('/sampleregister.js'); // Redirect to registration page
  };

  return (
    <div className="LoginContainer">
    <div className="Login">
      <h1>Sign In!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address:</label>
          <FontAwesomeIcon icon={faEnvelope} />
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={errors.email? 'true' : 'false'}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <FontAwesomeIcon icon={faLock} />
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={errors.password? 'true' : 'false'}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="button-container">
            <button type="submit">Sign In</button>
            <button type="button" onClick={handleRegister}>Register</button>
          </div>
      </form>
    </div>
  </div>
);
};

export default Login;
