"use client";

import { deleteProduct } from "../../../../src/services/product";
import { GlobalContext } from "../../../../src/context";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-toastify";
import ComponentLevelLoader from "../../Loader/LoaderCom/page";
import { addToCart } from "@/src/services/cart";

const ProductButtons = ({ item }) => {
  const {
    setCurrentUpdatedProduct,
    setComponentLevelLoader,
    componentLevelLoader,
    user,
    setShowCartModal,
  } = useContext(GlobalContext);

  const router = useRouter();
  const pathName = usePathname();
  const isAdmin = pathName.includes("admin-view");

  async function handleDelete(item) {
    setComponentLevelLoader({ loading: true, id: item._id });

    const res = await deleteProduct(item._id);

    if (res.success) {
      setComponentLevelLoader({ loading: false, id: "" });
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      router.refresh();
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setComponentLevelLoader({ loading: false, id: "" });
    }
  }

  const handleAddToCart = async (getItem) => {
    setComponentLevelLoader({ loading: true, id: getItem._id });

    const res = await addToCart({ productID: getItem._id, userID: user._id });

    if (res.success) {
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setComponentLevelLoader({ loading: false, id: "" });
      setShowCartModal(true);
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setComponentLevelLoader({ loading: false, id: "" });
      setShowCartModal(true)
    }

    console.log(res);
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
        {componentLevelLoader &&
        componentLevelLoader.loading &&
        item._id === componentLevelLoader.id ? (
          <ComponentLevelLoader
            text={"Deleting Product"}
            color={"#ffffff"}
            loading={componentLevelLoader && componentLevelLoader.loading}
          />
        ) : (
          "DELETE"
        )}
      </button>
    </div>
  ) : (
    <div className="uWuButtonsSingle">
      <button onClick={() => handleAddToCart(item)}>
        {componentLevelLoader &&
        componentLevelLoader.loading &&
        componentLevelLoader.id === item._id ? (
          <ComponentLevelLoader
            text={"Adding to cart"}
            color={"#ffffff"}
            loading={componentLevelLoader && componentLevelLoader.loading}
          />
        ) : (
          "Add To Cart"
        )}
      </button>
    </div>
  );
};
export default ProductButtons;
