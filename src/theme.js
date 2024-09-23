// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Custom primary color
    },
    secondary: {
      main: "#ff4081", // Custom secondary color
    },
    error: {
      main: "#f44336", // Custom error color
    },
    warning: {
      main: "#ffa726", // Custom warning color
    },
    info: {
      main: "#29b6f6", // Custom info color
    },
    success: {
      main: "#66bb6a", // Custom success color
    },
    background: {
      default: "#f5f5f5", // Custom background color
    },
  },
});

export default theme;
