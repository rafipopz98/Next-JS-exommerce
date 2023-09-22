import { connectionDb } from "../../../../../src/database";
import Products from "../../../../../src/models/product";

import Joi from "joi";
import { NextResponse } from "next/server";

const addNewProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  desc: Joi.string().required(),
  category: Joi.string().required(),
  DInfo: Joi.string().required(),
  pDrop: Joi.string().required(),
  image: Joi.string().required(),
  sizes: Joi.array().required(),
});

export const dynamic = "force-dynamic";


export async function POST(req) {
  try {
    await connectionDb();

    // const isAuthUser = await AuthUser(req)

    // console.log(isAuthUser , 'sangam');
    const user = "admin";

    if (user === "admin") {
      const extractData = await req.json();

      const { image, name, price, desc, category, DInfo, pDrop, sizes } =
        extractData;
      const { error } = addNewProductSchema.validate({
        image,
        name,
        price,
        desc,
        category,
        DInfo,
        pDrop,
        sizes,
      });

      if (error) {
        console.log("error at first");
        return NextResponse.json({
          success: false,
          message: error.details[0].message,
        });
      }

      const newProduct = await Products.create(extractData);

      if (newProduct) {
        return NextResponse.json({
          success: true,
          message: "Product added successfully",
        });
      } else {
        console.log("second error");
        return NextResponse.json({
          success: false,
          message: "Failed to add the product ! please try again",
        });
      }
    } else {
      console.log("thurd error");
      return NextResponse.json({
        success: false,
        message: "You are not autorized !",
      });
    }
  } catch (error) {
    console.log("fourth");
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
