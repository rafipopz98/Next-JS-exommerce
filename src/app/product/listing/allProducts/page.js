import { getAllAdminroducts } from "../../../../services/product/index";
import List from "../../../../components/List/List";
import React from "react";

const AllProducts = async () => {
  const allProducts = await getAllAdminroducts();

  return <List data={allProducts && allProducts.data} />;
};

export default AllProducts;
