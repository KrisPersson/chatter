export async function getTest(BASEURL: string) {
  try {
    const response = await fetch(BASEURL + `/api/test`, {
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
