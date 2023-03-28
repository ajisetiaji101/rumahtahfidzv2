import { Router } from "express";
import IndexController from "../controller/IndexController.js";
import { uploadMultipleFile } from "../helpers/uploadFile.js";
import verifyToken from "../middleware/verifyToken.js";

const router = Router();

router.get("/getall", verifyToken, IndexController.GuruController.getAll);
router.post(
  "/insert",
  verifyToken,
  uploadMultipleFile,
  IndexController.GuruController.createGuru
);
router.get("/getcountguru/", IndexController.GuruController.countGuru);
router.get(
  "/getByPondokId/:id",
  verifyToken,
  IndexController.GuruController.getByPondokId
);
router.get(
  "/getByMasterPondokId/:id",
  verifyToken,
  IndexController.GuruController.getByMasterpondokId
);
router.get("/getById/:id", verifyToken, IndexController.GuruController.getById);
router.post(
  "/update/:id",
  verifyToken,
  uploadMultipleFile,
  IndexController.GuruController.updateGuru
);
router.post(
  "/updatenofile/:id",
  verifyToken,
  IndexController.GuruController.updateNoFileGuru
);
router.post(
  "/delete/:id",
  verifyToken,
  IndexController.GuruController.deleteGuru
);

export default router;
