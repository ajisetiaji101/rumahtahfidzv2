import { Router } from "express";
import IndexController from "../controller/IndexController.js";

const router = Router();

router.post("/login", IndexController.UserController.login);
router.get("/menu/{:roleId}", IndexController.UserController.login);
router.get("/:username", IndexController.UserController.getUserById);

export default router;
