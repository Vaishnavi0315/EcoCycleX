import React, { useState } from 'react';

function OpenSourceResearchAndMethodology() {
  const [activeSection, setActiveSection] = useState('researchRepository');
  const [isResearchTableOpen, setIsResearchTableOpen] = useState(false);
  const [isWebinarsTableOpen, setIsWebinarsTableOpen] = useState(false);
  const [isFundingTableOpen, setIsFundingTableOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showProjectsModal, setShowProjectsModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const openResearchTable = () => {
    setIsResearchTableOpen(true);
  };

  const closeResearchTable = () => {
    setIsResearchTableOpen(false);
  };

  const openFundingTable = () => {
    setIsFundingTableOpen(true);
  };

  const closeFundingTable = () => {
    setIsFundingTableOpen(false);
  };

  const openWebinarsTable = () => {
    setIsWebinarsTableOpen(true);
  };

  const closeWebinarsTable = () => {
    setIsWebinarsTableOpen(false);
  };

  const handleOpenProjectsModal = () => {
    setShowProjectsModal(true);
  };

  const handleCloseProjectsModal = () => {
    setShowProjectsModal(false);
  };

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const modalContentStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '24px',
    cursor: 'pointer',
  };

  const sectionStyle = {
    background: '#f9f9f9',
    padding: '20px',
    margin: '20px 0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, background-color 0.3s',
    cursor: 'pointer',
  };

  const activeSectionStyle = {
    transform: 'translateY(-5px)',
    backgroundColor: '#eef',
  };

  const tableStyle = {
    background: '#f5f5f5',
    borderCollapse: 'collapse',
    borderSpacing: '2px',
    boxShadow: 'inset 0 1px 0 #fff',
    fontSize: '12px',
    lineHeight: '24px',
    margin: '30px auto',
    textAlign: 'left',
    width: '100%',
  };

  const thStyle = {
    background: 'url(https://jackrugile.com/images/misc/noise-diagonal.png), linear-gradient(#777, #93bec9)',
    borderLeft: '1px solid #555',
    borderRight: '1px solid #777',
    borderTop: '1px solid #555',
    borderBottom: '1px solid #333',
    boxShadow: 'inset 0 1px 0 #999',
    color: '#fff',
    fontWeight: 'bold',
    padding: '10px 15px',
    position: 'relative',
    textShadow: '0 1px 0 #000',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px', maxWidth: '800px', margin: '0 auto', marginTop: '10vh' }}>

      <h1 className="title" style={{ fontSize: '2rem', marginBottom: '20px' }}>Open Source Research and Methodology</h1>

      {showModal && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <span style={closeButtonStyle} onClick={handleCloseModal}>&times;</span>
            <h2>Food Sustainable Development System</h2>
            <p>
              Our project aims to develop a sustainable food system that ensures
              equitable access to nutritious food for all. We focus on reducing
              food waste, promoting sustainable agriculture practices, and
              supporting local food economies.
            </p>
            <button style={buttonStyle} onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {showProjectsModal && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <span style={closeButtonStyle} onClick={handleCloseProjectsModal}>&times;</span>
            <h2>Collaborative Research Projects</h2>
            <p>Join and contribute to ongoing research projects.</p>
            <h3>India Food System Vision 2030 Report</h3>
            <p>
              In July 2022, the Foundation published the India Food System Vision 2030 Report. This was developed following extensive consultations with more than 200 experts. The report features 32 essays across three pivotal themes: nourishing everyone for health and wellbeing, producing in harmony with nature, and ensuring inclusive, transformative, and equitable recovery. This visionary document serves as a roadmap for holistic food system transformation in India.
            </p>
            <button style={buttonStyle} onClick={handleCloseProjectsModal}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="sections">
        <div
          className="section"
          style={{ ...sectionStyle, ...(activeSection === 'researchRepository' ? activeSectionStyle : {}) }}
          onClick={() => handleSectionClick('researchRepository')}
        >
          <h2>Research Repository</h2>
          <p>Access and share research papers, reports, and case studies related to sustainable food practices.</p>
          <button style={buttonStyle} onClick={openResearchTable}>
            View Repository
          </button>
          {isResearchTableOpen && (
            <div>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Sr no</th>
                    <th style={thStyle}>Topic name</th>
                    <th style={thStyle}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <a href="https://farmingfirst.org/2024/07/a-biodiversity-success-story-from-puerto-rico">
                        A Biodiversity Success Story from Puerto Rico
                      </a>
                    </td>
                    <td>Biodiversity surrounds me here in Puerto Rico. It starts with the famous coqui frog that has become a symbol of our island. We’re also home to parrots and hundreds of other species of birds. The rich waters of the Caribbean Sea and Atlantic Ocean are full of fish and corals and more.</td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>
                      <a href="https://farmingfirst.org/2024/07/sofi-report-hunger-numbers-stubbornly-high-for-three-consecutive-years/">
                        SOFI Report: Hunger Numbers Stubbornly High for Three Consecutive Years
                      </a>
                    </td>
                    <td>Rio de Janeiro – Around 733 million people faced hunger in 2023, equivalent to one in eleven people globally and one in five in Africa, according to the latest State of Food Security and Nutrition in the World (SOFI) report published today by five United Nations specialised agencies.</td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>
                      <a href="https://farmingfirst.org/2024/07/how-technology-supports-farmers-to-protect-their-profitability/">
                        How Technology Supports Farmers to Protect Their Profitability
                      </a>
                    </td>
                    <td>Technology solutions are emerging to support farmers in optimising their farming practices to overcome financial burdens and preserve the planet.</td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>
                      <a href="https://farmingfirst.org/2024/07/a-strengthened-cooperation-for-a-food-secure-future">
                        A Strengthened Cooperation For a Food-Secure Future
                      </a>
                    </td>
                    <td>Representatives from government, civil society, and the private sector joined together for the second Global Food Security Symposium on 26 June 2024. The event, held at the UN Headquarters in New York, aimed to galvanize global efforts to build a more food-secure future.</td>
                  </tr>
                </tbody>
              </table>
              <button style={buttonStyle} onClick={closeResearchTable}>
                Close Table
              </button>
            </div>
          )}
        </div>

        <div
          className="section"
          style={{ ...sectionStyle, ...(activeSection === 'webinars' ? activeSectionStyle : {}) }}
          onClick={() => handleSectionClick('webinars')}
        >
          <h2>Webinars</h2>
          <p>Join our webinars on various topics related to sustainable food systems.</p>
          <button style={buttonStyle} onClick={openWebinarsTable}>
            View Webinars
          </button>
          {isWebinarsTableOpen && (
            <div>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Sr no</th>
                    <th style={thStyle}>Webinar Title</th>
                    <th style={thStyle}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <a href="https://www.example.com/webinar1">Webinar on Sustainable Agriculture</a>
                    </td>
                    <td>Learn about sustainable agriculture practices and their benefits.</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <a href="https://www.example.com/webinar2">Webinar on Food Security</a>
                    </td>
                    <td>Discuss challenges and solutions for ensuring food security.</td>
                  </tr>
                </tbody>
              </table>
              <button style={buttonStyle} onClick={closeWebinarsTable}>
                Close Table
              </button>
            </div>
          )}
        </div>

        <div
          className="section"
          style={{ ...sectionStyle, ...(activeSection === 'funding' ? activeSectionStyle : {}) }}
          onClick={() => handleSectionClick('funding')}
        >
          <h2>Funding Opportunities</h2>
          <p>Explore funding opportunities for research and projects related to sustainable food practices.</p>
          <button style={buttonStyle} onClick={openFundingTable}>
            View Funding
          </button>
          {isFundingTableOpen && (
            <div>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Sr no</th>
                    <th style={thStyle}>Funding Source</th>
                    <th style={thStyle}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <a href="https://www.example.com/funding1">Global Environment Facility</a>
                    </td>
                    <td>Provides funding for projects aimed at environmental sustainability.</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <a href="https://www.example.com/funding2">Food and Agriculture Organization</a>
                    </td>
                    <td>Supports initiatives focused on improving food security.</td>
                  </tr>
                </tbody>
              </table>
              <button style={buttonStyle} onClick={closeFundingTable}>
                Close Table
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OpenSourceResearchAndMethodology;
