import { connectionDb } from "@/src/database";
import User from "@/src/models/user";
import { compare } from "bcrypt";
import Joi from "joi";
import { jwt } from "jsonwebtoken";
import { NextResponse } from "next/server";

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const dynamic = "force-dynmaic";

export async function POST(req) {
  await connectionDb();
  const { email, password } = await req.Json();

  const { error } = schema.validate({ email, password });
  if (error) {
    return NextResponse.json({
      success: false,
      message: ` here ${error.details[0].message}`,
    });
  }
  try {
    const checkUser = await User.findOne({ email });

    if (!checkUser) {
      return NextResponse.json({
        success: false,
        message: `the email doesnot exist `,
      });
    } else {
      const checkPassword = await compare(password, checkUser.password);
      if (!checkPassword) {
        return NextResponse.json({
          success: false,
          message: `password or email doesnot match`,
        });
      }
    }
    const token = jwt.sign(
      {
        id: checkUser._id,
        email: checkUser?.email,
      },
      "default_secret_key",
      { expiresIn: "1d" }
    );

    const finalResult = {
      token,
      user: {
        email: checkUser.email,
        name: checkUser.name,
        _id: checkUser._id,
      },
    };
    return NextResponse.json({
      success: true,
      message: `successfully logged in`,
      finalResult,
    });
  } catch (e) {
    console.log(`the error is ${e}`);
    return NextResponse.json({
      success: false,
      message: `th error is${e}`,
    });
  }
}
