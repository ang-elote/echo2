import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar"; 
import { Box, Typography, Tab, Tabs, Fab } from "@mui/material";
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

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ backgroundColor: "var(--blanco-roto)", minHeight: "100vh" }}>
      {/* top bar */}
      <Topbar title="Home" />

      {/* tabs */}
      <Box sx={{ borderBottom: 0, borderColor: "divider", marginTop: "64px" }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="primary"
          centered
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "var(--pseudo-negro)", // Indicator color
            },
            "& .MuiTab-root": {
              color: "var(--gris-claro)", // Inactive tab color
              textTransform: "lowercase",
              fontWeight: "regular",
              fontSize: "1rem",
            },
            "& .Mui-selected": {
              color: "var(--pseudo-negro)", // Active tab color
              fontWeight: "bold",
              fontSize: "1.2rem",
            },
          }}
        >
          <Tab label="feed" />
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

      {/* post section */}
      <Box sx={{ padding: "16px", paddingBottom: 8 }}>
        {tabValue === 0 ? (
          <Box>
            {/* feed posts */}
            <Cardpost
              username="@andrucci"
              profilePic={pfpandrucci}
              content="reposted a song"
              title="chocolate matter"
              artist="sweet trip"
              description="The cover of Velocity Design Comfort reminds me of my old"
              image={sweettrip}
            />
            <Cardpost
              username="@chilakeil"
              profilePic={pfpchilakeil}
              content="reposted a song"
              title="eusexua"
              artist="fka twigs"
              description="On October 1, 2023, Twigs performed at Valentino L’Écol"
              image={eusexua}
            />
            <Cardpost
              username="@angelote"
              profilePic={pfpangelote}
              content="reposted a song"
              title="chocolate matter"
              artist="sweet trip"
              description="The cover of Velocity Design Comfort reminds me of my old"
              image={memoryland}
            />
            <Cardpost
              username="@andrucci"
              profilePic={pfpandrucci}
              content="reposted a song"
              title="chocolate matter"
              artist="sweet trip"
              description="The cover of Velocity Design Comfort reminds me of my old"
              image={lightson}
            />
          </Box>
        ) : (
          <Box>
            {/* following posts */}
            <Cardpost
              username="@angelote"
              profilePic={pfpangelote}
              content="reposted a song"
              title="chocolate matter"
              artist="sweet trip"
              description="The cover of Velocity Design Comfort reminds me of my old"
              image={memoryland}
            />
          </Box>
        )}
      </Box>

      {/* FAB */}
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
