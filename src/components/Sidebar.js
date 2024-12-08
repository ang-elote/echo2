import React from "react";
import { Drawer, Box, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import PlaylistPlayRoundedIcon from "@mui/icons-material/PlaylistPlayRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import QueueMusicRoundedIcon from "@mui/icons-material/QueueMusicRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={toggleSidebar}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "var(--pseudo-negro)", // color del fondo del sidebar
          color: "var(--blanco-roto)", // color del texto del sidebar
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
          fontWeight: "bold"
        }}
        role="presentation"
        onClick={toggleSidebar}
      >
        <List>
          <ListItem button>
            <ListItemIcon>
              <ChatRoundedIcon sx={{ color: "var(--blanco-roto)" }} />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LibraryMusicRoundedIcon sx={{ color: "var(--blanco-roto)" }} />
            </ListItemIcon>
            <ListItemText primary="Melodies" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StarBorderRoundedIcon sx={{ color: "var(--blanco-roto)" }} />
            </ListItemIcon>
            <ListItemText primary="Wishlist" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PlaylistPlayRoundedIcon sx={{ color: "var(--blanco-roto)" }} />
            </ListItemIcon>
            <ListItemText primary="Playlists" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <QueueMusicRoundedIcon sx={{ color: "var(--blanco-roto)" }} />
            </ListItemIcon>
            <ListItemText primary="Queue" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsRoundedIcon sx={{ color: "var(--blanco-roto)" }} />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
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
