"use client";
import React from "react";
import "./Slide.css";
// import img0 from '../../../public/image0.jpeg'
import img2 from '../../../public/image2.jpeg'
import img3 from '../../../public/image3.jpeg'
import Image from "next/image";
const Slide2 = () => {
  return (
    <div className="continer_slider">
      <h1 className="first_s">Exclusive</h1>
      <h1 className="second_s">Collection</h1>
      <div className="lineee"></div>
      <h5>on sale</h5>
      <Image className="img0" src={img2} alt='img' width={300} />
      <h3 className="img4text">5.tees</h3>
      <Image className="img5" src={img3} alt='img' width={300} />
      <h3 className="img5text"> 6.Old money</h3>
    </div>
  );
};

export default Slide2;
