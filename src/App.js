
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import Access from './pages/Access';
import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './Theme.js'; 
function App() {
  return (
    <ThemeProvider theme={theme}>  {/* Apply the theme globally */}
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/access" element={<Access />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
