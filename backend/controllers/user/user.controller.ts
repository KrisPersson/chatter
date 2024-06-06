import { Request, Response } from "express";

import { signup, login } from "../../model/user/user.model";

export async function signupCtrl(request: Request, response: Response) {
  const { email, password, username } = request.body;
  try {
    const userId = await signup(email, password, username);
    const result = {
      success: true,
      message: "User successfully signed up.",
      userId: userId,
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
    const userId = await login(username, password);
    response.json({ success: true, userId: userId });
  } catch (error) {
    const err = error as Error;
    response.status(401).json({ success: false, message: err.message });
  }
}
