"use client";
import React from "react";
import "./NewOnes.css";
// import { Router } from "express";
import { useRouter } from "next/navigation";
const NewOnes = ({ data }) => {
  //   console.log(data);
  const router = useRouter();
  const size = 5;
  return (
    <section className="new">
      <div className="center-text">
        <h2>New Arrivals</h2>
      </div>
      <div className="newContent">
        {data?.slice(0, size)?.map((item, id) => (
          <div
            key={id}
            className="Newbox"
            onClick={() => router.push(`/product/${item._id}`)}
          >
            <img src={item.image} alt="" />
            <h5>{item.name}</h5>
            <h6>${item.price - item.pDrop}</h6>
            <div className="sale">
              <h4>Sale</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewOnes;
