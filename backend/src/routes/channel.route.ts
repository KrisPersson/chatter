import { Router } from "express";
const router = Router();

import {
  userInputCreateChannelSchema,
  userInputJoinLeaveChannelSchema,
  userInputDeleteChannelSchema,
} from "../schemas/channel/channel.schema.js";
import { validateBody } from "../middleware/validate.middleware.js";
import { auth } from "../middleware/auth.middleware.js";
import {
  createChannelCtrl,
  joinChannelCtrl,
  deleteChannelCtrl,
  leaveChannelCtrl,
  getChannelsCtrl,
  getChannelCtrl,
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
  validateBody(userInputJoinLeaveChannelSchema),
  joinChannelCtrl,
);
// LEAVE
router.put(
  "/leave",
  auth,
  validateBody(userInputJoinLeaveChannelSchema),
  leaveChannelCtrl,
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

// GET ONE
router.get("/:name", auth, getChannelCtrl);

export default router;
