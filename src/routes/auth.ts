import { Router } from "express";
import { TokenValidation } from "middlewares/verifyToken";

const router: Router = Router();

import { signIn, signUp, profile } from "../controllers/authController";

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/profile", TokenValidation, profile);

export default router;