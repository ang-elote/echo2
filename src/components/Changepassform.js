import React, { useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GradientButton from "../components/GradientButton";
import { useNavigate } from "react-router-dom";
import EmptyButton from '../components/EmptyButton';

const Changepassform = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Passwords do not match!");
      alert("Passwords do not match!");
      return;
    }
    console.log("Form submitted successfully!");
    navigate("/home"); // Navigate to home
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
        width: "300px",
        margin: "0 auto",
        textAlign: "center",
        fontFamily: "Rubik",
      }}
    >
      {/* Password */}
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <Typography
          sx={{
            fontFamily: "Rubik",
            fontSize: "1.2rem",
            color: "var(--blanco-roto)",
            marginBottom: "6px",
            textAlign: "left",
          }}
        >
          password
        </Typography>
        <TextField
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="password"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={togglePasswordVisibility}
                  edge="end"
                  aria-label="toggle password visibility"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: "var(--blanco-roto)",
            borderRadius: "48px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "48px",
              "& fieldset": {
                borderColor: "transparent",
              },
              "&:hover fieldset": {
                borderColor: "transparent",
              },
              "&.Mui-focused fieldset": {
                borderColor: "transparent",
              },
            },
          }}
        />
      </FormControl>

      {/* Confirm Password */}
      <FormControl fullWidth sx={{ marginBottom: 7 }}>
        <Typography
          sx={{
            fontFamily: "Rubik",
            fontSize: "1.2rem",
            color: "var(--blanco-roto)",
            marginBottom: "6px",
            textAlign: "left",
          }}
        >
          confirm password
        </Typography>
        <TextField
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="confirm password"
          fullWidth
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={toggleConfirmPasswordVisibility}
                  edge="end"
                  aria-label="toggle confirm password visibility"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: "var(--blanco-roto)",
            borderRadius: "48px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "48px",
              "& fieldset": {
                borderColor: "transparent",
              },
              "&:hover fieldset": {
                borderColor: "transparent",
              },
              "&.Mui-focused fieldset": {
                borderColor: "transparent",
              },
            },
          }}
        />
      </FormControl>

      {/* Reset Button */}
      <Box>
        <GradientButton
          type="submit"
          customGradient="linear-gradient(-90deg, var(--verde) 30%, var(--azul-verdoso) 60%, rgba(255, 111, 97, 0) 100%)"
          sx={{
            color: "#fff",
            width: "290px",
            justifyContent: "flex-end",
            marginBottom: 3,
          }}
        >
          reset
        </GradientButton>

        <EmptyButton onClick={() => navigate("/login")}>back</EmptyButton>
      </Box>
    </Box>
  );
};

export default Changepassform;
