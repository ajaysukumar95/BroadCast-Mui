import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EE264E", // Primary UI color (buttons, app bar, etc.)
    },
    secondary: {
      main: "#FF4081", // Secondary color (optional)
    },
    text: {
      primary: "#0C111D", // Primary text color
      secondary: "#475467", // Secondary text color
    },
    background: {
      default: "#ffffff", // Background color
      paper: "#FFFFFF", // Paper surfaces like cards
    },
  },
  typography: {
    fontFamily: "var(--font-outfit)",
  },
  breakpoints: {
    values: {
      xs: 0,      // Extra small devices (phones)
      sm: 600,    // Small devices (tablets)
      md: 960,    // Medium devices (desktops)
      lg: 1280,   // Large devices (large desktops)
      xl: 1920,   // Extra large screens
    },
  },
});

export default theme;