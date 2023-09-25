import { NextResponse } from "next/server";
import { connectionDb } from "../../../../../src/database";
import Products from "../../../../../src/models/product";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectionDb();

    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("id");

    if (!productId) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "product id required",
      });
    }

    const getData = await Products.find({ _id: productId });

    if (getData) {
      return NextResponse.json({
        success: true,
        data: getData[0],
        message: "successfully found",
      });
    } else {
      console.log("f");
      return NextResponse.json({
        success: false,
        status: 204,
        message: "NO  product found",
      });
    }
  } catch (error) {
    console.log("fourth cheeee", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
