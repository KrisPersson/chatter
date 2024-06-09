import { Router } from "express";
const router = Router();

import {
  userInputCreateChannelSchema,
  userInputJoinChannelSchema,
} from "../schemas/channel/channel.schema.js";
import { validateBody } from "../middleware/validate.middleware.js";
import {
  createChannelCtrl,
  joinChannelCtrl,
} from "../controllers/channel/channel.controller.js";

// CREATE
router.post(
  "/create",
  validateBody(userInputCreateChannelSchema),
  createChannelCtrl,
);
// JOIN
router.put("/join", validateBody(userInputJoinChannelSchema), joinChannelCtrl);

export default router;
