import React from "react";
import { Box, Typography } from "@mui/material"; 
import Topbar from "../components/Topbar"; 
import Sidebar from "../components/Sidebar"; 
import Navbar from "../components/Navbar"; 
import Viewmore from "../components/Viewmore"; 
import Songsmall from "../components/Songsmall"; 



import kaytranada from "../assets/kaytranada.jpg";
import fka from "../assets/lightson.jpeg";
import solange from "../assets/solange.jpeg";
import caroline from "../assets/carolineplz.jpeg";
import chamakay from "../assets/chamakay.jpeg";
import sky from "../assets/sky.jpeg";
import sade from "../assets/sade.jpeg";
import memoryland from "../assets/memoryland.jpeg";
import eusexua from "../assets/eusexua.jpeg";
import truelove from "../assets/true.png";
import midi from "../assets/midi.jpeg";






import { useState } from "react";

const Jamz = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "var(--blanco-roto)" }}>
      {/* Topbar Component */}
      <Topbar title="Your Jamz" backgroundColor="var(--pseudo-negro)" textColor="var(--blanco-roto)" />

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* contenido */}
      <Box
        sx={{
          marginTop: "64px", 
          padding: "16px", 
          flexGrow: 1, 
          backgroundColor: "var(--blanco-roto)" ,
          paddingBottom: "95px"
        }}
      >

        {/* contenido */}

        

        {/* today */}
        <Viewmore text="today" showButton={false}/>
         <Songsmall
            version="playing"
            songName="witchy"
            artistName="kaytranada, childish gambino"
            songImage={kaytranada} 
        />      
        <Songsmall
            version="not-playing"
            songName="losing you"
            artistName="solange"
            songImage={solange} 
            timeAgo = "2 min ago"
        />     
                <Songsmall
            version="not-playing"
            songName="chamakay"
            artistName="blood orange"
            songImage={chamakay} 
            timeAgo = "8 min ago"
        />     
        <Songsmall
            version="not-playing"
            songName="everything is embarrassing"
            artistName="sky ferreira"
            songImage={sky} 
            timeAgo = "1 hour ago"
        />     
        <Songsmall
            version="not-playing"
            songName="two weeks"
            artistName="fka twigs"
            songImage={fka} 
            timeAgo = "1 hour ago"
        />     

        {/* yesterday */}
        <Viewmore text="yesterday" showButton={false}/>
        <Songsmall
            version="not-playing"
            songName="billions"
            artistName="caroline polacheck"
            songImage={caroline} 
            timeAgo = "9 dec, 12:23pm"
        />     
          <Songsmall
            version="not-playing"
            songName="flow"
            artistName="sade"
            songImage={sade} 
            timeAgo = "9 dec, 12:18pm"
        />     
        <Songsmall
            version="not-playing"
            songName="heaven"
            artistName="cfcf"
            songImage={memoryland} 
            timeAgo = "9 dec, 12:15pm"
        />     
        <Songsmall
            version="not-playing"
            songName="eusexua"
            artistName="fka twigs"
            songImage={eusexua} 
            timeAgo = "9 dec, 12:11pm"
        />     

        {/* sunday dec 8 2024 */}
        <Viewmore text="sunday dec, 8, 2024" showButton={false}/>
        <Songsmall
            version="not-playing"
            songName="true love waits"
            artistName="radiohead"
            songImage={truelove} 
            timeAgo = "8 dec, 8:33pm"
        />     
        <Songsmall
            version="not-playing"
            songName="diamond stuff"
            artistName="black midi"
            songImage={midi} 
            timeAgo = "8 dec, 8:25pm"
            
        />     


        <Navbar />
      </Box>
      <Navbar />
    </Box>
  );
};

export default Jamz;
