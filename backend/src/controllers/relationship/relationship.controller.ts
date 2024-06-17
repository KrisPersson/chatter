import { Request, Response } from "express";
import { extractFromJwtPayload } from "../../utils/jwt.js";
import {
  createRelationship,
  getRelationshipById,
} from "../../model/relationship/relationship.model.js";

export async function createRelationshipCtrl(
  request: Request,
  response: Response,
) {
  try {
    const token = request.headers.authorization?.replace("Bearer ", "");
    const { otherParties }: { otherParties: string[] } = request.body;
    if (!token) {
      response
        .status(401)
        .json({ success: false, message: "No token provided" });
    }
    const instigatorUsername = extractFromJwtPayload(
      token as string,
      "username",
    );
    const payload = [instigatorUsername, ...otherParties];
    const attempt = await createRelationship(payload);
    const result = {
      success: true,
      message: "Relationship successfully established.",
      relationship: attempt,
    };
    response.json(result);
  } catch (error) {
    const err = error as Error;
    response.json({ success: false, message: err.message });
  }
}

export async function getRelationshipCtrl(
  request: Request,
  response: Response,
) {
  try {
    const token = request.headers.authorization?.replace("Bearer ", "");
    const id = request.query.id as string;
    if (!token) {
      response
        .status(401)
        .json({ success: false, message: "No token provided" });
    }

    const relationshipInDb = await getRelationshipById(id);
    const result = {
      success: true,
      relationship: relationshipInDb,
    };
    response.json(result);
  } catch (error) {
    const err = error as Error;
    response.json({ success: false, message: err.message });
  }
}
