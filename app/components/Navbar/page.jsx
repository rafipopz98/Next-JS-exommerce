'use client'
import Link from "next/link";
import React,{useState} from "react";
import ShoppingCartOutlinedIcon  from "@mui/icons-material/ShoppingCartOutlined";
import './Navbar.css'
import Cart from "../Cart/Cart";
const Navbar = () => {

  const[open,setOpen]=useState(false)

  return (
    <div className="navbar">
      <div className="left">
        <Link href="/">
         <h3>
         Dummy app
         </h3> 

        </Link>
      </div>  
      <div className="right">
        <div className="item">
          <Link href="/products/accessories">Accessories</Link>
        </div>
        <div className="item">
          <Link href="/products/shoes">Shoes</Link>
        </div>
        <div className="item">
          <Link href="/products/hoodies">Hoodies</Link>
        </div>
        <div className="item">
          <Link href="/products/pant">Pant</Link>
        </div>
        <div className="cartIcon" onClick={()=>setOpen(!open)}>
        {/* <Link > */}
          <ShoppingCartOutlinedIcon />
          <span className="number">2</span>
        {/* </Link> */}
        </div>
      </div>
      {open&&<Cart/>} 
    </div>
  );
};

export default Navbar;
 