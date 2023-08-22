"use client";
import React, { useContext, useEffect, useState } from "react";
import "./login.css";
import Link from "next/link";
import { GlobalContext } from "@/src/context"; 
import { login } from "@/src/services/login";
import { toast } from "react-toastify";
import LoaderCompo from "@/src/components/Loader/LoaderCom/page";
import Notification from "@/src/components/Notification";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
const page = () => {
  const router=useRouter()
  const {commonLoader, setCommonLoader } = useContext(GlobalContext);
  const {isAuthUser,
    setIsAuthUser,
    user,
    setUser}=useContext(GlobalContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  let name,value;

  const inputHandler = (e) => {
    console.log("gg")
    name = e.target.name; 
    value = e.target.value;
    setFormData({
      ...formData,
      [name]: value, 
    });
  };

  function isValid() {
    return formData && 
      formData.email &&
      formData.email.trim() !== "" &&
      formData.password && 
      formData.password.trim() !== ""
      ? true
      : false;
  }  
  console.log(isValid())

  async function loginSubmit(){
    console.log("login click button")
    // setCommonLoader(true)
    const data=await login(formData)
    console.log(data)
    if(data.success){ 
      setIsAuthUser(true)
      setUser(data?.finalData?.user)
      console.log("success")
      toast.success(data.message,{
        position:toast.POSITION.TOP_RIGHT
      })
     setCommonLoader(false) 
    setFormData({
      email:'',
      password:'', 
    })
    Cookies.set('token',data?.finalData?.token)
    localStorage.setItem('user',data?.finalData?.user)
  }else{
    setIsAuthUser(false)
    console.log("error")
    toast.error(data.message,{
      position:toast.POSITION.TOP_RIGHT
    })
    setCommonLoader(false)
    setFormData({
      email:'',
      password:'',
    })
  }
  } 

  useEffect(() => {
   if(isAuthUser) 
   router.push('/')
  }, [isAuthUser])
  

  console.log(formData)
  return (
    <div className="register">
      <div className="register_container"> 
        <h1>Account Login</h1>
        <div className="input_container">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={formData.email} name="email" placeholder="enter email" onChange={inputHandler}/>
        </div>
        <div className="input_container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={formData.password} name='password' placeholder="enter password" onChange={inputHandler}/>
          <p className="p_login">
            <Link href="forgotpassword">forgot password</Link>
          </p>
          <div className="haveAcc">
            <p>
              Don't have an account?{" "}
              <span>
                <Link className="link_register" href="/register">
                  signup
                </Link>
              </span>
            </p>
          </div>
        </div>

        <div className="login_btn">
          <button disabled={!isValid()}
          onClick={loginSubmit}
          >
          {commonLoader ? (
              <LoaderCompo
                text={"please wait"}
                color={'white'}
                loading={commonLoader}
              />
            ) : (
              'Login'
            )}
          </button>
        </div>
      </div>
      <Notification />
    </div>
  );
};

export default page;
