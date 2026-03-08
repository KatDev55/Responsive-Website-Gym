import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import BgImage from './assets/bg.png'
import Equipments from './Components/Equipments/Equipments'
import Banner from './Components/Banner/Banner'
import { Banner1Data, Banner2Data } from './mockData/BannerData'
import TabComp from './Components/Tabs/TabComp'
import Testimonials from './Components/Testimonials/Testimonials'
import Banner2 from './Components/Banner/Banner2'
import Footer from './Components/Footer/Footer'





const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
}
const App = () => {
  return (
    <div className='overflow-hidden '>
      <div style={bgStyle}>
          <Navbar/>
          <Hero/>
      </div>
      <Equipments/>
      <Banner {...Banner1Data}/>
      <TabComp/>
      <Banner {...Banner2Data}/>
      <Testimonials/>
      <Banner2/>
      <Footer/>
    </div>
  )
}

export default App