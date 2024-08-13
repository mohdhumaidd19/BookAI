
import React from 'react';

const Navbar = () => {
  return (
    
    <div className="relative text-white font-sans font-extralight  bg-[#1e0533]">
     
      <div className="flex justify-between items-center py-6 px-8">
        <div className='text-2xl flex items-center'>
          <img className="w-12 mr-3" src="./logo.png" alt=""/>
          <span className='font-bold'>BookAI</span>
        </div>
        <div className='flex justify-end items-center space-x-7 w-full font-sans'>
          <ul className='flex gap-4'>
          <a href=""><button className='text-white font-semibold hover:text-gray-300 transition duration-300'>Features</button></a>
          <button className='text-white font-semibold hover:text-gray-300 transition duration-300'>How It Works</button>
          <button className='text-white font-semibold hover:text-gray-300 transition duration-300'>Roadmap</button>
          <button className='text-white font-semibold hover:text-gray-300 transition duration-300'>API</button>
          <button className='text-white font-semibold hover:text-gray-300 transition duration-300'>Price</button>
          <button className='text-white font-semibold hover:text-gray-300 transition duration-300'>Models</button>
          </ul>
          <button className="bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold py-2 px-4 rounded">
            Login / Sign Up
          </button>
        </div>
      </div>
    </div>
    
  );
}

export default Navbar;
