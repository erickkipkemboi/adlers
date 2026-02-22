import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Content1 from './components/Content1'
import Content2 from './components/Content2'
import { CarouselPlugin } from './components/Carourel'
import Gallary from './components/Gallary'

function page() {
  return (
    <div>
   
      <Navbar/>
      <CarouselPlugin/>
      <Content1/>
      <Content2/>
      <Gallary/>
      <Footer/>
    </div>
  )
}

export default page
