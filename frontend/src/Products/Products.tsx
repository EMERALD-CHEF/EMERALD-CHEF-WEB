import React from 'react';
import data from '../data';

function Products() {
    return (
        <div>
            <h2>Products</h2>
            {data.products.map((product, index) => {
                return (
                  <li key={index}>
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
                )}
              )}
        </div>
    );
}

export default Products;