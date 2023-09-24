import { NextResponse } from "next/server";
import { connectionDb } from "../../../../../src/database";
import Products from "../../../../../src/models/product";



export const dynamic = "force-dynamic";


export async function GET(req){
    await connectionDb();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const getData=await Products.find({category:id})

    if (deleteProduct) {
        return NextResponse.json({
          success: true,
          data:getData,
          message: "successfully found",
        });
      } else {
        console.log("f");
        return NextResponse.json({
          success: false,
          status:204,
          message: "NO  product found",
        });
      }
}
try{

}catch(error){
    console.log("fourth cheeee",error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
}