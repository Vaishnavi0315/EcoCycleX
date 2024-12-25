import React, { useState } from 'react';

function Forums() {
  const [activeSection, setActiveSection] = useState('discussionBoards');
  const [showDiscussionModal, setShowDiscussionModal] = useState(false);
  const [showQAModal, setShowQAModal] = useState(false);
  const [documentFile, setDocumentFile] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleDocumentFileChange = (event) => {
    setDocumentFile(event.target.files[0]);
  };

  const handleDiscussionButtonClick = () => {
    setShowDiscussionModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleQABtnClick = () => {
    setShowQAModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseDiscussionModal = () => {
    setShowDiscussionModal(false);
    document.body.style.overflow = 'unset';
  };

  const handleCloseQAModal = () => {
    setShowQAModal(false);
    document.body.style.overflow = 'unset';
  };

  const styles = {
    app: {
      textAlign: 'center',
      padding: '15% auto',
      marginTop: '20%',
      maxWidth: '800px',
       margin: '6% auto 0',
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
    modal: {
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
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
      position: 'relative',
    },
    close: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      fontSize: '24px',
      cursor: 'pointer',
    },
    startDiscussion: {
      display: 'block',
      width: '300px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    startDiscussionTitle: {
      marginTop: 0,
      fontSize: '1.5em',
      color: '#333',
    },
    formGroup: {
      marginBottom: '10px',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '3px',
      boxSizing: 'border-box',
      marginBottom: '10px',
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
      <h1 style={styles.title}>Forums</h1>
      <p>Discuss topics related to sustainable food ecosystems, share knowledge, and ask questions.</p>
      {showDiscussionModal && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <span style={styles.close} onClick={handleCloseDiscussionModal}>
              &times;
            </span>
            <h2>Start a Discussion - Discussion Boards</h2>
            <div style={styles.startDiscussion}>
              <h2 style={styles.startDiscussionTitle}>Start a Discussion - General Discussion</h2>
              <form>
                <div style={styles.formGroup}>
                  <label htmlFor="title">Title:</label>
                  <input type="text" id="title" name="title" style={styles.input} />
                </div>
                <div style={styles.formGroup}>
                  <label htmlFor="content">Content:</label>
                  <textarea id="content" name="content" style={styles.input} />
                </div>
                <button type="submit" style={styles.viewButton}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}
      {showQAModal && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <span style={styles.close} onClick={handleCloseQAModal}>
              &times;
            </span>
            <h2>Ask a Question - Q&A Section</h2>
            <div style={styles.startDiscussion}>
              <h2 style={styles.startDiscussionTitle}>Ask a Question - General Question</h2>
              <form>
                <div style={styles.formGroup}>
                  <label htmlFor="question">Question:</label>
                  <input type="text" id="question" name="question" style={styles.input} />
                </div>
                <button type="submit" style={styles.viewButton}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}
      <div className="sections">
        <div
          style={{ ...styles.section, ...(activeSection === 'discussionBoards' ? styles.active : {}) }}
          onClick={() => handleSectionClick('discussionBoards')}
        >
          <h2>Discussion Boards</h2>
          <p>Engage in conversations on various topics related to sustainable food ecosystems.</p>
          <button style={styles.viewButton} onClick={handleDiscussionButtonClick}>
            Start a Discussion
          </button>
        </div>
        <div
          style={{ ...styles.section, ...(activeSection === 'knowledgeSharing' ? styles.active : {}) }}
          onClick={() => handleSectionClick('knowledgeSharing')}
        >
          <h2>Knowledge Sharing</h2>
          <p>Share articles, research papers, and more.</p>
          <input type="file" onChange={handleDocumentFileChange} />
          <button className="button">
            <span className="btn__icon">
              <svg
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
                <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"></path>
                <path d="M9 15l3 -3l3 3"></path>
                <path d="M12 12l0 9"></path>
              </svg>
            </span>
            <span className="btn__text">Upload</span>
          </button>
        </div>
        <div
          style={{ ...styles.section, ...(activeSection === 'qnA' ? styles.active : {}) }}
          onClick={() => handleSectionClick('qnA')}
        >
          <h2>Q&A Section</h2>
          <p>Participate in webinars, workshops, and seminars on sustainable food practices and research methodologies.</p>
          <button style={styles.viewButton} onClick={handleQABtnClick}>
            Ask a Question
          </button>
        </div>
      </div>
    </div>
  );
}

export default Forums;
