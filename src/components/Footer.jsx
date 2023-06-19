import React from 'react'
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
      }}
      class="my-4 w-2/4 m-auto bg-blue-500 rounded-3xl shadow md:flex md:items-center md:justify-between md:p-6">
		<span class="text-md m-auto text-blue-200 sm:text-center">© 2022 <a href="https://flowbite.com" class="hover:underline" target="_blank">Flowbite™</a>. All Rights Reserved.
    </span>
	</motion.div>
  )
}

export default Footer