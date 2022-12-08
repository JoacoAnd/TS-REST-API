"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const authController_1 = require("../controllers/authController");
router.post("/signup", authController_1.signUp);
router.post("/signin", authController_1.signIn);
router.get("/profile", authController_1.profile);
exports.default = router;
//# sourceMappingURL=auth.js.map