import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import {motion} from "framer-motion"
const ProductCard = ({ product }) => {
  
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.7}}
    whileInView={{ opacity: 1, scale: 1 }}
    
    transition={{ duration: 0.5 }}
    className="bg-white font-custom  rounded-lg overflow-hidden shadow-md border border-gray-200">
      <img  src={product.image} alt={product.description} className="w-full  object-cover hover:scale-110 transition-transform duration-300" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.description}</h3>
        <div className='flex gap-2'>
        <p className="text-gray-600 rounded-sm w-fit px-1 border-black border-2 mb-2"> {product.category}</p>
        <p className="text-gray-600 rounded-sm w-fit px-1 border-black border-2 mb-2">{product.brand}</p>
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
