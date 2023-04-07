import { createContext, useContext, useState } from 'react';
import { Theme, ThemeProvider } from '@mui/material/styles';
import { lightTheme } from './schemas/light';
import { darkTheme } from './schemas/dark';

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  toggleTheme: () => { },
});

const ThemeProviderContext = ({ children }: Props) => {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = () => {
    const newTheme = theme.palette.mode === 'light' ? darkTheme : lightTheme;
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }} >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider >
  )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeProviderContext