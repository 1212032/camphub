
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between h-20 px-6 bg-white dark:bg-gray-800 border-b dark:border-gray-700 flex-shrink-0">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Dashboard</h2>
      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-500 bg-gray-100 rounded-full hover:bg-gray-200 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:ring">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        </button>
        <div className="relative">
          <img
            className="object-cover w-10 h-10 rounded-full"
            src="https://picsum.photos/100"
            alt="Your avatar"
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
