'use client';

import { createContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

export const EmailContext = createContext({
  email: '',
  setEmail: (value: any) => {},
});

const EmailProvider: React.FC<Props> = ({ children }) => {
  const [email, setEmail] = useState('');

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
};

export default EmailProvider;
