import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// Styled Button Component
const StyledButton = styled(Button)(({ theme, customGradient }) => ({  borderRadius: '60px', // Rounded corners
  background: customGradient || `linear-gradient(90deg, var(--naranja-chill) 30%, var(--rosado-desaturado) 60%, rgba(255, 111, 97, 0) 100%)`,
  padding: '10px 20px',
  fontSize: '32px',
  textTransform: 'lowercase', 
  display: 'flex',
  boxShadow: 'none'
  
}));

// Button Component
const GradientButton = ({ children, onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default GradientButton;