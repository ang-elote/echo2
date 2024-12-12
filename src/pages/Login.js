import React from 'react';
import { Box, Typography } from "@mui/material";
import bgLogin from "../assets/bg-login.png";
import logo from "../assets/whitelogo.png"; 
import Loginform from '../components/Loginform';
import Responsivelogo from '../components/Responsivelogo';

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
      {/* logo de la app */}
      <Responsivelogo src={logo} />


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
