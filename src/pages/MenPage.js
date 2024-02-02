//Men's Clothing
import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Product from "../components/Products"

const MenPage  = () => {

  const [menProducts, setMenProducts] = useState([]);
  
  useEffect(() => {
    const fetchMenProducts = async () => {
      try {
        // Fetch men's clothing products from FakeStore API
        const response = await fetch("https://fakestoreapi.com/products/category/men's clothing");
        const data = await response.json();
        setMenProducts(data);
      } catch (error) {
        console.error("Error fetching men's products:", error);
      }
    };

    fetchMenProducts();
  }, []);


    return (
      <div>
        <Navbar />
        <h3 className="mb-2 text-xl font-bold p-4 ml-36"> Men's Clothing</h3>

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4  md:gap-2 p-2">
              {menProducts.map((product, index) => (
              <Product key={index} category={product.category} {...product} />
            ))}
        </div>

      </div>
      );
    };
    
export default MenPage;