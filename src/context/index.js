"use client";

// import { json } from "express";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import { login } from "../services/login";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [commonLoader, setCommonLoader] = useState(false);
  const [isAuthUser, setIsAuthUser] = useState(null);
  const [user, setUser] = useState();
  const [isAdmin, setIsAdmin] = useState();

  useEffect(() => {
    if (Cookies.get("token") !== undefined) {
      setIsAuthUser(true);
      const userData = (localStorage.getItem("user")) || {};
      // const getCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      setUser(userData);
      // setCartItems(getCartItems);
    } else {
      setIsAuthUser(false);
      setUser({}); //unauthenticated user
    }
  }, [Cookies]);

  

  return (
    <GlobalContext.Provider
      value={{
        commonLoader,
        setCommonLoader,
        isAuthUser,
        setIsAuthUser,
        user,
        setUser,
        isAdmin,setIsAdmin
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
