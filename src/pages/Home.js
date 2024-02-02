//Main dashboard
import React,{ useState, useEffect } from "react";
import Slider from "react-slick";
import Product from "../components/Products"
import Navbar from '../components/Navbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home  = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        };
    
        fetchProducts();
      }, []);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Adjust the number of slides to show at once
        slidesToScroll: 1,
      };

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
        <div>
            <  Navbar />
            
        <h3 className="mb-2 text-xl font-bold p-4 ml-36"> Flash sale</h3>

        <div className="carousel-container">
        <Slider {...settings}>
        {products.map((product, index) => (
            <Product key={index} category={product.category} {...product} />
          ))}
        </Slider>
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