import { Router } from "express";
const router = Router();

import { userInputCreateChannelSchema } from "../schemas/channel/channel.schema.js";
import { validateBody } from "../middleware/validate.middleware.js";
import { createChannelCtrl } from "../controllers/channel/channel.controller.js";

// CREATE
router.post(
  "/create",
  validateBody(userInputCreateChannelSchema),
  createChannelCtrl,
);

export default router;
