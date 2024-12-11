import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography, Badge } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import Sidebar from "../components/Sidebar"; 

const Topbar = ({ title = "Home" }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // control de la visibilidad del sidebar

  // esconder o mostrar top bar al scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // esconder top bar al scroll down
      } else {
        setIsVisible(true); // mostrar top bar al scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // visibilidad de sidebar toggle
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      {/* Topbar */}
      <Box
        sx={{
          position: "fixed",
          top: isVisible ? 0 : "-64px", // esconderla al scroll
          left: 0,
          width: "100%",
          height: "64px",
          backgroundColor: "var(--pseudo-negro)",
          color: "var(--blanco-roto)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
          transition: "top 0.3s ease-in-out",
          zIndex: 1000,
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
          boxSizing: "border-box",
        }}
      >
        {/* hamburger */}
        <IconButton
          onClick={toggleSidebar}
          sx={{
            color: "var(--blanco-roto)",
            visibility: isVisible ? "visible" : "hidden", // esconder al scroll
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* titulo */}
        <Typography  sx={{ fontFamily: "Rubik, Arial", fontWeight: "bold", fontSize: "1.4rem" }}>
          {title}
        </Typography>

        {/* notif */}
        <Badge
          badgeContent={6}
          color="primary"
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "var(--naranja-intenso)", 
              color: "var(--blanco-roto)", 
            },
          }}
        >
          <NotificationsRoundedIcon
            sx={{
              fontSize: 28,
              color: "var(--blanco-roto)",
              fontFamily: "Rubik",
            }}
          />
        </Badge>
      </Box>

      {/* sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Topbar;
