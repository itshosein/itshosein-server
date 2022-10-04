import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#001129",
      paper: "#001129",
    },
    common: {
      white: "#f1e1f5",
      black: "#001129",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "white",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        * {
          margin: 0;
          padding: 0;
        }
      `,
    },
  },
});

export default theme;
