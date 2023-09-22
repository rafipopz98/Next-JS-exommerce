"use client";

import { deleteProduct } from "../../../../src/services/product";
import { GlobalContext } from "../../../../src/context";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-toastify";

const ProductButtons = ({ item }) => {
  const { setCurrentUpdatedProduct, setComponentLevelLoader } =
    useContext(GlobalContext);
  const router = useRouter();
  const pathName = usePathname();
  const isAdmin = pathName.includes("admin-view");
  const handleDelete = async (item) => {
    const res = await deleteProduct(item._id);
    console.log("hereeee");
    if (res.success) {
      console.log("here");
      setComponentLevelLoader({ loading: false, id: item._id });
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      console.log("error");
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setComponentLevelLoader({ loading: false, id: "" });
    }
  };

  return isAdmin ? (
    <div className="uWuButtonsSingle">
      <button
        onClick={() => {
          setCurrentUpdatedProduct(item);
          router.push("/admin-view/addproduct");
        }}
      >
        UPDATE
      </button>
      <button onClick={() => handleDelete(item)}>
      {
        
      }
       DELETE 
       </button>
    </div>
  ) : (
    <div className="uWuButtonsSingle">
      <button>ADD TO CART</button>
    </div>
  );
};
export default ProductButtons;
