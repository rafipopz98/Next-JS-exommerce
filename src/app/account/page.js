"use client";

import InputComponent from "../../components/InputComponents/page";
import ComponentLevelLoader from "../../components/Loader/LoaderCom/page";
import Notification from "../../components/Notification";
import { GlobalContext } from "../../context/index";
import {
  addNewAddress,
  deleteAddress,
  fetchAllAddresses,
  updateAddress,
} from "../../services/address";
import { addNewAddressFormControls } from "../../utils/index";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import "./Account.css";
export default function Account() {
  const {
    user,
    addresses,
    setAddresses,
    addressFormData,
    setAddressFormData,
    componentLevelLoader,
    setComponentLevelLoader,
    pageLevelLoader,
    setPageLevelLoader,
  } = useContext(GlobalContext);

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [currentEditedAddressId, setCurrentEditedAddressId] = useState(null);
  const router = useRouter();

  async function extractAllAddresses() {
    setPageLevelLoader(true);
    const res = await fetchAllAddresses(user?._id);

    if (res.success) {
      setPageLevelLoader(false);

      setAddresses(res.data);
    }
  }

  async function handleAddOrUpdateAddress() {
    setComponentLevelLoader({ loading: true, id: "" });
    const res =
      currentEditedAddressId !== null
        ? await updateAddress({
            ...addressFormData,
            _id: currentEditedAddressId,
          })
        : await addNewAddress({ ...addressFormData, userID: user?._id });

    console.log(res);

    if (res.success) {
      setComponentLevelLoader({ loading: false, id: "" });
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setAddressFormData({
        fullName: "",
        city: "",
        country: "",
        postalCode: "",
        address: "",
      });
      extractAllAddresses();
      setCurrentEditedAddressId(null);
    } else {
      setComponentLevelLoader({ loading: false, id: "" });
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setAddressFormData({
        fullName: "",
        city: "",
        country: "",
        postalCode: "",
        address: "",
      });
    }
  }

  function handleUpdateAddress(getCurrentAddress) {
    setShowAddressForm(true);
    setAddressFormData({
      fullName: getCurrentAddress.fullName,
      city: getCurrentAddress.city,
      country: getCurrentAddress.country,
      postalCode: getCurrentAddress.postalCode,
      address: getCurrentAddress.address,
    });
    setCurrentEditedAddressId(getCurrentAddress._id);
  }

  async function handleDelete(getCurrentAddressID) {
    setComponentLevelLoader({ loading: true, id: getCurrentAddressID });

    const res = await deleteAddress(getCurrentAddressID);

    if (res.success) {
      setComponentLevelLoader({ loading: false, id: "" });

      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      extractAllAddresses();
    } else {
      setComponentLevelLoader({ loading: false, id: "" });

      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  useEffect(() => {
    if (user !== null) extractAllAddresses();
  }, [user]);

  return (
    <section>
      <div className="accountFirst">
        <div className="accountSecond">
          <div className="accountThrid">
            <div className="accountFourth">
              {/* we have render random user image here */}
            </div>
            <div className="accountFifth">
              <h4 className="accountSixth">
                {user?.name}
              </h4>
              <p>{user?.email}</p>
              <p>{user?.role}</p>
            </div>
            <button
              onClick={() => router.push("/orders")}
              className="accountSeventh"
            >
              View Your Orders
            </button>
            <div className="smalllacount">
              <h1 className="anothersmallAcount">Your Addresses :</h1>
              {pageLevelLoader ? (
                <PulseLoader
                  color={"#000000"}
                  loading={pageLevelLoader}
                  size={15}
                  data-testid="loader"
                />
              ) : (
                <div className="accountEight">
                  {addresses && addresses.length ? (
                    addresses.map((item) => (
                      <div className="ansm" key={item._id}>
                        <p>Name : {item.fullName}</p>
                        <p>Address : {item.address}</p>
                        <p>City : {item.city}</p>
                        <p>Country : {item.country}</p>
                        <p>PostalCode : {item.postalCode}</p>
                        <button
                          onClick={() => handleUpdateAddress(item)}
                          className="accountNine"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="accountTen"
                        >
                          {componentLevelLoader &&
                          componentLevelLoader.loading &&
                          componentLevelLoader.id === item._id ? (
                            <ComponentLevelLoader
                              text={"Deleting"}
                              color={"#ffffff"}
                              loading={
                                componentLevelLoader &&
                                componentLevelLoader.loading
                              }
                            />
                          ) : (
                            "Delete"
                          )}
                        </button>
                      </div>
                    ))
                  ) : (
                    <p>No address found ! Please add a new address below</p>
                  )}
                </div>
              )}
            </div>
            <div style={{marginTop:"1rem"}}>
              <button
                onClick={() => setShowAddressForm(!showAddressForm)}
                className="sameOneAccount"
              >
                {showAddressForm ? "Hide Address Form" : "Add New Address"}
              </button>
            </div>
            {showAddressForm ? (
              <div className="sameOneAccount">
                <div className="jolyBroo">
                  {addNewAddressFormControls.map((controlItem,id) => (
                    <InputComponent
                    key={id}
                      type={controlItem.type}
                      placeholder={controlItem.placeholder}
                      label={controlItem.label}
                      value={addressFormData[controlItem.id]}
                      onChange={(event) =>
                        setAddressFormData({
                          ...addressFormData,
                          [controlItem.id]: event.target.value,
                        })
                      }
                    />
                  ))}
                </div>
                <button
                  onClick={handleAddOrUpdateAddress}
                  className="sameOneIg"
                >
                  {componentLevelLoader && componentLevelLoader.loading ? (
                    <ComponentLevelLoader
                      text={"Saving"}
                      color={"#ffffff"}
                      loading={
                        componentLevelLoader && componentLevelLoader.loading
                      }
                    />
                  ) : (
                    "Save"
                  )}
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <Notification />
    </section>
  );
}
