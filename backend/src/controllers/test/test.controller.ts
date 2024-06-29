import { Request, Response } from "express";

export async function testCtrl(request: Request, response: Response) {
  try {
    response.json({
      success: true,
      message: "Hello from the server!",
    });
  } catch (error) {
    const err = error as Error;
    response.status(401).json({ success: false, message: err.message });
  }
}
