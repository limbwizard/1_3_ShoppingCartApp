import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.scss';
import NavBar from './components/nav-bar/NavBar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';

const App: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId="851983889381-ba4jagcfvse1hnd4q1pq2hnio82siae3.apps.googleusercontent.com">
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes for other pages */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
