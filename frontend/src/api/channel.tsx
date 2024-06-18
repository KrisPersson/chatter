import { BASE_URL } from ".";

export async function getAllChannels() {
  try {
    const response = await fetch(BASE_URL + "/channel", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: ("Bearer " +
          localStorage.getItem("userToken")) as string,
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserChannels() {
  try {
    const response = await fetch(BASE_URL + "/user/channels", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: ("Bearer " +
          localStorage.getItem("userToken")) as string,
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function joinChannel(channelName: string) {
  try {
    const body = { channelName };
    const response = await fetch(BASE_URL + "/channel/join", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: ("Bearer " +
          localStorage.getItem("userToken")) as string,
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createChannel(channelName: string) {
  try {
    const body = { name: channelName };
    const response = await fetch(BASE_URL + "/channel/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: ("Bearer " +
          localStorage.getItem("userToken")) as string,
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function leaveChannel(channelName: string) {
  try {
    const body = { channelName };
    const response = await fetch(BASE_URL + "/channel/leave", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: ("Bearer " +
          localStorage.getItem("userToken")) as string,
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteChannel(channelName: string) {
  try {
    const body = { channelName };
    const response = await fetch(BASE_URL + "/channel", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: ("Bearer " +
          localStorage.getItem("userToken")) as string,
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
