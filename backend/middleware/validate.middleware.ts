import { z } from "zod";
import { Request, Response, NextFunction } from "express";

export function validateBody(schema: z.Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (e) {
      if (e instanceof z.ZodError) {
        res.status(400).json({ errors: e.errors });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  };
}
