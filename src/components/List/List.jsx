"use client";
import React from "react";
import "./List.css";
import Card from "../Card/Card";
import ProductButtons from "../SingleProduct/ProductButtons/page";
import Notification from "../Notification";
import { useRouter } from "next/navigation";
const List = ({ data }) => {
  const router=useRouter()
  return (
    <div className="lists">
      {data.map((item,id) => (
        <article key={id} className="ariticleList" onClick={()=>router.push(`/product/${item._id}`)}>
          <Card item={item} />
          <ProductButtons item={item} />
        </article>
      ))}
      <Notification />
    </div>
  );
};

export default List;
