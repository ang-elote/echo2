
      import React from 'react';
      import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

          import Splash from './pages/Splash';
          import Access from './pages/Access';
          import Register from './pages/Register';
          import Login from './pages/Login';
          import Changepassword from './pages/Changepassword';
          import Home from './pages/Home';
          import Makepost from './pages/Makepost';
          import Editpost from './pages/Editpost';
          import Profile from './pages/Profile';

      import './App.css';
      import { ThemeProvider } from '@mui/material';
      import theme from './Theme.js'; 


function App() {
  return (
    <ThemeProvider theme={theme}>  
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/access" element={<Access />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/changepassword" element={<Changepassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/makepost" element={<Makepost />} />
          <Route path="/editpost" element={<Editpost />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
