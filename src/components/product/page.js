"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./PrdtDtl.css";

import image0 from "../../../public/image0.jpeg";
import image1 from "../../../public/image1.jpeg";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
const ProductDetails = ({ item }) => {
  // const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  // const images = [image0, image1];
  // console.log(item)

  return (
    <div className="product_detail">
      <div className="left_prdtDtl">
        {/* <div className="images_prdtDtl">
          <img src={item.image} />
          <img src={item.image} />
          <Image src={images[1]} onClick={(e) => setSelectedImg(1)} />
        </div> */}
        <div className="mainImg_prdtDtl">
          <img src={item.image}  />
        </div>
      </div>
      <div className="right_prdtDtl">
        <h1>{item.name}</h1>
        {/* <span className="price_dtl">${item.price - item.pDrop}</span> */}
        <div className="prices_cards">
          <h3>${item.price}</h3>
          <h3>${item.price - item.pDrop}</h3>
        </div>
        <div className="quantity_dtl">
          <button
          // onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button
          // onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <button className="addTocart">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="link_dtl">
          <div className="item_dtl">
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>
          {/* <div className="item_dtl">
            <BalanceIcon /> ADD TO COMPARE
          </div> */}
        </div>
        {/* <div className="info">
          <span>Vendor:polo</span>
          <span>Product-type:t-shirt</span>
          <span>Tag:t-shirt,women,top</span>
        </div> */}
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <p>{item.desc}</p>
          <hr />
          {/* <span>ADDITIONAL DETAILS</span>
          <hr />
          <span>FAQ</span> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
