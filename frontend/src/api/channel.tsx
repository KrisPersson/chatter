import { BASE_URL } from ".";

export async function getAllChannels() {
  try {
    const response = await fetch(BASE_URL + "/api/channel", {
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

export async function getUserChannels() {
  try {
    const response = await fetch(BASE_URL + "/api/user/channels", {
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

export async function getChannel(channelName: string) {
  try {
    const response = await fetch(BASE_URL + `/api/channel/${channelName}`, {
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

export async function joinChannel(channelName: string) {
  try {
    const body = { channelName };
    const response = await fetch(BASE_URL + "/api/channel/join", {
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

export async function createChannel(channelName: string) {
  try {
    const body = { name: channelName };
    const response = await fetch(BASE_URL + "/api/channel/create", {
      method: "POST",
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

export async function leaveChannel(channelName: string) {
  try {
    const body = { channelName };
    const response = await fetch(BASE_URL + "/api/channel/leave", {
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

export async function deleteChannel(channelName: string) {
  try {
    const body = { channelName };
    const response = await fetch(BASE_URL + "/api/channel", {
      method: "DELETE",
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
