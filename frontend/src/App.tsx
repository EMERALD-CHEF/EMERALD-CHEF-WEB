import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import Product from './Products/Products';
import Home from './Home/Home';
import data from './data';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }
  return(
      <div className = "content">
          <ul className="products">
            {
              data.products.map(product=> 
                <li>
                    <div className="product">
                        <img className="product-image" src={product.imageUrl} alt="product"/>
                        <div className="product-name">
                            <a href="product.html">{product.name}</a>
                        </div>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">{product.price}</div>
                        <div className="product-rating">{product.rating} Stars ({product.numberOfReviews} Reviews) </div>
                    </div>
                </li>
                
                )  
            }
          </ul>
      </div>
  )
      
}

export default App;
