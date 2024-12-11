import React from "react";
import { Box, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const SongCard = ({
  songImage, 
  songName,
  artistName,
  fontColor = "var(--pseudo-negro)", // colordefault
}) => {
  return (
    <Box
      sx={{
        width: "150px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
      }}
    >
      {/* song img */}
      <Box
        sx={{
          width: "100%",
          height: "150px",
          borderRadius: "16px",
          backgroundImage: `url(${songImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* icono de play */}
        <PlayArrowIcon
          sx={{
            fontSize: "48px",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderRadius: "50%",
            padding: "8px",
          }}
        />
      </Box>

      {/* song details */}
      <Box sx={{ marginTop: "8px" }}>
        <Typography
          fontFamily="Rubik, sans-serif"
          fontWeight="bold"
          sx={{ color: fontColor }}
        >
          {songName}
        </Typography>
        <Typography
          fontFamily="Rubik, sans-serif"
          sx={{ color: fontColor }}
        >
          {artistName}
        </Typography>
      </Box>
    </Box>
  );
};

export default SongCard;
