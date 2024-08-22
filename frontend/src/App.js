import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://192.168.15.50:5000");

function App() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [userSet, setUserSet] = useState(false);

  const sendMessage = () => {
    socket.emit("message", message);
    setMessage("");
  };

  useEffect(() => {
    socket.on("message", (payload) => {
      setChat([...chat, payload]);
    });
  }, [chat]);

  const handleUsernameSubmit = () => {
    socket.emit("setUsername", username);
    setUserSet(true);
  };

  return (
    <div className="App">
      {!userSet ? (
        <div>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleUsernameSubmit}>Join Chat</button>
        </div>
      ) : (
        <div>
          <div className="chat-box">
            {chat.map((msg, index) => (
              <div key={index}>
                <strong>{msg.user}:</strong> {msg.text}
                {/* <strong>teste:</strong> {msg.text} */}
              </div>
            ))}
          </div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      )}
    </div>
  );
}

export default App;
