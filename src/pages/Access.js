// pages/Access.js
import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import bgAccess from "../assets/bg-access.png";
import logo from "../assets/whitelogo.png"; 
import GradientButton from '../components/GradientButton';

const Access = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${bgAccess})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
      }}
    >
      {/* logo de la app */}
      <Box
    component="img"
    src={logo}   
    alt="Echo Logo"
    sx={{
      position: 'absolute',
      top: '56px', // margen d arriba
      left: '50%',
      transform: 'translateX(-50%)', // q quede centrado horizontalmente
      width: '80px',
    }}
  />
      {/* texto d join the noise */}
      <Typography variant="h2" sx={{ color: 'var(--blanco-roto)', marginBottom: -2}}>
        join the
      </Typography>     
      <Typography variant="h1" sx={{ color: 'var(--blanco-roto)', marginBottom: 6 }}>
        noise
      </Typography>    

      {/* botones */}
      <Box>
        <GradientButton
          sx={{
            color: "#fff",
            marginBottom: 2,
            width: "290px",
            justifyContent: 'flex-start'
            
          }}
        >
          log in
        </GradientButton>
        <br />
        <GradientButton
  customGradient="linear-gradient(-90deg, var(--verde) 30%, var(--azul-verdoso) 60%, rgba(255, 111, 97, 0) 100%)"
  sx={{
    color: "#fff",
    width: "290px",
    justifyContent: 'flex-end'

  }}
>
  sign up
</GradientButton>

      </Box>
    </Box>
  );
};

export default Access;