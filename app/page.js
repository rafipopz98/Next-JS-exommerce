'use client'

import Featured from "./components/FeaturedProducts/Featured"
import Slide1 from "./components/Slider/Slide1"
import Categories from "./components/Categories/Categories"

export default function Home() {
  return (
   <div className="home">
    <Slide1 />
    <Featured heading="Featured"/>
    <Categories />
    <Featured heading="Sale"/>
   </div> 
  )
}
 