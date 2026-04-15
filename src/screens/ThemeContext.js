import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(prev => !prev);

  const theme = {
    dark: darkMode,
    colors: {
      background: darkMode ? "#121212" : "#ffffff",
      card: darkMode ? "#1e1e1e" : "#f5f5f5",
      text: darkMode ? "#ffffff" : "#000000",
          // BOTONES
        button: darkMode ? "#00ffaa" : "#000000",  
        buttonText: darkMode ? "#000000" : "#ffffff",

        // (tipo iOS)
        primary: darkMode ? "#00ffaa" : "#007AFF"
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}  