import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography, Badge } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

const Topbar = ({ title = "Home" }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // scroll abajo esconde topbar
        setIsVisible(false);
      } else {
        // scroll arriba muestra topbar
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Box
      sx={{
        position: "fixed",
        top: isVisible ? 0 : "-64px", // esconde barra
        left: 0,
        width: "100%",
        height: "64px",
        backgroundColor: "var(--pseudo-negro)",
        color: "var(--blanco-roto)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        transition: "top 0.3s ease-in-out", // ani reaparición
        zIndex: 1000,
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
        boxSizing: 'border-box', 
        maxWidth: "100%", 
      }}
    >
      {/* hamburger menu (sidebar) */}
      <IconButton sx={{ color: "var(--blanco-roto)" }}>
        <MenuRoundedIcon />
      </IconButton>

      {/* título */}
      <Typography variant="h6" sx={{ fontFamily: "Rubik", fontWeight: "bold" }}>
        {title}
      </Typography>

      {/* notifs */}
      <Badge
        badgeContent={6}  // The number of unread notifications
        color="primary"  
        sx={{
          "& .MuiBadge-badge": {
            backgroundColor: "var(--naranja-intenso)", // color d la notif
            color: "var(--blanco-roto)", // color del texto dentro
          },
        }}
      >
        <NotificationsRoundedIcon 
        sx={{ 
            fontSize: 28,
            color: "var(--blanco-roto)", 
            marginLeft: "auto", 
            fontFamily: "Rubik"}} />
      </Badge>
    </Box>
  );
};

export default Topbar;
