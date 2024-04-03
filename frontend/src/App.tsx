import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import './App.scss';
import NavBar from './components/nav-bar/NavBar';
import Footer from './components/footer/Footer';
// Import your page components
import Home from './pages/home/Home';
// import Products from './pages/Products';
import Cart from './pages/cart/Cart';
// import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* Setup Routes for different pages within your app */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/products" element={<Products />} />{' '}
        {/* Products listing */}
        <Route path="/cart" element={<Cart />} /> {/* Shopping cart */}
        <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
