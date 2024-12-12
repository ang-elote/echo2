import React from "react";
import { Box, Typography, Tab, Tabs, Grid2, Avatar, TextField, Button} from "@mui/material"; 
import Topbar from "../components/Topbar"; 
import Sidebar from "../components/Sidebar"; 
import Navbar from "../components/Navbar"; 
import { useState } from "react";
import Cardpost from "../components/Cardpost";
import SongCard from "../components/Songcard";
import CommentIcon from "@mui/icons-material/Comment";
import Viewmore from "../components/Viewmore";
import Songsmall from "../components/Songsmall";


import pfpandrucci from "../assets/pfp-andrucci.jpg";
import sweettrip from "../assets/sweettrip.jpg";
import eusexua from "../assets/eusexua.jpeg";
import memoryland from "../assets/memoryland.jpeg";
import lightson from "../assets/lightson.jpeg";
import asobi from "../assets/asobi.jpg";
import midi from "../assets/midi.jpeg";
import bloweye from "../assets/bloweye.jpg";
import akriila from "../assets/akriila.jpg";
import radiohead from "../assets/radiohead.jpeg";
import sky from "../assets/sky.jpeg";
import sade from "../assets/sade.jpeg";
import fondo from "../assets/bg-profile.png";








const Profile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    { user: "chilakeil", text: "hola yahairo" },
    { user: "angelote", text: "vendes donas?" },
  ]);
  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      setComments([...comments, { user: "Current User", text: comment }]);
      setComment(""); 
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const renderTabContent = () => {
    switch (tabValue) {
      case 0:
        return (
          <Box>
            {/* posts recientes */}
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
              username="@andrucci"
              profilePic={pfpandrucci}
              content="reviewed an album"
              title="eusexua"
              artist="fka twigs"
              description="On October 1, 2023, Twigs performed at Valentino L’Écol"
              image={eusexua}
            />
            <Cardpost
              username="@andrucci"
              profilePic={pfpandrucci}
              content="reposted a song"
              title="heaven"
              artist="cfcf"
              description="For those in the know, commercial “electronica” was..."
              image={memoryland}
            />
            <Cardpost
              username="@andrucci"
              profilePic={pfpandrucci}
              content="reviewed a song"
              title="two weeks"
              artist="fka twigs"
              description="The singer's new mixtape is a playful and adventurous flex,"
              image={lightson}
            />
          </Box>
        );
        case 1:
          return (
            <Box>
              {/* Wishlist */}
              <Box sx={{ flexGrow: 1, width: "100%" }}>
                <Grid2 container spacing={3.5}
                justifyContent="center"
                alignItems="center"
                >
                  {/* songcards */}
                  <Grid2 item xs={6} sm={4}>
                    <SongCard songImage={sky} songName="night time, my ti..." artistName="sky ferreira" />
                  </Grid2>
                  <Grid2 item xs={6} sm={4}>
                    <SongCard songImage={memoryland} songName="memoryland" artistName="cfcf" />
                  </Grid2>
                  <Grid2 item xs={6} sm={4}>
                    <SongCard songImage={midi} songName="cavalcade" artistName="black midi" />
                  </Grid2>
                  <Grid2 item xs={6} sm={4}>
                    <SongCard songImage={bloweye} songName="eyelash wish" artistName="loveliescrushing" />
                  </Grid2>
                  <Grid2 item xs={6} sm={4}>
                    <SongCard songImage={akriila} songName="epistolares" artistName="akriila" />
                  </Grid2>
                  <Grid2 item xs={6} sm={4}>
                    <SongCard songImage={radiohead} songName="hail to the thief" artistName="radiohead" />
                  </Grid2>
                  <Grid2 item xs={6} sm={4}>
                    <SongCard songImage={sweettrip} songName="v:d:c" artistName="sweet trip" />
                  </Grid2>
                  <Grid2 item xs={6} sm={4}>
                    <SongCard songImage={sade} songName="nomad" artistName="sade" />
                  </Grid2>
                  {/* Add more SongCards as needed */}
                </Grid2>
              </Box>
            </Box>
          );
        
      case 2:
        return (
          <Box>
            {/* reviews */}
            <Cardpost
              username="@andrucci"
              profilePic={pfpandrucci}
              content="reviewed an album"
              title="epistolares"
              artist="akriila"
              description=" A delightful multidimensional adventure, both sonically and... "
              image={akriila}
            />
              <Cardpost
              username="@andrucci"
              profilePic={pfpandrucci}
              content="reviewed a song"
              title="strawberries"
              artist="asobi seksu"
              description="The guitar overload, massive reverb, and deceptively sweet..."
              image={asobi}
            />


          </Box>
        );
      case 3:
        return (
          <Box>
            {/* musicbox */}
      <Box >
        {/* comentarios */}
        <Box sx={{ marginTop: "10px" }}>
          {comments.map((comment, index) => (
            <Box
              key={index}
              sx={{
                marginBottom: "12px",
                display: "flex",
                gap: "8px",
                backgroundColor: "var(--pseudo-negro)", 
                borderRadius: "12px", 
                padding: "8px" 
              }}
            >
              <Avatar sx={{ width: 28, height: 28 }} />
              <Box>
                <Typography variant="body2" sx={{ fontWeight: "bold", color: "var(--blanco-roto)" }}>
                  {comment.user}
                </Typography>
                <Typography variant="body2" sx={{ color: "var(--blanco-roto)" }}>
                  {comment.text}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* input de comentarios */}
        <Box sx={{ display: "flex", gap: "12px", marginTop: "16px" , color: "var(--pseudo-negro)", marginBottom: "100px"}}>
          <TextField
            sx={{
              backgroundColor: "var(--pseudo-negro)",
              borderRadius: 14,
              "& .MuiInputLabel-root": {
                color: "white", // Cambia el color de la etiqueta a blanco
              },
              "& .MuiOutlinedInput-root": {
                "&:focus-within fieldset": {
                  border: "none", // Elimina el outline en focus
                }
              }
            }}
            InputLabelProps={{
              style: { color: "white" }, // Aplica el color blanco a la etiqueta
            }}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            label="comment on andrucci's profile"
            fullWidth
          />
          <Button
            onClick={handleCommentSubmit}
            variant="contained"
            sx={{ backgroundColor: "var(--celeste)", color: "white", height: "100%",  borderRadius: 4 }}
          >
            <CommentIcon />
          </Button>
        </Box>

      </Box>         
       </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Topbar Component */}
      <Topbar title="@andrucci" backgroundColor="var(--pseudo-negro)" textColor="var(--blanco-roto)" />

    {/* header y perfil*/}
        <Box
          sx={{
            backgroundColor: "transparent",
            padding: "32px 16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            marginTop: "64px",
            backgroundImage: `url(${fondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Avatar src={pfpandrucci} sx={{ width: 80, height: 80, borderRadius: "30px" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              marginTop: "4px",
            }}
          >
            <Box sx={{ display: "flex", gap: "8px" }}>
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  backgroundColor: "var(--celeste)", 
                  borderRadius: "8px",
                  textTransform: "lowercase",
                  border: "none", 
                  fontWeight: "bold"
                }}
              >
                Friends
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  backgroundColor: "var(--celeste)", 
                  borderRadius: "8px",
                  textTransform: "lowercase",
                  border: "none", 
                  fontWeight: "bold"

                }}
              >
                Fan of
              </Button>

            </Box>
          </Box>
        </Box>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* contenido */}
      <Box
        sx={{
          padding: "16px", 
          flexGrow: 1, 
          backgroundColor: "var(--blanco-roto)" 
        }}
      >
        {/* Tabs */}
        <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            textColor="inherit"
            indicatorColor="primary"
            centered
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "var(--celeste)",
              },
              "& .MuiTab-root": {
                color: "var(--gris-claro)",
                textTransform: "lowercase",
                fontWeight: "regular",
                fontSize: "1rem",
              },
              "& .Mui-selected": {
                color: "var(--pseudo-negro)",
                fontWeight: "bold",
                fontSize: "1.2rem",
              },
            }}
          >
            <Tab label="recent" />
            <Tab
              label="wishlist"
              sx={{
                border: "1px solid var(--gris-claro)",
                borderRadius: "8px",
              }}
            />
            <Tab
              label="reviews"
              sx={{
                border: "1px solid var(--gris-claro)",
                borderRadius: "8px",
              }}
            />
            <Tab
              label="musicbox"
              sx={{
                border: "1px solid var(--gris-claro)",
                borderRadius: "8px",
              }}
            />
          </Tabs>
        </Box>

        {/* rendertab */}
        <Box sx={{ padding: "16px", paddingBottom: 8 }}>{renderTabContent()}</Box>
      </Box>

      <Navbar />
    </Box>
  );
};

export default Profile;
