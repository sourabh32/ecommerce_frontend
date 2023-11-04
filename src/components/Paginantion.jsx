import React from 'react'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'

const Paginantion = ({page,onPageChange}) => {
  return (
    <div className='flex my-10 w-fit mx-auto  gap-2'>
        <button className={'border-2 border-black'} disabled={page=== 1} onClick={()=> onPageChange((page) => page-1)}>
        <AiOutlineDoubleLeft  size={30} />
        </button>
        <span>{page}</span>
        <button className={'border-2 border-black'} disabled={page=== 5}  onClick={()=> onPageChange((page) => page+1)}>
        <AiOutlineDoubleRight size={30} />
        </button>
    </div>
  )
}

export default Paginantion