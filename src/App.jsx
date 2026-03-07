import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import BgImage from './assets/bg.png'
import Equipments from './Components/Equipments/Equipments'
import Banner from './Components/Banner/Banner'
import { Banner1Data, Banner2Data } from './mockData/BannerData'
import TabComp from './Components/Tabs/TabComp'
// import img1 from './assets/2.png'
// import img2 from './assets/3.png'




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
    </div>
  )
}

export default App