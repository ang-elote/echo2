import React, { useState } from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ onSearch, variant = "black" }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  // variantes disponibles de la search bar
  const styles = {
    black: {
      backgroundColor: "var(--pseudo-negro)",
      textColor: "#fff",
      placeholderColor: "#ccc",
      iconColor: "#fff",
    },
    white: {
      backgroundColor: "#fff",
      textColor: "#000",
      placeholderColor: "#888",
      iconColor: "#000",
    },
  };

  const currentStyle = styles[variant];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "auto",
        margin: "16px auto",
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="songs, albums, users, artists..."
        value={searchQuery}
        onChange={handleInputChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: currentStyle.iconColor }} /> {/* icono de search */}
            </InputAdornment>
          ),
          style: {
            color: currentStyle.textColor, // color dle texto
          },
        }}
        sx={{
          backgroundColor: currentStyle.backgroundColor, // color del fondo
          borderRadius: "100px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "100px",
            "& fieldset": {
              borderColor: "transparent", // sin bordes default
            },
            "&.Mui-focused fieldset": {
              borderColor: "transparent", // sin bordes en focus
            },
          },
          "& .MuiInputBase-input::placeholder": {
            color: currentStyle.placeholderColor, // placeholder texto
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
