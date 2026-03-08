import React from 'react'
import {motion} from 'framer-motion'
import { SlidLeft } from '../utility/animetions'

const Banner2 = () => {
  return (
    <div className='container my-14'>
        <div className='bg-[#f9f9f9] py-14 md:py-24 flex justify-center items-center'>
            {/* Brand Info */}
            <div className='flex flex-col justify-center text-center space-y-8 lg:px-44'>
                <motion.h1 
                variants={SlidLeft(0.5)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{once:true}}
                className='text-3xl lg:text-5xl font-bold uppercase font-play'>
                    Get 20% Discount On Your First Order, Are You Ready To Buy
                </motion.h1>
                <motion.p
                variants={SlidLeft(0.7)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{once:true}} 
                className=''>We will make sure you get the right and the best quality products
                    for your workout
                </motion.p>
                {/* button box */}
                <motion.div
                variants={SlidLeft(0.9)}
                initial="hidden"
                whileInView={"visible"}
                viewport={{once:true}}
                className='flex justify-center gap-6'>
                    <button className='primary-btn'>Learn more</button>
                    <button className='secondary-btn border border-primary/50'>Stay In Touch</button>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Banner2