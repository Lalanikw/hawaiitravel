// ChatBot.js
import React from 'react';

function ChatBot() {
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

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
