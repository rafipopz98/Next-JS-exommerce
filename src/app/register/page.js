"use client";
import React, { useState } from "react";
import "./Register.css";
import Link from "next/link";
import { registerNewUser } from "@/src/services/register";
const page = () => {
  const [formData, setFormData] = useState({
    name: "", 
    email: "",
    password: "",
  });
  let name, value;
 
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData);

  function isValid() {
    return formData &&
      formData.name &&
      formData.name.trim() !== "" &&
      formData.email &&
      formData.email.trim() !== "" &&
      formData.password &&
      formData.password.trim() !== ""
      ? true
      : false;
  }
  console.log(isValid());

  async function handleRegisterOnSubmit ()  {
    const data = await registerNewUser(formData);
    console.log(data);
  };
  return (
    <div className="register">
      <div className="register_container">
        <h1>Account Register</h1> 
        <div className="input_container">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="username"
            name="name"
            value={formData.name}
            placeholder="enter username"
            onChange={handleInputs}
          />
        </div>
        <div className="input_container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="enter email"
            onChange={handleInputs}
          />
        </div>
        <div className="input_container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            placeholder="enter password(minimum 6)"
            onChange={handleInputs}
          />
        </div>
        <div className="register_btn">
          <button disabled={!isValid()} onClick={handleRegisterOnSubmit}>
            Register
          </button>
          <div className="haveAcc">
            <p>
              Already have an account?{" "}
              <span>
                <Link className="link_register" href="/login">
                  register
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
