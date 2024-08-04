import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post("/login", login);

router.post("/register",
    [
        body("email", "invalid email")
            .isEmail()
            .normalizeEmail(),
        body("password", "invalid format password").isLength({min : 6})
    ]
    ,register);

export default router;