import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const theme = {
  color: 'var(--text-principal-dark)',
  background: 'var(--background-dark)',
};

export const ThemeProvider = ({ children }) => {
  const [themeSelected, setThemeSelected] = useState(theme);

  return (
    <ThemeContext.Provider value={{ themeSelected, setThemeSelected }}>
      {children}
    </ThemeContext.Provider>
  );
};
