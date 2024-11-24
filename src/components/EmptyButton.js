import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({  
  padding: '10px 20px',
  fontSize: '20px',
  textTransform: 'lowercase', 
  display: 'flex',  
  boxShadow: 'none', 
  fontFamily: 'Helvetica',
  fontWeight: 'bold',
  color: 'var(--blanco-roto)',
  textAlign: 'center',
  marginTop: 10
}));


const EmptyButton = ({ children, onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default EmptyButton;