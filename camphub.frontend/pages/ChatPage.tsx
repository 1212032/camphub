import React, { useState } from 'react';
import ChatWindow from '../components/ChatWindow';

const ChatPage: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="fixed bottom-5 left-5 z-50">
      {!isChatOpen ? (
        <button
          onClick={toggleChat}
          className="w-16 h-16 bg-indigo-600 rounded-full text-white flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 animate-fade-in-up"
          aria-label="Open chat"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            ></path>
          </svg>
        </button>
      ) : (
        <div className="w-[calc(100vw-40px)] h-[calc(100vh-40px)] sm:w-[400px] sm:h-[600px] md:h-[calc(100vh-120px)] md:max-h-[700px] transition-all duration-300">
          <ChatWindow onClose={toggleChat} />
        </div>
      )}
    </div>
  );
};

export default ChatPage;