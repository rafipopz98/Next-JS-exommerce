'use client'
import React, { useState } from "react";
import "./Register.css";
import Link from "next/link";
const page = () => {


  const initialformData={
    name:'',
    email:'',
    password:''
  }

  const[formData,setFormData]=useState(initialformData)

  console.log(formData)

  return (
    <div className="register">
      <div className="register_container">
        <h1>Account Register</h1>
        <div className="input_container">
          <label htmlFor="username">Username</label>
          <input type="text" id='username' value={formData.name} placeholder="enter username" onChange={(e)=>{
            setFormData({
              ...formData,[id]:e.target.value
            })
          }} />
        </div>
        <div className="input_container">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={initialformData.email} placeholder="enter email"  />
        </div>
        <div className="input_container">
          <label htmlFor="password">Password</label> 
          <input type="password" id="password" value={initialformData.password}  placeholder="enter password(minimum 6)" />
        </div>
        <div className="register_btn">
          <button>Register</button>
          <div className="haveAcc">
            <p>Already have an account? <span>
                <Link className="link_register" href='/login' >
                register
                </Link>
            </span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
