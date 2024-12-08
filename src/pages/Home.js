import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Box, Typography, Tab, Tabs, Fab, Badge } from "@mui/material";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Cardpost from "../components/Cardpost"; 
import pfpandrucci from "../assets/pfp-andrucci.jpg"; 
import pfpchilakeil from "../assets/pfp-chilakeil.jpg"; 
import pfpangelote from "../assets/pfp-angelote.jpg"; 
import sweettrip from "../assets/sweettrip.jpg"; 
import eusexua from "../assets/eusexua.jpeg"; 
import memoryland from "../assets/memoryland.jpeg"; 
import lightson from "../assets/lightson.jpeg"; 




const Home = () => {
  const [tabValue, setTabValue] = useState(0);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setIsTopBarVisible(false);
      } else {
        // Scrolling up
        setIsTopBarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Box sx={{ backgroundColor: "var(--blanco-roto)", minHeight: "100vh" }}>
      
    {/* Top Bar */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        backgroundColor: "var(--pseudo-negro)",
        color: "var(--blanco-roto)",
        position: "fixed", // Stick to the top of the page
        top: isTopBarVisible ? 0 : "-100px", // Hide on scroll down, show on scroll up
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "top 0.3s ease-in-out", // Smooth slide effect
      }}
    >
      {/* Hamburger Sidebar */}
      <Sidebar />

      {/* Title */}
      <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
        Home
      </Typography>

      {/* Notifications */}
      <Badge
        badgeContent={6}
        sx={{
          "& .MuiBadge-badge": {
            backgroundColor: "var(--naranja-intenso)", // Notification badge color
            color: "var(--blanco-roto)", // Text color inside badge
          },
        }}
      >
        <NotificationsRoundedIcon sx={{ fontSize: 28, color: "var(--blanco-roto)" }} />
      </Badge>
    </Box>
      {/* tabs section */}
      <Box sx={{ borderBottom: 0, borderColor: "divider", marginTop: "60px" }}>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        textColor="inherit"
        indicatorColor="primary" 
        centered
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "var(--pseudo-negro)", // color del indicador
          },
          "& .MuiTab-root": {
            color: "var(--gris-claro)", // tab inactiva
            textTransform: "lowercase", 
            fontWeight: "regular",
            fontSize: "1rem"

          },
          "& .Mui-selected": {
            color: "var(--pseudo-negro)", // tab activa
            fontWeight: "bold",
            fontSize: "1.2rem"


          },
        }}
      >
        <Tab
          label="feed"
          sx={{
          }}
        />
        <Tab
          label="following"
          sx={{
            border: "1px solid var(--gris-claro)",
            borderRadius: "8px",
            margin: "0 18px",
          }}
        />
      </Tabs>
    </Box>

      {/* seccion d posts */}
      <Box sx={{ padding: "16px", paddingBottom: 8}}>
        {tabValue === 0 ? (
          <Box>
            {/* posts en el feed */}

            <Cardpost
            username="@andrucci"
            profilePic= {pfpandrucci}
            content="reposted a song"
            title="chocolate matter"
            artist="sweet trip"
            description="The cover of Velocity Design Comfort reminds me of my old"
            image={sweettrip}
            />


            <Cardpost
            username="@chilakeil"
            profilePic= {pfpchilakeil}
            content="reposted a song"
            title="eusexua"
            artist="fka twigs"
            description="On October 1, 2023, Twigs performed at Valentino L’Écol"
            image={eusexua}
            />


            <Cardpost
            username="@angelote"
            profilePic= {pfpangelote}
            content="reposted a song"
            title="chocolate matter"
            artist="sweet trip"
            description="The cover of Velocity Design Comfort reminds me of my old"
            image={memoryland}
            />


            <Cardpost
            username="@andrucci"
            profilePic= {pfpandrucci}
            content="reposted a song"
            title="chocolate matter"
            artist="sweet trip"
            description="The cover of Velocity Design Comfort reminds me of my old"
            image={lightson}
            />

            {/* aqui terminan cards del feed */}
          
          </Box>


        ) : (


          <Box>
            
            {/* cards de following */}
            <Cardpost
            username="@angelote"
            profilePic= {pfpangelote}
            content="reposted a song"
            title="chocolate matter"
            artist="sweet trip"
            description="The cover of Velocity Design Comfort reminds me of my old"
            image={memoryland}
            />

          </Box>
        )}
      </Box>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        sx={{
          position: "fixed",
          bottom: "90px",
          right: "16px",
          backgroundColor: "var(--morado)",
        }}
      >
        <AddRoundedIcon />
      </Fab>

      {/* Navbar */}
      <Navbar />
    </Box>
  );
};

export default Home;
