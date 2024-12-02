import React from "react";
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

  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ backgroundColor: "var(--blanco-roto)", minHeight: "100vh" }}>
     

      {/* titulo y notif */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
          backgroundColor: "var(--pseudo-negro)",
          color: "var(--blanco-roto)",
        }}
      >

      {/* hamburger sidebar */}
         <Sidebar />

      {/* título d home */}
      <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
          Home
        </Typography>

      
       {/* notificaciones */}
        <Badge
      badgeContent={6}
        sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "var(--naranja-intenso)", // color d la badge de notif
              color: "var(--blanco-roto)", // color del texto dentro del badge
             },
            }}
        >
      <NotificationsRoundedIcon sx={{ fontSize: 28, color: "var(--blanco-roto)" }} />
</Badge>
      </Box>

      {/* tabs section */}
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="primary"
          centered
        >
          <Tab label="feed" />
          <Tab label="following" />
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
