// ChatBot.js
import React from 'react';

function ChatBot() {

  return (
    <div>
      {/* Your other content */}
      <df-messenger
          intent="WELCOME"
          chat-title="Hana"
          agent-id="de44beef-1d2f-4a54-8051-a7f20efc8cad"
          language-code="en"
      ></df-messenger>
    </div>
  );
}

export default ChatBot;
