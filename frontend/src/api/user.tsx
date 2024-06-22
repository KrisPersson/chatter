import { BASE_URL } from ".";

export type TIntent = "login" | "signup";
export type TUserBody = {
  username: string;
  password: string;
  repeatPassword?: string;
};

export async function getUserInfo() {
  try {
    const response = await fetch(BASE_URL + "/user/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: ("Bearer " +
          localStorage.getItem("userToken")) as string,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
