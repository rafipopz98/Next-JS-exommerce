import { produvtByCategory } from "../../../../services/product/index";
import List from "../../../../components/List/List";
import React from "react";

const AllAccessories = async () => {
  const allProducts = await produvtByCategory("accessories");

  return <List data={allProducts && allProducts.data} />;
};

export default AllAccessories;
