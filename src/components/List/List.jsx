'use client'
import React from "react";
import "./List.css";
import Card from "../Card/Card";
import ProductButtons from "../SingleProduct/ProductButtons/page";
const List = () => {
  const data = [
    {
      _id: "64f4ce96798a2614f26712d4",
      name: "lkj",
      price: 322222215,
      desc: "mn,vcxvghb",
      category: "cargo",
      DInfo: "'okjhgklj",
      pDrop: "54511",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-nextjs-25483.appspot.com/o/ecommerce%2F%5Bobject%20Promise%5D?alt=media&token=538fb879-3a62-4d03-8684-94a7dba1b2bf",

      sizes: ["m", "l", "s"],
    },
  ];
  return (
    <div className="lists">
      {data.map((item) => (
        <article key={item.id} className="ariticleList">
          <Card item={item}  />
          <ProductButtons item={item} />
        </article>
      ))}
    </div>
  );
};

export default List;
