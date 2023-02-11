import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Cards from './components/Cards';
import Footer from './components/Footer';
import About from './components/pages/About';
import Others from './components/pages/Others';



function App() {

  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <Cards />
        <Cards />
        <Footer />
        <Routes>
          <Route path='/About' component={About} />
          <Route path='/Others' component={Others} />
      </Routes>
      </Router>
     
    </>
  );
}

export default App;