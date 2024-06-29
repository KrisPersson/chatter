import { BASE_URL } from ".";

export type TIntent = "login" | "signup";
export type TUserBody = {
  username: string;
  password: string;
  repeatPassword?: string;
};

export async function user(body: TUserBody, intent: TIntent) {
  if (intent !== "login" && intent !== "signup")
    throw new Error("Intent not valid. Must be 'login' or 'signup'.");
  try {
    const sendBody: TUserBody = {
      username: body.username,
      password: body.password,
    };
    if (body.repeatPassword) {
      sendBody.repeatPassword = body.repeatPassword;
    }
    const response = await fetch(BASE_URL + "/api/user/" + intent, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
