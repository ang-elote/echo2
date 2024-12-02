import React, { useState } from "react";
import { Box, Typography, IconButton, Avatar, TextField, Button } from "@mui/material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import CommentIcon from "@mui/icons-material/Comment";
import sweettrip from "../assets/sweettrip.jpg"; 

const Postdetail = () => {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    { user: "chilakeil", text: "very cool" },
    { user: "angelote", text: "i love this album sm" },
  ]);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      setComments([...comments, { user: "Current User", text: comment }]);
      setComment(""); 
    }
  };

  return (
    <Box sx={{ maxWidth: "800px", margin: "0 auto", padding: "20px", backgroundColor: 'var(--pseudo-negro)' }}>
      {/* titulo */}
      <Typography  sx={{ fontWeight: "bold", fontSize: "1.3rem", color: 'var(--blanco-roto)', paddingBottom: 3 }}>
        Post
      </Typography>

      {/* usuario y pfp */}
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "16px", color: 'var(--blanco-roto)' }}>
        <Avatar sx={{ width: 32, height: 32 }} />
        <Typography variant="body1" sx={{ marginLeft: "8px", fontWeight: "medium" }}>
          @andrucci reviewed an album
        </Typography>
      </Box>

      {/* nombre del album */}
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px", color: 'var(--blanco-roto)'}}>
        Velocity:Design:Comfort by Sweet Trip
      </Typography>

      {/* album cover */}
      <Box sx={{ width: "100%", marginBottom: "16px" }}>
        <img
          src= {sweettrip}
          alt="albumcover"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: 9
          }}
        />
      </Box>

      {/* review */}
      <Typography variant="body1" sx={{ marginBottom: "20px", color: 'var(--blanco-roto)' }}>
      Velocity: Design: Comfort by Sweet Trip is an experimental masterpiece blending glitchy 
      electronica with dream pop. Its intricate production, lush textures, and ethereal melodies 
      create a unique sonic journey that’s equal parts chaotic and serene. A cult favorite for
       its innovative sound and emotional resonance.
      </Typography>

      {/* acciones en post */}
      <Box sx={{ display: "flex", justifyContent: "space-between",marginBottom: "20px" }}>
        <IconButton onClick={handleLike} sx={{ color: liked ? "var(--rosado)" : "var(--blanco-roto)" }}>
          {liked ? <FavoriteRoundedIcon sx={{ fontSize: 20 }} /> : <FavoriteBorderRoundedIcon sx={{ fontSize: 20 }} />}
        </IconButton>
        <IconButton sx={{ color: "var(--blanco-roto)" }}>
          <AddRoundedIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <IconButton sx={{ color: "var(--blanco-roto)" }}>
          <MusicNoteRoundedIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <IconButton sx={{ color: "var(--blanco-roto)" }}>
          <MoreHorizRoundedIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </Box>

      {/* seccion de comentarios */}
      <Box sx={{ marginTop: "20px" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "var(--blanco-roto)" }}>
          Comments
        </Typography>

        {/* comentarios */}
        <Box sx={{ marginTop: "10px" }}>
          {comments.map((comment, index) => (
            <Box key={index} sx={{ marginBottom: "12px", display: "flex", gap: "8px" }}>
              <Avatar sx={{ width: 28, height: 28 }} />
              <Box>
                <Typography variant="body2" sx={{ fontWeight: "bold", color: "var(--blanco-roto)" }}>
                  {comment.user}
                </Typography>
                <Typography variant="body2" sx={{color: "var(--blanco-roto)" }}>{comment.text}</Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* input de comentarios */}
        <Box sx={{ display: "flex", gap: "12px", marginTop: "16px" , color: "var(--blanco-roto)" }}>
          <TextField sx={{backgroundColor: "var(--blanco-roto)", borderRadius: 5 }}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            label="Add a comment"
            fullWidth
          />
          <Button
            onClick={handleCommentSubmit}
            variant="contained"
            sx={{ backgroundColor: "var(--celeste)", color: "white", height: "100%",  borderRadius: 5 }}
          >
            <CommentIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Postdetail;
