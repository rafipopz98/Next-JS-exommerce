"use client";
import React, { useContext, useEffect, useState } from "react";
import "./login.css";
import Link from "next/link";
import { GlobalContext } from "../../../src/context";
import { login } from "../../../src/services/login";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
// import LoaderCompo from "@/src/components/Loader/LoaderCom/page";
import Notification from "../../../src/components/Notification"; 
import ComponentLevelLoader from "../../../src/components/Loader/LoaderCom/page";
const page = () => {
  const router = useRouter();
  const {
    isAuthUser,
    setIsAuthUser,
    user,
    setUser,
    componentLevelLoader,
    setComponentLevelLoader,
  } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  let name, value;

  const inputHandler = (e) => {
    console.log("gg");
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
  console.log(isValid());

  async function loginSubmit() {
    setComponentLevelLoader({ loading: true, id: "" });
    console.log("login click button");

    const data = await login(formData);
    console.log("form data login", data);

    if (data.success) {
      setComponentLevelLoader({ loading: false, id: "" });
      setIsAuthUser(true);
      setUser(data?.finalData?.user);

      console.log("success");
      toast.success(data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });

      setFormData({
        email: "",
        password: "",
      });
      Cookies.set("token", data?.finalData?.token);

      console.log(
        "helo konicinwa",
        Cookies.set("token", data?.finalData?.token)
      );
      localStorage.setItem("user", JSON.stringify(data?.finalData?.user));

      console.log(user);
    } else {
      setComponentLevelLoader({ loading: false, id: "" });
      setIsAuthUser(false);

      console.log("error");
      toast.error(data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });

      setFormData({
        email: "",
        password: "",
      });
    }
  }

  console.log(isAuthUser, user, "is auth user and user details");

  useEffect(() => {
    if (isAuthUser) router.push("/");
  }, [isAuthUser]);

  console.log("ggggg", formData);
  return (
    <div className="register">
      <div className="register_container">
        <h1>Account Login</h1>
        <div className="input_container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            name="email"
            placeholder="enter email"
            onChange={inputHandler}
          />
        </div>
        <div className="input_container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            name="password"
            placeholder="enter password"
            onChange={inputHandler}
          />
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
          <button disabled={!isValid()} onClick={loginSubmit}>
          {componentLevelLoader && componentLevelLoader.loading ? (
                    <ComponentLevelLoader
                      text={""}
                      color={"#ffffff"}
                      loading={
                        componentLevelLoader && componentLevelLoader.loading
                      }
                    />
                  ) : (
                    "Login"
                  )}
          </button>
        </div>
      </div>
      <Notification/>
    </div>
  );
};

export default page;
