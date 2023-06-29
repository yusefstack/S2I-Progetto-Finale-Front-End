import React from 'react'
import Logo from '../images/GLOBAL-WARNING-LOGO.png'
import { motion } from "framer-motion"
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()

    return (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: location.pathname === "/" ? 0.8 : 0,
            delay: location.pathname === "/" ? 3.5 : 0,
            ease: [0, 0.71, 0.2, 1.01]
        }}
        className='flex justify-between m-auto w-5/6 max-lg:block max-lg:w-3/4'
    >
    <div className='w-4/6 relative max-lg:w-full max-lg:static'>
        <Link to="/" className='w-fit h-fit absolute right-1/4 max-lg:static max-lg:block max-lg:m-auto'>
            <img className='w-64 select-none' src={Logo} alt="logo" />
        </Link>
    </div>
    <div className="w-1/4 h-24 px-7 my-10 bg-white shadow-lg rounded-2xl max-lg:w-full max-xl:w-1/3">
            <div className="flex">
                <div className="flex-1 group">
                    <Link to="/charts" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500">
                        <span className="block px-1 pt-1 pb-1">
                            <i className="far fa-home text-2xl pt-1 mb-1 block"></i>
                            <span className="block text-md pb-2">Charts</span>
                            <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                        </span>
                    </Link>
                </div>
                <div className="flex-1 group">
                    <Link to="/about" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500">
                        <span className="block px-1 pt-1 pb-1">
                            <i className="far fa-compass text-2xl pt-1 mb-1 block"></i>
                            <span className="block text-md pb-2">About</span>
                            <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    </motion.div>
    )
}

export default Navbar