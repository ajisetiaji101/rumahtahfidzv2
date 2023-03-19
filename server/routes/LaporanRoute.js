import { Router } from "express";
import IndexController from "../controller/IndexController.js";
import { uploadMultipleFile } from "../helpers/uploadFile.js";

const router = Router();

router.get(
  "/laporansantri",
  IndexController.LaporanController.getHafalanSantri
);

export default router;
