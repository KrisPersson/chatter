import { UserDb } from "../../database/user.db.js";
import { UserDbSchema } from "../../schemas/user/user.schema.js";
import { hashPassword, verifyPassword } from "./encryption.js";
import { v4 as uuidv4 } from "uuid";

export async function signup(password: string, username: string) {
  const userNameExist = await UserDb.findOne({ username });
  if (userNameExist) {
    throw new Error("Username is already taken. Try a different one.");
  } else {
    const hashedPassword = await hashPassword(password);
    const randomId = uuidv4();
    const signupObj: UserDbSchema = {
      id: randomId,
      password: hashedPassword,
      username: username,
      channels: [],
      createdAt: new Date(),
    };

    const result = await UserDb.create(signupObj);

    return result;
  }
}

export async function login(username: string, password: string) {
  const user = await UserDb.findOne({ username });
  const passwordMatch = user
    ? await verifyPassword(user.password, password)
    : false;

  if (user && passwordMatch) {
    return user;
  } else {
    throw new Error("Login failed. Wrong username/password combination.");
  }
}
