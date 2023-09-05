"use client";

import { GlobalContext } from "@/src/context";
import { useContext } from "react";

const ProductButtons = () => {
  const { user } = useContext(GlobalContext);
  return (
    <div>
      {user?.roleAdmin ?(
        <div className="uWuButtonsSingle">
          <button> UPDATE </button>
          <button> DELETE </button>
        </div>
      ) : (
        <div className="uWuButtonsSingle">
          <button>ADD TO CART</button>
        </div>
      )}
    </div>
  );
};
export default ProductButtons;
