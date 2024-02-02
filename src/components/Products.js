import React , { useState, useEffect, useRef } from 'react';

const Product = ({ title, image,price, description, category }) => {

    // Define dynamic background color based on the category
        const getBackgroundColor = () => {
            return category.toLowerCase() === 'men\'s clothing' ? '#2BD9AF' : '#FF5E84';
        };

    const [isOverflowing, setIsOverflowing] = useState(false);
    const detailsRef = useRef(null);

    useEffect(() => {
        const isTextOverflowing = detailsRef.current.scrollHeight > detailsRef.current.clientHeight;
        setIsOverflowing(isTextOverflowing);
    }, [description]);

    return (
      <div className="relative w-80 h-96 bg-gray-100 shadow-xl rounded-2xl p-4 mb-6 mt-4 ml-4">
          {/* Product Title */}
          <h3 className="text-center top-62 font-bold  leading-tight text-gray-800 font-mono">{title}</h3>

        {/* Product Image */}
        <img
          src={image}
          alt={title}
          className=" justify-center ml-[20%] mt-[5%] w-[60%] h-[50%] top-280 object-cover object-center rounded-2xl"
        />
  
        {/* Product Banner */}
        <div className="absolute inset-x-0 h-28 bottom-0 rounded-2xl flex flex-col mt-1 "style={{ backgroundColor: getBackgroundColor() } }>
            {/* Product Price */}
             <p className="text-center text-xl text-blue-600 font-bold mt-1 mb-1 ">Rs {price}</p>

             {/* Product Details */}

             <p ref={detailsRef} className="text-sm font-serif text-gray-900 px-4 text-center mb-4 overflow-hidden">
                    {isOverflowing ? `${description.slice(0, 100)}...` : description}
                </p>
               
        </div>

      </div>
    );
  };
  
  export default Product;