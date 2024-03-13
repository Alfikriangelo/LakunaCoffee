import {React, useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Recommendation from '../../components/Recommendation/Recommendation'
import BestCoffee from '../../components/BestCoffee/BestCoffee'
import Appstore from '../../components/Appstore/Appstore'
import Testimonial from '../../components/Testimonial/Testimonial'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import Navbar from '../../components/Navbar/Navbar'




const Home = () => {
    
  useEffect(() => {
    AOS.init({
      offset:100,
      duration:700,
      easing: 'ease-in',
      delay:100,
    })
  })
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Banner />
      <Recommendation />
      <BestCoffee />
      <Appstore />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home