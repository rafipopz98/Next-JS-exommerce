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
      "http://localhost:3000/api/admin/allProducts",
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
    const pDelete = await fetch(`/api/admin/deleteProduct?id=${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    const data = await pDelete.json();
    return data;
  } catch (e) {
    console.log("error occured while deletin product ", e);
  }
};
