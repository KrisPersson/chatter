import { Router } from "express";
const router = Router();

import { validateBody } from "../middleware/validate.middleware.js";
import {
  signupInputSchema,
  loginInputSchema,
  updateOnlineStatusSchema,
} from "../schemas/user/user.schema.js";
import {
  signupCtrl,
  loginCtrl,
  verifyTokenCtrl,
  getUserChannelsCtrl,
  getUserInfoCtrl,
  getUserRelationshipsCtrl,
  getAllUsersCtrl,
  updateOnlineStatusCtrl,
} from "../controllers/user/user.controller.js";
import { auth } from "../middleware/auth.middleware.js";

// SIGNUP
router.post("/signup", validateBody(signupInputSchema), signupCtrl);
// LOGIN
router.post("/login", validateBody(loginInputSchema), loginCtrl);
// VERIFY TOKEN
router.post("/token", verifyTokenCtrl);

router.put(
  "/status",
  auth,
  validateBody(updateOnlineStatusSchema),
  updateOnlineStatusCtrl,
);

router.get("/all", auth, getAllUsersCtrl);
router.get("/channels", auth, getUserChannelsCtrl);
router.get("/relationships", auth, getUserRelationshipsCtrl);
router.get("/", auth, getUserInfoCtrl);

export default router;
