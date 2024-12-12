import React from 'react';
import { Box, Typography } from "@mui/material";
import bgLogin from "../assets/bg-login.png";
import logo from "../assets/whitelogo.png"; 
import SignUpForm from '../components/SignUpForm';
import Responsivelogo from '../components/Responsivelogo';

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
      {/* logo de la app */}
      <Responsivelogo src={logo} />

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
