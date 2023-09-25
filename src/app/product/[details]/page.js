import ProductDetails from "../../../components/product/page";
import { producctById } from "../../../services/product/index";
import React from "react";

const productDetails = async ({ params }) => {
  const productDetailsParams = await producctById(params.details);
//   console.log(productDetailsParams);
  return (
    <ProductDetails item={productDetailsParams && productDetailsParams.data} />
  );
};

export default productDetails;
