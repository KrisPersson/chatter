import { Router } from "express";
const router = Router();

import { relationshipCreateUserInputSchema } from "../schemas/relationship/relationship.schema.js";
import { validateBody } from "../middleware/validate.middleware.js";
import { auth } from "../middleware/auth.middleware.js";
import {
  createRelationshipCtrl,
  getRelationshipCtrl,
  createOrGetRelationshipCtrl,
} from "../controllers/relationship/relationship.controller.js";

// CREATE
router.post(
  "/",
  validateBody(relationshipCreateUserInputSchema),
  auth,
  createRelationshipCtrl,
);
// GET
router.get("/", auth, getRelationshipCtrl);

// CREATE
router.put(
  "/",
  validateBody(relationshipCreateUserInputSchema),
  auth,
  createOrGetRelationshipCtrl,
);

export default router;
