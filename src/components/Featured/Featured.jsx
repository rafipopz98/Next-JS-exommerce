"use client";
import React from "react";
import "./Featured.css";
import { useRouter } from "next/navigation";
const Featured = () => {
  //   console.log(data, "brooooo helppp me");
  const router = useRouter();
  return (
    <section className="featuredproducts" id="featuredproducts">
      <div className="center-text">
        <h2>Featured Categories</h2>
      </div>
      <div className="featuredContent">
        <div
          className="Frow"
          onClick={() => router.push("/product/listing/accessories")}
        >
          <img
            src="https://i.pinimg.com/564x/04/28/c2/0428c2e6d4d17bb3f4d4846ec8864e09.jpg"
            alt=""
          />
          <div className="fea-text">
            <h5>Accessories</h5>
            <p>Starts from 20$</p>
          </div>
          <div className="arrow">
            <a href="">
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </div>
        </div>
        <div
          className="Frow"
          onClick={() => router.push("/product/listing/tees")}
        >
          <img
            src="https://i.pinimg.com/564x/03/96/2c/03962c5a3ba4b309f9527fec8b235d5e.jpg"
            alt=""
          />
          <div className="fea-text">
            <h5>Tshirts</h5>
            <p>Starts from 30$</p>
          </div>
          <div className="arrow">
            <a href="">
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </div>
        </div>
        <div
          className="Frow"
          onClick={() => router.push("/product/listing/accessories")}
        >
          <img
            src="https://i.pinimg.com/564x/d7/ed/59/d7ed59566eb2fcc970c120f40841384e.jpg"
            alt=""
          />
          <div className="fea-text">
            <h5>Shades</h5>
            <p>Starts from 50$</p>
          </div>
          <div className="arrow">
            <a href="">
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </div>
        </div>
        <div
          className="Frow"
          onClick={() => router.push("/product/listing/cargo")}
        >
          <img
            src="https://i.pinimg.com/564x/9c/cc/20/9ccc20bc46dc2d51d973701d94087225.jpg"
            alt=""
          />
          <div className="fea-text">
            <h5>Cargo</h5>
            <p>Starts from 30$</p>
          </div>
          <div className="arrow">
            <a href="">
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </div>
        </div>
        <div
          className="Frow"
          onClick={() => router.push("/product/listing/hoodies")}
        >
          <img
            src="https://i.pinimg.com/564x/8b/c7/c9/8bc7c9e3af184b8634035ddc3d110cf1.jpg"
            alt=""
          />
          <div className="fea-text">
            <h5>Hoodies</h5>
            <p>Starts from 50$</p>
          </div>
          <div className="arrow">
            <a href="">
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </div>
        </div>
        <div
          className="Frow"
          onClick={() => router.push("/product/listing/allProducts")}
        >
          <img
            src="https://i.pinimg.com/564x/e4/b7/7a/e4b77a90083878b1cde82efa96ee021d.jpg"
            alt=""
          />
          <div className="fea-text">
            <h5>All categories</h5>
            <p>Explore</p>
          </div>
          <div className="arrow">
            <a href="">
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
