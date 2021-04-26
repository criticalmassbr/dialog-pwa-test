import React from 'react';

import { UserProvider } from './user';

export const AppProvider: React.FC = ({ children }) => {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  );
};
