"use client";

// import Featured from "../components/FeaturedProducts/Featured";
// import Slide1 from "../components/Slider/Slide1";
// import Categories from "../components/Categories/Categories";
import { useContext } from "react";
import { GlobalContext } from "../context";
import Wrapper from "../components/Mainpage/Wrapper";
import FlashDeals from "../components/Mainpage/FlashDeals";
import TopCate from "../components/Mainpage/Topcate";
import NewArrivals from "../components/Mainpage/NewArrivals";
import Discount from "../components/Mainpage/Discount";
import Shop from "../components/Mainpage/Shop";
import LOGOGGOG from "../components/Mainpage/LOGOGGOG";
import Announcement from "../components/Mainpage/Announcement";
import { getAllAdminroducts } from "../services/product";
// import { getAllAdminroducts } from '../../../../src/services/product'

 function Home() {
  // const { isAuthUser } = useContext(GlobalContext);
  // const allAdminProducts = await getAllAdminroducts();

  return (
    //  <div className="home">
    //   <Slide1 />
    //   <Featured heading="Featured"/>
    //   <Categories />
    //   <Featured heading="Sale"/>
    //  </div>
    <>
      <LOGOGGOG />
      {/* <FlashDeals data={allAdminProducts && allAdminProducts.data} /> */}
      <TopCate />
      <NewArrivals />
      <Discount />
      {/* <Shop /> */}
      <Announcement />
      <Wrapper />
    </>
  );
}
export default Home;
