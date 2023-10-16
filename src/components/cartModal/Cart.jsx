"use client";

import { Fragment, useContext, useEffect } from "react";
import CommonModal from "../ComanModal/CommonModal";
import { GlobalContext } from "../../context/index";
import { deleteFromCart, getAllCartItems } from "../../services/cart";
import { toast } from "react-toastify";
import ComponentLevelLoader from "../Loader/LoaderCom/page";
import { useRouter } from "next/navigation";
import "./CartModal.css";

export default function CartModal() {
  const {
    showCartModal,
    setShowCartModal,
    cartItems,
    setCartItems,
    user,
    setComponentLevelLoader,
    componentLevelLoader,
  } = useContext(GlobalContext);

  const router = useRouter();

  async function extractAllCartItems() {
    const res = await getAllCartItems(user?._id);
    if (res.success) {
      const updatedData =
        res.data && res.data.length
          ? res.data.map((item) => ({
              ...item,
              productID: {
                ...item.productID,
                price:
                  item.productID.onSale === "yes"
                    ? parseInt(
                        (
                          item.productID.price -
                          item.productID.price *
                            (item.productID.priceDrop / 100)
                        ).toFixed(2)
                      )
                    : item.productID.price,
              },
            }))
          : [];
      setCartItems(updatedData);
      localStorage.setItem("cartItems", JSON.stringify(updatedData));
    }
    console.log(res);
  }

  useEffect(() => {
    if (user !== null) extractAllCartItems();
  }, [user]);

  async function handleDeleteCartItem(getCartItemID) {
    setComponentLevelLoader({ loading: true, id: getCartItemID });
    const res = await deleteFromCart(getCartItemID);
    if (res.success) {
      setComponentLevelLoader({ loading: false, id: "" });
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      extractAllCartItems();
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setComponentLevelLoader({ loading: false, id: getCartItemID });
    }
  }

  return (
    <CommonModal 
      showButtons={true}
      show={showCartModal}
      setShow={setShowCartModal}
      mainContent={
        cartItems && cartItems.length ? (
          <ul role="list" className="cartFirstModal">
            {cartItems.map((cartItem) => (
              <li key={cartItem.id} className="cartSecondModal">
                <div className="cartThirdModal">
                  <img
                    src={
                      cartItem &&
                      cartItem.productID &&
                      cartItem.productID.image 
                    }
                    alt="Cart Item"
                    className="imageFourthCartModal"
                  />
                </div>
                <div className="cartFifthModal">
                  <div>
                    <div className="cartSixthModal">
                      <h3>
                        <a>
                          {cartItem &&
                            cartItem.productID &&
                            cartItem.productID.name}
                        </a>
                      </h3>
                    </div>
                    <p className="cartSeventhModal">
                      $
                      {cartItem &&
                        cartItem.productID &&
                        cartItem.productID.price}
                    </p>
                  </div>
                  <div className="cartEigthModal">
                    <button
                      type="button"
                      className="buttonModalCart"
                      onClick={() => handleDeleteCartItem(cartItem._id)}
                    >
                      {componentLevelLoader &&
                      componentLevelLoader.loading &&
                      componentLevelLoader.id === cartItem._id ? (
                        <ComponentLevelLoader
                          text={"Removing"}
                          color={"#000000"}
                          loading={
                            componentLevelLoader && componentLevelLoader.loading
                          }
                        />
                      ) : (
                        "Remove"
                      )}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : null
      }
      buttonComponent={
        <Fragment>
          <button
            type="button"
            onClick={() => {
              router.push("/cart");
              setShowCartModal(false);
            }}
            className="fragmentCartOne"
          >
            Go To Cart
          </button>
          <button
            disabled={cartItems && cartItems.length === 0}
            type="button"
            onClick={() => {
              router.push("/checkout");
              setShowCartModal(false);
            }}
            className="fragmentCartSecond"
          >
            Checkout
          </button>
          <div className="fragmentThirdCart">
            <button type="button" className="lastbuttoncartmodal">
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </div>
        </Fragment>
      }
    />
  );
}
