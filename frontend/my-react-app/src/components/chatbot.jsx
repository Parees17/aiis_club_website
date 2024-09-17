import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./chatbot.css"; // We will create a custom CSS file to style the chat messages.
import { BASE_URL } from "../App";


const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Send message to the backend
  const sendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user", timestamp: new Date() };
    setMessages([...messages, userMessage]);

    // Call the chatbot backend
    try {
      const response = await fetch("http://localhost:5000/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage = { text: data.reply, sender: "bot", timestamp: new Date() };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

    } catch (error) {
      console.error("Error fetching chatbot response:", error);
    }

    setInput("");
  };

  // Render messages in chat bubbles
  const renderMessages = () =>
    messages.map((msg, index) => (
      <div key={index} className={`message ${msg.sender === "user" ? "user-message" : "bot-message"}`}>
        <div className="message-text">{msg.text}</div>
        <div className="message-timestamp">{msg.timestamp.toLocaleTimeString()}</div>
      </div>
    ));

  return (
    <div className="chat-container">
      <div className="chat-header">
        <img src="../img/AIClubLogoOrthoRenderV11.png" alt="Avatar" className="avatar" />
        <span className="status-online">Online</span>
      </div>

      <div className="chat-body">
        {renderMessages()}
      </div>

      <div className="chat-footer">
        <input
          type="text"
          className="form-control"
          value={input}
          onChange={handleChange}
          placeholder="Type a message..."
        />
        <button className="btn btn-primary" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
