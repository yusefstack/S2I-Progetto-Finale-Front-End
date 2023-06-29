import React from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const Footer = () => { 
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
        className="my-4 w-2/4 m-auto bg-blue-500 rounded-3xl shadow md:flex md:items-center md:justify-between md:p-6 max-sm:w-2/4 max-sm:h-24 max-sm:p-3"
    >
		<span className="text-md m-auto text-blue-200 text-center">© 2023 <a href="https://flowbite.com" className="hover:underline" target="_blank">Global War(n)ing!™</a>. All Rights Reserved.
    </span>
	</motion.div>
  )
}

export default Footer