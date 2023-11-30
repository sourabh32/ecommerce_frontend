import React from 'react';
import { AiFillStar, AiOutlineStar, AiTwotoneShop, AiTwotoneStar } from 'react-icons/ai';
import {motion} from "framer-motion"
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import {useSelector} from "react-redux"
import { addToCartApi } from './apis/cartMutations';
=======
>>>>>>> a8d0f2cf463e45516b6e8a2046503d2f71f9aec4
const ProductCard = ({ product }) => {


  const {userInfo} = useSelector(state => state.userReducer)

  const {mutate,data} = useMutation({
    mutationFn:addToCartApi,
    onMutate:(variables)=>{
      console.log("mutate",variables)
    }
  })
  console.log(data)

  const handleAddToCart = () =>{
    const data ={
      userId:userInfo._id,
      productId:product._id
    }
  mutate(data)
  }
  
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.7}}
    whileInView={{ opacity: 1, scale: 1 }}
    
    transition={{ duration: 0.5 }}
    className="bg-white font-custom  rounded-sm overflow-hidden ">
      <img loading='lazy'  src={product.image} alt={product.description} className="w-full   object-cover hover:scale-105 transition-transform duration-300" />
      <div className="p-4">
<<<<<<< HEAD
        <Link to={`/product/${product._id}`}>
        <h3 className="text-xl cursor-pointer hover:text-gray-600  font-semibold mb-2 text-gray-800">{product.brand}</h3>
        </Link>
        
        <div className="flex  items-center mb-2">
=======
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.description}</h3>
        <div className='flex gap-2'>
          
        <p className="text-gray-600 rounded-sm w-fit px-1 border-black border-2 mb-2"> {product.category}</p>
        <p className="text-gray-600 rounded-sm w-fit px-1 border-black border-2 mb-2"><Link to={`/product/${product._id}`}>{product.brand}</Link></p>
        <p className="text-gray-600 font-bold rounded-sm w-fit px-1 border-black border-2 mb-2"> ${product.price}</p>
        </div>

       
        <div className="flex items-center mb-2">
          <p className="text-gray-600 mr-2">Review:</p>
>>>>>>> a8d0f2cf463e45516b6e8a2046503d2f71f9aec4
          <div className="flex">
            {[...Array(product.review)].map((star,index) => (
             <AiFillStar key={index} size={28} />
            ))}
          </div>
        </div>
        <div className='flex  gap-2'>
          
          
          
      
        <p className="text-gray-800 justify-end items-end font-semibold text-end text-2xl w-full px-1 mb-2"> ${product.price}</p>
       
        </div>
       
        <button onClick={handleAddToCart}  className="bg-gray-800 text-white px-4 py-2 w-full">Add to Cart</button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
