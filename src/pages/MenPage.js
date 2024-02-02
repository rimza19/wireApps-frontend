//Men's Clothing
import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Product from "../components/Products"

const MenPage  = () => {

        const [products, setProducts] = useState([]);
        useEffect(() => {
          fetch("https://fakestoreapi.com/products/category/men's clothing")
              .then(response => response.json())
              .then(data => setProducts(data))
              .catch(error => console.error('Error fetching products:', error));
      }, []);


    return (
      <div>
        <Navbar />
        <h3 className="mb-2 text-xl font-bold p-4 ml-36"> Men's Clothing</h3>

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4  md:gap-2 p-2">
         {products.map((product, index) => (
               <Product key={index} title={product.title} image={product.image} price={product.price} details={product.description} bannerBg="#2BD9AF" />
             ))}
        </div>

      </div>
      );
    };
    
export default MenPage;