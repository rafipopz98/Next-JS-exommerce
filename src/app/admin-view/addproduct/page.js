"use client";
import React, { useState } from "react";
import "./AddProduct.css";
import {
  firebaseConfig,
  firebaseStorage,
} from "@/src/components/FeaturedProducts/Projects";
import { initializeApp } from "firebase/app";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

const app = initializeApp(firebaseConfig);

const storage = getStorage(app, firebaseStorage);

const AdminViewAddProduct = () => {
  const uniqueFileName = async (getfile) => {
    const timeStamp = Date.now();
    const randomStringValue = Math.random().toString(36).substring(2, 12);

    return `${getfile.name}-${timeStamp}-${randomStringValue}`;
  };

  const helperforUploadingImageForFirebase = async (file) => {
    const getFileName = uniqueFileName(file);
    const storageRef = ref(storage, `ecommerce/${getFileName}`);

    const uploadImage = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadImage.on(
        `state_changed`,
        (snapshot) => {},
        (error) => {
          console.log(`the errror is ${error}`);
          reject(error);
        },
        () => {
          getDownloadURL(uploadImage.snapshot.ref)
            .then((downloadUrl) => resolve(downloadUrl))
            .catch((error) => reject(error));
        }
      );
    });
  };

  let name, value;

  
  const [selected, setSelected] = useState('');

  
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    price: 0,
    desc: "",
    category: '',
    DInfo: "",

    pDrop: 0,
  });

  const inputHandle = (e) => {
    console.log("gg");
    name = e.target.name;
    value = e.target.value;
    // console.log("some stuff", formData.category);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChange = event => {
    console.log('Label 👉️', event.target.selectedOptions[0].label);
    const noice= setSelected(event.target.value)
    setFormData({
      ...formData,
      category:noice
    });
    // console.log(formData)
    // console.log(event.target.value);
  };

  const handleImage = async (event) => {
    console.log(event.target.files);
    const extractimageUrl = await helperforUploadingImageForFirebase(
      event.target.files[0]
    );
    console.log(extractimageUrl);

    if (extractimageUrl !== "") {
      setFormData({
        ...formData,
        image: extractimageUrl,
      });
    }
  };

  console.log("selecteddd",selected);
  console.log("all the data",formData);

  
console.log()
  return (
    <div className="container_addProducts">
      <input
        accept="image/*"
        size="1000000"
        type="file"
        value={formData.image}
        onChange={handleImage}
      />
      <div className="spans_size">
        <h2>Available Sizes</h2>
        <span>S</span>
        <span>M</span>
        <span>L</span>
      </div>
      <input
        type="text"
        id="name"
        value={formData.name}
        name="name"
        placeholder="Enter Product Name"
        onChange={inputHandle}
      />
      <input
        type="number"
        id="price"
        value={formData.price}
        name="price"
        placeholder="Enter Product Price"
        onChange={inputHandle}
      />
      <input
        type="text"
        id="desc"
        value={formData.desc}
        name="desc"
        placeholder="Enter About Product"
        onChange={inputHandle}
      />
      <select
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      >
      <option value="">--Choose an option--</option>
        <option name="tees" id="tees" value="tees">Tees</option>
        <option id="cargo" value="cargo">
          Cargo
        </option>
        <option  id="pants" value="pants">
          Pants
        </option>
        <option id="hoodies" value="hoodies">
          Hoodies
        </option>
        {/* <option value={formData.category}>lol</option> */}
      </select>
      <input
        type="text"
        id="DInfo"
        value={formData.DInfo}
        name="DInfo"
        placeholder="Enter Delivery Info"
        onChange={inputHandle}
      />
      <input
        type="number"
        id="pDrop"
        value={formData.pDrop}
        name="pDrop"
        placeholder="Enter Price Drop"
        onChange={inputHandle}
      />
      <button>ADD PRODUCT</button>
    </div>
  );
};

export default AdminViewAddProduct;
