import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

//  if any request comes from the /api/auth/login authomatocity call the loginUse method/function
router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;
