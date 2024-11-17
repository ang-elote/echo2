import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/whitelogo.png"; 
import "../App.css"; 

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/access"); // redirigir a la page de acceso
    }, 2000); // dos segundos para redirigir a la page de acceso

    return () => clearTimeout(timer); // Cleanup timeout
  }, [navigate]);

  return (
    <div className="splash">
      <img src={logo} alt="Echo Logo" className="logo" /> 
    </div>
  );
};

export default Splash;
