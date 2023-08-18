'use client'
import React from "react";
import "./Card.css";
import Link from "next/link";
import Image from "next/image";

const Card = ({ item }) => {
  return (
    <Link className="link_cards" href={`products/${item.id}`}>
      <div className="card">
        <div className="images_card">
        {item.isNew&&<span>New Season</span>} 
        {/* <h1>{item.title}</h1> */}
            {/* <img src={item.img1} alt="img1" className="mainImage" /> */}
            <Image src={item.img1} className="mainImage" width={280} height={400}/>
            {/* <img src={item.img2} alt="img2" className="secondImage" /> */}
            <Image src={item.img2} className="secondImage"  width={280} height={400}/> 
        </div>
        <h2>{item.title}</h2>
        <div className="prices_cards">
            <h3>${item.oldPrice}</h3>  
            <h3>${item.newPrice}</h3>
        </div> 
      </div>
    </Link>
  );
};

export default Card;
