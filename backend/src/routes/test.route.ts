import { Router } from "express";
const router = Router();

import { testCtrl } from "../controllers/test/test.controller.js";

router.get("/", testCtrl);

export default router;
