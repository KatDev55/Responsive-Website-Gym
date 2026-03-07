import React from 'react'
import {motion, spring} from 'framer-motion'
import { SlidLeft, SlidRight, SlidUp } from '../utility/animetions'


const Banner = ({image,title,subtitle,link}) => {
  return (
    <div className='container'>
        <div className="bg-[#f9f9f9] grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
            {/* Banner Image section */}
            <div className='flex justify-center items-center md:justify-start'>
                <motion.img
                initial={{opacity:0,scale:0.5}}
                whileInView={{opacity:1,scale:1}}
                transition={{type:spring,stiffness:100,delay:0.2}}
                src={image} alt="" 
                className='w-75 md:max-w-100 xl:min-w-150 h-full object-cover'
                />
            </div>
            {/* Banner Text section */}
            <div className='flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-125'>
                <motion.h1
                variants={SlidUp(0.5)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{one:true}}
                className='text-2xl lg:text-4xl font-bold capitalize font-play'>{title}</motion.h1>

                <motion.p
                variants={SlidUp(0.7)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{one:true}}
                className='text-gray-600 '>{subtitle}</motion.p>
                <motion.div
                variants={SlidUp(0.9)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{one:true}}
                className='flex justify-center md:justify-start'>
                    <button className='primary-btn'>
                        Explore More
                    </button>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Banner