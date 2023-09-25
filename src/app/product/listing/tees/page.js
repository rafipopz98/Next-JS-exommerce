import { produvtByCategory } from "../../../../services/product/index";
import List from "../../../../components/List/List";
import React from "react";

const AllTees = async () => {
  const allProducts = await produvtByCategory("tees");

  return <List data={allProducts && allProducts.data} />;
};

export default AllTees;
