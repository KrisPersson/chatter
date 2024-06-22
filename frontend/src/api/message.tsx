import { BASE_URL } from ".";
import { TMessage } from "../types";
export async function postMessageToChannelDb(msg: TMessage) {
  try {
    const body = {
      textBody: msg.textBody,
      sentAt: msg.sentAt,
      channel: msg.channel,
    };
    const response = await fetch(BASE_URL + "/channel/message", {
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