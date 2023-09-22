import NextResponse from "next/server";
import connectionDb from "../../../../../src/database";
import Products from "../../../../../src/models/product";

export const dynamic = "force-dynamic";

export async function PUT() {
  try {
    await connectionDb();
    const extractData = await req.json();

    const { _id, image, name, price, desc, category, DInfo, pDrop, sizes } =
      extractData;
    const updateProduct = await Products.findOneAndUpdate(
      {
        _id: _id,
      },
      {
        image,
        name,
        price,
        desc,
        category,
        DInfo,
        pDrop,
        sizes,
      },
      { new: true }
    );

    if (updateProduct) {
      return NextResponse.json({
        success: true,
        message: "Product updates successfully",
      });
    } else {
      console.log("second error");
      return NextResponse.json({
        success: false,
        message: "Failed to update the product ! please try again",
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
