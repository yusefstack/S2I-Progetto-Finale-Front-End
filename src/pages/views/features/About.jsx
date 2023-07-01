import React from 'react'
import about_us from "../../../images/about-us.png"
import about_us_environment_svg from "../../../images/DrawKit Vector Illustration Ecology & Environment (10).svg"
import { motion } from 'framer-motion'
import SEO from '../../../components/SEO'

const About = () => {
    return (
    <>
        <SEO
            title="Global War(n)ing!"
            description="A non-profit organization"
            name="Global War(n)ing!"
            type="Information webapp"
        />
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <img className='select-none w-2/4 m-auto max-lg:w-5/6' src={about_us} alt="" />
            <div className='flex max-lg:block'>
                <img className="select-none w-2/4 max-lg:w-5/6 max-lg:m-auto" src={about_us_environment_svg} alt="" />
                <p className='text-5xl text-blue-200 p-28 text-justify my-28 max-md:p-5 max-lg:text-start max-xl:text-3xl'>We are a non-profit organization that deals with environmental issues, particularly global warming. We are committed to raising awareness about the importance of reducing greenhouse gas emissions and promoting the adoption of sustainable practices. Our goal is to create a more sustainable world and protect our planet for future generations. To achieve this goal, we work with other non-profit organizations, governments and businesses to promote environmental policies and develop sustainable technologies. We also offer educational programs to help people better understand global warming and how they can do their part to protect the environment.</p>
            </div>
        </motion.div>
        </>
    )
}

export default About