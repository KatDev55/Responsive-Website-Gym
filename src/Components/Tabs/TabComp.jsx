import React, { useState } from 'react'
import { ProductsData } from '../../mockData/data'
import { button } from 'motion/react-client'
import {motion} from 'framer-motion'


const TabComp = () => {
    const [activeTab,setActiveTab] = useState('All')


    const tabs = ["All","Yoga","Fitness","Muscles"]
    const filteredProducts = activeTab == "All" ?
    ProductsData : ProductsData.filter((card)=>card.category == activeTab)
  return (
    <div>
        <div className="container my-12 md:my-16">
            {/* Tabs button section */}
            <div className="flex space-x-4 mb-4 p-6">
                {
                    tabs.map((tab,index)=>(
                        <button key={tab}
                        onClick={()=>setActiveTab(tab)}
                        className={`py-2 px-4 rounded cursor-pointer hover:shadow-md duration-200
                            text-lg font-play
                            ${activeTab == tab
                                ?" bg-primary text-white"
                                :"bg-gray-200 text-gray-700"}`}
                        >
                            {tab}
                        </button>
                    ))
                }
            </div>

            {/* Tab Cards section  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    filteredProducts.map((product)=>(
                        <motion.div
                        id={product.id}
                        initial={{opacity:0,x:10}}
                        whileInView={{opacity:1,x:0}}
                        className='p-4 border-gray-100 border rounded shadow-sm space-y-2 hover:bg-gray-100 cursor-pointer hover:shadow-md transition-all duration-300' 
                        key={product.id}>
                            <img 
                            className='h-60 w-full object-cover'
                            src={product.image} alt="" />
                            <h3 className='text-xl font-semibold'>{product.title}</h3>
                            <p className='text-gray-500'>{product.category}</p>
                        </motion.div>))
                }
            </div>
        </div>
    </div>
  )
}

export default TabComp