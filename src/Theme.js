
import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'inherit',  
          fontSize: 'inherit',    
          fontWeight: 'inherit',  
          letterSpacing: 'inherit',  
        },
      },
    },
  },
});

export default theme;
