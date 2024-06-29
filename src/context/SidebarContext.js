import React, { createContext, useState } from 'react';

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <SidebarContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </SidebarContext.Provider>
  );
};
