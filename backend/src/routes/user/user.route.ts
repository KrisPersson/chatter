import { Router } from "express";
const router = Router();

import { validateBody } from "../../middleware/validate.middleware.js";
import {
  signupInputSchema,
  loginInputSchema,
} from "../../schemas/user/user.schema.js";
import { signupCtrl, loginCtrl } from "../../controllers/user/user.controller.js";

// SIGNUP
router.post("/signup", validateBody(signupInputSchema), signupCtrl);
// LOGIN
router.post("/login", validateBody(loginInputSchema), loginCtrl);

export default router;
