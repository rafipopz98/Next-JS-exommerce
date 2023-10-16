"use client";

// import { json } from "express";
import Cookies from "js-cookie";

import { createContext, useEffect, useState } from "react";
import { login } from "../services/login";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [pageLevelLoader, setPageLevelLoader] = useState(false);
  const [componentLevelLoader, setComponentLevelLoader] = useState({
    loading: false,
    id: "",
  });
  const [isAuthUser, setIsAuthUser] = useState(null);
  const [user, setUser] = useState();
  const [isAdmin, setIsAdmin] = useState();
  const [currentUpdatedProduct, setCurrentUpdatedProduct] = useState(null);
  const [showCartModal, setShowCartModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [addressFormData, setAddressFormData] = useState({
    fullName: "",
    city: "",
    country: "",
    postalCode: "",
    address: "",
  });
  useEffect(() => {
    // console.log('lol loooook',localStorage.getItem("user"))

    if (Cookies.get("token") !== undefined) {
      setIsAuthUser(true);
      console.log("userrrrrrrrrrrrrrrrrrr", localStorage.getItem("user"));
      const userData = JSON.parse(localStorage.getItem("user")) || {};

      // const getCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      setUser(userData);
      // setIsAdmin(Cookies.get('role'))
      console.log("userData", userData);

      console.log("role of user", Cookies.get("role"));
      // setCartItems(getCartItems);
    } else {
      setIsAuthUser(false);
      setUser({}); //unauthenticated user
    }
  }, [Cookies]);

  return (
    <GlobalContext.Provider
      value={{
        pageLevelLoader,
        setPageLevelLoader,
        isAuthUser,
        setIsAuthUser,
        user,
        setUser,
        isAdmin,
        setIsAdmin,
        componentLevelLoader,
        setComponentLevelLoader,
        currentUpdatedProduct,
        setCurrentUpdatedProduct,
        showCartModal,
        setShowCartModal,
        cartItems,
        setCartItems,
        addresses,
        setAddresses,
        addressFormData,
        setAddressFormData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
