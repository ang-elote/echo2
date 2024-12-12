import React from 'react';
import { Box, Typography } from "@mui/material";
import bgLogin from "../assets/bg-login.png";
import logo from "../assets/whitelogo.png"; 
import Changepassform from '../components/Changepassform';
import Responsivelogo from '../components/Responsivelogo';


const Changepassword = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "var(--pseudo-negro)",
        backgroundImage: "linear-gradient(to bottom, #2e2e2e, var(--pseudo-negro))", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
      }}
    >
      {/* logo de la app */}
      <Responsivelogo src={logo} />

      <Typography sx={{ 
        color: 'var(--blanco-roto)', 
        fontFamily: 'Arial', 
        fontSize: '2.7rem', 
        fontWeight: 'bold', 
        }}>
        change
      </Typography>    
      <Typography sx={{ 
        color: 'var(--blanco-roto)', 
        margintop: -0, 
        fontFamily: 'Arial', 
        fontSize: '2.7rem', 
        fontWeight: 'bold', 
        }}>
        password
      </Typography> 
    <Box>
      <Typography sx={{ 
        color: 'var(--blanco-roto)', 
        marginBottom: 4, 
        fontFamily: 'Rubik', 
        fontSize: '1rem', 
        }}>
        Your password must be at least 8 <br/>characters and should include a <br/>combination of numbers and letters.
      </Typography>    
      </Box>

      <Changepassform />
    </Box>
  );
};

export default Changepassword;
