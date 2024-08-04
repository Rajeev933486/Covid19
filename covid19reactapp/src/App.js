import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import CardComponent from './pages/CardComponent'; 
import Aboutinfo from './pages/Aboutinfo';  
import ContactPage from './pages/ContactPage';
import Preloader from './pages/Preloader';// Make sure the import path is correct

function App() {
  return (
  <div className="App">
     <Navbar /> {/* Navbar will be rendered on every page */}
     <Preloader />
      {/* <Home /> This will be displayed after the preloader */}
      <div className="main-content">
        <Routes>
        <Route path="/" element={<Home />} />
                    <Route path="/Aboutinfo" element={<Aboutinfo />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer /> {/* Add the Footer component */}
      <CardComponent /> {/* Use the CardComponent */}
    </div>
  );
}

export default App;


