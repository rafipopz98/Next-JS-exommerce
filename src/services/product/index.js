//add products

export const addProduct = async (formData) => {
    try {
      const responses = await fetch("/api/admin/addProduct", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization:`Bearer ${Cookies.get('token')}`
        },
        body: JSON.stringify(formData),
      });
      const data = await responses.json();
      return data;
    } catch (e) {
      console.log(`the errrror ${e}`);
    } 
  };
  