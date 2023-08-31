"use client";
import React, { useState } from "react";
import "./AddProduct.css";
import {
  firebaseConfig,
  firebaseStorage,
} from "@/src/components/FeaturedProducts/Projects";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const app = initializeApp(firebaseConfig);
const storage = getStorage(app, firebaseStorage);
const AdminViewAddProduct = () => {
  const handleImage = async (event) => {
    console.log(event.target.files);
  };
  let name, value;

  const inputHandle = (e) => {
    console.log("gg");
    name = e.target.name;
    value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    price: "",
    desc: "",
    category: {
      tees: "",
      cargo: "",
      hoodies: "",
      pants: "",
      accessories: "",
    },
    DInfo: "",

    pDrop: "",
  });

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
      />
      <input
        type="text"
        id="desc"
        value={formData.desc}
        name="desc"
        placeholder="Enter About Product"
      />
      <select placeholder="Category">
        <option value={formData.category.tees}>Tees</option>
        <option value={formData.category.cargo}>Cargo</option>
        <option value={formData.category.pants}>Pants</option>
        <option value={formData.category.hoodies}>Hoodies</option>
        <option value={formData.category.accessories}>lol</option>
      </select>
      <input
        type="text"
        id="DInfo"
        value={formData.DInfo}
        name="DInfo"
        placeholder="Enter Delivery Info"
      />
      <input
        type="text"
        id="pDrop"
        value={formData.pDrop}
        name="pDrop"
        placeholder="Enter Price Drop"
      />
      <button>ADD PRODUCT</button>
    </div>
  );
};

export default AdminViewAddProduct;
