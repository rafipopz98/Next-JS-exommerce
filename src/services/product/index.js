//add a new product service

import Cookies from "js-cookie"; 

export const addProduct = async (formData) => {
    try {
      const responses = await fetch("/api/admin/addProducts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "Authorization":`Bearer ${Cookies.get('token')}`
        },
        body: JSON.stringify(formData),
      });
      const data = await responses.json();
      return data;
    } catch (e) {
      console.log(`the errrror ${e}`);
    } 
  };

