//Women's Clothing
import React from "react";
import Navbar from '../components/Navbar';
import Product from "../components/Products"

const WomenPage  = () => {

  const products = [
    {
      title: 'Product ',
      image: 'https://picsum.photos/id/238/150/150',
      price: '55.99',
      details: 'Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking...',
      bannerBg:'#FF5E84' , 
    },
    {
      title: 'Product ',
      image: 'https://picsum.photos/id/237/150/150',
      price: '7.95',
      details: 'Product 2 details go here.',
      bannerBg:'#FF5E84',
    },
    {
        title: 'Product ',
        image: 'https://picsum.photos/id/239/150/150',
        price: '7.95',
        details: 'Product 2 details go here.',
        bannerBg:'#FF5E84',
      },
      {
        title: 'Product ',
        image: 'https://picsum.photos/id/249/150/150',
        price: '7.95',
        details: 'Product 2 details go here.',
        bannerBg:'#FF5E84',
      },

      {
        title: 'Product ',
        image: 'https://picsum.photos/id/251/150/150',
        price: '7.95',
        details: 'Product 2 details go here.',
        bannerBg:'#FF5E84',
      },
   
      {
        title: 'Product ',
        image: 'https://picsum.photos/id/46/150/150',
        price: '7.95',
        details: 'Product 2 details go here.',
        bannerBg:'#FF5E84',
      },
   
      {
        title: 'Product ',
        image: 'https://picsum.photos/id/499/150/150',
        price: '7.95',
        details: 'Product 2 details go here.',
        bannerBg:'#FF5E84',
      },
   
      {
        title: 'Product ',
        image: 'https://picsum.photos/id/49/150/150',
        price: '7.95',
        details: 'Product 2 details go here.',
        bannerBg:'#FF5E84',
      },
   
   
 
    // Add more products as needed
  ];


    return (
        <div>
          <Navbar />
          <h3 className="mb-2 text-xl font-bold p-4 ml-36"> Women's Clothing</h3>

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4  md:gap-2 p-2">
         {products.map((product, index) => (
              <Product key={index} {...product} />
             ))}
        </div>
        </div>
      );
    };
    
export default WomenPage;