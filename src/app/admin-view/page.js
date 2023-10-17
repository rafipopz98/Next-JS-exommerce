"use client";

import ComponentLevelLoader from "../../components/Loader/LoaderCom/page";
import { GlobalContext } from "../../context/index";
import {
  getAllOrdersForAllUsers,
  updateStatusOfOrder,
} from "../../services/order";
import { useContext, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import "./Admin-view.css";

export default function AdminView() {
  const {
    allOrdersForAllUsers,
    setAllOrdersForAllUsers,
    user,
    pageLevelLoader,
    setPageLevelLoader,
    componentLevelLoader,
    setComponentLevelLoader,
  } = useContext(GlobalContext);

  async function extractAllOrdersForAllUsers() {
    setPageLevelLoader(true);
    const res = await getAllOrdersForAllUsers();

    console.log(res);

    if (res.success) {
      setPageLevelLoader(false);
      setAllOrdersForAllUsers(
        res.data && res.data.length
          ? res.data.filter((item) => item.user._id !== user._id)
          : []
      );
    } else {
      setPageLevelLoader(false);
    }
  }

  useEffect(() => {
    if (user !== null) extractAllOrdersForAllUsers();
  }, [user]);

  console.log(allOrdersForAllUsers);

  async function handleUpdateOrderStatus(getItem) {
    setComponentLevelLoader({ loading: true, id: getItem._id });
    const res = await updateStatusOfOrder({
      ...getItem,
      isProcessing: false,
    });

    if (res.success) {
      setComponentLevelLoader({ loading: false, id: "" });
      extractAllOrdersForAllUsers();
    } else {
      setComponentLevelLoader({ loading: true, id: "" });
    }
  }

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
    <div>
      <div className="navbar_admin">
        <h3 onClick={() => router.push("/admin-view/allproducts")}>
          Manage All Products
        </h3>
        <h3 onClick={() => router.push("/admin-view/addproduct")}>
          Add Products
        </h3>
      </div>
      <section>
        <div className="firstAdminn">
          <div>
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <div style={{ display: "flow-root" }}>
                {allOrdersForAllUsers && allOrdersForAllUsers.length ? (
                  <ul className="seconfAdminnn">
                    {allOrdersForAllUsers.map((item) => (
                      <li key={item._id} className="thirdAdminn">
                        <div style={{ display: "flex" }}>
                          <h1 className="fourthAdminn">#order: {item._id}</h1>
                          <div className="fifthAdminn">
                            <div className="sixthAdminn">
                              <p className="seventhAdminn">User Name :</p>
                              <p className="eighthAdminn">{item?.user?.name}</p>
                            </div>
                            <div className="sixthAdminn">
                              <p className="seventhAdminn">User Email :</p>
                              <p className="eighthAdminn">
                                {item?.user?.email}
                              </p>
                            </div>
                            <div className="sixthAdminn">
                              <p className="seventhAdminn">
                                Total Paid Amount :
                              </p>
                              <p className="eighthAdminn">
                                ${item?.totalPrice}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="ninthAdminn">
                          {item.orderItems.map((orderItem, index) => (
                            <div key={index} className="lolAdminnnn">
                              <img
                                alt="Order Item"
                                className="tenthAdminn"
                                src={
                                  orderItem &&
                                  orderItem.product &&
                                  orderItem.product.image
                                }
                              />
                            </div>
                          ))}
                        </div>
                        <div className="againAdminnnn">
                          <button className="butonknAdminn">
                            {item.isProcessing
                              ? "Order is Processing"
                              : "Order is delivered"}
                          </button>
                          <button
                            onClick={() => handleUpdateOrderStatus(item)}
                            disabled={!item.isProcessing}
                            className="butonknAdminn"
                          >
                            {componentLevelLoader &&
                            componentLevelLoader.loading &&
                            componentLevelLoader.id === item._id ? (
                              <ComponentLevelLoader
                                text={"Updating Order Status"}
                                color={"#ffffff"}
                                loading={
                                  componentLevelLoader &&
                                  componentLevelLoader.loading
                                }
                              />
                            ) : (
                              "Update Order Status"
                            )}
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
      </section>
    </div>
  );
}
