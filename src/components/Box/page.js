"use client";
import React from "react";
import "../Card/Card.css";
import Image from "next/image";
// import Image from "next/image";

const Box = ({ item }) => {
  return (
    <div className="card">
      <div className="images_card">
        <Image
          src={item.img1}
          className="mainImage"
          width={280}
          height={400}
          alt="img1"
        />

        <Image
          src={item.img2}
          className="secondImage"
          alt="img2"
          width={280}
          height={400}
        />
      </div>
      <h2>{item.name}</h2>
      <div className="prices_cards">
        <h3>${item.oldPrice}</h3>
        <h3>${item.newPrice}</h3>
      </div>
    </div>
  );
};

export default Box;