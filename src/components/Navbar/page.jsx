"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.css";
import { GlobalContext } from "../../../src/context";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import CartModal from "../cartModal/Cart";

const Navbar = () => {
  const {
    user,
    setUser,
    isAuthUser,
    setIsAuthUser,
    currentUpdatedProduct,
    setCurrentUpdatedProduct,
    cartItems,
    showCartModal,
    setShowCartModal
  } = useContext(GlobalContext);
  console.log("jdfsklglkjsdhgjldsfhgkjdsfhgkljdshflgjhdfkjghzskdjfhdh",cartItems.length)
  const router = useRouter();
  const logoutHandler = () => {
    setIsAuthUser(false);
    setUser(null);
    console.log("my cookiewsss ", Cookies.get("token"));
    Cookies.remove("token");
    console.log("my cookiewsss ", Cookies.get("token"));
    localStorage.clear();
    router.push("/login");
    console.log("loggeedout");
  };
  // const oll=false;
  console.log("hmmmmmmmmmmmmm", user?.roleAdmin, isAuthUser);

  const pathName = usePathname();

  console.log(currentUpdatedProduct, "nabarrr");
  useEffect(() => {
    if (pathName !== "/admin-view/addproduct" && currentUpdatedProduct !== null)
      setCurrentUpdatedProduct(null);
  }, [pathName]);

  return (
    <div className="navbar">
      <div className="left">
        <Link href="/">
          <h3>Dummy app</h3>
        </Link>
      </div>

      {isAuthUser ? (
        <div className="right">
          <div className="item">
            <Link href="/product/listing/allProducts">All Products</Link>
          </div>
          <div className="item">
            <Link href="/product/listing/accessories">Accessories</Link>
          </div>
          <div className="item">
            <Link href="/product/listing/tees">T shirts</Link>
          </div>
          <div className="item">
            <Link href="/product/listing/hoodies">Hoodies</Link>
          </div>
          <div className="item">
            <Link href="/product/listing/cargo">Cargo</Link>
          </div>
          <div style={{cursor:"pointer"}} className="cartIcon" onClick={()=>setShowCartModal(true)}>
            {/* <Link href="/cart"> */}
              <ShoppingCartOutlinedIcon />
              <span className="number">{cartItems.length}</span>
            {/* </Link> */}
          </div>
          <div onClick={logoutHandler} className="item">
            Logout
          </div>
          <div className="item">
            <Link href="/account">Account</Link>
          </div>
        </div>
      ) : (
        <div className="right">
          <Link href="/login">
            <div className="item">Login</div>
          </Link>
          <Link href="/register">
            <div className="item">Sign Up</div>
          </Link>
        </div>
      )}
      {isAuthUser && user?.roleAdmin ? (
        <Link href={"/admin-view"}>
          <div className="itemu">AdminView</div>
        </Link>
      ) : null}
      {showCartModal && <CartModal />}
    </div>
  );
};

export default Navbar;
