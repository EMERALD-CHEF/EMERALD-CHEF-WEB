import React, { useEffect, useState } from "react";
import axios from "axios";

type Product = {
    id: number;
    name: string;
    description: string;
    brand: string;
    price: number;
    rating: number;
    numberOfReviews: number;
    imageUrl: string;
}

const emptyProducts: Product[] = [];

function Products() {
    const [products, setProducts]: [Product[], (products : Product[]) => void]
        = useState(emptyProducts);

    useEffect(() => {
        // is this the right number?
        axios.get<Product[]>("https://localhost:7248/catalog",
        {
            headers: {
                "Content-Type": "application/json",
            },
        })
        // getting an error saying ';' expected on line 25:9
        .then((response)=> setProducts(response.data))
        .catch((error)=> console.log(error));
    }, []);
    
    return (
        <div className="content">
            <div className="products">
                {products.map((product, index) => {
                    return (
                    <li key={product.id}>
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
        </div>
    );
}

export default Products;