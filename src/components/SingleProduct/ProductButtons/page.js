"use client";

import { usePathname } from "next/navigation";

const ProductButtons = () => {
  // const { user } = useContext(GlobalContext);
  const pathName = usePathname();
  const isAdmin = pathName.includes("admin-view");
  return isAdmin ? (
    <div className="uWuButtonsSingle">
      <button> UPDATE </button>
      <button> DELETE </button>
    </div>
  ) : (
    <div className="uWuButtonsSingle">
      <button>ADD TO CART</button>
    </div>
  );
};
export default ProductButtons;
