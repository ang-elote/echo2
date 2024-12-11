import React, { useState } from "react";
import { Box, Typography } from "@mui/material"; 
import Topbar from "../components/Topbar"; 
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SearchBar from "../components/Searchbar";
import SongCard from "../components/Songcard";
import Viewmore from "../components/Viewmore";
import SearchItem from "../components/Searchitem";  
import Slider from "react-slick"; 

import akriila from "../assets/akriila.jpg";
import radiohead from "../assets/radiohead.jpeg";
import doss from "../assets/doss.jpeg";
import blood from "../assets/blood.jpeg";
import ecco from "../assets/ecco.jpeg";
import midi from "../assets/midi.jpeg";
import clairo from "../assets/clairo.jpeg";
import kelela from "../assets/kelela.jpeg";
import shygirl from "../assets/shygirl.jpeg";
import arca from "../assets/arca.png";
import charli from "../assets/charli.jpg";



const Search = () => {
  const [recentSearches, setRecentSearches] = useState([
    "mf doom", 
    "@chilakeil", 
    "jpegmafia",

  ]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  // funcion para borrar search item
  const removeSearchItem = (searchText) => {
    setRecentSearches(recentSearches.filter(item => item !== searchText));
  };

  // slider
  const settings = {
    dots: false, 
    arrows: false, 
    infinite: true, // loop de carrusel
    speed: 500, // speed de transicion
    slidesToShow: 3, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tabletas
        settings: {
          slidesToShow: 3, // 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // mobile
        settings: {
          slidesToShow: 2, // cantidad de slides a mostrar
          slidesToScroll: 1.5,
        },
      },
    ],
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* topbar */}
      <Topbar title="Search" backgroundColor="var(--pseudo-negro)" textColor="var(--blanco-roto)" />

      {/* sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* contenido */}
      <Box
        sx={{
          marginTop: "64px", // no overlap con top bar
          padding: "16px 30px", 
          flexGrow: 1, 
          backgroundColor: "var(--blanco-roto)" 
        }}
      >
        {/* searchbar */}
        <SearchBar />
        
        {/* recent searches titulo */}
        <Viewmore text="recent searches" />

        {/* recent searches items */}
        {recentSearches.length > 0 ? (
          <Box sx={{ backgroundColor: "transparent", marginTop: "10px" }}>
            {recentSearches.map((search, index) => (
              <SearchItem 
                key={index} 
                searchText={search} 
                onRemove={removeSearchItem} 
                textColor="var(--pseudo-negro)" 
              />
            ))}
          </Box>
        ) : (
          <Typography sx={{ color: "var(--pseudo-negro)", paddingBottom: "10px" }}>
            No recent searches
          </Typography>
        )}

         {/* recommended titulo */}
        <Viewmore text="recommended" />

        {/* carousel arriba */}
        <Slider {...settings}>
          <SongCard songImage={akriila} songName="epitafio" artistName="akriila" />
          <SongCard songImage={radiohead} songName="myxomatosis" artistName="radiohead" />
          <SongCard songImage={doss} songName="strawberry" artistName="doss" />
          <SongCard songImage={blood} songName="champagne coast" artistName="blood orange" />
          <SongCard songImage={ecco} songName="amygdala" artistName="ecco2k, bladee" />
          <SongCard songImage={midi} songName="dethroned" artistName="black midi" />      
         </Slider>

        {/* trending titulo */}
        <Viewmore text="trending songs" />

        {/* carousel abajo */}
        <Slider {...settings}>
          <SongCard songImage={clairo} songName="nomad" artistName="clairo" />
          <SongCard songImage={kelela} songName="contact" artistName="kelela" />
          <SongCard songImage={shygirl} songName="bb" artistName="shygirl" />
          <SongCard songImage={arca} songName="klk" artistName="arca, rosalía" />
          <SongCard songImage={charli} songName="club classics feat.." artistName="charli xcx, bb trickz" />
        </Slider>
      </Box>


      <Navbar />
    </Box>
  );
};

export default Search;
