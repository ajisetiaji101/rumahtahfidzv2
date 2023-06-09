import { Router } from "express";
import IndexController from "../controller/IndexController.js";
import { uploadMultipleFile } from "../helpers/uploadFile.js";

const router = Router();

router.get("/getroles", IndexController.RoleController.getRoleUser);

export default router;
