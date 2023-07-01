import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import lettera from "../images/HEADER-IMAGES/lettera-o.png"

const ExperiencePath = () => {

    const cardVariants = {
        offscreen: {
            y: 300
        },
        onscreen: {
            y: 50,
            rotate: 0,
            transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.8
                }
            }
        };

    return (
    <>
        <motion.div
            className="card-container mt-96 mb-52"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <motion.div variants={cardVariants}>
                <h1 className='relative text-blue-300 text-9xl text-center whitespace-break-spaces max-md:text-center max-xl:text-7xl max-sm:text-4xl max-sm:px-12'>SO WHY WE RUIN OUR W<img className='w-28 inline-block max-md:w-14 max-xl:w-14 max-sm:w-9' src={lettera} alt="" />RLD?</h1>
            </motion.div>
        </motion.div>
        <Link to="/experience" className="request-loader m-auto mb-96">
            <h1 className='text-5xl'>explore</h1>
        </Link>
    </>
    )
}

export default ExperiencePath