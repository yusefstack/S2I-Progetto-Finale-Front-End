import React from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from 'uuid';

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

const Banner = () => {
  
  return (
    <motion.div className='banner' variants={banner}>
      <BannerRowTop title={"Beatiful"} />
      <BannerRowCenter title={"places,"} />
      <BannerRowBottom title={"Right?"} />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
      className='row-title'
      variants={disabled ? null : banner}
      initial='initial'
      animate='animate'
      >
    {[...title].map((letter) => (
      <motion.span
          className='row-letter'
          variants={disabled ? null : letterAni}
          key={uuidv4()}
        >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className={"banner-row"}>
      <div className='row-col'>
        <AnimatedLetters title={title} />
      </div>
      <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.4,
          }}
          className='row-col'
      >
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className={"banner-row center"}>
      <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
          className='scroll'
        >
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.8,
            }}
        >
          scroll
        </motion.span>
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.8,
            }}
          >
          down
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};

const BannerRowCenter = ({ title }) => {
  return (
    <div className={"banner-row"}>
      <div className='row-col'>
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className='row-col'>
      </motion.div>
    </div>
  );
};

export default Banner;
