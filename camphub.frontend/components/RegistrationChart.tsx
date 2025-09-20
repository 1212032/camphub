
import React from 'react';

interface ChartData {
    day: string;
    registrations: number;
}

interface RegistrationChartProps {
    data: ChartData[];
}

const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } = (window as any).Recharts;

const RegistrationChart: React.FC<RegistrationChartProps> = ({ data }) => {
    if (!BarChart) {
        return (
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md h-full flex items-center justify-center">
                <p className="text-gray-500">Chart library is loading...</p>
            </div>
        );
    }
    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md h-96">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Weekly Registrations</h3>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(107, 114, 128, 0.3)" />
                    <XAxis dataKey="day" tick={{ fill: '#9CA3AF' }} />
                    <YAxis tick={{ fill: '#9CA3AF' }} />
                    <Tooltip 
                        contentStyle={{ 
                            backgroundColor: '#1F2937', 
                            borderColor: '#374151',
                            borderRadius: '0.5rem' 
                        }} 
                        labelStyle={{ color: '#F9FAFB' }}
                        cursor={{fill: 'rgba(79, 70, 229, 0.1)'}}
                    />
                    <Legend />
                    <Bar dataKey="registrations" fill="#4f46e5" name="New Registrations" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RegistrationChart;
