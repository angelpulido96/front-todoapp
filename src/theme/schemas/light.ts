import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: 'light'
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 1000px white inset",
            },
          },
        },
      },
    },
  },
});