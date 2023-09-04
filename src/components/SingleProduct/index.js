"use client";
import ProductButtons from "./ProductButtons";
import ProductTile from "./ProductTile";
import "./SingleProduct.css";
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
  return (
    <section className="SingleSection">
      <div className="singleFirst">
        <div className="singleSecond">{
            dummy&&dummy.length?
            dummy.map((item)=>{
                <article key={item._id}>
                <ProductTile item={item}/>
                <ProductButtons item={item}/>
                </article>
            }):null
        }</div>
      </div>
    </section>
  );
};

export default SingleProduct;
