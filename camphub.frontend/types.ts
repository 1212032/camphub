
export enum RegistrationStatus {
  Paid = 'Paid',
  Pending = 'Pending',
  Cancelled = 'Cancelled'
}

export interface Registration {
  id: string;
  camperName: string;
  age: number;
  group: string;
  status: RegistrationStatus;
  registrationDate: string;
}

export interface Activity {
  id: string;
  name: string;
  time: string;
  location: string;
  instructor: string;
}
