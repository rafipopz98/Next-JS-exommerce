"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./PrdtDtl.css";

import image0 from "../../../public/image0.jpeg";
import image1 from "../../../public/image1.jpeg";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [image0, image1];

  return (
    <div className="product_detail">
      <div className="left_prdtDtl">
        <div className="images_prdtDtl">
          <Image src={images[0]} onClick={(e) => setSelectedImg(0)} />
          <Image src={images[1]} onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg_prdtDtl">
          <Image src={images[selectedImg]} />
        </div>
      </div>
      <div className="right_prdtDtl">
        <h1>Title</h1>
        <span className="price_dtl">$200</span>
        <p> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim
          blanditiis eaque nulla optio dolorem, modi tenetur libero aliquid
          voluptatum, illo, eum beatae rerum ipsam totam at rem cum repellat! 
        </p>
        <div className="quantity_dtl">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="addTocart">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="link_dtl">
          <div className="item_dtl">
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>
          <div className="item_dtl">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor:polo</span>
          <span>Product-type:t-shirt</span>
          <span>Tag:t-shirt,women,top</span> 
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL DETAILS</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
