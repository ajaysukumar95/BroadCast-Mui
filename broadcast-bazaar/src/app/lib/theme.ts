// lib/theme.ts
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
          secondary: "#666666", // Secondary text color
        },
        background: {
          default: "#F5F5F5", // Background color
          paper: "#FFFFFF", // Paper surfaces like cards
        },
      },
      typography: {
        fontFamily: 'var(--font-roboto)',
      },
});

export default theme;