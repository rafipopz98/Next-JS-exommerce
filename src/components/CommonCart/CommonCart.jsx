"use client";

import { useRouter } from "next/navigation";
import ComponentLevelLoader from "../Loader/LoaderCom/page";
import "./CommonCart.css";
import Notification from "../Notification";
export default function CommonCart({
  cartItems = [],
  handleDeleteCartItem,
  componentLevelLoader,
}) {
  const router = useRouter();

  return (
    <section className="ccFirst">
      <div className="ccSecond">
        <div className="ccThird">
          <div className="ccFourth">
            <div className="ccFifth">
              <div className="flow-root">
                {cartItems && cartItems.length ? (
                  <ul className="ccSixth">
                    {cartItems.map((cartItem) => (
                      <li className="ccSeven" key={cartItem.id}>
                        <div className="shrink-0">
                          <img
                            src={
                              cartItem &&
                              cartItem.productID &&
                              cartItem.productID.image
                            }
                            alt="Product image"
                            className="imagecc"
                          />
                        </div>
                        <div className="ccEight">
                          <div className="ccMEdia">
                            <div className="ccnine">
                              <p className="ccTextTen">
                                {cartItem &&
                                  cartItem.productID &&
                                  cartItem.productID.name}
                              </p>
                            </div>
                            <div className="ccEleven">
                              <p className="ccTwelve">
                                $
                                {cartItem &&
                                  cartItem.productID &&
                                  cartItem.productID.price}
                              </p>
                              <button
                                type="button"
                                className="buttonOnTHirteen"
                                onClick={() =>
                                  handleDeleteCartItem(cartItem._id)
                                }
                              >
                                {componentLevelLoader &&
                                componentLevelLoader.loading &&
                                componentLevelLoader.id === cartItem._id ? (
                                  <ComponentLevelLoader
                                    text={"Removing"}
                                    color={"#0000000"}
                                    loading={
                                      componentLevelLoader &&
                                      componentLevelLoader.loading
                                    }
                                  />
                                ) : (
                                  "Remove"
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <h1 className="noEMpty">Your cart is Empty !</h1>
                )}
              </div>
              <div className="noEmptyTwo">
                <div className="noEmptyThree">
                  <p className="noEmptyFour">Subtotal</p>
                  <p className="noEmptyFive">
                    $
                    {cartItems && cartItems.length
                      ? cartItems.reduce(
                          (total, item) => item.productID.price + total,
                          0
                        )
                      : "0"}
                  </p>
                </div>
                <div className="noEmptyTwo">
                  <p className="noEmptyFour">Shipping</p>
                  <p className="noEmptyFive">$0</p>
                </div>
                <div className="noEmptyTwo">
                  <p className="text-sm text-gray-400">Total</p>
                  <p className="noEmptyFive">
                    $
                    {cartItems && cartItems.length
                      ? cartItems.reduce(
                          (total, item) => item.productID.price + total,
                          0
                        )
                      : "0"}
                  </p>
                </div>
                <div className="lastButONe">
                  <button
                    onClick={() => router.push("/checkout")}
                    disabled={cartItems && cartItems.length === 0}
                    className="oooflastonrbro"
                    style={{cursor:"pointer"}}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Notification />
    </section>
  );
}
