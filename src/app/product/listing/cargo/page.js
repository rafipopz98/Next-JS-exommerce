import { produvtByCategory } from "../../../../services/product/index";
import List from "../../../../components/List/List";
import React from "react";

const AllCargo = async () => {
  const allProducts = await produvtByCategory("cargo");

  return <List data={allProducts && allProducts.data} />;
};

export default AllCargo;
