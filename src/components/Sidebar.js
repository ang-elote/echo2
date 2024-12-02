import React, { useState } from "react";
import { Drawer, IconButton, List, ListItem, ListItemText, Box, ListItemIcon } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import PlaylistPlayRoundedIcon from '@mui/icons-material/PlaylistPlayRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import QueueMusicRoundedIcon from '@mui/icons-material/QueueMusicRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <Box>
      {/* Hamburger Button */}
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{ position: "fixed", top: "10px", left: "10px", color: "var(--blanco-roto)" }} // color de hamburger
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer (Sidebar) */}
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
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
            fontFamily: "Helvetica, Arial, sans-serif", // Sidebar fonts
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {/* messages item */}
            <ListItem button>
              <ListItemIcon>
                <ChatRoundedIcon sx={{ color: "var(--blanco-roto)" }} /> {/* Icon color */}
              </ListItemIcon>
              <ListItemText primary="messages"   sx={{ fontWeight: "bold",  fontSize: "1.4rem" }}  />
            </ListItem>

            {/* melodies Item */}
            <ListItem button>
              <ListItemIcon>
                <LibraryMusicRoundedIcon sx={{ color: "var(--blanco-roto)" }} />
              </ListItemIcon>
              <ListItemText primary="melodies" sx={{ fontWeight: "bold",  fontSize: "1.4rem" }} />
            </ListItem>

            {/* wishlist Item */}
            <ListItem button>
              <ListItemIcon>
                <StarBorderRoundedIcon sx={{ color: "var(--blanco-roto)" }} />
              </ListItemIcon>
              <ListItemText primary="wishlist" sx={{ fontWeight: "bold",  fontSize: "1.4rem" }}/>
            </ListItem>

            {/* playlists Item */}
                <ListItem button>
              <ListItemIcon>
                <PlaylistPlayRoundedIcon sx={{ color: "var(--blanco-roto)" }} />
              </ListItemIcon>
              <ListItemText primary="playlists" sx={{ fontWeight: "bold",  fontSize: "1.4rem" }} />
            </ListItem>

            {/* queue Item */}
            <ListItem button>
              <ListItemIcon>
                <QueueMusicRoundedIcon sx={{ color: "var(--blanco-roto)" }} />
              </ListItemIcon>
              <ListItemText primary="queue" sx={{ fontWeight: "bold",  fontSize: "1.4rem" }} />
            </ListItem>



             {/* settings Item */}
             <ListItem button>
              <ListItemIcon>
                <SettingsRoundedIcon sx={{ color: "var(--blanco-roto)" }} />
              </ListItemIcon>
              <ListItemText primary="settings" sx={{ fontWeight: "bold",  fontSize: "1.4rem" }} />
            </ListItem>


            {/* logout Item */}
            <ListItem button>
              <ListItemIcon>
                <LogoutRoundedIcon sx={{ color: "var(--blanco-roto)" }} />
              </ListItemIcon>
              <ListItemText primary="log out" sx={{ fontWeight: "bold",  fontSize: "1.4rem" }} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
