"use client";

// import { json } from "express";
import Cookies from "js-cookie";

import { createContext, useEffect, useState } from "react";
import { login } from "../services/login";
import { usePathname, useRouter } from "next/navigation";

export const GlobalContext = createContext(null);

export const initialCheckoutFormData = {
  shippingAddress: {},
  paymentMethod: "",
  totalPrice: 0,
  isPaid: false,
  paidAt: new Date(),
  isProcessing: true,
};

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
  const [checkoutFormData, setCheckoutFormData] = useState(
    initialCheckoutFormData
  );

  useEffect(() => {
    // console.log('lol loooook',localStorage.getItem("user"))

    if (Cookies.get("token") !== undefined) {
      setIsAuthUser(true);
      console.log("userrrrrrrrrrrrrrrrrrr", localStorage.getItem("user"));
      const userData = JSON.parse(localStorage.getItem("user")) || {};
      const getCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      // const getCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      setUser(userData);
      setCartItems(getCartItems);
      // setIsAdmin(Cookies.get('role'))
      console.log("userData", userData);

      console.log("role of user", Cookies.get("role"));
      // setCartItems(getCartItems);
    } else {
      setIsAuthUser(false);
      setUser({}); //unauthenticated user
    }
  }, [Cookies]);

  const protectedRoutes = [
    "cart",
    "checkout",
    "account",
    "orders",
    "admin-view",
  ];
  const protectedAdminRoutes = [
    "/admin-view",
    "/admin-view/add-product",
    "/admin-view/all-products",
  ];

  const [allOrdersForUser, setAllOrdersForUser] = useState([]);
  const [orderDetails, setOrderDetails] = useState(null);
  const [allOrdersForAllUsers, setAllOrdersForAllUsers] = useState([]);
  
  const router = useRouter();
  const pathName = usePathname();

  // useEffect(() => {
  //   if (
  //     pathName !== "/register" &&
  //     !pathName.includes("product") &&
  //     pathName !== "/" &&
  //     user &&
  //     Object.keys(user).length === 0 &&
  //     protectedRoutes.includes(pathName) > -1
  //   )
  //     router.push("/login");
  // }, [user, pathName]);

  useEffect(() => {
    if (
      user !== null &&
      user &&
      Object.keys(user).length > 0 &&
      user?.roleAdmin !== true &&
      protectedAdminRoutes.indexOf(pathName) > -1
    ) 
      router.push("/unauthorized-page");
  }, [user, pathName]);

  

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
        checkoutFormData,
        setCheckoutFormData,
        allOrdersForUser,
        setAllOrdersForUser,
        orderDetails,
        setOrderDetails,
        allOrdersForAllUsers,
        setAllOrdersForAllUsers,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
