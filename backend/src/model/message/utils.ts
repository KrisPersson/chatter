import { UserDb } from "../../database/user.db.js";

export async function removeChannelFromAllMemberUsers(
  channelName: string,
  usernames: string[],
) {
  const promises = usernames.map(async (item, i) => {
    const userInDb = await UserDb.findOne({ username: item });
    if (!userInDb) return;
    userInDb.channels = userInDb.channels.filter(
      (chan) => chan !== channelName,
    );
    await userInDb.save();
    return;
  });

  try {
    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    console.error("Error processing items:", error);
  }
}
