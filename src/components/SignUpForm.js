import React, { useState } from "react";
import { Box, TextField, InputAdornment, IconButton, FormControl, Typography } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GradientButton from '../components/GradientButton';
import EmptyButton from '../components/EmptyButton';
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const isValid = form.checkValidity(); // validación

    if (isValid) {
      console.log("Form submitted successfully!");
      navigate("/home"); // navegar a home si validado
    } else {
      console.log("Please fill all required fields.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit} // Use the form's onSubmit
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
        width: "300px",
        margin: "0 auto",
        textAlign: "center",
        fontFamily: 'Rubik',
      }}
    >
      {/* username */}
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <Typography
         sx={{
            fontFamily: 'Rubik',
            fontSize: "1.2rem", 
            color: "var(--blanco-roto)",  
            marginBottom: "6px", 
            textAlign: 'left'
          }}
        >
          pick a username
        </Typography>
        <TextField
          type="text"
          name="username"
          placeholder="username"
          className="textfieldcss"
          fullWidth
          required
          sx={{
            backgroundColor: 'var(--blanco-roto)', 
            borderRadius: '48px', 
            '& .MuiOutlinedInput-root': {
              borderRadius: '48px', 
              '& fieldset': {
                borderColor: 'transparent', // quitar borde color
              },
              '&:hover fieldset': {
                borderColor: 'transparent', // quitar borde en hover xd
              },
              '&.Mui-focused fieldset': {
                borderColor: 'transparent', // quitar borde en el focus state
              },
            },
          }} 
        />
      </FormControl>

      {/* email */}
      <FormControl fullWidth sx={{ marginBottom: 2}}>
        <Typography
          sx={{
            fontFamily: 'Rubik',
            fontSize: "1.2rem", 
            color: "var(--blanco-roto)",  
            marginBottom: "6px",  
            textAlign: 'left'
          }}
        >
          e-mail
        </Typography>
        <TextField
          type="email"
          name="email"
          placeholder="e-mail"
          fullWidth
          required
          sx={{
            backgroundColor: 'var(--blanco-roto)', 
            borderRadius: '48px', 
            '& .MuiOutlinedInput-root': {
              borderRadius: '48px', 
              '& fieldset': {
                borderColor: 'transparent', 
              },
              '&:hover fieldset': {
                borderColor: 'transparent', 
              },
              '&.Mui-focused fieldset': {
                borderColor: 'transparent', 
              },
            },
          }}
        />
      </FormControl>

      {/* password */}
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <Typography
        sx={{
            fontFamily: 'Rubik',
            fontSize: "1.2rem", 
            color: "var(--blanco-roto)",  
            marginBottom: "6px",  
            textAlign: 'left'
          }}
        >
          password
        </Typography>
        <TextField
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="password"
          fullWidth
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={togglePasswordVisibility}
                  edge="end"
                  aria-label="toggle password visibility"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: 'var(--blanco-roto)', 
            borderRadius: '48px', 
            '& .MuiOutlinedInput-root': {
              borderRadius: '48px', 
              '& fieldset': {
                borderColor: 'transparent', 
              },
              '&:hover fieldset': {
                borderColor: 'transparent', 
              },
              '&.Mui-focused fieldset': {
                borderColor: 'transparent', 
              },
            },
          }}
        />
      </FormControl>

      <FormControl fullWidth sx={{ marginBottom: 7 }}>
        <Typography
        sx={{
            fontFamily: 'Rubik',
            fontSize: "1.2rem", 
            color: "var(--blanco-roto)",  
            marginBottom: "6px",  
            textAlign: 'left'
          }}
        >
          confirm password
        </Typography>
        <TextField
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="confirm password"
          fullWidth
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={togglePasswordVisibility}
                  edge="end"
                  aria-label="toggle password visibility"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: 'var(--blanco-roto)', 
            borderRadius: '48px', 
            '& .MuiOutlinedInput-root': {
              borderRadius: '48px', 
              '& fieldset': {
                borderColor: 'transparent', 
              },
              '&:hover fieldset': {
                borderColor: 'transparent', 
              },
              '&.Mui-focused fieldset': {
                borderColor: 'transparent', 
              },
            },
          }}
        />
      </FormControl>

      {/* botón de sign up */}
      <Box>
        <GradientButton
          type="submit" 
          customGradient="linear-gradient(-90deg, var(--verde) 30%, var(--azul-verdoso) 60%, rgba(255, 111, 97, 0) 100%)"
          sx={{
            color: "#fff",
            width: "290px",
            justifyContent: "flex-end",
          }}
        >
          Sign Up
        </GradientButton>
    
      
      </Box>

      <EmptyButton onClick={() => navigate("/login")}>
        log in instead
     </EmptyButton>

    </Box>
  );
};

export default SignUpForm;
