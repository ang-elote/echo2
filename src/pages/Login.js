import React from 'react';
import { Box, Typography } from "@mui/material";
import bgLogin from "../assets/bg-login.png";
import logo from "../assets/whitelogo.png"; 
import Loginform from '../components/Loginform';
const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${bgLogin})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="Echo Logo"
        sx={{
          position: 'absolute',
          top: '56px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80px',
        }}
      />

      <Typography sx={{ 
        color: 'var(--blanco-roto)', 
        marginBottom: 1, 
        fontFamily: 'Arial', 
        fontSize: '2.7rem', 
        fontWeight: 'bold' 
        }}>
        log in
      </Typography>    

      <Loginform />

      
    </Box>
  );
};

export default Login;
