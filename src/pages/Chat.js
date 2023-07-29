import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [conversation, setConversation] = useState([]);
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  const sendMessage = async (message) => {
        setConversation([...conversation, { role: 'user', content: message }]);

        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          };
          
        axios.post('https://api.openai.com/v1/engines/gpt-3.5-turbo/completions', { prompt: 'Hello' }, { headers })
            .then((response) => {
              // Handle the response
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }

  return (
        <div className="chat-container">
        {conversation.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
            {msg.content}
            </div>
        ))}
        <input
            type="text"
            placeholder="Type your message..."
            onKeyUp={(e) => e.key === 'Enter' && sendMessage(e.target.value)}
        />
        </div>
    );
};

export default Chat;
