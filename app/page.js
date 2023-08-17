'use client'

import Featured from "./components/FeaturedProducts/Featured"
import Slide1 from "./components/Slider/Slide1"

export default function Home() {
  return (
   <div className="home">
    <Slide1 />
    <Featured heading="Featured"/>
    <Featured heading="Sale"/>
   </div> 
  )
}
 