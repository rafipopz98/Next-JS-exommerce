export const login = async (formData) => {
  try {
    const responses = await fetch("/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const finalData = await responses.json();
    return finalData;
  } catch (e) {
    console.log(`the errrror ${e}`);
  } 
};
