import React from "react";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const SearchItem = ({ searchText, onRemove, textColor = "var(--pseudo-negro)" }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        backgroundColor: "transparent",
        margin: "9px 0",
      }}
    >
      {/* texto */}
      <Box sx={{ paddingLeft: "16px", flexGrow: 1 }}>
        <Typography
          sx={{
            fontSize: "1rem", 
            fontWeight: "regular",
            color: textColor,
            fontFamily: "Rubik, sans-serif",
          }}
        >
          {searchText}
        </Typography>
      </Box>

      {/* close icon */}
      <CloseIcon 
        sx={{
          fontSize: "1rem",
          color: "#8d8d8d",
          cursor: "pointer",
          paddingRight: "16px"
        }}
        onClick={() => onRemove(searchText)} 
      />
    </Box>
  );
};

export default SearchItem;
