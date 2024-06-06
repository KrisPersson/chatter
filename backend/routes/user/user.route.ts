import { Router } from "express";
const router = Router();

import { validateBody } from "../../middleware/validate.middleware";
import {
  signupInputSchema,
  loginInputSchema,
} from "../../schemas/user/user.schema";
import { signupCtrl, loginCtrl } from "../../controllers/user/user.controller";

// SIGNUP
router.post("/signup", validateBody(signupInputSchema), signupCtrl);
// LOGIN
router.post("/login", validateBody(loginInputSchema), loginCtrl);

export default router;
