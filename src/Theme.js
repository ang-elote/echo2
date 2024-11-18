// Theme.js
import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'inherit',  // Use the global font family from CSS
          fontSize: 'inherit',    // Avoid MUI's default font size
          fontWeight: 'inherit',  // Avoid MUI's font weight
          letterSpacing: 'inherit',  // Avoid MUI's letter spacing
        },
      },
    },
  },
});

export default theme;
