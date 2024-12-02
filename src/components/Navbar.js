import React from "react";
import { Box, IconButton } from "@mui/material";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import Face5RoundedIcon from '@mui/icons-material/Face5Rounded';
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Define a helper function to determine the fill color
  const getFillColor = (path) => (location.pathname === path ? "var(--rosado)" : "var(--pseudo-negro)");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: "70px",
        backgroundColor: "var(--blanco-roto)", // Navbar background
        position: "fixed",
        bottom: 0, // Stick to the bottom
      }}
    >
      {/* Home Icon */}
      <IconButton
        onClick={() => navigate("/home")}
        sx={{
          backgroundColor: getFillColor("/home"),
          color: "#fff",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
        }}
      >
        <HomeRoundedIcon />
      </IconButton>

      {/* Search Icon */}
      <IconButton
        onClick={() => navigate("/search")}
        sx={{
          backgroundColor: getFillColor("/search"),
          color: "#fff",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
        }}
      >
        <SearchRoundedIcon />
      </IconButton>

      {/* Song History Icon */}
      <IconButton
        onClick={() => navigate("/history")}
        sx={{
          backgroundColor: getFillColor("/history"),
          color: "#fff",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
        }}
      >
        <ReplayRoundedIcon />
      </IconButton>

      {/* Profile Icon */}
      <IconButton
        onClick={() => navigate("/profile")}
        sx={{
          backgroundColor: getFillColor("/profile"),
          color: "#fff",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
        }}
      >
        <Face5RoundedIcon />
      </IconButton>
    </Box>
  );
};

export default Navbar;
