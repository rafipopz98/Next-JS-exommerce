import jwt from "jsonwebtoken";

export const dynamic = "force-dynmaic";

const AuthUser = async (req) => {
  const token = req.headers.get("Authorization")?.split(" ")[1];
  if (!token) return false;

  console.log(token);

  try {
    const Info = jwt.verify(token, "default_secret_key");
    if (Info) return Info;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export default AuthUser;
