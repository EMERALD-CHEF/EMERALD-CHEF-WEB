import React from 'react';
import './App.css';

import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import Product from './Products/Products';
import Home from './Home/Home';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }
  return (
    <div className="grid-container">
<head>
    <link rel="stylesheet" href="style.css"></link>
    <title>Emerald Chef</title>
</head>
<body>
    <div>
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>&#9776;</button>
                <a href="index.html">Emerald Chef</a>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
            </div>
        </header>
        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
                <li>
                    <a href="index.html">Pants</a>
                </li>

                <li>
                    <a href="index.html">Shirts</a>
                </li>
            </ul>
        </aside>
        <main className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Product />} />
            </Routes>
        </main>
        <footer>
            &copy; 2022 Emerald Chef
        </footer>
    </div>
</body>
</div>
  );
}

export default App;
