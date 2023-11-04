import React, { useState } from 'react';
import {AiOutlineClose} from "react-icons/ai"
function FilterDrawer({ isOpen, closeDrawer, children }) {
  const drawerClass = isOpen ? 'translate-x-0' : 'translate-x-full';

  return (
    <div className={`fixed p-5 font-custom top-2 left-0 h-full w-full bg-white transition-transform transform ${drawerClass}`}>
      <button onClick={closeDrawer} className="absolute top-2 right-2 text-gray-500">
        <AiOutlineClose size="36" />
      </button>
      {children}
      
      <p className='fixed text-red-500 cursor-pointer text-center font-bold text-xl w-full bottom-2'><a href="https://github.com/sourabh32" target='_blank'>sourabh32</a></p>
    </div>
  );
}

export default FilterDrawer;
