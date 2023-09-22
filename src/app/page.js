'use client'

import Featured from "../components/FeaturedProducts/Featured"
import Slide1 from "../components/Slider/Slide1"
import Categories from "../components/Categories/Categories"
import { useContext } from "react"
import { GlobalContext } from "../context"

export default function Home() {

  const {isAuthUser}=useContext(GlobalContext)

  return (
   <div className="home">
    {/* <Slide1 /> */}
    {/* <Featured heading="Featured"/> */}
    ji
    {/* <Categories /> */}
    {/* <Featured heading="Sale"/> */}
   </div> 
  ) 
}
 