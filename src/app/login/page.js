'use client'
import React, { useState } from "react";
import "./login.css";
import Link from "next/link";
const page = () => {

 

  return (
    <div className="register">
      <div className="register_container">
        <h1>Account Login</h1>
        <div className="input_container">
          <label htmlFor="username">Email</label>
          <input type="email" />
        </div>
        <div className="input_container">
          <label htmlFor="username">Password</label>
          <input type="password" />
          <p className="p_login">
          <Link href='forgotpassword'>
          forgot password
          </Link>
          </p>
          <div className="haveAcc">
            <p>Don't have an account? <span>
                <Link className="link_register" href='/register' >
                signup
                </Link>
            </span></p>
          </div>
        </div>
        
        <div className="register_btn">
          <button>login</button>
          
        </div>
      </div>
    </div>
  );
};

export default page;
