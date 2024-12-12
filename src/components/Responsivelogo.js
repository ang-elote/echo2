// components/ResponsiveLogo.js
import React from 'react';
import { Box } from '@mui/material';

const ResponsiveLogo = ({ src, alt = "Logo" }) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        display: 'block', // Ensures proper centering behavior
        margin: '0 auto', // Centers horizontally in the container
        minWidth: '90px',
        maxWidth: '120px', // Adjust to screen size
        width: '15vw', // Responsive width
        height: 'auto', // Maintains aspect ratio
        position: 'relative', // Keeps it in the layout flow
      }}
    />
  );
};

export default ResponsiveLogo;
