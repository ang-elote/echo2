import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { purple } from '@mui/material/colors';

const Songsmall = ({ 
  version = "not-playing", // "playing" or "not-playing"
  songName = "song name", 
  artistName = "artist", 
  timeAgo = "2 min ago", 
  songImage // Dynamic image URL passed as a prop
}) => {
  const isPlaying = version === "playing";
  const color = purple[500];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "auto",
        padding: "10px",
        backgroundColor: isPlaying ? "lightblue" : "transparent",
        borderRadius: "8px"
      }}
    >
      {/* Song Image and Icon */}
      <Box
        sx={{
          position: "relative",
          width: "70px",
          height: "70px",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        {/* Use dynamic image URL */}
        <img
          src={songImage}
          alt={songName}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        {/* Overlay Icon */}
        {isPlaying ? (
          <EqualizerIcon
            sx={{
              color: "white",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "2rem"
            }}
          />
        ) : (
          <PlayArrowIcon
            sx={{
              color: "white",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "2rem"
            }}
          />
        )}
      </Box>

      {/* Song Details */}
      <Box
        sx={{
          flex: 1,
          marginLeft: "10px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontFamily: "Rubik, sans-serif",
            color: "var(--pseudo-negro)",
          }}
        >
          {songName}
        </Typography>
        <Typography
          sx={{
            fontWeight: "medium",
            fontFamily: "Rubik, sans-serif",
            color: "var(--pseudo-negro)",
          }}
        >
          {artistName}
        </Typography>
        <Typography
          sx={{
            fontWeight: "light",
            fontFamily: "Rubik, sans-serif",
            color: isPlaying ? "#8E8E8E" : "#A7A7A7",
          }}
        >
          {isPlaying ? "jamming right now" : timeAgo}
        </Typography>
      </Box>

      {/* More Options Button */}
      <IconButton>
        <MoreVertIcon sx={{ color: "var(--pseudo-negro)" }} />
      </IconButton>
    </Box>
  );
};

export default Songsmall;
