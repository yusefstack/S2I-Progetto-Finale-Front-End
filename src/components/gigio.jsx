import React from 'react'
import { motion } from 'framer-motion'
import lettera from "../images/HEADER-IMAGES/lettera-o.png"

const gigio = () => {

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
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <motion.div variants={cardVariants}>
                <div>
                    <h1 className='relative text-justify text-blue-300 text-10xl whitespace-break-spaces max-md:text-center max-md:text-6xl'>SO WHY WE RUIN OUR WORLD?</h1>
                    <img className='w-80 absolute bottom-16 left-32' src={lettera} alt="" />
                </div>
            </motion.div>
        </motion.div>
    </>
    )
}

export default gigio