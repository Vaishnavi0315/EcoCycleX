import React, { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send message to backend here
    console.log("Sending message:", message);
    setMessage("");
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.3s, background-color 0.3s",
    cursor: "pointer",
    opacity: 0,
    transform: "translateY(20px)",
    animation: "appear 0.5s forwards",
    position: "relative",
    margin: '14% auto 0',
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "30px",
  };

  const contentStyle = {
    display: "flex",
    width: "100%",
    maxWidth: "800px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
  };

  const conversationsStyle = {
    width: "80%", // Increased width to 40%
    padding: "20px",
    borderRight: "1px solid #ddd",
  };

  const userStyle = {
    width: "90%", // Increased width to 60%
    padding: "20px",
  };

  const h3Style = {
    marginTop: "0",
  };

  const ulStyle = {
    listStyle: "disc",
    paddingLeft: "20px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    marginBottom: "10px",
  };

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const messageStyle = {
    width: "310px",
    height: "40px",
    borderRadius: "10px",
    backgroundColor: "#40414f",
    transform: "translate(0px,0px)",
    boxShadow: "5px 5px #34343f",
  };

  const msgInputStyle = {
    fontSize: "18px",
    borderRadius: "5px",
    backgroundColor: "#40414f",
    border: "none",
    outline: "none",
    width: "250px",
    height: "30px",
    transform: "translate(5px,-3px)",
    color: "white",
    padding: "10px",
    fontWeight: "bold",
  };

  const sendSvgStyle = {
    width: "30px",
    height: "30px",
    borderWidth: "50px",
    transform: "translate(20px,5px)",
    backgroundSize: "10px",
    borderRadius: "10px",
    transition: "0.3s",
  };

  const lStyle = {
    position: "absolute",
    width: "1%",
    height: "30px",
    backgroundColor: "#2e2f38",
    transform: "translate(-20px,5px)",
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1>Messaging System</h1>
        <p>Connect with others, discuss projects, and share resources.</p>
      </div>
      <div style={contentStyle}>
        <div style={conversationsStyle}>
          <h3 style={h3Style}>Conversations</h3>
          <ul style={ulStyle}>
            <li>Chat with User1</li>
            <li>Group Chat: Project Team</li>
          </ul>
        </div>
        <div style={userStyle}>
          <h3 style={h3Style}>User1</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={message}
              onChange={handleChange}
              placeholder="Type a message..."
              style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
