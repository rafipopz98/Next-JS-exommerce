import { produvtByCategory } from "../../../../services/product/index";
import List from "../../../../components/List/List";
import React from "react";

const AllHoodies = async () => {
  const allProducts = await produvtByCategory("hoodies");

  return <List data={allProducts && allProducts.data} />;
};

export default AllHoodies;
