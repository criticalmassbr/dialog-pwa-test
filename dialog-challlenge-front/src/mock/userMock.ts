import { IPerson } from '../interface/user';

export const user: IPerson[] = [
  {
    _id: '5f1b3f4b7917ef26107bd58c',
    index: 0,
    picture: 'https://i.pravatar.cc/200?u=5f1b3f4b7917ef26107bd58c',
    age: 37,
    eyeColor: 'brown',
    name: 'Weber Stein',
    company: 'VIAGRAND',
    email: 'weber.stein@viagrand.ca',
    phone: '+1 (866) 533-3564',
    friends: [
      {
        _id: '5f1d7f3e8882c9c811b111ce',
        index: 0,
        picture: 'https://i.pravatar.cc/200?u=5f1d7f3e8882c9c811b111ce',
        age: 23,
        eyeColor: 'green',
        name: 'Patti Mckenzie',
        company: 'DAISU',
        email: 'pattimckenzie@daisu.com',
        phone: '+1 (960) 566-3327',
      },
    ],
    greeting: 'Hello, Weber! You have 9 unread messages.',
  },
];
