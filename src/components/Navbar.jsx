import React from 'react'
import Logo from '../images/GLOBAL-WARNING-LOGO.png'
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
        }}
        className='flex justify-between m-auto w-5/6 max-md:block max-md:w-3/4'
    >
    <img className='w-64 max-md:m-auto' src={Logo} alt="logo" />
    <div class="w-1/4 h-24 px-7 my-10 bg-white shadow-lg rounded-2xl max-md:w-full">
            <div class="flex">
                <div class="flex-1 group">
                    <a href="#" class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500">
                        <span class="block px-1 pt-1 pb-1">
                            <i class="far fa-home text-2xl pt-1 mb-1 block"></i>
                            <span class="block text-md pb-2">Home</span>
                            <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                        </span>
                    </a>
                </div>
                <div class="flex-1 group">
                    <a href="#" class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500">
                        <span class="block px-1 pt-1 pb-1">
                            <i class="far fa-compass text-2xl pt-1 mb-1 block"></i>
                            <span class="block text-md pb-2">Explore</span>
                            <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                        </span>
                    </a>
                </div>
                <div class="flex-1 group">
                    <a href="#" class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500">
                        <span class="block px-1 pt-1 pb-1">
                            <i class="far fa-search text-2xl pt-1 mb-1 block"></i>
                            <span class="block text-md pb-2">Search</span>
                            <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Navbar