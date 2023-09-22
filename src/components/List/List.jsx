"use client";
import React from "react";
import "./List.css";
import Card from "../Card/Card";
import ProductButtons from "../SingleProduct/ProductButtons/page";
import Notification from "../Notification";
const List = ({ data }) => {
  return (
    <div className="lists">
      {data && data.length
        ? data.map((item) => (
            <article  key={item._id} className="ariticleList">
              <Card item={item} />
              <ProductButtons item={item} />
            </article>
          ))
        : null}
        <Notification/>
    </div>
  );
};

export default List;
