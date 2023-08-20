"use client";
import React, { useState } from "react";
import './Cart.css'

import image0 from "../../../public/image0.jpeg";
import image1 from "../../../public/image1.jpeg";
import Image from "next/image";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const data = [
    {
      id: 1,
      img1: image0,
      // img2:image1,
      // img1: "https://i.pinimg.com/736x/7e/05/e0/7e05e0d3c0e3151a9f8d25a6e5fac44a.jpg",
      // img2: "https://pbs.twimg.com/media/EYDlBD8XkAAqPSn.jpg",
      title: "Black hoodie",
      isNew: true,
      oldPrice: 19,
      price: 20,
      quantity,
    },
    {


      id: 2,
      img1: image1,
      // img2:image3,
      // img1: "https://i.pinimg.com/originals/fb/6d/34/fb6d3458fa64ba2f8ad176e761ae7fd9.jpg",
      // img2: "https://e1.pxfuel.com/desktop-wallpaper/110/350/desktop-wallpaper-oreki-houtarou-houtarou-oreki.jpg",
      title: "Cargo",
      isNew: true,
      oldPrice: 15,
      price: 13,
       quantity,
    },
  ];

  return (
    <>
  <h1 className="heading_cart">Shopping Cart</h1>
    <div className="cart">

      <div className="cart_left">
        {data?.map((item) => (
          <div className="items_cart" key={item.id}>
            <Image src={item.img1} alt="img_cart" />
            <div className="details_cart">
              <h1>{item.title}</h1>
              <div className="quantity_dtl">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                {item.quantity}
                <button onClick={() => setQuantity((prev) => prev + 1)}>
                  +
                </button>
              </div>
              <h4 className="price_cart">${item.price}</h4>

              <DeleteOutlinedIcon className="delte_cart" />
            </div>
          </div>
        ))}
      </div>
      <div className="cart_right">
        <h2>Cart Totals</h2> 
        <div className="subtotal_cart">
          {data?.map((item) => (
            <div > 
               {/* <h1 ><span style={{width:'350em'}}>{item.title} </span>   ${item.price}</h1> */}
              
            </div>
          ))}
        </div>
        <div title="Proceed To Buy" className="total_cart">
          <h3>Total</h3>
          <h2>10000</h2>
        </div>
      </div>
    </div>
    </>
  );
};

export default Cart;
