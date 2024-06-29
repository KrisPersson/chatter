import { BASE_URL } from ".";

export async function getTest() {
  try {
    console.log(BASE_URL + `/api/test`);
    const response = await fetch(BASE_URL + `/api/test`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
