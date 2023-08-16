'use-client'
import React,{useState} from "react";
import "./Slider.css";
import Slide from "./Slide";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import Slide3 from "./Slide3";
import Slide2 from "./page"; 

const Slide1 = () => {

  const [currentSlide,setCurrentSlide]=useState(0)

  const prevSlide=()=>{
    setCurrentSlide(currentSlide===0? 2:(prev)=>prev-1)
  }
  const nextSlide=()=>{
    setCurrentSlide(currentSlide===2?0:(prev)=>prev+1)
  }
  return (
    <div className="slider_slider">
      <div className="slide_container" style={{transform: `translateX(-${currentSlide*100}vw)`}}>
        <Slide  />
        <Slide3 />
        <Slide2 />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slide1;
