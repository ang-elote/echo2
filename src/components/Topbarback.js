import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate } from "react-router-dom";

const Topbarback = ({
  title = "Page Title", // título default de topbar
  backgroundColor = "var(--pseudo-negro)", // color default del fondo de topbar
  textColor = "var(--blanco-roto)", // color default del texto de topbar
}) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "64px",
        backgroundColor: backgroundColor,
        color: textColor,
        display: "flex",
        alignItems: "center",
        padding: "0 16px",
        zIndex: 1000,
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
        boxSizing: "border-box",
        fontSize: "1.4rem",
            }}
    >
      {/* Back Button */}
      <IconButton
        onClick={() => navigate(-1)} // Go back to the previous page
        sx={{
          color: textColor,
        }}
      >
        <ArrowBackRoundedIcon />
      </IconButton>

      {/* Page Title */}
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Rubik",
          fontWeight: "bold",
          marginLeft: "8px",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Topbarback;
