
import React from 'react';
import { MOCK_REGISTRATIONS, MOCK_ACTIVITIES, MOCK_WEEKLY_REGISTRATIONS } from '../constants';
import StatCard from './StatCard';
import ActivitySchedule from './ActivitySchedule';
import RecentRegistrations from './RecentRegistrations';
import RegistrationChart from './RegistrationChart';
import { RegistrationStatus } from '../types';

const Dashboard: React.FC = () => {
    const totalRegistrations = MOCK_REGISTRATIONS.length;
    const pendingPayments = MOCK_REGISTRATIONS.filter(r => r.status === RegistrationStatus.Pending).length;
    const activitiesToday = MOCK_ACTIVITIES.length;

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3">
                <StatCard title="Total Registrations" value={totalRegistrations.toString()} icon="users" />
                <StatCard title="Pending Payments" value={pendingPayments.toString()} icon="currency" />
                <StatCard title="Activities Today" value={activitiesToday.toString()} icon="calendar" />
            </div>

            <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <RegistrationChart data={MOCK_WEEKLY_REGISTRATIONS} />
                </div>
                <div>
                    <ActivitySchedule activities={MOCK_ACTIVITIES} />
                </div>
            </div>

            <div>
                <RecentRegistrations registrations={MOCK_REGISTRATIONS.slice(0, 5)} />
            </div>
        </div>
    );
};

export default Dashboard;
