import { RelationshipDb } from "../../database/relationship.db.js";
import {
  getAllInvolvedUsers,
  addRelationshipToInvolvedUsers,
} from "./utils.js";
import { v4 as uuidv4 } from "uuid";

export async function createRelationship(usernames: string[]) {
  const usersInDb = await getAllInvolvedUsers(usernames);

  if (usersInDb?.length !== usernames.length) {
    throw new Error(
      "One or more users could not be found in database. Could not establish relationship.",
    );
  }
  const relationshipInDb = await RelationshipDb.find()
    .where("usernames")
    .all([...usernames]);

  if (relationshipInDb.length > 0) {
    throw new Error("This relationship has already been established.");
  }
  const newRelationship = await RelationshipDb.create({
    id: uuidv4(),
    messages: [],
    usernames,
  });
  const { id, messages } = newRelationship;
  await addRelationshipToInvolvedUsers(usernames, id);

  return { id, messages, usernames };
}
