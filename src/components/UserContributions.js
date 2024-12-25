import React, { useState } from 'react';

const UserContributions = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Implement submission logic here
    console.log('Submitted:', { name, location, description });
  };

  return (
    <div className="user-contributions">
      <h4>Contribute to the Map</h4>
      <form onSubmit={handleSubmit} className="contribute-form">
        <fieldset>
          <div className="form-group">
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Location:
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Description:
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default UserContributions;
