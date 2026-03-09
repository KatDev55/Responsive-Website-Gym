import React, { useMemo } from 'react'
import { TestimonialsData } from '../../mockData/data'
import Slider from 'react-slick'
import { i } from 'motion/react-client'



const Testimonials = () => {
    const settings = {
        dots:true,
        // centerMode:true,
        // centerPadding:"40px",
        arrow:false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                // Window
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    initialSlide: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                // Tablet
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2,
                    slidesToScroll: 1,
                },
            },
            {
                // mobile
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },

        ]
    }
}


  return (
    <div className='py-14 mb-10'>
        <div className='container'>
        {/* header section */}
            <div className='text-left mb-10 max-w-125 space-y-2 mr-auto'>
                <h1 className='text-4xl font-bold'>What Are The Costumer Saying About Us</h1>
            </div>

            {/* Testimonials Cards */}
            <div>
                <Slider {...settings}>
                    {
                        TestimonialsData.map((item,i)=>(
                            <div key={i} className='my-6'>
                                <div className='flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-primary/10'>
                                    {/* upper section */}
                                    <div className='flex justify-start items-center gap-5'>
                                        <img 
                                        className='rounded-full w-16 h-16'
                                        src={item.img} alt="" />
                                        <div>
                                            <p className='text-xl font-bold text-black/80'>{item.name}</p>
                                            <p>{item.name}</p>
                                        </div>
                                    </div>
                                    {/* button section */}
                                    <div className='py-6 space-y-4'>
                                        <p className='text-sm text-gray-600'>{item.text}</p>
                                        <p>⭐⭐⭐⭐⭐</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    </div>
  )


export default Testimonials