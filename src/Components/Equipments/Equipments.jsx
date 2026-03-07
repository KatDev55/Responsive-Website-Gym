import React from 'react'
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import {EquipmentData} from "../../mockData/EquipmentData"
import { div } from 'motion/react-client';
import { motion } from 'framer-motion';
import { SlidLeft } from '../utility/animetions';



const Equipments = () => {
  return (
    <div>
        <div className="container py-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-play">
                <div className='space-y-4 p-6'>
                    <h1 className='text-3xl md:text-4xl font-bold'>What we offer for you</h1>
                    <p className='text-gray-600'>It is a long established fact that a reader readable.</p>
                </div>
                {
                    EquipmentData.map((item,index)=>{
                        return(
                            <motion.div
                            variants={SlidLeft(item.delay)}
                            initial="hidden"
                            whileInView='visible'
                            key={index} className='bg-gray-100 space-y-4 p-6  hover:bg-white rounded-xl hover:shadow-[0_0_22px_0px_rgba(0,0,0,0.15)] cursor-pointer'>
                                <div className='text-4xl'>{item.icon}</div>
                                <p className='text-2xl font-semibold'>{item.title}</p>
                                <p className='text-gray-600'>{item.descript}</p>
                            </motion.div>
                        )
                            
                })
                }
                
            </div>
        </div>
    </div>
  )
}

export default Equipments