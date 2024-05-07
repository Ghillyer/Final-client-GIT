
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import './App.css';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Listing from './components/Listing.jsx';
import AboutUs from './components/AboutUs.jsx';
import FAQ from './components/FAQ.jsx';
import TOS from './components/TOS.jsx';
import PP from './components/PP.jsx';

import CardListingForm from './components/MainParts/CardListingForm.jsx';


function App() {
  return (
    <AuthProvider> 
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Listings" element={<Listing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/list-card" element={<CardListingForm />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/TOS" element={<TOS />} />
          <Route path="/PP" element={<PP />} />
        </Routes>
      </main>
      <Footer />
    </AuthProvider>
  );
}

export default App