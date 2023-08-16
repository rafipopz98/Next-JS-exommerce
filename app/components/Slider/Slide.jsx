"use client";
import React from "react";
import "./Slide.css";
// import img0 from '../../../public/image0.jpeg'
import img1 from '../../../public/image1.jpeg'
import image0 from '../../../public/image0.jpeg'
import Image from "next/image";
const Slide = () => {
  return (
    <div className="continer_slider">
      <h1 className="first_s">Exclusive</h1>
      <h1 className="second_s">Collection</h1>
      <div className="lineee"></div>
      <h5>on sale</h5>
      <Image className="img0" src={image0} alt='img' width={300} />
      <h3 className="img0text"> 1.formals and suits</h3>
      <Image className="img1" src={img1} alt='img' width={300} />
      <h3 className="img1text"> 2.hoodies </h3>
    </div>
  );
};

export default Slide;
