import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export function auth(req: Request, res: Response, next: NextFunction) {
  try {
    console.log("ran auth");

    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) {
      res.status(401).json({ success: false, message: "No token provided" });
    }
    const data = jwt.verify(token as string, process.env.JWT_SECRET as string);

    if (!data) throw new Error();
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid token" });
  }
}
