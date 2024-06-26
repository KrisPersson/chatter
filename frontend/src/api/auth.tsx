import { BASE_URL } from ".";

export async function verifyTokenApi() {
  try {
    const body = {
      token: localStorage.getItem("userToken") as string,
    };

    const response = await fetch(BASE_URL + "/api/user/token", {
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
