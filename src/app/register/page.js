"use client";
import React, { useContext, useEffect, useState } from "react";
import "./Register.css";
import { useRouter } from "next/navigation";

import Link from "next/link";
// import GlobalContext from "../../context/index";
import { registerNewUser } from "../../../src/services/register";
import Notification from "../../../src/components/Notification";
// import LoaderCompo from "@/src/components/Loader/LoaderCom/page";
import { toast } from "react-toastify";
import { GlobalContext } from "../../../src/context";
import ComponentLevelLoader from "../../../src/components/Loader/LoaderCom/page";
// import { useRouter } from "next/navigation";
// import GlobalState from "../../context/index";
const Register = () => {
  const router = useRouter();
  const { pageLevelLoader, setPageLevelLoader,isAuthUser } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    name: "",
    
    email: "",
    password: "",
    roleAdmin: false,
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

  async function handleRegisterOnSubmit() {
    setPageLevelLoader(true);
    const data = await registerNewUser(formData);
    if (data.success) {
      router.push("/login");
      toast.success(data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setPageLevelLoader(false);
      setFormData({
        name: "",
        email: "",
        password: "",
        roleAdmin: false,
      });
    } else {
      toast.error(data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setPageLevelLoader(false);
      setFormData({
        name: "",
        email: "",
        password: "",
        roleAdmin: false,
      });
    }
    console.log(data);
  }
  useEffect(() => {
    if (isAuthUser) router.push("/");
  }, [isAuthUser]);

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
            {  pageLevelLoader ? (
              <ComponentLevelLoader
                text={""}
                color={"#fff"}
                loading={pageLevelLoader}
                
              />
            ) : (
              "Register"
            )}
          </button>
          <div className="haveAcc">
            <p>
              Already have an account?{" "}
              <span>
                <Link className="link_register" href="/login">
                  login
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
      <Notification />
    </div>
  );
};

export default Register;
