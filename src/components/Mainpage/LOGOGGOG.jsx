import React from "react";
import Categories from "./Categories";
import SlideHome from "./Slider";
import './Home.css'
const LOGOGGOG = () => {
  return (
    <>
      <section className="home">
        <div className="container d_flex">
          <Categories />
          <SlideHome />
        </div>
      </section>
    </>
  );
};

export default LOGOGGOG;
