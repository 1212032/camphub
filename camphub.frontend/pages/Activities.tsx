import React from 'react';

const Activities: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Activities Management</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Scheduled Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Arts & Crafts</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">9:00 AM - 10:30 AM</p>
              <p className="text-sm">Location: Art Room</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Swimming</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">11:00 AM - 12:30 PM</p>
              <p className="text-sm">Location: Pool</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Nature Walk</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">2:00 PM - 3:30 PM</p>
              <p className="text-sm">Location: Forest Trail</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Add New Activity</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Activity Name</label>
                <input type="text" className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Instructor</label>
                <input type="text" className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Time</label>
                <input type="time" className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Duration</label>
                <input type="text" className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Location</label>
                <input type="text" className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
              </div>
            </div>
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Add Activity
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Activities;