import Cookies from "js-cookie";

export const addToCart = async (formData) => {
  try {
    const res = await fetch("/api/cart/addToCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllCartItems = async (id) => {
  try {
    // const res = await fetch(`http://localhost:3000/api/cart/allCart?id=${id}`, {
    // const res = await fetch(`https://don-quijote.netlify.app/api/cart/allCart?id=${id}`, {
    const res = await fetch(`https://ryuko-matoi.vercel.app/api/cart/allCart?id=${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteFromCart = async (id) => {
  try {
    const res = await fetch(`/api/cart/deleteCart?id=${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};