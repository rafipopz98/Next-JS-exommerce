"use client";
import { useRouter } from "next/router";
import ProductButtons from "./ProductButtons/page";
import ProductTile from "./ProductTile/page";
import "./SingleProduct.css";
import { useEffect } from "react";
import Notification from "../Notification";
const dummy = [
  {
    _id: "64f4ce96798a2614f26712d4",
    name: "lkj",
    price: 322222215,
    desc: "mn,vcxvghb",
    category: "cargo",
    DInfo: "'okjhgklj",
    pDrop: "54511",
    image:
      "https://firebasestorage,.googleapis.com/v0/b/ecommerce-nextjs-25483.app…",

    sizes: ["m", "l", "s"],
  },
];
const SingleProduct = () => {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);
  return (
    <section className="SingleSection">
      <div className="singleFirst">
        <div className="singleSecond">
          {dummy
            ? dummy.map((item) => {
                <article key={item._id}>
                  <ProductTile item={item} />
                  <ProductButtons item={item} />
                </article>;
              })
            : null}
        </div>
      </div>
      <Notification/>
    </section>
  );
};

export default SingleProduct;
