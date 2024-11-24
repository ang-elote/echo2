import React from 'react';
import { Box, Typography } from "@mui/material";
import bgLogin from "../assets/bg-login.png";
import logo from "../assets/whitelogo.png"; 
import SignUpForm from '../components/SignUpForm';
const Register = () => {
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
        sign up
      </Typography>    

      <SignUpForm />
    </Box>
  );
};

export default Register;
