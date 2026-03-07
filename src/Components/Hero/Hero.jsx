import React from "react";
import { FaPlay } from "react-icons/fa";
import HeroImg from "../../assets/dumbell.png";
import { motion } from "framer-motion";
import { SlidLeft, SlidRight } from "../utility/animetions";

const Hero = () => {
  return (
    <>
      <section>
        <div className="container  grid grid-cols-1 md:grid-cols-2 min-h-163 relative">
          {/* Brand Info */}
          <div className="flex flex-col justify-center py-14 md:py-0 font-play">
            <div className="text-center md:text-left space-y-6">
              <motion.h1
                variants={SlidRight(0.6)}
                initial="hidden"
                animate="visible"
                className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal"
              >
                Gym Gives you the perfect{""}{" "}
                <span className="text-primary">Health</span>
                {""}
              </motion.h1>
              <motion.p 
                variants={SlidRight(1.2)}
                initial="hidden"
                animate="visible"
              className="text-gray-600 xl:max-w-125">
                It is a long established fact that a reader will be by readable
                content of a page when are the best product.
              </motion.p>
              {/* button section */}
              <motion.div
                variants={SlidRight(1.5)}
                initial="hidden"
                animate="visible"
              className="flex justify-center gap-8 md:justify-start mt-4">
                <button className="primary-btn flex items-center gap-2 ">
                  Order Now
                </button>
                <button className="flex justify-center items-center gap-2 secondary-btn">
                  <FaPlay />
                  Watch Now
                </button>
              </motion.div>
            </div>
          </div>
          {/* Hero Image */}
          <div className="flex justify-center items-center">
            <motion.img
                variants={SlidLeft(1.5)}
                initial={{opacity:0,x:100,rotate:30}}
                animate={{opacity:1,rotate:[30,0],x:0}}
                transition={{duration:1,delay:1.5,ease:'easeInOut'}}
              src={HeroImg}
              alt="Hero Image"
              className="w-100 md:w-138 xl:w-175 drop-shadow"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
