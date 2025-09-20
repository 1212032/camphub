
import { Registration, Activity, RegistrationStatus } from './types';

export const MOCK_REGISTRATIONS: Registration[] = [
  { id: 'REG-001', camperName: 'Alice Johnson', age: 10, group: 'Eagles', status: RegistrationStatus.Paid, registrationDate: '2024-07-20' },
  { id: 'REG-002', camperName: 'Bob Williams', age: 12, group: 'Bears', status: RegistrationStatus.Pending, registrationDate: '2024-07-20' },
  { id: 'REG-003', camperName: 'Charlie Brown', age: 9, group: 'Eagles', status: RegistrationStatus.Paid, registrationDate: '2024-07-19' },
  { id: 'REG-004', camperName: 'Diana Prince', age: 11, group: 'Lions', status: RegistrationStatus.Paid, registrationDate: '2024-07-19' },
  { id: 'REG-005', camperName: 'Ethan Hunt', age: 13, group: 'Bears', status: RegistrationStatus.Cancelled, registrationDate: '2024-07-18' },
  { id: 'REG-006', camperName: 'Fiona Glenanne', age: 10, group: 'Lions', status: RegistrationStatus.Pending, registrationDate: '2024-07-18' },
];

export const MOCK_ACTIVITIES: Activity[] = [
  { id: 'ACT-01', name: 'Morning Assembly', time: '09:00 AM', location: 'Main Field', instructor: 'Mr. Smith' },
  { id: 'ACT-02', name: 'Archery Practice', time: '10:00 AM', location: 'Archery Range', instructor: 'Ms. Davis' },
  { id: 'ACT-03', name: 'Canoeing', time: '11:00 AM', location: 'Lakefront', instructor: 'Mr. Garcia' },
  { id: 'ACT-04', name: 'Lunch', time: '12:30 PM', location: 'Dining Hall', instructor: 'N/A' },
  { id: 'ACT-05', name: 'Arts & Crafts', time: '02:00 PM', location: 'Crafts Hut', instructor: 'Mrs. White' },
  { id: 'ACT-06', name: 'Swimming', time: '03:30 PM', location: 'Pool', instructor: 'Mr. Taylor' },
];

export const MOCK_WEEKLY_REGISTRATIONS = [
    { day: 'Mon', registrations: 12 },
    { day: 'Tue', registrations: 19 },
    { day: 'Wed', registrations: 8 },
    { day: 'Thu', registrations: 15 },
    { day: 'Fri', registrations: 23 },
    { day: 'Sat', registrations: 31 },
    { day: 'Sun', registrations: 7 },
];
