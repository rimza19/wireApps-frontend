//Main dashboard
import React from "react";
import Product from "../components/Products"
import Navbar from '../components/Navbar';

const Home  = () => {

    const products = [
        {
          title: 'Product ',
          image: 'https://picsum.photos/id/238/150/150',
          price: '55.99',
          details: 'Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking...',
          bannerBg:'#2BD9AF' , 
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
       
     
        // Add more products as needed
      ];

      // Sample categories (placeholders)
    const categories = [
        {
            title: "Men's Clothing",
            link: '/mens-clothing', // URL of the destination page for Category 1
            backgroundColor: '#2BD9AF',
        },
        {
            title: "Women's Clothing",
            link: '/womens-clothing', // URL of the destination page for Category 2
            backgroundColor: '#FF5E84',
        },
        // Add more categories as needed
    ];

    return (
        <div className="">
            <  Navbar />
            
        <h3 className="mb-2 text-xl font-bold p-4 ml-36"> Flash sale</h3>
       
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4  md:gap-2 p-2">
         {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
        </div>
        <h2 className="mb-2 text-xl font-bold p-4 ml-36"> Categories</h2>
        <div className="flex justify-center gap-6">
                {categories.map((category, index) => (
                    <a key={index} href={category.link} className="flex-1 h-52 bg-gray-100 shadow-xl rounded-2xl p-8 flex flex-col justify-center items-center mx-6" style={{ backgroundColor: category.backgroundColor,maxWidth: '700px' }}>
                        {/* Category content */}
                        <p className="text-white text-4xl font-bold font-roboto text-center">{category.title}</p>
                    </a>
                ))}
            </div>
    </div>
      );
    };
    
export default Home;