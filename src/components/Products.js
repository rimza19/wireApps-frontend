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
      <div className="relative w-80 h-96 bg-gray-100 shadow-xl rounded-2xl p-6 mb-12">
          {/* Product Title */}
          <h2 className="justify-center ml-10 top-67 font-bold text-l leading-tight text-gray-800 font-roboto">{title}</h2>

        {/* Product Image */}
        <img
          src={image}
          alt={title}
          className=" justify-center ml-[20%] mt-[5%] w-[60%] h-[50%] top-280 object-cover object-center rounded-2xl"
        />
  
        {/* Product Banner */}
        <div className="absolute inset-x-0 h-28 bottom-0 rounded-2xl flex flex-col "style={{ backgroundColor: getBackgroundColor() } }>
            {/* Product Price */}
             <p className="text-center text-xl text-blue-600 font-bold mt-2 ">Rs {price}</p>

             {/* Product Details */}

             <p ref={detailsRef} className="text-sm text-gray-900 px-4 text-center mb-4 overflow-hidden">
                    {isOverflowing ? `${description.slice(0, 100)}...` : description}
                </p>
               
        </div>

      </div>
    );
  };
  
  export default Product;