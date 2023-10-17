"use client";

import { GlobalContext } from "../../../context/index";
import { getOrderDetails } from "../../../services/order";
import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import "./orders.css";

export default function OrderDetails() {
  const {
    pageLevelLoader,
    setPageLevelLoader,
    orderDetails,
    setOrderDetails,
    user,
  } = useContext(GlobalContext);

  const params = useParams();
  const router = useRouter();

  async function extractOrderDetails() {
    setPageLevelLoader(true);

    const res = await getOrderDetails(params["order-details"]);

    if (res.success) {
      setPageLevelLoader(false);
      setOrderDetails(res.data);
    } else {
      setPageLevelLoader(false);
    }

    console.log(res);
  }

  useEffect(() => {
    extractOrderDetails();
  }, []);

  if (pageLevelLoader) {
    return (
      <div className="loaderPageLevel">
        <PulseLoader
          color={"#000000"}
          loading={pageLevelLoader}
          size={30}
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <div className="ordersFirst">
      <div className="ordersSecond">
        <h1 className="ordersThird">
          Order #{orderDetails && orderDetails._id}
        </h1>
        <p className="ordersFour">
          {orderDetails &&
            orderDetails.createdAt &&
            orderDetails.createdAt.split("T")[0]}{" "}
          {" "}
          {orderDetails &&
            orderDetails.createdAt &&
            orderDetails.createdAt.split("T")[1].split(".")[0]}
        </p>
      </div>
      <div className="orderFifth">
        <div className="orderSixth">
          <div className="orderSeventh">
            <p className="fontSumOrd">Your order summary</p>
            {orderDetails &&
            orderDetails.orderItems &&
            orderDetails.orderItems.length
              ? orderDetails.orderItems.map((item) => (
                  <div key={item._id} className="orderEight">
                    <div className="orderleft">
                      <img
                        src={item && item.product && item.product.image}
                        className="orderNinie"
                      />
                    </div>
                    <div className="orderTend">
                      <div className="orderElevem">
                        <h3 className="orderTwelve">
                          {item && item.product && item.product.name}
                        </h3>
                      </div>
                      <div className="orderThirteen">
                        <h3 className="orderTwelve">
                          ${item && item.product && item.product.price}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
          <div className="orderFourteen">
            <div className="orderFifteen">
              <h3 className="orderTwelve">Summary</h3>
              <div className="orderSisteen">
                <div className="orderEighteen">
                  <p className="orderNinteen">Subtotal</p>
                  <p className="orderTwenty">
                    ${orderDetails && orderDetails.totalPrice}
                  </p>
                </div>
                <div className="orderEighteen">
                  <p className="orderNinteen">Shipping</p>
                  <p className="orderTwenty">Free</p>
                </div>
                <div className="orderEighteen">
                  <p className="orderNinteen">Subtotal</p>
                  <p className="orderTwenty">
                    ${orderDetails && orderDetails.totalPrice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="orderTwentone">
          <div className="orderTwentyTwo">
            <h3 className="orderTwelve">Customer Details</h3>
            <div className="orderTwentThree">
              <div className="orderTwentyFour">
                <p className="orderTwentFive">Name: {user?.name}</p>
                <p className="orderTwentySix">Email: {user?.email}</p>
              </div>
            </div>
          </div>
          <div className="orderTwentyTwenty">
            <div className="orderThirtyTwent">
              <div className="orderFourtyTwenty">
                <p>Shipping Address</p>
                <p>
                  Address :{" "}
                  {orderDetails && orderDetails.shippingAddress.address}
                </p>
                <p>City :{orderDetails && orderDetails.shippingAddress.city}</p>
                <p>
                  Country :{" "}
                  {orderDetails && orderDetails.shippingAddress.country}
                </p>
                <p>
                  Postal Code :{" "}
                  {orderDetails && orderDetails.shippingAddress.postalCode}
                </p>
              </div>
            </div>
          </div>
          <button onClick={() => router.push(`/`)} className="lastlastOrder">
            Shop Again
          </button>
        </div>
      </div>
    </div>
  );
}
