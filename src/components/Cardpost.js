import React, { useState } from "react";
import { Box, Typography, IconButton, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHoriz";

const Cardpost = ({ username, profilePic, content, title, artist, description, image }) => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLike = () => {
    setLiked(!liked);
  };

  // redireccion a pag de post detail al clic readmore
  const handleReadMore = () => {
    navigate("/postdetail", { state: { username, title, artist, description, image } }); // Pass data to the next page if needed
  };

  return (
    <Box sx={{ marginBottom: "16px" }}>
      {/* user info afuera d card */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "8px",
          color: "var(--pseudo-negro)",
        }}
      >
        <Avatar
          src={profilePic}
          alt={`${username}'s profile picture`}
          sx={{
            width: "28px",
            height: "28px",
            borderRadius: "8px",
          }}
        />
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          {username}
        </Typography>
        <Typography variant="body2" sx={{ color: "var(--gris-claro)" }}>
          {content}
        </Typography>
      </Box>

      {/* Card Content */}
      <Box 
        sx={{
          backgroundColor: "var(--pseudo-negro)",
          color: "var(--blanco-roto)",
          borderRadius: "8px",
          padding: "16px",
          display: "flex",
          gap: "0px",
          fontFamily: "Rubik",
          height: "115px", 
        }}
      >
        {/* izq columna */}
        <Box sx={{ flex: "7", display: "flex", flexDirection: "column", gap: "3px", height: "100%" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", fontSize: "1rem" }}>
            {title}{" "}
            <Typography component="span" sx={{ fontWeight: "light", fontSize: "0.9rem", color: "var(--gris-claro)" }}>
              {artist}
            </Typography>
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "0.85rem", color: "var(--blanco-roto)" }}>
            {description}
          </Typography>
          <Typography 
            variant="body2"
            sx={{
              fontSize: "0.85rem",
              color: "var(--blanco-roto)",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={handleReadMore} // Redirect on click
          >
            read more
          </Typography>
          <Box sx={{ display: "flex", gap: "10px", marginTop: "-3px" }}>
            <IconButton onClick={handleLike} sx={{ color: liked ? "var(--rosado)" : "var(--blanco-roto)" }}>
              {liked ? <FavoriteRoundedIcon sx={{ fontSize: 20 }} /> : <FavoriteBorderRoundedIcon sx={{ fontSize: 20 }} />}
            </IconButton>
            <IconButton sx={{ color: "var(--blanco-roto)" }}>
              <AddRoundedIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton sx={{ color: "var(--blanco-roto)" }}>
              <MusicNoteRoundedIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton sx={{ color: "var(--blanco-roto)" }}>
              <MoreHorizRoundedIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>
        </Box>

        {/* der columna */}
        <Box
          sx={{
            flex: "3",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90%",
          }}
        >
          <Box
            sx={{
              width: "100px", 
              height: "100px", 
              borderRadius: "8px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src={image}
              alt="albumcover"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "8px",
              }}
            >
              <Typography variant="h3" sx={{ fontSize: "1.2rem", color: "var(--blanco-roto)" }}>
                ▶
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cardpost;