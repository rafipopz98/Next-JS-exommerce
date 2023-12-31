"use client";
import React from "react";
import "./Card.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Card = ({ item }) => {
  const router=useRouter()
  return (
    <div className="card">
      <div className="images_card">
        <Image alt="image" src={item.image} className="mainImage" width={280} height={400} onClick={()=>router.push(`/product/${item._id}`)}/>

        {/* <Image src={item.img2} className="secondImage"  width={280} height={400}/>  */}
      </div>
      <h2>{item.name}</h2>
      <div className="prices_cards">
        <h3>${item.price}</h3>
        <h3>${item.price - item.pDrop}</h3>
      </div>
    </div>
  );
};

export default Card;
