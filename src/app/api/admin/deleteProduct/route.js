import { NextResponse } from "next/server";
import { connectionDb } from "../../../../../src/database";
import Products from "../../../../../src/models/product";
export const dynamic = "force-dynamic";
export async function DELETE(req) {
  try {
    await connectionDb();

    const { searchparams } = new URL(req.url);
    const id = searchparams.get("id");
    if (!id) {
      return NextResponse.json({
        success: false,
        message: "product id not found ",
      });
    }

    const deleteProduct = await Products.findByIdAndDelete(id);
    if (deleteProduct) {
      return NextResponse.json({
        success: true,
        message: "Product deleted successfully",
      });
    } else {
      console.log("failed to delete");
      return NextResponse.json({
        success: false,
        message: "failed to delete product",
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
