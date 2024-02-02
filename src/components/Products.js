import React from 'react';

const Product = ({ title, image, bannerBg,price, details }) => {
    return (
      <div className="relative w-80 h-96 bg-gray-100 shadow-xl rounded-2xl p-6 mb-12">
          {/* Product Title */}
          <h2 className="justify-center ml-12 top-67 font-bold text-4xl leading-tight text-gray-800 font-roboto">{title}</h2>

        {/* Product Image */}
        <img
          src={image}
          alt={title}
          className=" justify-center ml-[20%] mt-[5%] w-[60%] h-[50%] top-280 object-cover object-center rounded-2xl"
        />
  
        {/* Product Banner */}
        <div className="absolute inset-x-0 h-28 bottom-0 rounded-2xl flex flex-col "style={{ backgroundColor: bannerBg }}>
            {/* Product Price */}
             <p className="text-center text-blue-600 font-bold mt-2 ">Rs {price}</p>

             {/* Product Details */}
             <p className="text-sm text-center text-gray-900 ">{details}</p>    
        </div>

      </div>
    );
  };
  
  export default Product;