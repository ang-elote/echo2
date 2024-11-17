import React from 'react';
import Button from '@mui/material/Button';

// Button component using MUI
function CustomButton({ text, onClick }) {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {text}
    </Button>
  );
}

export default CustomButton;
