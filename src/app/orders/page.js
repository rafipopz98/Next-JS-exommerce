"use client";

import Notification from "../../components/Notification/index";
import { GlobalContext } from "../../context/index";
import { getAllOrdersForUser } from "../../services/order";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import "./orders.css";
export default function Orders() {
  const {
    user,
    pageLevelLoader,
    setPageLevelLoader,
    allOrdersForUser,
    setAllOrdersForUser,
  } = useContext(GlobalContext);

  const router = useRouter();

  async function extractAllOrders() {
    setPageLevelLoader(true);
    const res = await getAllOrdersForUser(user?._id);

    if (res.success) {
      setPageLevelLoader(false);

      setAllOrdersForUser(res.data);
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      setPageLevelLoader(false);
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  useEffect(() => {
    if (user !== null) extractAllOrders();
  }, [user]);

  console.log(allOrdersForUser);

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
    <section>
      <div className="firstOf">
        <div className="secondOf">
          <div>
            <div className="thirdOf">
              <div className="flowwww">
                {allOrdersForUser && allOrdersForUser.length ? (
                  <ul className="fourthOf">
                    {allOrdersForUser.map((item) => (
                      <li key={item._id} className="fifthOf">
                        <div className="diss">
                          <h1 className="sixthOf">#order: {item._id}</h1>
                          <div className="seventhOf">
                            <p className="eightOf">Total paid amount</p>
                            <p className="nineOf">${item.totalPrice}</p>
                          </div>
                        </div>
                        <div className="smalChngeOf">
                          {item.orderItems.map((orderItem, index) => (
                            <div key={index} className="shrink-0">
                              <img
                                alt="Order Item"
                                className="imagOFOFOF"
                                src={
                                  orderItem &&
                                  orderItem.product &&
                                  orderItem.product.image
                                }
                              />
                            </div>
                          ))}
                        </div>
                        <div className="smlsmlml">
                          <button className="buthonIgOF">
                            {item.isProcessing
                              ? "Order is Processing"
                              : "Order is delivered"}
                          </button>
                          <button
                            onClick={() => router.push(`/orders/${item._id}`)}
                            className="buthonIgOF"
                          >
                            View Order Details
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Notification />
    </section>
  );
}
