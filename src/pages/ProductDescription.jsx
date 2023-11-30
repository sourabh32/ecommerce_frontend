import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { AiFillStar } from 'react-icons/ai'

const ProductDescription = () => {
  const params = useParams()


  const fetchData = async () =>{
    const res = await axios.post("http://localhost:3000/api/product",{id:params.id})
    return res.data
  }

  const {data:product,isLoading,error} = useQuery({queryKey:["product",params.id],queryFn:fetchData})

  if (isLoading) {
    return <Spinner />
  }
  if(error){
    return <p>{error.message}</p>
  }
  console.log(product)
  return (
    <div className=' font-custom sm:w-[75%] p-5 w-full mx-auto  '>
      <div className="flex flex-col sm:flex-row">
        <img className=' w-full sm:w-[40%]' src={product.image} />
        <div className=' w-full relative  border-black border-[2px] sm:w-[60%] flex flex-col'>
        <div className="p-4 absolute bottom-0 ">
       
        <h3 className="text-xl cursor-pointer hover:text-gray-600  font-semibold mb-2 text-gray-800">{product.brand}</h3>
        <p className="text-md   mb-2 text-gray-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, quae pariatur odit vitae commodi similique nobis et. Cumque voluptatem illo consectetur? Dicta exercitationem ex quae, incidunt saepe delectus debitis non.</p>
       
        
        <div className="flex  items-center mb-2">
          <div className="flex">
            {[...Array(product.review)].map((star) => (
             <AiFillStar size={28} />
            ))}
          </div>
        </div>
        <div className='flex  gap-2'>
          
          
          
      
        <p className="text-gray-800 justify-end items-end font-semibold text-end text-2xl w-full px-1 mb-2"> ${product.price}</p>
       
        </div>
       
        <button  className="bg-gray-800 text-white px-4 py-2 w-full">Add to Cart</button>
        </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDescription