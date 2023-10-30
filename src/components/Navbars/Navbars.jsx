"use client";
import Link from "next/link";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbars.css";
import CartModal from "../cartModal/Cart";
import React, { useContext, useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { GlobalContext } from "../../../src/context";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";

function Navbars() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const {
    user,
    setUser,
    isAuthUser,
    setIsAuthUser,
    currentUpdatedProduct,
    setCurrentUpdatedProduct,
    cartItems,
    showCartModal,
    setShowCartModal,
  } = useContext(GlobalContext);
  console.log(
    "jdfsklglkjsdhgjldsfhgkjdsfhgkljdshflgjhdfkjghzskdjfhdh",
    cartItems.length
  );
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
  console.log("hmmmmmmmmmmmmm", user?.roleAdmin, isAuthUser);

  const pathName = usePathname();

  console.log(currentUpdatedProduct, "nabarrr");
  useEffect(() => {
    if (pathName !== "/admin-view/addproduct" && currentUpdatedProduct !== null)
      setCurrentUpdatedProduct(null);
  }, [pathName]);
  return (
    <header>
    <Link href="/">
          <h3>Dummy app</h3>
        </Link>

      <nav ref={navRef}>
        {isAuthUser ? (
          <>
            <Link href="/product/listing/allProducts">All Products</Link>
            <Link href="/product/listing/accessories">Accessories</Link>
            <Link href="/product/listing/tees">T shirts</Link>
            <Link href="/product/listing/hoodies">Hoodies</Link>
            <Link href="/product/listing/cargo">Cargo</Link>
            <div
              style={{ cursor: "pointer" }}
              className="cartIcon"
              onClick={() => setShowCartModal(true)}
            >
              <ShoppingCartOutlinedIcon />
              <span className="number">{cartItems.length}</span>
            </div>
            <Link href="/account">Account</Link>
            <div onClick={logoutHandler} className="item">
              Logout
            </div>
          </>
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
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbars;
