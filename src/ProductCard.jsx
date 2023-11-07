import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import {motion} from "framer-motion"
import { Link } from 'react-router-dom';
const ProductCard = ({ product }) => {
  
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.7}}
    whileInView={{ opacity: 1, scale: 1 }}
    
    transition={{ duration: 0.5 }}
    className="bg-white font-custom  rounded-sm overflow-hidden ">
      <img loading='lazy'  src={product.image} alt={product.description} className="w-full   object-cover hover:scale-105 transition-transform duration-300" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.description}</h3>
        <div className='flex gap-2'>
          
        <p className="text-gray-600 rounded-sm w-fit px-1 border-black border-2 mb-2"> {product.category}</p>
        <p className="text-gray-600 rounded-sm w-fit px-1 border-black border-2 mb-2"><Link to={`/product/${product._id}`}>{product.brand}</Link></p>
        <p className="text-gray-600 font-bold rounded-sm w-fit px-1 border-black border-2 mb-2"> ${product.price}</p>
        </div>

       
        <div className="flex items-center mb-2">
          <p className="text-gray-600 mr-2">Review:</p>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
             <AiTwotoneStar />
            ))}
          </div>
        </div>
     
      </div>
    </motion.div>
  );
};

export default ProductCard;
