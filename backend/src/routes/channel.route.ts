import { Router } from "express";
const router = Router();

import {
  userInputCreateChannelSchema,
  userInputJoinChannelSchema,
  userInputDeleteChannelSchema,
} from "../schemas/channel/channel.schema.js";
import { validateBody } from "../middleware/validate.middleware.js";
import { auth } from "../middleware/auth.middleware.js";
import {
  createChannelCtrl,
  joinChannelCtrl,
  deleteChannelCtrl,
  getChannelsCtrl,
} from "../controllers/channel/channel.controller.js";

// CREATE
router.post(
  "/create",
  validateBody(userInputCreateChannelSchema),
  createChannelCtrl,
);
// JOIN
router.put(
  "/join",
  auth,
  validateBody(userInputJoinChannelSchema),
  joinChannelCtrl,
);
// DELETE
router.delete(
  "/",
  auth,
  validateBody(userInputDeleteChannelSchema),
  deleteChannelCtrl,
);

// GET ALL
router.get("/", auth, getChannelsCtrl);

export default router;
