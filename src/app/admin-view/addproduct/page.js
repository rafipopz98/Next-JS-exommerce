"use client";
import React, { useContext, useEffect, useState } from "react";
import "./AddProduct.css";
import {
  firebaseConfig,
  firebaseStorage,
} from "../../../../src/components/FeaturedProducts/Projects";
import { initializeApp } from "firebase/app";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { addProduct, updateProduct } from "../../../../src/services/product";
import { GlobalContext } from "../../../../src/context";
import ComponentLevelLoader from "../../../../src/components/Loader/LoaderCom/page";
import Notification from "../../../../src/components/Notification";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, firebaseStorage);

const createUniqueFileName = (getFile) => {
  const timeStamp = Date.now();
  const randomStringValue = Math.random().toString(36).substring(2, 12);

  return `${getFile.name}-${timeStamp}-${randomStringValue}`;
};

async function helperForUPloadingImageToFirebase(file) {
  const getFileName = createUniqueFileName(file);
  const storageReference = ref(storage, `ecommerce/${getFileName}`);
  const uploadImage = uploadBytesResumable(storageReference, file);

  return new Promise((resolve, reject) => {
    uploadImage.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
        reject(error);
      },
      () => {
        getDownloadURL(uploadImage.snapshot.ref)
          .then((downloadUrl) => resolve(downloadUrl))
          .catch((error) => reject(error));
      }
    );
  });
}

const AdminViewAddProduct = () => {
  const {
    componentLevelLoader,
    setComponentLevelLoader,
    currentUpdatedProduct,
    setCurrentUpdatedProduct,
  } = useContext(GlobalContext);
  console.log("abe yaar", currentUpdatedProduct);
  let name, value;

  useEffect(() => {
    if (currentUpdatedProduct !== null) setFormData(currentUpdatedProduct);
  }, [currentUpdatedProduct]);

  const [selected, setSelected] = useState("");
  let white = "#fff";
  let black = "#000";
  const [bgcolor, setBgColor] = useState(white);
  const [color, setColor] = useState(black);

  const [formData, setFormData] = useState({
    image: "",
    name: "",
    price: "",
    desc: "",
    DInfo: "",
    pDrop: "",
    sizes: [],
  });

  const handleImage = async (event) => {
    console.log(event.target.files);
    const extractimageUrl = await helperForUPloadingImageToFirebase(
      event.target.files[0]
    );
    console.log(extractimageUrl);

    if (extractimageUrl !== "") {
      setFormData({
        ...formData,
        image: extractimageUrl,
      });
    }
  };

  const inputHandle = (e) => {
    // console.log("gg");
    name = e.target.name;
    value = e.target.value;
    // console.log("some stuff", formData.category);

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // console.log("selecteddd", selected);
  // console.log("all the data", formData);
  const handleChange = (event) => {
    // console.log('Label 👉️', event.target.selectedOptions[0].label);
    const noice = setSelected(event.target.value);
    setFormData({
      ...formData,
      category: noice,
    });
    // console.log(formData)
    // console.log(event.target.value);
  };

  const router = useRouter();

  const handleSpan = (event) => {
    let items = { id: event.target.id };
    // console.log(items.id)
    let copySize = [...formData.sizes];
    const index = copySize.findIndex((item) => item === items.id);

    if (index === -1) {
      copySize.push(items.id);
      console.log("if");
    } else {
      copySize = copySize.filter((item) => item !== items.id);
      console.log("else");
    }
    setFormData({
      ...formData,
      sizes: copySize,
    });
  };

  const handleSubmit = async () => {
    // console.log(formData);
    setComponentLevelLoader({ loading: true, id: "" });
    const resp =
      currentUpdatedProduct !== null
        ? await updateProduct(formData)
        : await addProduct(formData);

    console.log("mimimi", resp);

    if (resp.success) {
      setComponentLevelLoader({ loading: false, id: "" });
      toast.success(resp.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        router.push("/admin-view/allproducts");
      }, 1000);
    } else {
      setComponentLevelLoader({ loading: false, id: "" });
      console.log("error");
      toast.error(resp.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    console.log("dddd ", resp);
  };
  console.log("2", formData);

  const [selectedSpan, setSelectedSpan] = useState(null);
  console.log(currentUpdatedProduct, "kokokokkok dfjgkhj");

  const handleSpanClick = (id) => {
    if (selectedSpan === id) {
      setSelectedSpan(null);
    } else {
      setSelectedSpan(id);
    }
  };

  return (
    <div className="container_addProducts">
      <div className="">
        <h3 onClick={() => router.push("/admin-view/allproducts")}>
          Manage All Products
        </h3>
        <h3 onClick={() => router.push("/admin-view/addproduct")}>
          Add Products
        </h3>
      </div>
      <input
        // accept="image"
        name="image"
        id="image"
        size="1000000"
        type="file"
        // value={formData.image}
        onChange={handleImage}
      />
      <div className="spans_size">
        <h2>Available Sizes</h2>

        <span
          onClick={(event) => {
            handleSpanClick("s");
            handleSpan(event);
          }}
          style={{ color: selectedSpan === "s" ? "red" : "" }}
        >
          S
        </span>
        <span onClick={handleSpan} name="m" id="m">
          M
        </span>
        <span onClick={handleSpan} name="l" id="l">
          L
        </span>
      </div>
      <input
        type="text"
        id="name"
        value={formData.name}
        name="name"
        placeholder="Enter Product Name"
        onChange={inputHandle}
      />
      <input
        type="number"
        id="price"
        value={formData.price}
        name="price"
        placeholder="Enter Product Price"
        onChange={inputHandle}
      />
      <input
        type="text"
        id="desc"
        value={formData.desc}
        name="desc"
        placeholder="Enter About Product"
        onChange={inputHandle}
      />
      <select
        placeholder="Category"
        name="category"
        value={formData.category}
        onChange={inputHandle}
      >
        <option value="">--Choose an option--</option>
        <option name="accessories" id="accessories" value="accessories">
          Accessories
        </option>
        <option name="tees" id="tees" value="tees">
          Tees
        </option>
        <option id="cargo" value="cargo">
          Cargo
        </option>
        {/* <option id="pants" value="pants">
          Pants
        </option> */}
        <option id="hoodies" value="hoodies">
          Hoodies
        </option>
        {/* <option value={formData.category}>lol</option> */}
      </select>
      <input
        type="text"
        id="DInfo"
        value={formData.DInfo}
        name="DInfo"
        placeholder="Enter Delivery Info"
        onChange={inputHandle}
      />
      <input
        type="number"
        id="pDrop"
        value={formData.pDrop}
        name="pDrop"
        placeholder="Enter Price Drop"
        onChange={inputHandle}
      />
      <button onClick={handleSubmit}>
        {componentLevelLoader && componentLevelLoader.loading ? (
          <ComponentLevelLoader
            text={"Adding Product"}
            color={"#fff"}
            loading={componentLevelLoader && componentLevelLoader.loading}
          />
        ) : (
          "Add Product"
        )}
      </button>
      <Notification />
    </div>
  );
};

export default AdminViewAddProduct;
