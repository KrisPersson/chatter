import { BASE_URL } from ".";

export type TIntent = "login" | "signup";
export type TUserBody = {
  username: string;
  password: string;
  repeatPassword?: string;
};
import { TOnlineStatusProp } from "../types";

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

export async function getAllUsers() {
  try {
    const response = await fetch(BASE_URL + "/user/all", {
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

export async function updateOnlineStatus(status: TOnlineStatusProp) {
  try {
    const body = { status };
    const response = await fetch(BASE_URL + "/user/status", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: ("Bearer " +
          localStorage.getItem("userToken")) as string,
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
