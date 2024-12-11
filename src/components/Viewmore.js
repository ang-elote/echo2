import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Viewmore = ({ text = "titulo", textColor = "var(--pseudo-negro)" }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        backgroundColor: "transparent", 
        margin: "10px 0px"
      }}
    >
      {/* texto izq */}
      <Typography
        sx={{
          fontSize: "1.3rem", 
          fontWeight: "bold",
          color: textColor, 
          fontFamily: "Rubik, sans-serif",
        }}
      >
        {text}
      </Typography>

      {/* viewmore */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Typography
          sx={{
            fontSize: "1rem", 
            fontWeight: "regular",
            color: textColor, 
            fontFamily: "Rubik, sans-serif",
            marginRight: "4px", 
          }}
        >
          view all
        </Typography>
        <ArrowForwardIosIcon
          sx={{
            fontSize: "1rem", 
            color: textColor, 
          }}
        />
      </Box>
    </Box>
  );
};

export default Viewmore;
