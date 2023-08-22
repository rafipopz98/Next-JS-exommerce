"use client";

import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [commonLoader, setCommonLoader] = useState(false);
  const [isAuthUser, setIsAuthUser] = useState(null);
  const [user, setUser] = useState();

  useEffect(()=>{
if(Cookies.get('token')!==undefined){
  setIsAuthUser(true)
  const userData=JSON.parse(localStorage.getItem('user')) || {}
  setUser(userData)
}else{
  setIsAuthUser(false)
}
  },[Cookies])

  return (
    <GlobalContext.Provider
      value={{
        commonLoader,
        setCommonLoader,
        isAuthUser,
        setIsAuthUser,
        user,
        setUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
