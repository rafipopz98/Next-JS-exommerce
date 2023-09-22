"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.css";
import { GlobalContext } from "../../../src/context";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const {
    user,
    setUser,
    isAuthUser,
    setIsAuthUser,
    currentUpdatedProduct,
    setCurrentUpdatedProduct,
  } = useContext(GlobalContext);
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
    if (
      pathName !== "/admin-view/addproduct" &&
      currentUpdatedProduct !== null
    )
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
          <div className="cartIcon">
            <Link href="/cart">
              <ShoppingCartOutlinedIcon />
              <span className="number">2</span>
            </Link>
          </div>
          <div onClick={logoutHandler} className="item">
            Logout
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
    </div>
  );
};

export default Navbar;
