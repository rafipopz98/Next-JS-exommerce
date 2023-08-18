"use client";
import Link from "next/link";
import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link href="/">
          <h3>Dummy app</h3>
        </Link>
      </div>
      <div className="right">
        <div className="item">
          <Link href="/product/accessories">Accessories</Link>
        </div>
        <div className="item">
          <Link href="/product/shoes">Shoes</Link>
        </div>
        <div className="item">
          <Link href="/product/hoodies">Hoodies</Link>
        </div> 
        <div className="item">
          <Link href="/product/pant">Pant</Link>
        </div>
        <div className="cartIcon" >
          <Link href='/cart'>
          <ShoppingCartOutlinedIcon />
          <span className="number">2</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;