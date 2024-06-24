import jwt from "jsonwebtoken";
import { Request, Response } from "express";

import {
  signup,
  login,
  getUserChannels,
  getUserChannelsAndRelationships,
  getUserRelationships,
  getAllUsers,
  updateUserOnlineStatus,
} from "../../model/user/user.model.js";
import { extractFromJwtPayload } from "../../utils/jwt.js";

export async function signupCtrl(request: Request, response: Response) {
  const { password, username } = request.body;
  try {
    const user = await signup(password, username);
    const result = {
      success: true,
      message: "User successfully signed up.",
      userId: user.id,
      username: user.username,
    };
    response.json(result);
  } catch (error) {
    const err = error as Error;
    response.json({ success: false, message: err.message });
  }
}

export async function loginCtrl(request: Request, response: Response) {
  const { username, password } = request.body;
  try {
    const user = await login(username, password);
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "30 days",
      },
    );
    response.json({
      success: true,
      username: user.username,
      message: "Successfully logged in.",
      token,
      memberSince: user.createdAt,
    });
  } catch (error) {
    const err = error as Error;
    response.status(401).json({ success: false, message: err.message });
  }
}

export async function verifyTokenCtrl(request: Request, response: Response) {
  try {
    const { token } = request.body;
    const data = jwt.verify(token as string, process.env.JWT_SECRET as string);

    response.json({
      success: true,
      data,
    });
  } catch (error) {
    const err = error as Error;
    response.status(401).json({ success: false, message: "Invalid token" });
  }
}

export async function updateOnlineStatusCtrl(
  request: Request,
  response: Response,
) {
  try {
    const token = request.headers.authorization?.replace("Bearer ", "");
    const username = extractFromJwtPayload(token || "", "username");
    const { status } = request.body;
    await updateUserOnlineStatus(username, status);
    response.json({
      success: true,
    });
  } catch (error) {
    const err = error as Error;
    response.status(400).json({ success: false, message: err.message });
  }
}

export async function getUserChannelsCtrl(
  request: Request,
  response: Response,
) {
  const token = request.headers.authorization?.replace("Bearer ", "");
  try {
    const username = extractFromJwtPayload(token || "", "username");

    const userChannelsInDb = await getUserChannels(username);
    response.json({
      success: true,
      channels: userChannelsInDb,
    });
  } catch (error) {
    const err = error as Error;
    response.status(401).json({ success: false, message: err.message });
  }
}

export async function getUserRelationshipsCtrl(
  request: Request,
  response: Response,
) {
  try {
    const token = request.headers.authorization?.replace("Bearer ", "");
    const username = extractFromJwtPayload(token || "", "username");

    const { relationships } = await getUserRelationships(username);
    response.json({
      success: true,
      relationships: relationships.map((rel) => {
        return { id: rel.id, usernames: rel.usernames };
      }),
    });
  } catch (error) {
    const err = error as Error;
    response.status(400).json({ success: false, message: err.message });
  }
}

export async function getUserInfoCtrl(request: Request, response: Response) {
  try {
    const token = request.headers.authorization?.replace("Bearer ", "");
    const username = extractFromJwtPayload(token || "", "username");
    const { channels, relationships, onlineStatus, memberSince } =
      await getUserChannelsAndRelationships(username);

    response.json({
      success: true,
      channels,
      relationships: relationships.map((rel) => {
        return { id: rel.id, usernames: rel.usernames };
      }),
      onlineStatus,
      memberSince,
    });
  } catch (error) {
    const err = error as Error;
    response.status(401).json({ success: false, message: err.message });
  }
}

export async function getAllUsersCtrl(request: Request, response: Response) {
  try {
    const usersInDb = await getAllUsers();
    const parsedUsers = usersInDb.map((user) => {
      return {
        username: user.username,
        relationships: user.relationships.map((relation) => {
          return {
            id: relation.id,
            usernames: relation.usernames.filter(
              (name) => name !== user.username,
            ),
          };
        }),
        memberSince: user.createdAt,
      };
    });

    response.json({
      success: true,
      users: parsedUsers,
    });
  } catch (error) {
    const err = error as Error;
    response.status(401).json({ success: false, message: err.message });
  }
}
