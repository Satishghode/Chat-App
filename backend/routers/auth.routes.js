import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

//  if any request comes from the /api/auth/login authomatocity call the loginUse method/function
router.get("/signup", signup);

router.get("/login", login);

router.get("/logout", logout);

export default router;
