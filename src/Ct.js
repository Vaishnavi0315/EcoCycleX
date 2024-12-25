import React, { useState } from 'react';

function CollaborationTools() {
  const [documentFile, setDocumentFile] = useState(null);
  const [resourceFile, setResourceFile] = useState(null);
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [activeSection, setActiveSection] = useState('documentSharing');

  const handleDocumentFileChange = (event) => {
    setDocumentFile(event.target.files[0]);
  };

  const handleResourceFileChange = (event) => {
    setResourceFile(event.target.files[0]);
  };

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTaskObj = { id: Date.now(), task: newTask, editing: false };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const openNewPage = (url) => {
    window.open(url, '_blank');
  };

  const handleEditTask = (id) => {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        task.editing = true;
      }
      return task;
    }));
  };

  const handleSaveTask = (id, task) => {
    setTasks(tasks.map((t) => {
      if (t.id === id) {
        t.task = task;
        t.editing = false;
      }
      return t;
    }));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="hero">
      <div className="App" style={styles.app}>
        <h1 className="title">Collaboration Tools</h1>
        <p>Work together, share resources, and track progress to drive positive change in the industry.</p>
        <div className="sections">
          <div
            className={`section ${activeSection === 'documentSharing' ? 'active' : ''}`}
            onClick={() => handleSectionClick('documentSharing')}
            style={styles.section}
          >
            <h2 style={styles.sectionTitle}>Document Sharing</h2>
            <input type="file" onChange={handleDocumentFileChange} style={styles.inputFile} />
            <button className="button" style={styles.button}>
              <span className="btn__icon">
                {/* SVG Icon */}
              </span>
              <span className="btn__text">Upload</span>
            </button>
          </div>

          <div
            className={`section ${activeSection === 'projectManagement' ? 'active' : ''}`}
            onClick={() => handleSectionClick('projectManagement')}
            style={styles.section}
          >
            <h2 style={styles.sectionTitle}>Project Management</h2>
            <input
              type="text"
              value={newTask}
              onChange={handleNewTaskChange}
              placeholder="Add a new task or milestone..."
              style={styles.inputTask}
            />
            <button onClick={handleAddTask} style={styles.button}>Add</button>
            <ul style={styles.taskList}>
              {tasks.map((task) => (
                <li key={task.id} style={styles.taskItem}>
                  {task.editing ? (
                    <div style={styles.editTaskContainer}>
                      <input
                        type="text"
                        defaultValue={task.task}
                        onChange={(e) => handleSaveTask(task.id, e.target.value)}
                        style={styles.inputTask}
                      />
                      <button onClick={() => handleSaveTask(task.id, task.task)} style={styles.saveButton}>
                        Save
                      </button>
                    </div>
                  ) : (
                    <span style={styles.taskText}>{task.task}</span>
                  )}
                  <button onClick={() => handleEditTask(task.id)} style={styles.editButton}>
                    <i className="fas fa-edit" />
                  </button>
                  <button onClick={() => handleDeleteTask(task.id)} style={styles.deleteButton}>
                    <i className="fas fa-trash" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`section ${activeSection === 'resourceLibrary' ? 'active' : ''}`}
            onClick={() => handleSectionClick('resourceLibrary')}
            style={styles.section}
          >
            <h2 style={styles.sectionTitle}>Resource Library</h2>
            <input type="file" onChange={handleResourceFileChange} style={styles.inputFile} />
            <button className="button" style={styles.button}>
              <span className="btn__icon">
                {/* SVG Icon */}
              </span>
              <span className="btn__text">Upload</span>
            </button>
          </div>

          <div
            className={`section ${activeSection === 'joinCommunity' ? 'active' : ''}`}
            onClick={() => handleSectionClick('joinCommunity')}
            style={styles.section}
          >
            <h2 style={styles.sectionTitle}>Join Community</h2>
            <p>If you're passionate about creating a sustainable food ecosystem, we invite you to join our community. Together, we can make a difference and create a better future for all.</p>
            <button className="view-button" onClick={() => openNewPage('https://foodfuturefoundation.org/')} style={styles.viewButton}>
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  app: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    margin: '9% auto 0',
  },
  section: {
    background: '#f9f9f9',
    padding: '20px',
    margin: '20px 0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.5s, background-color 0.5s',
    cursor: 'pointer',
    backgroundColor: '#eeeeff',
    // Removed opacity and transform to ensure visibility
  },
  sectionTitle: {
    color: '#333',
    marginBottom: '10px',
  },
  inputFile: {
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  inputTask: {
    padding: '10px',
    marginRight: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: 'calc(100% - 120px)', // Adjust width to accommodate the button
  },
  taskList: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '10px',
  },
  taskItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  taskText: {
    flex: 1,
    color: '#555',
  },
  editTaskContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  saveButton: {
    backgroundColor: '#34C759',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  editButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#007BFF',
    marginLeft: '10px',
  },
  deleteButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#FF3B30',
    marginLeft: '10px',
  },
  viewButton: {
    backgroundColor: '#34C759',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default CollaborationTools;
