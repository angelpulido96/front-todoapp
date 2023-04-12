import { createContext, useContext, useState } from 'react';
import { Theme, ThemeProvider } from '@mui/material/styles';
import { lightTheme } from './schemas/light';
import { darkTheme } from './schemas/dark';
import { CssBaseline, IconButton } from '@mui/material';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Head from 'next/head';
import ChangeTheme from '@/modules/ChangeTheme';


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

const themeList = {
  light: lightTheme,
  dark: darkTheme
}

type ObjectKey = keyof typeof themeList;

const ThemeProviderContext = ({ children }: Props) => {

  let value = 'light' as ObjectKey

  if (typeof window !== 'undefined') {
    value = window.localStorage.getItem('theme') as ObjectKey
  }

  const [theme, setTheme] = useState(themeList[value])

  const toggleTheme = () => {
    const newTheme = theme.palette.mode === 'light' ? darkTheme : lightTheme;
    window.localStorage.setItem('theme', theme.palette.mode === 'dark' ? 'light' : 'dark')
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }} >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Head>
          <title>Practice</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        </Head>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider >
  )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeProviderContext