import React, { useState } from 'react';

function Eos() {
  const [activeSection, setActiveSection] = useState('innovativeSolutionsShowcase');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const openNewPage = (url) => {
    window.open(url, '_blank');
  };

  const styles = {
    app: {
      textAlign: 'center',
      maxWidth: '800px',
      margin: '6% auto 0', // Set the top margin to 8%

    },
    title: {
      fontSize: '2rem',
      marginBottom: '20px',
    },
    section: {
      background: '#f9f9f9',
      padding: '20px',
      margin: '20px 0',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s, background-color 0.3s',
      cursor: 'pointer',
    },
    active: {
      transform: 'translateY(-5px)',
      backgroundColor: '#eef',
    },
    icon: {
      fontSize: '2rem',
      color: '#007bff',
    },
    h2: {
      fontSize: '1.5rem',
      margin: '10px 0',
    },
    paragraph: {
      fontSize: '1rem',
      color: '#555',
    },
    viewButton: {
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      fontSize: '1rem',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    viewButtonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.app}>
      <h1 style={styles.title}>Ecosystem Of Solutions</h1>
      <div className="sections">
        <div
          style={{ ...styles.section, ...(activeSection === 'innovativeSolutionsShowcase' ? styles.active : {}) }}
          onClick={() => handleSectionClick('innovativeSolutionsShowcase')}
        >
          <h2 style={styles.h2}>Innovative Solutions Showcase</h2>
          <p style={styles.paragraph}>Discover innovative projects and solutions developed by our community.</p>
          <button
            style={styles.viewButton}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.viewButtonHover.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.viewButton.backgroundColor)}
            onClick={() => openNewPage('https://foodfuturefoundation.org/projects-activities/')}
          >
            View Solutions
          </button>
        </div>
        <div
          style={{ ...styles.section, ...(activeSection === 'innovationChallenges' ? styles.active : {}) }}
          onClick={() => handleSectionClick('innovationChallenges')}
        >
          <h2 style={styles.h2}>Innovation Challenges</h2>
          <p style={styles.paragraph}>Participate in challenges and competitions to drive innovation in sustainable food practices.</p>
          <button
            style={styles.viewButton}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.viewButtonHover.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.viewButton.backgroundColor)}
            onClick={() => openNewPage('https://farmingfirst.org/campaigns/sustainable-agriculture/innovations-for-sustainable-food-systems/')}
          >
            Join Challenges
          </button>
        </div>
        <div
          style={{ ...styles.section, ...(activeSection === 'resourceLibrary' ? styles.active : {}) }}
          onClick={() => handleSectionClick('resourceLibrary')}
        >
          <h2 style={styles.h2}>Resource Library</h2>
          <p style={styles.paragraph}>Access tools, templates, and resources to support your innovation journey.</p>
          <button
            style={styles.viewButton}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.viewButtonHover.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.viewButton.backgroundColor)}
            onClick={() => openNewPage('https://www.fao.org/policy-support/tools-and-publications/resources-details/en/c/1308923/')}
          >
            Access Resources
          </button>
        </div>
      </div>
    </div>
  );
}

export default Eos;
