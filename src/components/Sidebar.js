import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import { Drawer, Box, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import PlaylistPlayRoundedIcon from "@mui/icons-material/PlaylistPlayRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import QueueMusicRoundedIcon from "@mui/icons-material/QueueMusicRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNavigation = (path) => {
    toggleSidebar(); // Close the sidebar
    navigate(path); // Navigate to the desired route
  };

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={toggleSidebar}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "var(--pseudo-negro)", // Sidebar background color
          color: "var(--blanco-roto)", // Sidebar text color
        },
      }}
    >
      <Box
        sx={{
          width: 250,
          padding: 2,
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: "1.4rem",
          textTransform: "lowercase",
          fontWeight: "bold",
        }}
        role="presentation"
        onClick={toggleSidebar}
      >
        <List>
          <ListItem button onClick={() => handleNavigation("/messages")}>
            <ListItemIcon>
              <ChatRoundedIcon sx={{ color: "var(--blanco-roto)" }} />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("/melodies")}>
            <ListItemIcon>
              <LibraryMusicRoundedIcon sx={{ color: "var(--blanco-roto)" }} />
            </ListItemIcon>
            <ListItemText primary="Melodies" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("/wishlist")}>
            <ListItemIcon>
              <StarBorderRoundedIcon sx={{ color: "var(--blanco-roto)" }} />
            </ListItemIcon>
            <ListItemText primary="Wishlist" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("/playlists")}>
            <ListItemIcon>
              <PlaylistPlayRoundedIcon sx={{ color: "var(--blanco-roto)" }} />
            </ListItemIcon>
            <ListItemText primary="Playlists" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("/queue")}>
            <ListItemIcon>
              <QueueMusicRoundedIcon sx={{ color: "var(--blanco-roto)" }} />
            </ListItemIcon>
            <ListItemText primary="Queue" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("/settings")}>
            <ListItemIcon>
              <SettingsRoundedIcon sx={{ color: "var(--blanco-roto)" }} />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("/logout")}>
            <ListItemIcon>
              <LogoutRoundedIcon sx={{ color: "var(--blanco-roto)" }} />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
