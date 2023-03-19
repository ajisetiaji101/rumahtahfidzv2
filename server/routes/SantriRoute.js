import { Router } from "express";
import IndexController from "../controller/IndexController.js";
import { uploadMultipleFile } from "../helpers/uploadFile.js";

const router = Router();
router.get("/getall", IndexController.SantriController.getAll);
router.get("/getcountsantri/", IndexController.SantriController.countSantri);
router.post(
  "/insert",
  uploadMultipleFile,
  IndexController.SantriController.createSantri
);
router.get(
  "/getByPondokId/:id",
  IndexController.SantriController.getByPondokId
);
router.get(
  "/getByMasterPondokId/:id",
  IndexController.SantriController.getByMasterpondokId
);
router.get("/getById/:id", IndexController.SantriController.getById);
router.get("/getByUserId/:id", IndexController.SantriController.getByUserId);
router.get(
  "/getdropdownId/:id",
  IndexController.SantriController.getDropdownByPondokId
);
router.post(
  "/update/:id",
  uploadMultipleFile,
  IndexController.SantriController.updateSantri
);
router.post(
  "/updatenofile/:id",
  IndexController.SantriController.updateNoFileSantri
);
router.post("/delete/:id", IndexController.SantriController.deleteSantri);

export default router;
