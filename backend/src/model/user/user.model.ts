import { UserDb } from "../../database/user.db.js";
import { UserDbSchema } from "../../schemas/user/user.schema.js";
import { hashPassword, verifyPassword } from "./encryption.js";
import { v4 as uuidv4 } from "uuid";

export async function signup(
  email: string,
  password: string,
  username: string,
) {
  const userNameExist = await UserDb.findOne({ username });
  const emailExist = await UserDb.findOne({ email });
  if (userNameExist) {
    throw new Error("Username is already taken. Try a different one.");
  } else if (emailExist) {
    throw new Error("There is already a user profile with this email address.");
  } else {
    const hashedPassword = await hashPassword(password);
    const randomId = uuidv4();
    const signupObj: UserDbSchema = {
      email: email,
      id: randomId,
      password: hashedPassword,
      username: username,
      createdAt: new Date(),
    };

    const result = await UserDb.create(signupObj);

    return result.id;
  }
}

export async function login(username: string, password: string) {
  const user = await UserDb.findOne({ username });

  const passwordMatch = user
    ? await verifyPassword(user.password, password)
    : false;

  if (user && passwordMatch) {
    return user.id;
  } else {
    throw new Error("Login failed. Wrong username/password combination.");
  }
}
