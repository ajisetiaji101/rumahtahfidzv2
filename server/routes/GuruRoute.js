import { Router } from "express";
import IndexController from "../controller/IndexController.js";
import { uploadMultipleFile } from "../helpers/uploadFile.js";

const router = Router();

router.get("/getall", IndexController.GuruController.getAll);
router.post(
  "/insert",
  uploadMultipleFile,
  IndexController.GuruController.createGuru
);
router.get("/getcountguru/", IndexController.GuruController.countGuru);
router.get("/getByPondokId/:id", IndexController.GuruController.getByPondokId);
router.get(
  "/getByMasterPondokId/:id",
  IndexController.GuruController.getByMasterpondokId
);
router.get("/getById/:id", IndexController.GuruController.getById);
router.post(
  "/update/:id",
  uploadMultipleFile,
  IndexController.GuruController.updateGuru
);
router.post(
  "/updatenofile/:id",
  IndexController.GuruController.updateNoFileGuru
);
router.post("/delete/:id", IndexController.GuruController.deleteGuru);

export default router;
