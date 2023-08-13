"use client";
import React from "react";
import "./Slider.css";
import Slide from "./Slide";
import Slide1 from "./Slide1";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
// import image0 from '../../../public/images/image0.jpeg'
const page = () => {
  return (
    <div className="slider_compo">
      <div className="container_slider">
        <Slide className="gg_slk" />
        {/* <Slide /> */}
        {/* <Slide /> */}
      </div>
      <div className="icons">
        <div className="icon">
            <WestOutlinedIcon/>
        </div>
        <div className="icon">
        <EastOutlinedIcon/>
        </div>
      </div>
    </div>
  );
};

export default page;
