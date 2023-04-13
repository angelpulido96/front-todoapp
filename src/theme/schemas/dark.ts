import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#B6A5A5',
    },
    secondary: {
      main: '#F2EFEF',
    },
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
});