import { createTheme } from "@mui/material";
const themeColors = {
  primary: '#B6A5A5',
  secondary: "#F2EFEF",
  success: "#57CA22",
  warning: "#FFA319",
  info: "#33C2FF",
  error: "#FF1943",
  black: "#252525",
  white: "#FFFFFF",
  textMainColor: '#2f2f2f',
  textSecondaryColor: '#8e8e8e',
  backgroundColor: '#f4f5f7',
  tertiary: "#3a56a5",
  priceColor: "#243A7A",
  crediValePrice: "#E12C34",
  notice: '#c0bebe',
  globalColor: '#4A9DD8'
}
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: themeColors.primary,
    },
    secondary: {
      main: themeColors.secondary,
    },
    success: {
      main: themeColors.success,
    },
    warning: {
      main: themeColors.warning,
    },
    info: {
      main: themeColors.info,
    },
    error: {
      main: themeColors.error,
    }
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 1000px #1e1e1e inset",
            },
          },
        },
      },
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: "IBM Plex Sans",
    button: {
      textTransform: 'none',
    },
  }
});