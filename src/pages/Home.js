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
                const menResponse = await fetch("https://fakestoreapi.com/products/category/men's clothing");
                const menData = await menResponse.json();

                const womenResponse = await fetch("https://fakestoreapi.com/products/category/women's clothing");
                const womenData = await womenResponse.json();

                // Combine men's and women's clothing products into a single array
                const combinedProducts = mergeArraysAlternatively(menData, womenData);
                setProducts(combinedProducts);
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

    // Merge two arrays alternatively
    const mergeArraysAlternatively = (arr1, arr2) => {
        const mergedArray = [];
        const maxLength = Math.max(arr1.length, arr2.length);
        
        for (let i = 0; i < maxLength; i++) {
            if (arr1[i]) {
                mergedArray.push(arr1[i]);
            }
            if (arr2[i]) {
                mergedArray.push(arr2[i]);
            }
        }

        return mergedArray;
    };
    // Apply padding to the Slider container and adjust first image padding
    const sliderContainerStyle = {
        padding: "10px 60px", // Adjust padding as needed
    };

    return (
        <div>
            <  Navbar />
            
        <h3 className="text-xl font-bold font-mono ml-20"> Flash Sale</h3>

        <div className="carousel-container"  style={sliderContainerStyle}>
        <Slider {...settings}>
                    {products.map((product, index) => (
                        <div key={index}>
                            <Product category={product.category} {...product} />
                        </div>
                    ))}
                </Slider>
      </div>

        <h2 className="mb-2 text-xl font-mono font-bold ml-20"> Categories</h2>
        <div className="flex justify-center gap-6">
                {categories.map((category, index) => (
                    <a key={index} href={category.link} className="flex-1 h-52 bg-gray-100 shadow-xl rounded-2xl p-8 flex flex-col justify-center items-center mx-4" style={{ backgroundColor: category.backgroundColor,maxWidth: '500px' }}>
                        {/* Category content */}
                        <p className="text-white text-4xl font-bold font-mono text-center">{category.title}</p>
                    </a>
                ))}
            </div>
    </div>
      );
    };
    
export default Home;