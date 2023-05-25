export interface User {
  name: string;
  job: string;
  gender: string;
  country: string;
  age: number;
  avatar: string;
}

export const users: User[] = [
  {
    name: 'John',
    job: 'Teacher',
    gender: 'Male',
    country: 'United States',
    age: 35,
    avatar: 'assets/avatar/john.jpeg',
  },
  {
    name: 'Mark',
    job: 'Designer',
    gender: 'Male',
    country: 'Germany',
    age: 35,
    avatar: 'assets/avatar/mark.jpeg',
  },
  {
    name: 'Merry',
    job: 'Lawyer',
    gender: 'Female',
    country: 'Ireland',
    age: 35,
    avatar: 'assets/avatar/merry.jpeg',
  },
  {
    name: 'Steve',
    job: 'Doctor',
    gender: 'Male',
    country: 'India',
    age: 35,
    avatar: 'assets/avatar/steve.jpeg',
  },
];
