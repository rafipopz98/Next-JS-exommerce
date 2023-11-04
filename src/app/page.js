// "use client";

import { GlobalContext } from "../context/index";
import { getAllAdminroducts } from "../services/product/index";
import { useRouter } from "next/navigation";
// import { useContext, useEffect, useState } from "react";
import "../app/register/Register.css";
import Featured from "../components/Featured/Featured";
import NewOnes from "../components/NewOnes/NewOnes";
// import Featured from "../components/FeaturedProducts/Featured";
export default async function Home() {
  // const { isAuthUser } = useContext(GlobalContext);

  const allAdminProducts = await getAllAdminroducts();

  return (
    <>
      <section className="homeSection">
        <div className="home-text">
          <h1>
            Mens New <br />
            <span>Arrival</span>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a className="home-btn" href="#">
            View All Collections
          </a>
        </div>
      </section>
      {/* <Featured data={allAdminProducts && allAdminProducts.data} /> */}
      <Featured />
      <section className="cta">
        <div className="cta-text">
          <h6>Fall Sale</h6>
          <h4>
            20% OFF <br />
            NEW ARRIVAL
          </h4>
          <a href="" className="home-btn">
            Shop Now
          </a>
        </div>
      </section>
      <NewOnes data={allAdminProducts && allAdminProducts.data} />
    </>
  );
}
