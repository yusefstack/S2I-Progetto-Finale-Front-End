import React from "react";
import { motion } from "framer-motion";
import Image from "./Image";

// Import images
import ImageOne from "../images/HEADER-IMAGES/image-1.png"
import ImageTwo from "../images/earth-home.png"
import ImageTree from "../images/HEADER-IMAGES/image-2.png"
import ImageFour from "../images/HEADER-IMAGES/image-3.png"
import ImageFive from "../images/HEADER-IMAGES/image-4.png"

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1.6,
    },
  },
};





const Loader = ({ setLoading }) => {


  return (
    <motion.div className="loader">
      <motion.div
          variants={container}
          onAnimationComplete={() => setLoading(false)}
          initial="hidden"
          animate="show"
          exit="exit"
          className="loader-inner"
        >
        <ImageBlock variants={item} imageNumber={ImageOne} className="absolute w-128 right-12 bottom-3 max-xl:right-32 max-md:w-96 md:-bottom-36 md:-left-24 max-xl:bottom-52" />
        <motion.div variants={itemMain} className="transition-image">
          <motion.img
              layoutId="main-image-1"
              src={ImageTwo}
          />
        </motion.div>
        <ImageBlock className="absolute w-128 left-24 max-md:w-96 max-md:left-56 md:top-12 md:-left-24 max-md:top-72" variants={item} imageNumber={ImageTree}/>
        <ImageBlock className="absolute w-128 left-96 max-md:w-96 max-xl:left-32 md:bottom-96 md:left-96 max-xl:bottom-96" variants={item} imageNumber={ImageFour} />
        <ImageBlock className="absolute w-128 right-48 max-md:w-96" variants={item} imageNumber={ImageFive} />
      </motion.div>
    </motion.div>
  );
};

export const ImageBlock = ({ posX, posY, variants, imageNumber, className }) => {
  return (
    <motion.div
        className={className}
          animate={{
            scale: .5,
            transition: {
              duration: 1,
            }
          }}
          variants={variants}
          style={{
            top: `${posY}vh`,
            left: `${posX}vw `,
          }}
    >
      <Image
        src={imageNumber}
        alt=""
      />
    </motion.div>
  );
};
export default Loader;
