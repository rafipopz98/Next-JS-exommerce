import { connectionDb } from "../../../../../src/database";
import Products from "../../../../../src/models/product";
import { NextResponse } from "next/server";


export const dynamic = "force-dynamic";

export async function GET(req){

    try{

        await connectionDb();

        const user='admin'

        if(user==='admin'){
        
            const extractData=await Products.find({})

            if (extractData){
                return NextResponse.json({
                    success:true,
                    data:extractData
                })
            }
            else{
                return NextResponse.json({
                    success:false,
                    status:204,
                    message:"no products found"
                })
            }

        }
        else{
            console.log("thurd error");
            return NextResponse.json({
              success: false,
              message: "You are not autorized !",
            });
        }

    }catch (error) {
        console.log("fourth");
        console.log(error);
        return NextResponse.json({
          success: false,
          message: "Something went wrong ! Please try again later",
        });
      }

    
}