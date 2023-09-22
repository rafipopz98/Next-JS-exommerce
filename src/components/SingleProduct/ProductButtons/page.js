"use client";

import { deleteProduct } from "../../../../src/services/product";
import { GlobalContext } from "../../../../src/context";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-toastify";
import ComponentLevelLoader from "../../Loader/LoaderCom/page";

const ProductButtons = ({ item }) => {
  const {
    setCurrentUpdatedProduct,
    setComponentLevelLoader,
    componentLevelLoader,
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
      <button>ADD TO CART</button>
    </div>
  );
};
export default ProductButtons;
