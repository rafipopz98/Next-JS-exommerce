import connectionDb from "@/src/database";
import User from "@/src/models/user";
import {hash} from "bcrypt";
import Joi from "joi";
import { NextResponse } from "next/server";

// 3.now we need to validate
const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
//4. do this for making static page dynamic
//it will  disable all caching of fetch
export const dynamic = "force-dynmaic";

export async function POST(req) {
  //1.connect to database
  await connectionDb();

  // 2.after connecting to db we need to store details in db
  // so as soon as we hit regiser button we need to get the data from front end
  // so first destructure

  const { name, email, password } = await req.json();
  //5.validate the schema
  // 6.there will be chances of getting  error while validating so,
  const { error } = schema.validate({ name, email, password });

  if (error) {
    return NextResponse.json({
      success: false,
      message: ` here ${error.details[0].message}`,
    });
  }

  //   if non error then save in db

  try {
    //check whether user exist or not
    console.log(email)

    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      return NextResponse.json({
        success: false,
        message: `user already exists `,
      });
    }
    //else hash the password and store in db
    else {
      //hash
      const hashPassword = await hash(password, 12);

      // store in db

      const newUser = await User.create({
        name,
        email,
        password: hashPassword,
      }); 
      //show success msg
      if (newUser) {
        console.log("if ")
        return NextResponse({
          success: true,
          message: `successfully registered `,
        });
      }else{
        console.log("else")
      }
    }
  } catch(error){
    console.log(`Error in user registration  ${error} `);
    return NextResponse.json({
      success: false,
      message: `the error is  ${error} `,
    });
  }
}
