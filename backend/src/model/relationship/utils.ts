import { UserDb } from "../../database/user.db.js";

export async function getAllInvolvedUsers(usernames: string[]) {
  const promises = usernames.map(async (item, i) => {
    return await UserDb.findOne({ username: item })
      .then((result) => {
        console.log(`Processed item ${i}:`, result);
        return result;
      })
      .catch((error) => {
        console.error(`Error processing item ${i}:`, error);
        throw error;
      });
  });

  try {
    const results = await Promise.all(promises);
    const existingUsers = results.filter((result) => result);
    return existingUsers;
  } catch (error) {
    console.error("Error processing items:", error);
  }
}
