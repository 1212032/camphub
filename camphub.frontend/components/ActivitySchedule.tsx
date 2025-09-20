
import React from 'react';
import { Activity } from '../types';

interface ActivityScheduleProps {
    activities: Activity[];
}

const ActivitySchedule: React.FC<ActivityScheduleProps> = ({ activities }) => {
    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md h-full">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Today's Schedule</h3>
            <ul className="space-y-4">
                {activities.map((activity) => (
                    <li key={activity.id} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-16 text-center">
                            <p className="text-lg font-bold text-indigo-500">{activity.time.split(' ')[0]}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time.split(' ')[1]}</p>
                        </div>
                        <div className="flex-1 border-l-2 border-indigo-200 dark:border-indigo-700 pl-4 py-1">
                            <p className="font-semibold text-gray-800 dark:text-gray-200">{activity.name}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{activity.location}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActivitySchedule;
