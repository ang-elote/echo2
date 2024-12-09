import React from "react";
import { Box, Typography, Button } from "@mui/material"; 
import Topbarback from "../components/Topbarback"; 
import Navbar from "../components/Navbar";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import Face5RoundedIcon from '@mui/icons-material/Face5Rounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const Settings = () => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* topbar */}
        <Topbarback title="Settings" textColor="var(--blanco-roto)" />
  
        {/* contenido */}
        <Box
          sx={{
            marginTop: "64px", // To avoid overlap with the fixed top bar
            padding: "16px", // Add your desired padding here
            flexGrow: 1, // Allow content to grow and take remaining space
            backgroundImage: "linear-gradient(to bottom, #2e2e2e, var(--pseudo-negro))",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

            {/* card de account */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#333',
              padding: '16px',
              borderRadius: '8px',
              width: '100%',
              maxWidth: '500px',
              margin: 'auto',
              boxSizing: 'border-box',
              overflow: 'hidden',
            }}
          >
            {/* profile icon */}
            <Face5RoundedIcon sx={{ width: 48, height: 48, color: "var(--blanco-roto)" }} />
  
            {/* Text content */}
            <Box sx={{ marginLeft: '16px', flexGrow: 1 }}>
              <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
                Your Account
              </Typography>
              <Typography variant="body2" sx={{ color: '#ccc' }}>
                Manage your email and username.
              </Typography>
            </Box>
  
            {/* Arrow button */}
            <Button
              variant="text"
              sx={{
                color: '#fff',
                textTransform: 'none',
                borderRadius: '20px',
                padding: '6px 16px',
              }}
            >
              <ArrowForwardIosRoundedIcon />
            </Button>
          </Box>

            {/* card de change password */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#333',
              padding: '16px',
              borderRadius: '8px',
              width: '100%',
              maxWidth: '500px',
              margin: 'auto',
              marginTop: '16px',
              boxSizing: 'border-box',
              overflow: 'hidden',
            }}
          >
            {/* llavecita icon */}
            <KeyRoundedIcon sx={{  width: 48, height: 48, color: "var(--blanco-roto)" }} />
  
            {/* textos */}
            <Box sx={{ marginLeft: '16px', flexGrow: 1 }}>
              <Typography variant="h6" sx={{ color: "var(--blanco-roto)", fontWeight: 'bold' }}>
                Change password
              </Typography>
              <Typography variant="body2" sx={{ color: '#ccc' }}>
                Learn how to reset your password.
              </Typography>
            </Box>
  
            {/* Arrow button */}
            <Button
              variant="text"
              sx={{
                color: '#fff',
                textTransform: 'none',
                borderRadius: '20px',
                padding: '6px 16px',
              }}
            >
              <ArrowForwardIosRoundedIcon />
            </Button>
          </Box>

            {/* card de notifications */}
         <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#333',
              padding: '16px',
              borderRadius: '8px',
              width: '100%',
              maxWidth: '500px',
              margin: 'auto',
              marginTop: '16px',
              boxSizing: 'border-box',
              overflow: 'hidden',
            }}
          >
            {/* notif icon */}
            <NotificationsRoundedIcon sx={{  width: 48, height: 48, color: "var(--blanco-roto)" }} />
  
            {/* textos */}
            <Box sx={{ marginLeft: '16px', flexGrow: 1 }}>
              <Typography variant="h6" sx={{ color: "var(--blanco-roto)", fontWeight: 'bold' }}>
                Notifications
              </Typography>
              <Typography variant="body2" sx={{ color: '#ccc' }}>
              Choose the notifications you’d like to see.
              </Typography>
            </Box>
  
            {/* Arrow button */}
            <Button
              variant="text"
              sx={{
                color: '#fff',
                textTransform: 'none',
                borderRadius: '20px',
                padding: '6px 16px',
              }}
            >
              <ArrowForwardIosRoundedIcon />
            </Button>
         </Box>

            {/* card de privacidad y seguridad */}
         <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#333',
              padding: '16px',
              borderRadius: '8px',
              width: '100%',
              maxWidth: '500px',
              margin: 'auto',
              marginTop: '16px',
              boxSizing: 'border-box',
              overflow: 'hidden',
            }}
          >
            {/* privacy icon */}
            <PeopleRoundedIcon sx={{  width: 48, height: 48, color: "var(--blanco-roto)" }} />
  
            {/* textos */}
            <Box sx={{ marginLeft: '16px', flexGrow: 1 }}>
              <Typography variant="h6" sx={{ color: "var(--blanco-roto)", fontWeight: 'bold' }}>
                Privacy and Security
              </Typography>
              <Typography variant="body2" sx={{ color: '#ccc' }}>
              Manage what you see and share on the app.
              </Typography>
            </Box>
  
            {/* Arrow button */}
            <Button
              variant="text"
              sx={{
                color: '#fff',
                textTransform: 'none',
                borderRadius: '20px',
                padding: '6px 16px',
              }}
            >
              <ArrowForwardIosRoundedIcon />
            </Button>
         </Box>

            {/* card de delete acc */}
        <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#333',
              padding: '16px',
              borderRadius: '8px',
              width: '100%',
              maxWidth: '500px',
              margin: 'auto',
              marginTop: '16px',
              boxSizing: 'border-box',
              overflow: 'hidden',
            }}
          >
            {/* trash icon */}
            <DeleteRoundedIcon sx={{  width: 48, height: 48, color: "var(--blanco-roto)" }} />
  
            {/* textos */}
            <Box sx={{ marginLeft: '16px', flexGrow: 1 }}>
              <Typography variant="h6" sx={{ color: "var(--blanco-roto)", fontWeight: 'bold' }}>
                Delete your account
              </Typography>
              <Typography variant="body2" sx={{ color: '#ccc' }}>
              Find out how you can delete your account.
              </Typography>
            </Box>
  
            {/* Arrow button */}
            <Button
              variant="text"
              sx={{
                color: '#fff',
                textTransform: 'none',
                borderRadius: '20px',
                padding: '6px 16px',
              }}
            >
              <ArrowForwardIosRoundedIcon />
            </Button>
         </Box>


        </Box>
        {/* Navbar */}
      <Navbar />
      </Box>
    );
  };
  
  export default Settings;