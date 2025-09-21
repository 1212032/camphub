
import React from 'react';
import { ChatMessage, Author } from '../types';

interface MessageBubbleProps {
  message: ChatMessage;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.author === Author.USER;

  const bubbleClasses = isUser
    ? 'bg-indigo-600 text-white self-end rounded-br-none'
    : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 self-start rounded-bl-none';
  
  const containerClasses = isUser ? 'flex justify-end' : 'flex justify-start';

  return (
    <div className={containerClasses}>
      <div className={`max-w-md md:max-w-lg lg:max-w-xl p-3 rounded-xl shadow-md ${bubbleClasses}`}>
        <p className="text-sm break-words">{message.text}</p>
      </div>
    </div>
  );
};

export default MessageBubble;
