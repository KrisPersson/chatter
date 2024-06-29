import { BASE_URL } from ".";

export async function getRelationship(relationshipId: string) {
  try {
    const response = await fetch(
      BASE_URL + `/api/relationship?id=${relationshipId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: ("Bearer " +
            localStorage.getItem("userToken")) as string,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createOrGetRelationship(otherParties: string[]) {
  try {
    const body = { otherParties };
    const response = await fetch(BASE_URL + "/api/relationship", {
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
