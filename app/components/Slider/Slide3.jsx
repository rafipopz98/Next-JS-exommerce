"use client";
import React from "react";
import "./Slide.css";
// import img0 from '../../../public/image0.jpeg'
import img4 from '../../../public/image4.jpeg'
import img5 from '../../../public/image5.jpeg'
import Image from "next/image";
const Slide3 = () => {
  return (
    <div className="continer_slider">
      <h1 className="first_s">Exclusive</h1>
      <h1 className="second_s">Collection</h1>
      <div className="lineee"></div>
      <h5>on sale</h5>
      <Image className="img9" src={img4} alt='img' width={300} />
      <h3 className="img2text"> 3.Sweatshirts</h3>
      <Image className="img3" src={img5} alt='img' width={300} />
      <h3 className="img3text"> 4.Casuals</h3>
    </div>
  );
};

export default Slide3;
