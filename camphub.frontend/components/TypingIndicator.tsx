
import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex justify-start">
        <div className="p-3 rounded-xl bg-gray-200 dark:bg-gray-700 flex items-center space-x-1.5 self-start rounded-bl-none shadow-md">
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
        </div>
    </div>
  );
};

export default TypingIndicator;
