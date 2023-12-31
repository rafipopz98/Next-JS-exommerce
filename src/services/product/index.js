//add a new product service

import Cookies from "js-cookie";

export const addProduct = async (formData) => {
  try {
    const responses = await fetch("/api/admin/addProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(formData),
    });
    const data = await responses.json();
    return data;
  } catch (e) {
    console.log(`the errrror ${e}`);
  }
};

//get admin productss

export const getAllAdminroducts = async () => {
  try {
    const responses = await fetch(
      // "http://localhost:3000/api/admin/allProducts",
      // "https://don-quijote.netlify.app/api/admin/allProducts",
      "https://ryuko-matoi.vercel.app/api/admin/allProducts",

      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await responses.json();
    return data;
  } catch (e) {
    console.log(`the errrror ${e}`);
  }
};

//update the product

export const updateProduct = async (formData) => {
  try {
    const responses = await fetch("/api/admin/updateProduct", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await responses.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

//delete product api

export const deleteProduct = async (id) => {
  try {
    const res = await fetch(`/api/admin/deleteProduct?id=${id}`, {
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

export const produvtByCategory = async (id) => {
  try {
    const res = await fetch(
      // `http://localhost:3000/api/admin/productByCategory?id=${id}`,
      // `https://don-quijote.netlify.app/api/admin/productByCategory?id=${id}`,
      `https://ryuko-matoi.vercel.app/api/admin/productByCategory?id=${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("errrorr while reading productBYCategory", e);
  }
};



export const producctById = async (id) => {
  try {
    const res = await fetch(
      // `http://localhost:3000/api/admin/productById?id=${id}`,
      // `https://don-quijote.netlify.app/api/admin/productById?id=${id}`,
      `https://ryuko-matoi.vercel.app/api/admin/productById?id=${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("errrorr while reading productBYCategory", e);
  }
};
