// import { UserDbSchema } from "../../schemas/user/user.schema.js";
// import { hashPassword, verifyPassword } from "./encryption.js";
// import { v4 as uuidv4 } from 'uuid';

export async function signup(
  email: string,
  password: string,
  username: string,
) {

  console.log('User signed up! (FAKE), regards, database', email, password, username)
  return "fakeID"
  // const userNameExist = await userDb.findOne({ username });
  // const emailExist = await userDb.findOne({ email });

  // if (userNameExist) {
  //   throw new Error("Username is already taken. Try a different one.");
  // } else if (emailExist) {
  //   throw new Error("There is already a user profile with this email address.");
  // } else {
  //   const hashedPassword = await hashPassword(password)
  //   const randomId = uuidv4()
  //   const signupObj: UserDbSchema = {
  //     email: email,
  //     id: randomId,
  //     password: hashedPassword,
  //     username: username,
  //     createdAt: new Date()
  //   };

  //   await userDb.insert(signupObj); // SET UP FOR MONGODB
  //   return randomId;
  // }
}

export async function login(username: string, password: string) {
  // const user = await userDb.findOne({ username }); // SET UP FOR MONGODB
  // const passwordMatch = await verifyPassword(password, user.password);

  // if (passwordMatch) {
  //   return user.userId;
  // } else {
  //   throw new Error("Login failed. Wrong username/password combination.");
  // }
}
