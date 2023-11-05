import React from 'react';

const Spinner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
      <div className="text-white ml-3 text-xl font-semibold">Loading...</div>
    </div>
  );
};

export default Spinner;
